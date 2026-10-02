<#
  Builds recipes.js from the approved recipe database.

  The database stays on the team's Shared Drive (it is the approved source, CLAUDE.md
  "Input 2"); this script reads it, links every ingredient line to the shared ingredient
  list in tools/ingredients.csv, and writes:
    recipes.js                       - loaded by the app
    tools/ingredient-review.csv      - every ingredient line and what it was linked to, for the team to check
    tools/unmatched.txt              - lines that matched nothing (should be empty)

  Run from the repository folder:
    powershell -ExecutionPolicy Bypass -File tools\build-recipes.ps1
  or pass -Database <path> if the Shared Drive is mounted somewhere else.
#>
param(
  [string]$Database = 'G:\Shared drives\2026 Fall EMBA Group 3 - REN\BUS 860 Managing Intelligence\What-the-fridge\knowledge\Combined_Recipe_Database.md'
)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object System.Text.UTF8Encoding $false

function Read-Table($path) {
  $rows = [IO.File]::ReadAllLines($path, [Text.Encoding]::UTF8) | Where-Object { $_ -notmatch '^\s*#' -and $_.Trim() -ne '' }
  return $rows | ConvertFrom-Csv
}

# -- shared ingredient list and shelf-life norms --
$ingredients = @(Read-Table "$PSScriptRoot\ingredients.csv")
$rx = @{}
foreach ($i in $ingredients) { $rx[$i] = New-Object Text.RegularExpressions.Regex($i.match, 'IgnoreCase') }
$norms = [ordered]@{}
foreach ($n in (Read-Table "$PSScriptRoot\shelf-life.csv")) {
  $o = [ordered]@{}
  foreach ($z in 'fridge','freezer','cupboard') {
    if ($n.$z) { $a = $n.$z -split '-'; $o[$z] = @([int]$a[0], [int]$a[1]) }
  }
  $o['printed'] = ($n.printed -eq '1')
  $o['basis'] = $n.basis
  $norms[$n.key] = $o
}
foreach ($i in $ingredients) {
  if ($i.norm -and -not $norms.Contains($i.norm)) { throw "ingredients.csv: '$($i.id)' names norm '$($i.norm)', which is not in shelf-life.csv" }
}

# Returns the ingredient rows a piece of text refers to, in order, consuming matched text
# so "chicken broth" is not also read as "chicken".
function Find-Ingredients([string]$text) {
  $found = @()
  $t = $text
  while ($true) {
    $hit = $null
    foreach ($i in $ingredients) { $m = $rx[$i].Match($t); if ($m.Success) { $hit = @($i, $m); break } }
    if (-not $hit) { break }
    if ($found -notcontains $hit[0]) { $found += $hit[0] }
    $t = $t.Remove($hit[1].Index, $hit[1].Length).Insert($hit[1].Index, ' ')
  }
  return ,$found
}

# Wordings tidied before matching: descriptions that name another food ("whole-milk ricotta"),
# and fixed phrases that would otherwise be split on "and" / "or".
$rewrites = @(
  @('whole-milk|part-skim|low-fat|reduced-fat', ''),
  @('peas and carrots', 'peas & carrots'),
  @('turkey or chicken smoked sausage', 'smoked sausage'),
  @('\bcorn or flour tortillas', 'corn tortillas or flour tortillas'),
  @('\bcorn or whole wheat tortillas', 'corn tortillas or whole wheat tortillas'),
  @('tomatoes with green chil\w*', 'tomatoes'),
  @('tuna in (olive oil|water)', 'tuna'),
  @('\bchicken or vegetable (broth|stock)', 'chicken broth or vegetable broth'),
  @('\bseafood or vegetable (broth|stock)', 'seafood stock or vegetable broth'),
  @('cooked jasmine or brown rice', 'cooked rice')
)

$fractions = @{ ([string][char]0xBD)=0.5; ([string][char]0xBC)=0.25; ([string][char]0xBE)=0.75; ([string][char]0x2153)=0.333; ([string][char]0x2154)=0.667; ([string][char]0x215B)=0.125 }
$units = @{
  'cup'='cup'; 'cups'='cup'; 'tbsp'='tbsp'; 'tablespoon'='tbsp'; 'tablespoons'='tbsp'; 'tsp'='tsp'; 'teaspoon'='tsp'; 'teaspoons'='tsp';
  'oz'='oz'; 'ounce'='oz'; 'ounces'='oz'; 'lb'='lb'; 'lbs'='lb'; 'pound'='lb'; 'pounds'='lb'; 'g'='g'; 'kg'='kg'; 'ml'='ml'; 'l'='l';
  'can'='can'; 'cans'='can'; 'clove'='clove'; 'cloves'='clove'; 'slice'='slice'; 'slices'='slice'; 'bunch'='bunch'; 'head'='head';
  'stalk'='stalk'; 'stalks'='stalk'; 'package'='package'; 'packages'='package'; 'block'='block'; 'fillet'='fillet'; 'fillets'='fillet'; 'jar'='jar'
}
function Parse-Amount([string]$line) {
  $s = $line.Trim()
  $fc = '[' + (-join ($fractions.Keys)) + ']'
  $m = [regex]::Match($s, "^(\d+)\s+(\d+)/(\d+)|^(\d+)/(\d+)|^(\d+(?:\.\d+)?)($fc)?|^($fc)")
  if (-not $m.Success) { return $null }
  if ($m.Groups[1].Success)      { $q = [int]$m.Groups[1].Value + [int]$m.Groups[2].Value / [int]$m.Groups[3].Value }
  elseif ($m.Groups[4].Success)  { $q = [int]$m.Groups[4].Value / [int]$m.Groups[5].Value }
  elseif ($m.Groups[6].Success)  { $q = [double]$m.Groups[6].Value; if ($m.Groups[7].Success) { $q += $fractions[$m.Groups[7].Value] } }
  else                           { $q = $fractions[$m.Groups[8].Value] }
  $rest = $s.Substring($m.Length) -replace ("^\s*(to|-|" + [char]0x2013 + ")\s*[\d/\." + (-join ($fractions.Keys)) + "]+"), ''
  $rest = $rest -replace '^\s*\([^)]*\)', ''
  $u = $null
  $um = [regex]::Match($rest, '^\s*([A-Za-z]+)\b')
  if ($um.Success -and $units.ContainsKey($um.Groups[1].Value.ToLower())) { $u = $units[$um.Groups[1].Value.ToLower()] }
  return @{ qty = [math]::Round($q, 3); unit = $u }
}

function Slug([string]$title) {
  # Matches the photo filenames: "&" becomes "and", anything else not a letter or digit
  # (apostrophes included) becomes a hyphen - "General Tso's Chicken" -> general-tso-s-chicken.
  $s = $title.ToLower() -replace '&', 'and' -replace '[^a-z0-9]+', '-'
  return $s.Trim('-')
}

# -- read the database --
$lines = [IO.File]::ReadAllLines($Database, [Text.Encoding]::UTF8)
$category = @{}
foreach ($l in $lines) {
  $m = [regex]::Match($l, '^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*(Breakfast|Lunch|Dinner)\s*\|')
  if ($m.Success) { $category[[int]$m.Groups[1].Value] = $m.Groups[3].Value.ToLower() }
}

$recipes = New-Object System.Collections.Generic.List[object]
$review = New-Object System.Collections.Generic.List[object]
$unmatched = New-Object System.Collections.Generic.List[string]
$cur = $null; $section = ''
foreach ($l in $lines) {
  $h = [regex]::Match($l, '^### (\d+)\.\s+(.+?)\s*$')
  if ($h.Success) {
    $cur = [ordered]@{ n = [int]$h.Groups[1].Value; id = Slug $h.Groups[2].Value; name = $h.Groups[2].Value.Trim(); type = $category[[int]$h.Groups[1].Value];
                       time = ''; mins = $null; satisfies = @(); tags = @(); ing = New-Object System.Collections.Generic.List[object]; steps = New-Object System.Collections.Generic.List[string] }
    $recipes.Add($cur); $section = ''; continue
  }
  if (-not $cur) { continue }
  if ($l -match '^\*\*Total Time:\*\*\s*(.+)$') {
    $cur.time = $Matches[1].Trim()
    $hr = [regex]::Match($cur.time, '(\d+)\s*(hr|hour)'); $mn = [regex]::Match($cur.time, '(\d+)\s*min')
    $cur.mins = $(if ($hr.Success) { [int]$hr.Groups[1].Value * 60 } else { 0 }) + $(if ($mn.Success) { [int]$mn.Groups[1].Value } else { 0 })
    continue
  }
  if ($l -match '^\*\*Dietary:\*\*\s*(.+)$') {
    $d = $Matches[1]
    $cur.satisfies = @(@('Vegetarian','Dairy-free','Nut-free','Pork-free') | Where-Object { $d -match [regex]::Escape($_) })
    # The database lists what a recipe SATISFIES; the app needs what it CONTAINS.
    $t = @()
    if ($cur.satisfies -notcontains 'Vegetarian') { $t += 'meat' }
    if ($cur.satisfies -notcontains 'Dairy-free') { $t += 'dairy' }
    if ($cur.satisfies -notcontains 'Nut-free')   { $t += 'nuts' }
    if ($cur.satisfies -notcontains 'Pork-free')  { $t += 'pork' }
    $cur.tags = $t
    continue
  }
  if ($l -match '^\*\*Ingredients') { $section = 'ing'; continue }
  if ($l -match '^\*\*Instructions') { $section = 'steps'; continue }
  if ($l -match '^\*\*') { $section = ''; continue }

  if ($section -eq 'ing' -and $l -match '^\s*- (.+)$') {
    $text = $Matches[1].Trim()
    $optional = $text -match '\(optional\)|optional'
    # Split a line into the foods it names:
    #  - A "Label:" line (Dressing:, Sauce:, Toppings:) is a list, so every comma-separated part counts.
    #  - Otherwise only the text before the first comma names food; what follows is preparation
    #    ("cut into thick steaks", "toasted") and is ignored.
    #  - "and" joins two foods; "or", and anything in "(or ...)" brackets, offers alternatives.
    $isList = $text -match '^[A-Za-z ]+:\s*'
    $body = $text -replace '\(optional\)', '' -replace '^[A-Za-z ]+:\s*', ''
    foreach ($rw in $rewrites) { $body = $body -replace $rw[0], $rw[1] }
    $altText = (@([regex]::Matches($body, '\(([^)]*\bor\b[^)]*)\)') | ForEach-Object { $_.Groups[1].Value }) -join ', ')
    $body = $body -replace '\([^)]*\)', ' '
    $items = @(); $alt = $false
    $attempts = $(if ($isList) { @($body) } else { @(($body -split ',')[0], $body) })
    foreach ($attempt in $attempts) {
      foreach ($part in ($attempt -split ',|\band\b|\bplus\b')) {
        if ($part.Trim() -eq '') { continue }
        $sides = @($part -split '\bor\b')
        foreach ($side in $sides) {
          $f = Find-Ingredients $side
          if ($f.Count) { $items += $f[0]; if ($sides.Count -gt 1) { $alt = $true } }
        }
      }
      # Only fall back to the whole line when the name itself holds a comma ("cooked, shredded chicken").
      if ($items.Count) { break }
    }
    if ($altText) {
      foreach ($part in ($altText -split ',|\bor\b')) {
        $f = Find-Ingredients $part
        if ($f.Count) { $alt = $true; $items += $f[0] }
      }
    }
    $seen = @{}; $items = @($items | Where-Object { if ($seen[$_.id]) { $false } else { $seen[$_.id] = $true; $true } })
    if ($items.Count -lt 2) { $alt = $false }
    $amt = Parse-Amount ($text -replace '^[A-Za-z ]+:\s*', '')
    $entry = [ordered]@{ text = $text; items = @($items | ForEach-Object { $_.id }) }
    if ($alt) { $entry['alt'] = $true }
    if ($optional) { $entry['optional'] = $true }
    if ($amt -and $items.Count -eq 1) { $entry['qty'] = $amt.qty; if ($amt.unit) { $entry['unit'] = $amt.unit } }
    $cur.ing.Add($entry)
    if ($items.Count -eq 0) { $unmatched.Add("#$($cur.n) $($cur.name): $text") }
    $review.Add([pscustomobject]@{
      recipe_no = $cur.n; recipe = $cur.name; ingredient_line = $text
      linked_to = (($items | ForEach-Object { $_.name }) -join $(if ($alt) { ' OR ' } else { ' + ' }))
      staple = (($items | ForEach-Object { if ($_.staple -eq '1') { 'staple' } else { '' } }) -join ' ').Trim()
      optional = $(if ($optional) { 'optional' } else { '' })
      looks_right = ''; comment = ''
    })
    continue
  }
  if ($section -eq 'steps' -and $l -match '^\s*\d+\.\s+(.+)$') { $cur.steps.Add($Matches[1].Trim()); continue }
}

# -- checks --
$problems = @()
if ($recipes.Count -ne 300) { $problems += "expected 300 recipes, found $($recipes.Count)" }
foreach ($r in $recipes) {
  if (-not $r.type) { $problems += "#$($r.n) has no category in the master directory" }
  if (-not $r.time) { $problems += "#$($r.n) has no total time" }
  if ($r.ing.Count -eq 0) { $problems += "#$($r.n) has no ingredients" }
  if ($r.steps.Count -eq 0) { $problems += "#$($r.n) has no instructions" }
  if (-not (Test-Path (Join-Path $root "recipe-images\$($r.id).webp"))) { $problems += "#$($r.n) has no photo at recipe-images\$($r.id).webp" }
}

# -- write outputs --
$ingOut = @($ingredients | ForEach-Object {
  $o = [ordered]@{ id = $_.id; name = $_.name; zone = $_.zone }
  if ($_.norm) { $o['norm'] = $_.norm }
  if ($_.staple -eq '1') { $o['staple'] = $true }
  $o
})
# The same id can appear on more than one row (a staple phrase listed near the top); keep the first.
$seenIds = @{}; $ingOut = @($ingOut | Where-Object { if ($seenIds[$_.id]) { $false } else { $seenIds[$_.id] = $true; $true } })

# ConvertTo-Json in Windows PowerShell 5.1 can't serialise generic lists inside ordered
# dictionaries, so flatten everything to plain objects and arrays first.
$recipes = @($recipes | ForEach-Object {
  $r = $_
  [pscustomobject]@{ n = $r.n; id = $r.id; name = $r.name; type = $r.type; time = $r.time; mins = $r.mins
                     tags = @($r.tags); satisfies = @($r.satisfies)
                     ing = @($r.ing | ForEach-Object { [pscustomobject]$_ }); steps = @($r.steps) }
})
$norms2 = [pscustomobject]@{}
foreach ($k in $norms.Keys) { $norms2 | Add-Member -NotePropertyName $k -NotePropertyValue ([pscustomobject]$norms[$k]) }
$norms = $norms2
$ingOut = @($ingOut | ForEach-Object { [pscustomobject]$_ })

$header = "// GENERATED by tools/build-recipes.ps1 from knowledge/Combined_Recipe_Database.md - do not edit by hand.`n" +
          "// Built $(Get-Date -Format 'yyyy-MM-dd'). $($recipes.Count) recipes, $($ingOut.Count) ingredients, $(@($norms.PSObject.Properties).Count) shelf-life norms.`n"
$js = $header +
  'window.WTF_NORMS = ' + ($norms | ConvertTo-Json -Depth 5 -Compress) + ";`n" +
  'window.WTF_INGREDIENTS = ' + (ConvertTo-Json -InputObject $ingOut -Depth 5 -Compress) + ";`n" +
  'window.WTF_RECIPES = ' + (ConvertTo-Json -InputObject @($recipes) -Depth 6 -Compress) + ";`n"
[IO.File]::WriteAllText((Join-Path $root 'recipes.js'), $js, $utf8)
$review | Export-Csv -NoTypeInformation -Encoding UTF8 (Join-Path $PSScriptRoot 'ingredient-review.csv')
[IO.File]::WriteAllLines((Join-Path $PSScriptRoot 'unmatched.txt'), [string[]]$unmatched, $utf8)

"recipes: $($recipes.Count)   ingredient lines: $($review.Count)   unmatched: $($unmatched.Count)"
"by type: " + (($recipes | Group-Object { $_.type } | ForEach-Object { "$($_.Name) $($_.Count)" }) -join ', ')
if ($problems.Count) { "PROBLEMS:"; $problems } else { "checks passed" }
