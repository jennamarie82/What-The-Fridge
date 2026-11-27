// What the Fridge: accounts and saved data (CLAUDE.md v1.14, "Accounts and saved data").
//
// Optional. Without an account the app works exactly as before: everything stays in this browser.
// With one, Ren signs in with a 6-digit code emailed by Supabase, and the same kitchen (settings,
// pantry, plan, preferences, unconfirmed meals, cooking and waste logs) is saved to Ren's own row
// in the `kitchens` table (supabase/setup.sql), so it is there on any browser or device.
//
// How saving works:
//   - The browser copy stays the working copy, so the app works offline. account.js wraps
//     saveState(): when the saved kitchen has actually changed, it is uploaded a moment later.
//   - On open and whenever the app comes back to the screen, a newer save from another device is
//     loaded. The newest save wins for the pantry, plan and settings; the cooking and waste logs
//     are merged, never overwritten, so no history is lost.
//   - A device's existing kitchen is never uploaded without Ren choosing to.
// Photos are never stored by the app. Only the public anon key is in the app (account-config.js); what it
// can do is limited by the table's row-level security to each person's own row.

var account = {
  sb: null,                 // the Supabase client, or null when accounts are off or unreachable
  user: null,               // the signed-in user, or null
  ctx: 'settings',          // where the sign-in form is showing: 'settings' or 'setup'
  form: { step:'email', email:'', msg:'', busy:false },
  choice: null,             // a decision Ren must make before syncing starts (see afterSignIn)
  status: 'idle',           // 'idle' | 'saving' | 'saved' | 'error'
  timer: null,
  chain: Promise.resolve(), // saves run one at a time
  confirmDelete: false
};
var SYNC_KEY = 'wtf-sync';  // { uid, lastSync, lastHash } for this browser

function accountsReady() { return !!account.sb; }

(function startAccounts() {
  var cfg = window.WTF_SUPABASE || {};
  if (!cfg.url || !cfg.anonKey || !window.supabase || !window.supabase.createClient) return;
  try {
    account.sb = window.supabase.createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession:true, autoRefreshToken:true, detectSessionInUrl:false, storageKey:'wtf-auth' }
    });
  } catch (e) { account.sb = null; return; }
  // Setup's first screen was drawn before this file loaded; redraw it so it offers "Sign in".
  if (document.getElementById('setup').classList.contains('open') && setupStep === 1) renderSetup();
  account.sb.auth.getSession().then(function(r) {
    var session = r && r.data && r.data.session;
    account.user = session ? session.user : null;
    if (account.user) pullNewer();
    renderAccountRow();
  }).catch(function() {});
  account.sb.auth.onAuthStateChange(function(evt, session) {
    account.user = session ? session.user : null;
    renderAccountRow();
  });
  renderAccountRow();
})();

// ─── this browser's sync record ───
function syncRecord() {
  try { var s = JSON.parse(localStorage.getItem(SYNC_KEY)); if (s && account.user && s.uid === account.user.id) return s; } catch (e) {}
  return { uid: account.user ? account.user.id : null, lastSync: null, lastHash: null };
}
function setSyncRecord(lastSync, raw) {
  try { localStorage.setItem(SYNC_KEY, JSON.stringify({ uid: account.user.id, lastSync: lastSync, lastHash: hashOf(raw || '') })); } catch (e) {}
}
function clearSyncRecord() { try { localStorage.removeItem(SYNC_KEY); } catch (e) {} }
function localRaw() { try { return localStorage.getItem(STORE_KEY) || ''; } catch (e) { return ''; } }
function hasLocalKitchen() {
  return !!(settings.since && (pantry.length || cookLog.length || wasteLog.length));
}

// ─── saving: every saveState() that changed something schedules an upload ───
var plainSaveState = saveState;
saveState = function() {
  plainSaveState();
  if (!account.user || account.choice) return;
  var raw = localRaw();
  if (!raw || hashOf(raw) === syncRecord().lastHash) return;
  clearTimeout(account.timer);
  account.timer = setTimeout(pushNow, 2000);
};
var plainRenderAll = renderAll;
renderAll = function() { plainRenderAll(); renderAccountRow(); };

// Two logs merged as multisets: an entry on both devices counts once, and an entry made twice on
// purpose (the same meal cooked twice in a day) keeps its larger count.
function mergeLog(a, b) {
  var count = {}, out = (a || []).slice();
  (a || []).forEach(function(e) { var k = JSON.stringify(e); count[k] = (count[k] || 0) + 1; });
  (b || []).forEach(function(e) {
    var k = JSON.stringify(e);
    if (count[k]) { count[k]--; } else { out.push(e); }
  });
  return out.sort(function(x, y) { return (x.date || '') < (y.date || '') ? -1 : (x.date || '') > (y.date || '') ? 1 : 0; });
}

function fetchRemote() {
  return account.sb.from('kitchens').select('state, updated_at').eq('user_id', account.user.id).maybeSingle()
    .then(function(r) { if (r.error) throw r.error; return r.data; });
}

function pushNow() {
  if (!account.user || account.choice) return Promise.resolve();
  account.chain = account.chain.then(function() {
    var raw = localRaw();
    if (!raw) return;
    var rec = syncRecord();
    if (hashOf(raw) === rec.lastHash) return;
    account.status = 'saving'; renderAccountStatus();
    return fetchRemote().then(function(remote) {
      var state = JSON.parse(raw);
      // Another device saved since this one last synced: keep its cooking and waste history.
      if (remote && (!rec.lastSync || remote.updated_at > rec.lastSync)) {
        state.cookLog = mergeLog(state.cookLog, remote.state.cookLog);
        state.wasteLog = mergeLog(state.wasteLog, remote.state.wasteLog);
        cookLog = state.cookLog; wasteLog = state.wasteLog;
        plainSaveState();
        raw = localRaw();
        state = JSON.parse(raw);
      }
      return account.sb.from('kitchens')
        .upsert({ user_id: account.user.id, state: state }, { onConflict: 'user_id' })
        .select('updated_at').single()
        .then(function(r) {
          if (r.error) throw r.error;
          setSyncRecord(r.data.updated_at, raw);
          account.status = 'saved'; renderAccountStatus();
        });
    });
  }).catch(function() {
    account.status = 'error'; renderAccountStatus();
  });
  return account.chain;
}

// Loads a newer save from another device. Unsaved changes on this device lose to it, except the
// cooking and waste logs, which are merged.
function pullNewer() {
  if (!account.user || account.choice) return;
  account.chain = account.chain.then(function() {
    return fetchRemote().then(function(remote) {
      var rec = syncRecord();
      if (!remote) {
        // Signed in on this browser before, but the account has no kitchen yet (or it was
        // cleared): offer this device's kitchen rather than uploading it unasked.
        if (!rec.lastSync && hasLocalKitchen()) { account.choice = { kind:'upload' }; renderAccountRow(); }
        return;
      }
      if (rec.lastSync && remote.updated_at <= rec.lastSync) return;     // nothing newer
      if (!rec.lastSync && hasLocalKitchen() && hashOf(localRaw()) !== hashOf(JSON.stringify(remote.state))) {
        account.choice = { kind:'both', remote: remote }; renderAccountRow(); return;
      }
      var unsaved = rec.lastHash !== null && hashOf(localRaw()) !== rec.lastHash;
      var state = remote.state;
      if (unsaved) {
        state.cookLog = mergeLog(state.cookLog, cookLog);
        state.wasteLog = mergeLog(state.wasteLog, wasteLog);
      }
      applyKitchen(state, remote.updated_at);
      if (unsaved) pushNow();      // put the merged logs back
      showToast('Updated from your account.');
    });
  }).catch(function() { account.status = 'error'; renderAccountStatus(); });
}

// Replaces this browser's kitchen with one from the account.
function applyKitchen(state, updatedAt) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  if (!loadState()) { resetKitchen(); return; }
  if (plan.length !== 9) { planKitchen(plan.length > 0); } else { enforceTimes(); }
  document.getElementById('setup').classList.remove('open');
  setSyncRecord(updatedAt, JSON.stringify(state));
  plainRenderAll();
  plainSaveState();
  renderAccountRow();
}

document.addEventListener('visibilitychange', function() {
  if (!account.user) return;
  if (document.visibilityState === 'hidden') { clearTimeout(account.timer); pushNow(); }
  else { pullNewer(); }
});
window.addEventListener('online', function() { if (account.user) pushNow(); });

// ─── signing in ───
function accountSendCode() {
  var el = document.getElementById('acEmail');
  var email = (el ? el.value : account.form.email).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { account.form.msg = 'That doesn’t look like an email address.'; return accountRerender(); }
  account.form.email = email; account.form.busy = true; account.form.msg = ''; accountRerender();
  account.sb.auth.signInWithOtp({ email: email, options: { shouldCreateUser: true } }).then(function(r) {
    account.form.busy = false;
    if (r.error) {
      account.form.msg = /rate|limit|seconds/i.test(r.error.message || '')
        ? 'Too many codes asked for just now. Wait a few minutes, then try again.'
        : 'The code couldn’t be sent. Check the address and your connection, then try again.';
    } else {
      account.form.step = 'code';
      account.form.msg = 'We’ve emailed a code to ' + email + '. It can take a minute; check your junk folder too.';
    }
    accountRerender();
  }).catch(function() { account.form.busy = false; account.form.msg = 'You seem to be offline. Try again when you’re connected.'; accountRerender(); });
}
function accountVerify() {
  var el = document.getElementById('acCode');
  var code = (el ? el.value : '').replace(/\D/g, '');
  if (code.length < 6) { account.form.msg = 'Enter the code from the email.'; return accountRerender(); }
  account.form.busy = true; account.form.msg = ''; accountRerender();
  account.sb.auth.verifyOtp({ email: account.form.email, token: code, type: 'email' }).then(function(r) {
    account.form.busy = false;
    if (r.error || !r.data || !r.data.user) {
      account.form.msg = 'That code didn’t work. Check it, or ask for a new one.';
      return accountRerender();
    }
    account.user = r.data.user;
    account.form = { step:'email', email:'', msg:'', busy:false };
    afterSignIn();
  }).catch(function() { account.form.busy = false; account.form.msg = 'You seem to be offline. Try again when you’re connected.'; accountRerender(); });
}
function accountStartAgain() { account.form = { step:'email', email:'', msg:'', busy:false }; accountRerender(); }

// What happens to this device's kitchen and the account's is decided once, by Ren.
function afterSignIn() {
  fetchRemote().then(function(remote) {
    var local = hasLocalKitchen();
    if (remote && !local) {
      applyKitchen(remote.state, remote.updated_at);
      closeSub();
      showToast('Signed in. Your kitchen is here.');
      return;
    }
    if (remote && local) { account.choice = { kind:'both', remote: remote }; return accountRerender(); }
    if (!remote && local) { account.choice = { kind:'upload' }; return accountRerender(); }
    // A new account on a new device: carry on with setup; saving starts with the first change.
    if (account.ctx === 'setup') { setupStep = 1; renderSetup(); showToast('Signed in. Let’s set up your kitchen.'); }
    else { accountRerender(); }
  }).catch(function() {
    account.form.msg = 'Signed in, but your saved kitchen couldn’t be checked. Try again when you’re connected.';
    accountRerender();
  });
}
function accountChoose(which) {
  var c = account.choice;
  if (!c) return;
  account.choice = null;
  if (which === 'account' && c.remote) {
    applyKitchen(c.remote.state, c.remote.updated_at);
    closeSub(); showToast('This device now has the kitchen from your account.');
  } else if (which === 'device') {
    // Keep this device's kitchen, but never lose the account's history.
    if (c.remote) {
      cookLog = mergeLog(cookLog, c.remote.state.cookLog);
      wasteLog = mergeLog(wasteLog, c.remote.state.wasteLog);
      setSyncRecord(c.remote.updated_at, '');
    }
    plainSaveState();
    pushNow().then(function() { showToast('This device’s kitchen is saved to your account.'); });
    accountRerender();
  } else if (which === 'fresh') {
    clearSyncRecord();
    closeSub();
    resetKitchen();
  }
}

// ─── signing out and deleting ───
function accountSignOut() {
  var done = function() {
    account.user = null; account.choice = null; account.confirmDelete = false;
    clearSyncRecord(); closeSub(); resetKitchen();
    showToast('Signed out. Your kitchen is still in your account.');
  };
  clearTimeout(account.timer);
  pushNow().then(function() { return account.sb.auth.signOut(); }).then(done, done);
}
function accountDelete() {
  if (!account.confirmDelete) { account.confirmDelete = true; return accountRerender(); }
  account.form.busy = true; accountRerender();
  account.sb.rpc('delete_my_account').then(function(r) {
    account.form.busy = false;
    if (r.error) { account.form.msg = 'Your account couldn’t be deleted just now. Check your connection and try again.'; return accountRerender(); }
    var done = function() {
      account.user = null; account.choice = null; account.confirmDelete = false;
      clearSyncRecord();
      try { localStorage.removeItem('wtf-auth'); } catch (e) {}
      closeSub(); resetKitchen();
      showToast('Your account and everything saved in it are deleted.');
    };
    account.sb.auth.signOut().then(done, done);
  }).catch(function() { account.form.busy = false; account.form.msg = 'You seem to be offline. Try again when you’re connected.'; accountRerender(); });
}

// ─── screens ───
function accountRerender() {
  if (account.ctx === 'setup' && document.getElementById('setup').classList.contains('open')) { renderSetup(); return; }
  if (document.getElementById('subScreen').dataset.which === 'account') { openSub('account'); }
}
function accountPrivacyHTML() {
  return '<div class="note-card" style="margin-top:var(--s6);"><strong>What an account stores</strong><br>' +
    'Your email address, settings, kitchen, plan, recipe likes and your cooking and waste history, saved with Supabase ' +
    'in Canada so you can use them on any device. Other people using the app can\'t see them. One team member manages ' +
    'the database and opens it only to deal with a request from you. Receipt and shelf photos are sent to Claude ' +
    '(Anthropic) to be read and aren\'t stored by the app. ' +
    'You can delete your account and everything in it here at any time.</div>';
}
function accountSignInHTML(ctx) {
  account.ctx = ctx;
  var f = account.form, msg = f.msg ? '<p class="field-hint ac-msg" role="status">' + esc(f.msg) + '</p>' : '';
  if (f.step === 'code') {
    return '<div class="field-label">Code from the email</div>' +
      '<input class="field" id="acCode" inputmode="numeric" autocomplete="one-time-code" maxlength="10" placeholder="6-digit code" ' +
        'onkeydown="if(event.key===\'Enter\')accountVerify()">' + msg +
      '<div class="actions"><button class="btn primary" onclick="accountVerify()"' + (f.busy ? ' disabled' : '') + '>' + (f.busy ? 'Checking…' : 'Sign in') + '</button>' +
        '<button class="btn quiet" onclick="accountStartAgain()">Use a different email</button></div>';
  }
  return '<div class="field-label">Your email</div>' +
    '<input class="field" id="acEmail" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="' + esc(f.email) + '" ' +
      'onkeydown="if(event.key===\'Enter\')accountSendCode()">' + msg +
    '<p class="field-hint">We’ll email you a 6-digit code. No password needed.</p>' +
    '<div class="actions"><button class="btn primary" onclick="accountSendCode()"' + (f.busy ? ' disabled' : '') + '>' + (f.busy ? 'Sending…' : 'Email me a code') + '</button></div>';
}
function accountChoiceHTML() {
  var c = account.choice;
  if (c.kind === 'both') {
    return '<div class="note-card ac-choice"><strong>This device and your account both have a kitchen.</strong><br>' +
      'Which one should you keep using? Cooking and waste history from both is kept either way.</div>' +
      '<div class="actions"><button class="btn primary" onclick="accountChoose(\'account\')">Use my account’s kitchen</button></div>' +
      '<div class="actions"><button class="btn" onclick="accountChoose(\'device\')">Keep this device’s kitchen</button></div>';
  }
  return '<div class="note-card ac-choice"><strong>Save this device’s kitchen to your account?</strong><br>' +
    'Your account is empty. Saving this kitchen lets you open it on your other devices.</div>' +
    '<div class="actions"><button class="btn primary" onclick="accountChoose(\'device\')">Save it to my account</button></div>' +
    '<div class="actions"><button class="btn" onclick="accountChoose(\'fresh\')">Start fresh instead</button></div>' +
    '<p class="field-hint">Start fresh clears this device and sets up a new kitchen in your account.</p>';
}
function accountStatusText() {
  if (!navigator.onLine) return 'Offline. Changes are kept on this device and saved when you’re back online.';
  if (account.status === 'saving') return 'Saving…';
  if (account.status === 'error') return 'Couldn’t save just now. It will try again on your next change.';
  var rec = syncRecord();
  return rec.lastSync ? 'Saved to your account ' + fmtSince(rec.lastSync) + '.' : 'Not saved yet.';
}
function fmtSince(iso) {
  var s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return Math.round(s / 60) + ' min ago';
  return new Date(iso).toLocaleString(undefined, { month:'short', day:'numeric', hour:'numeric', minute:'2-digit' });
}
function accountScreenHTML() {
  if (!accountsReady()) {
    return '<p class="sub-intro">Accounts aren’t available right now. Your kitchen is saved in this browser.</p>';
  }
  if (!account.user) {
    return '<p class="sub-intro">Sign in to keep your kitchen, plan and history on every device: your phone, ' +
      'an iPad, or a computer. Without an account, everything stays in this browser only.</p>' +
      accountSignInHTML('settings') + accountPrivacyHTML();
  }
  account.ctx = 'settings';
  var msg = account.form.msg ? '<p class="field-hint ac-msg" role="status">' + esc(account.form.msg) + '</p>' : '';
  return '<p class="sub-intro">Signed in as <b>' + esc(account.user.email || '') + '</b>.</p>' +
    (account.choice ? accountChoiceHTML()
      : '<p class="field-hint" id="acStatus">' + esc(accountStatusText()) + '</p>') + msg +
    '<div class="actions" style="margin-top:var(--s8);"><button class="btn" onclick="accountSignOut()">Sign out</button></div>' +
    '<p class="field-hint">Signing out removes your kitchen from this device. It stays in your account.</p>' +
    accountPrivacyHTML() +
    (account.confirmDelete
      ? '<div class="note-card ac-danger"><strong>Delete your account?</strong><br>This permanently deletes your account and ' +
          'everything saved in it, on every device. It can’t be undone.</div>' +
        '<div class="actions"><button class="btn ac-delete" onclick="accountDelete()"' + (account.form.busy ? ' disabled' : '') + '>Yes, delete everything</button>' +
        '<button class="btn quiet" onclick="account.confirmDelete=false;accountRerender()">Keep my account</button></div>'
      : '<div class="actions"><button class="btn quiet ac-delete-link" onclick="accountDelete()">Delete my account and data</button></div>');
}
function renderAccountStatus() {
  var el = document.getElementById('acStatus');
  if (el) el.textContent = accountStatusText();
  renderAccountRow();
}
function renderAccountRow() {
  var row = document.getElementById('accountRow'), arrow = document.getElementById('accountArrow');
  if (!row) return;
  row.style.display = accountsReady() ? '' : 'none';
  if (arrow) {
    var t = !account.user ? 'Sign in' : account.choice ? 'Needs a choice' : account.status === 'error' ? 'Not saved' : 'Signed in';
    arrow.innerHTML = esc(t) + ' &rsaquo;';
  }
  var note = document.getElementById('storageNote');
  if (note) {
    note.textContent = account.user
      ? 'Saved in this browser and in your account (Supabase, Canada), so it’s on every device you sign in on. Photos you send to be read aren’t stored by the app.'
      : 'Saved in this browser only. Sign in under Account to keep it on every device. Nothing else leaves your phone except a receipt or shelf photo you choose to send.';
  }
}
