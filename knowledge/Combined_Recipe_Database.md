# Combined Recipe Database

**What the Fridge — Meal Planning Knowledge Base**

This file is the single approved recipe source for What the Fridge. It merges the 28 recipes from `Quick_Healthy_30-Minute_Recipes.md` and the 12 recipes from `Expanded_Breakfast_Recipes.md` with 260 new recipes, for a total of 300. Every recipe uses the display scheme established by `Quick_Healthy_30-Minute_Recipes.md`: a numbered heading, a total time, an ingredient list, and numbered instructions. A dietary tag line is added to each entry so the app's restriction filter can read it.

Distribution: 41 breakfast, 87 lunch, 172 dinner. Recipes are numbered 1 to 300 in one continuous sequence and are never renumbered, so a recipe number is a stable identifier.

Times vary. The original 40 recipes are all 30 minutes or less. The new recipes include longer classics; the stated total time is the real prep plus cook time and is not compressed.

## Standard Pantry Staples Assumed On Hand

These are assumed available and are not listed in individual ingredient lists unless a specific quantity matters.

- **Fats and oils:** Olive oil, vegetable oil, cooking spray, sesame oil, butter, coconut oil.
- **Condiments and sauces:** Soy sauce, Dijon mustard, hot sauce, balsamic glaze, honey, maple syrup, rice vinegar, red wine vinegar, white vinegar.
- **Aromatics and spices:** Garlic, fresh ginger, dried oregano, dried thyme, Italian seasoning, cumin, chili powder, paprika, garlic powder, onion powder, red pepper flakes, salt, black pepper, cinnamon.
- **Baking and dry goods:** All-purpose flour, sugar, brown sugar, baking powder, baking soda, cornstarch, vanilla extract.

## Dietary Tag Legend

Each recipe lists only the restrictions it **satisfies**. A tag that is absent means the recipe contains that item in a required ingredient.

| Code | Tag | Means |
|---|---|---|
| V | Vegetarian | No meat, poultry, fish, shellfish, or meat, chicken or fish stock |
| DF | Dairy-free | No milk, butter, cheese, cream or yogurt |
| NF | Nut-free | No tree nuts or peanuts |
| PF | Pork-free | No pork, bacon, ham, pancetta, prosciutto, pork sausage or lard |

Tagging rules, carried over from the living spec:

- Tags are judged from **required ingredients and assumed staples only**. An ingredient marked `(optional)` never removes a tag; it is dropped instead.
- Where an ingredient line names a non-dairy option, for example `milk (dairy or plant-based)`, the recipe keeps its Dairy-free tag because the recipe as written can be made without dairy.
- Coconut and coconut milk are not treated as tree nuts. Sesame and tahini are not treated as tree nuts.
- **This is not allergy-safe.** These are recipe-level tags over a curated file, not ingredient-level or label-level checking. The app must not present them as an allergy guarantee.

Tag coverage across all 300 recipes:

| Restriction | Recipes that satisfy it | Share |
|---|---|---|
| Vegetarian | 121 | 40% |
| Dairy-free | 173 | 57% |
| Nut-free | 285 | 95% |
| Pork-free | 277 | 92% |
| All four at once | 62 | 20% |

## Recipe Master Directory

| # | Recipe Name | Category | Total Time | Primary Protein / Main Ingredient | Dietary |
|---|---|---|---|---|---|
| 1 | Banana Berry Overnight Chia Oats | Breakfast | 5 mins + overnight chill | Oats, Chia, Milk | V · DF · NF · PF |
| 2 | Spinach, Egg and Avocado Breakfast Wrap | Breakfast | 10 mins | Eggs, Whole Wheat Wrap | V · DF · NF · PF |
| 3 | High-Protein Greek Yogurt and Berry Parfait | Breakfast | 5 mins | Greek Yogurt, Berries | V · PF |
| 4 | Veggie Scramble with Feta and Herbs | Breakfast | 10 mins | Eggs, Feta, Bell Pepper | V · NF · PF |
| 5 | Mushroom and Spinach Egg Muffin Cups | Breakfast | 20 mins | Eggs, Mushrooms, Cheddar | V · NF · PF |
| 6 | Avocado and Egg Toast with Everything Seasoning | Breakfast | 10 mins | Eggs, Avocado, Whole Grain Bread | V · DF · NF · PF |
| 7 | Peanut Butter Banana Oatmeal | Breakfast | 10 mins | Oats, Peanut Butter, Banana | V · DF · PF |
| 8 | Savory Oatmeal with Soft Egg and Scallions | Breakfast | 15 mins | Oats, Eggs, Scallions | V · DF · NF · PF |
| 9 | Whole Wheat Banana Pancakes | Breakfast | 20 mins | Whole Wheat Flour, Banana, Egg | V · DF · NF · PF |
| 10 | Tropical Green Power Smoothie | Breakfast | 5 mins | Spinach, Mango, Greek Yogurt | V · NF · PF |
| 11 | Peanut Butter and Chocolate Protein Smoothie | Breakfast | 5 mins | Banana, Peanut Butter, Greek Yogurt | V · PF |
| 12 | Ricotta and Berry Honey Toast | Breakfast | 10 mins | Ricotta, Berries, Whole Grain Bread | V · NF · PF |
| 13 | Cottage Cheese and Tomato Toast | Breakfast | 5 mins | Cottage Cheese, Tomato | V · NF · PF |
| 14 | Apple Cinnamon Overnight Oats | Breakfast | 5 mins + overnight chill | Oats, Apple, Greek Yogurt | V · PF |
| 15 | Mediterranean Breakfast Bowl | Breakfast | 15 mins | Quinoa, Eggs, Feta | V · NF · PF |
| 16 | Classic Buttermilk Pancakes | Breakfast | 20 mins | Eggs, Flour | V · NF · PF |
| 17 | French Toast with Cinnamon and Maple | Breakfast | 15 mins | Eggs, Bread | V · NF · PF |
| 18 | Belgian Waffles | Breakfast | 25 mins | Eggs, Flour | V · NF · PF |
| 19 | Eggs Benedict | Breakfast | 25 mins | Eggs, Canadian bacon | NF |
| 20 | Western Omelette | Breakfast | 15 mins | Eggs, Ham | NF |
| 21 | Huevos Rancheros | Breakfast | 20 mins | Eggs, Black beans | V · DF · NF · PF |
| 22 | Shakshuka | Breakfast | 30 mins | Eggs, Tomatoes | V · DF · NF · PF |
| 23 | Loaded Breakfast Burrito | Breakfast | 20 mins | Eggs, Sausage | NF |
| 24 | Blueberry Muffins | Breakfast | 35 mins | Flour, Blueberries | V · NF · PF |
| 25 | Classic Banana Bread | Breakfast | 70 mins | Bananas, Flour | V · NF · PF |
| 26 | Buttermilk Biscuits with Turkey Sausage Gravy | Breakfast | 30 mins | Turkey sausage, Flour | NF · PF |
| 27 | Steel-Cut Oats with Brown Sugar and Pecans | Breakfast | 25 mins | Oats, Pecans | V · PF |
| 28 | Homemade Maple Granola | Breakfast | 45 mins | Oats, Almonds | V · DF · PF |
| 29 | Classic Cheese Omelette | Breakfast | 10 mins | Eggs, Cheese | V · NF · PF |
| 30 | Smoked Salmon and Cream Cheese Bagel | Breakfast | 10 mins | Smoked salmon, Cream cheese | NF · PF |
| 31 | Breakfast Potato and Pepper Hash | Breakfast | 25 mins | Potatoes, Eggs | V · DF · NF · PF |
| 32 | Overnight Cinnamon French Toast Bake | Breakfast | 20 mins + overnight chill | Bread, Eggs | V · NF · PF |
| 33 | Egg and Turkey Sausage Breakfast Sandwich | Breakfast | 15 mins | Eggs, Turkey sausage | NF · PF |
| 34 | Dutch Baby Pancake | Breakfast | 25 mins | Eggs, Flour | V · NF · PF |
| 35 | Ginger Scallion Congee | Breakfast | 45 mins | Rice, Ginger | V · DF · NF · PF |
| 36 | Menemen | Breakfast | 15 mins | Eggs, Tomatoes | V · DF · NF · PF |
| 37 | Chilaquiles Verdes | Breakfast | 20 mins | Eggs, Tortilla chips | V · DF · NF · PF |
| 38 | Berry Smoothie Bowl | Breakfast | 10 mins | Berries, Yogurt | V · NF · PF |
| 39 | Classic Crepes with Berries and Cream | Breakfast | 25 mins | Eggs, Berries | V · NF · PF |
| 40 | Spanish Potato Tortilla | Breakfast | 35 mins | Potatoes, Eggs | V · DF · NF · PF |
| 41 | Cheesy Grits with Soft-Cooked Eggs | Breakfast | 20 mins | Grits, Eggs | V · NF · PF |
| 42 | Mediterranean Chickpea Salad | Lunch | 10 mins | Chickpeas, Feta Cheese | V · NF · PF |
| 43 | Turkey, Avocado and Hummus Wrap | Lunch | 10 mins | Deli Turkey, Hummus | DF · NF · PF |
| 44 | Southwestern Mason Jar Quinoa Salad | Lunch | 15 mins | Quinoa, Black Beans | V · DF · NF · PF |
| 45 | Lemon Dill Tuna and White Bean Salad | Lunch | 10 mins | Canned Tuna, Cannellini Beans | DF · NF · PF |
| 46 | Healthy Egg Salad Lettuce Boats | Lunch | 15 mins | Eggs, Greek Yogurt | V · NF · PF |
| 47 | Pesto Chicken Pasta Salad | Lunch | 15 mins | Rotisserie Chicken, Whole Wheat Pasta | PF |
| 48 | Caprese Chicken Ciabatta Sandwich | Lunch | 10 mins | Chicken Breast, Fresh Mozzarella | NF · PF |
| 49 | Sesame Peanut Noodle Bowl | Lunch | 15 mins | Noodles, Peanut Butter | V · DF · PF |
| 50 | Quick Black Bean and Rice Burrito Bowl | Lunch | 10 mins | Black Beans, Brown Rice | V · NF · PF |
| 51 | Classic Grilled Cheese | Lunch | 10 mins | Cheddar Cheese, Bread | V · NF · PF |
| 52 | Tuna Melt | Lunch | 15 mins | Tuna, Cheddar Cheese | NF · PF |
| 53 | Chicken Salad Sandwich | Lunch | 15 mins | Chicken Breast, Mayonnaise | DF · NF · PF |
| 54 | Classic Egg Salad Sandwich | Lunch | 20 mins | Eggs, Mayonnaise | V · DF · NF · PF |
| 55 | BLT Sandwich | Lunch | 15 mins | Bacon, Tomato | DF · NF |
| 56 | Turkey Club Sandwich | Lunch | 15 mins | Turkey, Bacon | DF · NF |
| 57 | Reuben Sandwich | Lunch | 15 mins | Corned Beef, Swiss Cheese | NF · PF |
| 58 | Philly Cheesesteak | Lunch | 20 mins | Beef Sirloin, Provolone Cheese | NF · PF |
| 59 | French Dip Sandwich | Lunch | 20 mins | Roast Beef, Provolone Cheese | NF · PF |
| 60 | Italian Sub | Lunch | 10 mins | Salami, Ham, Pepperoni | NF |
| 61 | Meatball Sub | Lunch | 25 mins | Ground Beef, Mozzarella Cheese | NF · PF |
| 62 | Sloppy Joes | Lunch | 20 mins | Ground Beef, Bun | DF · NF · PF |
| 63 | Pulled BBQ Chicken Sandwich | Lunch | 25 mins | Chicken Breast, Barbecue Sauce | DF · NF · PF |
| 64 | Chicken Shawarma Wrap | Lunch | 25 mins | Chicken Thighs, Flatbread | DF · NF · PF |
| 65 | Falafel Pita with Tahini | Lunch | 25 mins | Chickpeas, Tahini | V · DF · NF · PF |
| 66 | Chicken Gyro Pita | Lunch | 25 mins | Chicken Thighs, Pita, Yogurt | NF · PF |
| 67 | Hummus and Roasted Vegetable Wrap | Lunch | 30 mins | Hummus, Roasted Vegetables | V · DF · NF · PF |
| 68 | Caprese Sandwich on Focaccia | Lunch | 10 mins | Mozzarella, Tomato, Focaccia | V · NF · PF |
| 69 | Chicken Banh Mi | Lunch | 25 mins | Chicken Thighs, Baguette | DF · NF · PF |
| 70 | Buffalo Chicken Wrap | Lunch | 20 mins | Chicken Breast, Buffalo Sauce | NF · PF |
| 71 | Caesar Chicken Wrap | Lunch | 20 mins | Chicken Breast, Parmesan Cheese | NF · PF |
| 72 | Curried Chicken Salad Wrap | Lunch | 15 mins | Chicken Breast, Curry Powder | DF · NF · PF |
| 73 | Roast Beef and Horseradish Sandwich | Lunch | 10 mins | Roast Beef, Horseradish | DF · NF · PF |
| 74 | Turkey and Cranberry Sandwich | Lunch | 10 mins | Turkey, Cranberry Sauce | DF · NF · PF |
| 75 | Chickpea Smash Sandwich | Lunch | 15 mins | Chickpeas, Mayonnaise | V · DF · NF · PF |
| 76 | Grilled Vegetable and Goat Cheese Ciabatta | Lunch | 25 mins | Goat Cheese, Grilled Vegetables | V · NF · PF |
| 77 | Classic Chicken Noodle Soup | Lunch | 40 mins | Chicken, Egg Noodles | DF · NF · PF |
| 78 | Creamy Tomato Soup | Lunch | 30 mins | Tomatoes, Cream | V · NF · PF |
| 79 | Minestrone Soup | Lunch | 35 mins | Vegetables, Kidney Beans, Pasta | V · DF · NF · PF |
| 80 | Hearty Lentil Soup | Lunch | 40 mins | Lentils, Spinach | V · DF · NF · PF |
| 81 | Split Pea Soup | Lunch | 55 mins | Split Peas | V · DF · NF · PF |
| 82 | Butternut Squash Soup | Lunch | 40 mins | Butternut Squash, Coconut Milk | V · DF · NF · PF |
| 83 | Broccoli Cheddar Soup | Lunch | 35 mins | Broccoli, Cheddar Cheese | V · NF · PF |
| 84 | New England Clam Chowder | Lunch | 35 mins | Clams, Potatoes | NF · PF |
| 85 | Corn Chowder | Lunch | 40 mins | Corn, Potatoes | V · NF · PF |
| 86 | Black Bean Soup | Lunch | 35 mins | Black Beans | V · DF · NF · PF |
| 87 | Miso Soup with Tofu | Lunch | 20 mins | Tofu, Miso | V · DF · NF · PF |
| 88 | Egg Drop Soup | Lunch | 15 mins | Eggs, Chicken Broth | DF · NF · PF |
| 89 | Chicken Tortilla Soup | Lunch | 35 mins | Chicken, Black Beans | DF · NF · PF |
| 90 | Avgolemono | Lunch | 30 mins | Chicken, Rice, Egg | DF · NF · PF |
| 91 | Beef and Barley Soup | Lunch | 90 mins | Beef, Barley | DF · NF · PF |
| 92 | French Onion Soup | Lunch | 60 mins | Onions, Gruyere Cheese | NF · PF |
| 93 | Gazpacho | Lunch | 20 mins | Tomatoes, Cucumber | V · DF · NF · PF |
| 94 | Curried Lentil and Sweet Potato Soup | Lunch | 40 mins | Lentils, Sweet Potato | V · DF · NF · PF |
| 95 | Potato Leek Soup | Lunch | 40 mins | Potatoes, Leeks | V · NF · PF |
| 96 | Carrot Ginger Soup | Lunch | 40 mins | Carrots, Ginger | V · DF · NF · PF |
| 97 | Italian Wedding Soup | Lunch | 35 mins | Turkey Meatballs, Pasta | NF · PF |
| 98 | Tom Kha Gai | Lunch | 25 mins | Chicken, Coconut Milk | DF · NF · PF |
| 99 | Hot and Sour Soup | Lunch | 25 mins | Tofu, Mushrooms | V · DF · NF · PF |
| 100 | Mushroom Barley Soup | Lunch | 60 mins | Mushrooms, Barley | V · DF · NF · PF |
| 101 | Chickpea and Kale Soup | Lunch | 35 mins | Chickpeas, Kale | V · DF · NF · PF |
| 102 | Turkey and Wild Rice Soup | Lunch | 55 mins | Turkey, Wild Rice | NF · PF |
| 103 | Chicken Caesar Salad | Lunch | 20 mins | Chicken Breast, Romaine | NF · PF |
| 104 | Cobb Salad | Lunch | 25 mins | Chicken, Bacon, Eggs | NF |
| 105 | Greek Salad with Grilled Chicken | Lunch | 20 mins | Chicken Breast, Feta | NF · PF |
| 106 | Salade Nicoise | Lunch | 30 mins | Tuna, Eggs, Potatoes | DF · NF · PF |
| 107 | Waldorf Salad | Lunch | 15 mins | Apples, Walnuts, Grapes | V · DF · PF |
| 108 | Tabbouleh | Lunch | 30 mins | Bulgur, Parsley, Tomato | V · DF · NF · PF |
| 109 | Fattoush Salad | Lunch | 20 mins | Pita, Romaine, Cucumber | V · DF · NF · PF |
| 110 | Panzanella | Lunch | 30 mins | Bread, Tomatoes, Cucumber | V · DF · NF · PF |
| 111 | Classic Potato Salad | Lunch | 30 mins + 1 hr chill | Potatoes, Eggs, Mayonnaise | V · DF · NF · PF |
| 112 | Creamy Macaroni Salad | Lunch | 20 mins + 30 min chill | Macaroni, Mayonnaise | V · DF · NF · PF |
| 113 | Three-Bean Salad | Lunch | 15 mins + 1 hr chill | Kidney Beans, Chickpeas, Green Beans | V · DF · NF · PF |
| 114 | Caprese Pasta Salad | Lunch | 20 mins | Pasta, Mozzarella, Tomatoes | V · NF · PF |
| 115 | Farro Salad with Roasted Vegetables | Lunch | 30 mins | Farro, Zucchini, Bell Pepper | V · DF · NF · PF |
| 116 | Lemon Herb Orzo Salad | Lunch | 20 mins | Orzo, Cucumber, Tomatoes | V · DF · NF · PF |
| 117 | Lentil and Feta Salad | Lunch | 30 mins | Lentils, Feta, Cucumber | V · NF · PF |
| 118 | Tuna Poke Bowl | Lunch | 20 mins | Tuna, Rice, Avocado | DF · NF · PF |
| 119 | Salmon Rice Bowl | Lunch | 25 mins | Salmon, Rice, Edamame | DF · NF · PF |
| 120 | Teriyaki Chicken Rice Bowl | Lunch | 25 mins | Chicken Thighs, Rice, Broccoli | DF · NF · PF |
| 121 | Bibimbap Bowl | Lunch | 30 mins | Ground Beef, Rice, Egg | DF · NF · PF |
| 122 | Chicken Burrito Bowl | Lunch | 25 mins | Chicken Breast, Rice, Black Beans | DF · NF · PF |
| 123 | Roasted Vegetable Buddha Bowl with Tahini | Lunch | 30 mins | Sweet Potato, Chickpeas, Quinoa | V · DF · NF · PF |
| 124 | Falafel Grain Bowl | Lunch | 20 mins | Falafel, Bulgur, Tahini | V · DF · NF · PF |
| 125 | Southwest Chicken Salad with Lime Ranch | Lunch | 20 mins | Chicken Breast, Black Beans, Romaine | NF · PF |
| 126 | Shrimp Taco Salad | Lunch | 20 mins | Shrimp, Romaine, Black Beans | DF · NF · PF |
| 127 | Lemongrass Chicken Vermicelli Bowl | Lunch | 30 mins | Chicken Thighs, Vermicelli Noodles | DF · NF · PF |
| 128 | Soba Noodle Salad with Edamame | Lunch | 20 mins | Soba Noodles, Edamame | V · DF · NF · PF |
| 129 | Sheet Pan Garlic Lemon Chicken and Asparagus | Dinner | 25 mins | Chicken Cutlets, Asparagus | DF · NF · PF |
| 130 | 15-Minute Beef and Broccoli Stir-Fry | Dinner | 15 mins | Lean Ground Beef, Broccoli | DF · NF · PF |
| 131 | Sheet Pan Salmon with Zucchini and Tomatoes | Dinner | 20 mins | Salmon Fillets, Zucchini | DF · NF · PF |
| 132 | Ground Turkey and Black Bean Skillet Tacos | Dinner | 20 mins | Ground Turkey, Tortillas | DF · NF · PF |
| 133 | Garlic Butter Shrimp and Spinach Pasta | Dinner | 20 mins | Shrimp, Whole Wheat Spaghetti | NF · PF |
| 134 | One-Pot Chickpea and Spinach Coconut Curry | Dinner | 20 mins | Chickpeas, Coconut Milk | V · DF · NF · PF |
| 135 | Skillet Caprese Chicken | Dinner | 25 mins | Chicken Breasts, Mozzarella | NF · PF |
| 136 | Crispy Teriyaki Tofu and Veggie Stir-Fry | Dinner | 20 mins | Extra-Firm Tofu, Mixed Veggies | V · DF · NF · PF |
| 137 | Sheet Pan Smoked Sausage, Peppers and Onions | Dinner | 25 mins | Smoked Turkey Sausage, Bell Peppers | DF · NF · PF |
| 138 | Easy Egg and Veggie Fried Rice | Dinner | 15 mins | Brown Rice, Eggs | V · DF · NF · PF |
| 139 | Honey Mustard Glazed Pork Chops | Dinner | 20 mins | Pork Chops, Green Beans | DF · NF |
| 140 | Tuscan White Bean and Spinach Soup | Dinner | 20 mins | Cannellini Beans, Spinach | V · NF · PF |
| 141 | Turkey Marinara over Zucchini Noodles | Dinner | 20 mins | Ground Turkey, Zucchini Noodles | NF · PF |
| 142 | Quick Sheet Pan Chicken Fajitas | Dinner | 25 mins | Chicken Breast, Bell Peppers | DF · NF · PF |
| 143 | 15-Minute Tomato Spinach Tortellini | Dinner | 15 mins | Cheese Tortellini, Baby Spinach | V · NF · PF |
| 144 | Baked Pesto White Fish with Cherry Tomatoes | Dinner | 20 mins | Cod or Tilapia, Basil Pesto | PF |
| 145 | Spaghetti Bolognese | Dinner | 1 hr 15 mins | Ground Beef, Spaghetti | DF · NF · PF |
| 146 | Classic Lasagna | Dinner | 2 hrs | Ground Beef, Lasagna Noodles | NF · PF |
| 147 | Fettuccine Alfredo | Dinner | 25 mins | Fettuccine, Parmesan | V · NF · PF |
| 148 | Spaghetti Carbonara | Dinner | 25 mins | Pancetta, Spaghetti, Egg | NF |
| 149 | Penne alla Vodka | Dinner | 30 mins | Penne, Vodka Sauce | V · NF · PF |
| 150 | Chicken Parmesan | Dinner | 40 mins | Chicken Breast, Mozzarella | NF · PF |
| 151 | Eggplant Parmesan | Dinner | 50 mins | Eggplant, Mozzarella | V · NF · PF |
| 152 | Margherita Pizza | Dinner | 35 mins | Pizza Dough, Mozzarella, Tomato | V · NF · PF |
| 153 | Pepperoni Pizza | Dinner | 35 mins | Pizza Dough, Pepperoni, Mozzarella | NF |
| 154 | Mushroom Risotto | Dinner | 45 mins | Arborio Rice, Mushrooms | V · NF · PF |
| 155 | Chicken Piccata | Dinner | 30 mins | Chicken Breast, Lemon, Capers | NF · PF |
| 156 | Chicken Marsala | Dinner | 35 mins | Chicken Breast, Mushrooms, Marsala Wine | NF · PF |
| 157 | Baked Ziti | Dinner | 55 mins | Ziti, Ground Beef, Ricotta | NF · PF |
| 158 | Cacio e Pepe | Dinner | 20 mins | Spaghetti, Pecorino Cheese | V · NF · PF |
| 159 | Pasta Puttanesca | Dinner | 30 mins | Spaghetti, Anchovies, Olives | DF · NF · PF |
| 160 | Shrimp Scampi | Dinner | 25 mins | Shrimp, Linguine | NF · PF |
| 161 | Linguine with Clams | Dinner | 30 mins | Clams, Linguine | DF · NF · PF |
| 162 | Beef Ragu with Pappardelle | Dinner | 2 hrs 30 mins | Beef Chuck, Pappardelle | DF · NF · PF |
| 163 | Stuffed Shells with Ricotta and Spinach | Dinner | 55 mins | Pasta Shells, Ricotta, Spinach | V · NF · PF |
| 164 | Gnocchi with Tomato Basil Sauce | Dinner | 25 mins | Gnocchi, Tomato | V · DF · NF · PF |
| 165 | Osso Buco | Dinner | 2 hrs 15 mins | Veal Shanks, White Wine | DF · NF · PF |
| 166 | Chicken Cacciatore | Dinner | 55 mins | Chicken Thighs, Bell Peppers | DF · NF · PF |
| 167 | Pasta Primavera | Dinner | 30 mins | Pasta, Mixed Vegetables | V · DF · NF · PF |
| 168 | Greek Moussaka | Dinner | 1 hr 30 mins | Ground Lamb, Eggplant, Potato | NF · PF |
| 169 | Chicken Souvlaki with Lemon Potatoes | Dinner | 45 mins | Chicken Breast, Potatoes | NF · PF |
| 170 | Lamb Gyro Platter | Dinner | 35 mins | Ground Lamb, Pita | NF · PF |
| 171 | Spanakopita | Dinner | 1 hr | Spinach, Feta Cheese, Phyllo | V · NF · PF |
| 172 | Paella Valenciana | Dinner | 1 hr | Rice, Chicken, Shrimp | DF · NF · PF |
| 173 | Moroccan Chicken Tagine with Olives | Dinner | 1 hr 10 mins | Chicken Thighs, Olives | DF · NF · PF |
| 174 | Mediterranean Stuffed Bell Peppers | Dinner | 55 mins | Bell Peppers, Rice, Chickpeas | V · DF · NF · PF |
| 175 | Lemon Herb Roast Chicken with Potatoes | Dinner | 1 hr 30 mins | Whole Chicken, Potatoes | DF · NF · PF |
| 176 | Falafel Platter with Tahini and Salad | Dinner | 1 hr | Chickpeas, Tahini | V · DF · NF · PF |
| 177 | Beef Tacos with Pico de Gallo | Dinner | 25 mins | Ground Beef, Corn Tortillas | DF · NF · PF |
| 178 | Chicken Enchiladas Verdes | Dinner | 40 mins | Chicken, Salsa Verde, Corn Tortillas | NF · PF |
| 179 | Beef Enchiladas Rojas | Dinner | 45 mins | Ground Beef, Corn Tortillas | NF · PF |
| 180 | Carne Asada with Charred Salsa | Dinner | 40 mins | Skirt Steak, Charred Salsa | DF · NF · PF |
| 181 | Baja Fish Tacos | Dinner | 35 mins | White Fish, Corn Tortillas | DF · NF · PF |
| 182 | Shrimp Tacos with Chipotle Crema | Dinner | 25 mins | Shrimp, Corn Tortillas | NF · PF |
| 183 | Chicken Tinga Tostadas | Dinner | 35 mins | Chicken, Tostada Shells | DF · NF · PF |
| 184 | Carnitas Tacos | Dinner | 3 hrs 30 mins | Pork Shoulder, Corn Tortillas | DF · NF |
| 185 | Texas Chili Con Carne | Dinner | 1 hr 30 mins | Beef Chuck, Ancho Chiles | DF · NF · PF |
| 186 | Vegetarian Black Bean Chili | Dinner | 40 mins | Black Beans, Bell Pepper | V · DF · NF · PF |
| 187 | Elote Chicken Rice Bowl | Dinner | 30 mins | Chicken, Corn, Rice | NF · PF |
| 188 | Arroz con Pollo | Dinner | 50 mins | Chicken Thighs, Rice | DF · NF · PF |
| 189 | Cuban Black Beans and Rice | Dinner | 35 mins | Black Beans, Rice | V · DF · NF · PF |
| 190 | Ropa Vieja | Dinner | 2 hrs 15 mins | Flank Steak, Bell Peppers | DF · NF · PF |
| 191 | Picadillo | Dinner | 40 mins | Ground Beef, Potato | DF · NF · PF |
| 192 | Pollo Asado with Lime Rice | Dinner | 40 mins | Chicken Thighs, Lime Rice | DF · NF · PF |
| 193 | Chicken Mole Poblano | Dinner | 1 hr 15 mins | Chicken, Mole Sauce | DF · PF |
| 194 | Skillet Tamale Pie | Dinner | 50 mins | Ground Beef, Cornbread | NF · PF |
| 195 | Chiles Rellenos | Dinner | 45 mins | Poblano Peppers, Cheese | V · NF · PF |
| 196 | Chicken Pozole Rojo | Dinner | 1 hr | Chicken, Hominy | DF · NF · PF |
| 197 | Peruvian Lomo Saltado | Dinner | 35 mins | Sirloin Steak, Fries, Rice | DF · NF · PF |
| 198 | Chimichurri Skirt Steak | Dinner | 30 mins | Skirt Steak, Chimichurri | DF · NF · PF |
| 199 | Beef Empanadas | Dinner | 1 hr 10 mins | Ground Beef, Empanada Dough | NF · PF |
| 200 | Cheese Pupusas with Curtido | Dinner | 45 mins | Cheese, Masa Harina | V · NF · PF |
| 201 | Camarones a la Diabla | Dinner | 25 mins | Shrimp, Chile Sauce | DF · NF · PF |
| 202 | Vegetarian Enchilada Casserole | Dinner | 45 mins | Black Beans, Corn Tortillas | V · NF · PF |
| 203 | Chicken Fried Rice | Dinner | 25 mins | Chicken, Rice | DF · NF · PF |
| 204 | Kung Pao Chicken | Dinner | 30 mins | Chicken, Peanuts | DF · PF |
| 205 | General Tso's Chicken | Dinner | 35 mins | Chicken | DF · NF · PF |
| 206 | Sweet and Sour Pork | Dinner | 35 mins | Pork | DF · NF |
| 207 | Mongolian Beef | Dinner | 25 mins | Beef | DF · NF · PF |
| 208 | Orange Chicken | Dinner | 35 mins | Chicken | DF · NF · PF |
| 209 | Ginger Scallion Steamed Chicken | Dinner | 30 mins | Chicken | DF · NF · PF |
| 210 | Mapo Tofu | Dinner | 25 mins | Tofu, Ground Pork | DF · NF |
| 211 | Dan Dan Noodles | Dinner | 25 mins | Ground Pork, Wheat Noodles | DF · NF |
| 212 | Vegetable Chow Mein | Dinner | 20 mins | Noodles, Vegetables | V · DF · NF · PF |
| 213 | Singapore Noodles with Shrimp | Dinner | 25 mins | Shrimp, Rice Vermicelli | DF · NF · PF |
| 214 | Black Pepper Beef Stir-Fry | Dinner | 20 mins | Beef | DF · NF · PF |
| 215 | Cashew Chicken | Dinner | 25 mins | Chicken, Cashews | DF · PF |
| 216 | Chicken Katsu with Japanese Curry | Dinner | 35 mins | Chicken, Curry | DF · NF · PF |
| 217 | Teriyaki Salmon Donburi | Dinner | 25 mins | Salmon, Rice | DF · NF · PF |
| 218 | Miso Glazed Cod | Dinner | 25 mins | Cod | DF · NF · PF |
| 219 | Beef Sukiyaki | Dinner | 30 mins | Beef, Tofu | DF · NF · PF |
| 220 | Chicken Yakitori Rice Bowl | Dinner | 25 mins | Chicken, Rice | DF · NF · PF |
| 221 | Shoyu Ramen with Chicken | Dinner | 30 mins | Chicken, Ramen Noodles | DF · NF · PF |
| 222 | Chicken Udon Noodle Soup | Dinner | 25 mins | Chicken, Udon Noodles | DF · NF · PF |
| 223 | Korean Beef Bulgogi | Dinner | 30 mins + 30 mins marinate | Beef | DF · NF · PF |
| 224 | Korean Fried Chicken | Dinner | 35 mins | Chicken | DF · NF · PF |
| 225 | Kimchi Fried Rice | Dinner | 20 mins | Rice, Kimchi | V · DF · NF · PF |
| 226 | Japchae | Dinner | 30 mins | Glass Noodles, Vegetables | V · DF · NF · PF |
| 227 | Spicy Korean Chicken Stir-Fry | Dinner | 30 mins | Chicken, Sweet Potato | DF · NF · PF |
| 228 | Thai Green Curry with Chicken | Dinner | 30 mins | Chicken, Coconut Milk | DF · NF · PF |
| 229 | Thai Red Curry with Shrimp | Dinner | 25 mins | Shrimp, Coconut Milk | DF · NF · PF |
| 230 | Pad Thai | Dinner | 30 mins | Shrimp, Rice Noodles | DF · PF |
| 231 | Pad See Ew | Dinner | 25 mins | Beef, Rice Noodles | DF · NF · PF |
| 232 | Thai Basil Chicken | Dinner | 20 mins | Ground Chicken | DF · NF · PF |
| 233 | Massaman Beef Curry | Dinner | 1 hr 10 mins | Beef, Coconut Milk | DF · PF |
| 234 | Chicken Pho | Dinner | 45 mins | Chicken, Rice Noodles | DF · NF · PF |
| 235 | Vietnamese Caramelized Chicken | Dinner | 30 mins | Chicken | DF · NF · PF |
| 236 | Chicken Tikka Masala | Dinner | 40 mins + 30 mins marinate | Chicken | NF · PF |
| 237 | Butter Chicken | Dinner | 40 mins + 30 mins marinate | Chicken | NF · PF |
| 238 | Chana Masala | Dinner | 30 mins | Chickpeas | V · DF · NF · PF |
| 239 | Palak Paneer | Dinner | 30 mins | Paneer, Spinach | V · NF · PF |
| 240 | Dal Tadka with Basmati Rice | Dinner | 35 mins | Lentils, Basmati Rice | V · DF · NF · PF |
| 241 | Classic Meatloaf | Dinner | 1 hr 25 mins | Ground Beef | NF · PF |
| 242 | Buttermilk Fried Chicken | Dinner | 1 hr | Chicken | NF · PF |
| 243 | Chicken Pot Pie | Dinner | 1 hr 5 mins | Chicken | NF · PF |
| 244 | Hearty Beef Stew | Dinner | 2 hrs 15 mins | Beef, Potatoes | DF · NF · PF |
| 245 | Pot Roast with Gravy | Dinner | 3 hrs 20 mins | Beef, Potatoes | DF · NF · PF |
| 246 | Shepherd's Pie | Dinner | 50 mins | Ground Beef, Potatoes | NF · PF |
| 247 | Baked Macaroni and Cheese | Dinner | 40 mins | Pasta, Cheese | V · NF · PF |
| 248 | Turkey Chili with Beans | Dinner | 1 hr | Ground Turkey, Beans | DF · NF · PF |
| 249 | BBQ Pulled Pork Sandwiches | Dinner | 3 hrs 45 mins | Pork Shoulder | DF · NF |
| 250 | BBQ Baby Back Ribs | Dinner | 3 hrs 10 mins | Pork Ribs | DF · NF |
| 251 | Grilled BBQ Chicken Thighs | Dinner | 45 mins | Chicken Thighs | DF · NF · PF |
| 252 | Smash Burgers | Dinner | 20 mins | Ground Beef, Cheese | NF · PF |
| 253 | Turkey Burgers with Avocado | Dinner | 25 mins | Ground Turkey, Avocado | DF · NF · PF |
| 254 | Salisbury Steak with Mushroom Gravy | Dinner | 40 mins | Ground Beef, Mushrooms | DF · NF · PF |
| 255 | Chicken and Dumplings | Dinner | 1 hr | Chicken | NF · PF |
| 256 | Country Fried Steak with Gravy | Dinner | 40 mins | Beef, Milk | NF · PF |
| 257 | Jambalaya | Dinner | 1 hr | Chicken, Andouille Sausage, Shrimp | DF · NF |
| 258 | Chicken and Sausage Gumbo | Dinner | 1 hr 20 mins | Chicken, Andouille Sausage | DF · NF |
| 259 | Vegetarian Red Beans and Rice | Dinner | 1 hr | Kidney Beans, Rice | V · DF · NF · PF |
| 260 | Shrimp and Grits | Dinner | 40 mins | Shrimp, Grits | NF |
| 261 | Crab Cakes with Remoulade | Dinner | 45 mins | Crab Meat | DF · NF · PF |
| 262 | New England Lobster Rolls | Dinner | 25 mins | Lobster | NF · PF |
| 263 | Grilled Ribeye with Garlic Butter | Dinner | 35 mins | Ribeye Steak | NF · PF |
| 264 | Beef Stroganoff | Dinner | 45 mins | Beef, Mushrooms | NF · PF |
| 265 | Tuna Noodle Casserole | Dinner | 40 mins | Tuna, Egg Noodles | NF · PF |
| 266 | King Ranch Chicken Casserole | Dinner | 50 mins | Chicken, Tortillas | NF · PF |
| 267 | Buffalo Chicken Macaroni and Cheese | Dinner | 35 mins | Chicken, Pasta, Cheese | NF · PF |
| 268 | Roast Turkey Breast with Pan Gravy | Dinner | 2 hrs | Turkey Breast | DF · NF · PF |
| 269 | Spinach and Cheese Stuffed Chicken Breast | Dinner | 50 mins | Chicken Breast, Spinach, Cheese | NF · PF |
| 270 | Oven-Fried Chicken Tenders with Honey Mustard | Dinner | 35 mins | Chicken Tenders | DF · NF · PF |
| 271 | Barbecue Turkey Meatballs with Rice | Dinner | 45 mins | Ground Turkey, Rice | DF · NF · PF |
| 272 | Baked Beans and Cornbread Skillet | Dinner | 50 mins | Navy Beans, Cornbread | V · NF · PF |
| 273 | Pan-Seared Salmon with Dill Cream Sauce | Dinner | 25 mins | Salmon Fillets, Dill | NF · PF |
| 274 | Baked Lemon Butter Cod | Dinner | 30 mins | Cod Fillets, Lemon | NF · PF |
| 275 | Fish and Chips | Dinner | 40 mins | White Fish, Potatoes | DF · NF · PF |
| 276 | Grilled Halibut with Mango Salsa | Dinner | 25 mins | Halibut, Mango | DF · NF · PF |
| 277 | Blackened Tilapia with Rice | Dinner | 25 mins | Tilapia, Rice | DF · NF · PF |
| 278 | Cioppino | Dinner | 45 mins | Shrimp, Clams, Mussels | DF · NF · PF |
| 279 | Mussels in White Wine and Garlic | Dinner | 25 mins | Mussels, White Wine | NF · PF |
| 280 | Garlic Butter Scallops | Dinner | 15 mins | Scallops, Butter | NF · PF |
| 281 | Sesame Crusted Tuna Steak | Dinner | 15 mins | Tuna Steak, Sesame Seeds | DF · NF · PF |
| 282 | Coq au Vin | Dinner | 1 hr 30 mins | Chicken, Bacon, Red Wine | NF |
| 283 | Beef Bourguignon | Dinner | 2 hrs 30 mins | Beef Chuck, Bacon, Red Wine | NF |
| 284 | Ratatouille | Dinner | 45 mins | Eggplant, Zucchini, Tomato | V · DF · NF · PF |
| 285 | Chicken Cordon Bleu | Dinner | 45 mins | Chicken Breast, Ham, Cheese | NF |
| 286 | Quiche Lorraine | Dinner | 1 hr | Bacon, Eggs, Cream | NF |
| 287 | Spinach and Mushroom Quiche | Dinner | 1 hr | Spinach, Mushrooms, Eggs | V · NF · PF |
| 288 | Steak Frites with Herb Butter | Dinner | 40 mins | Steak, Potatoes, Herb Butter | NF · PF |
| 289 | Salmon en Papillote | Dinner | 30 mins | Salmon Fillets, Zucchini | DF · NF · PF |
| 290 | Vegetable Lasagna | Dinner | 1 hr 15 mins | Lasagna Noodles, Ricotta, Vegetables | V · NF · PF |
| 291 | Mushroom Stroganoff | Dinner | 30 mins | Mushrooms, Sour Cream, Egg Noodles | V · NF · PF |
| 292 | Lentil Shepherd's Pie | Dinner | 1 hr | Lentils, Potatoes, Carrots | V · NF · PF |
| 293 | Stuffed Portobello Mushrooms | Dinner | 35 mins | Portobello Mushrooms, Spinach, Ricotta | V · NF · PF |
| 294 | Cauliflower Steaks with Chimichurri | Dinner | 30 mins | Cauliflower, Chimichurri | V · DF · NF · PF |
| 295 | Butternut Squash and Sage Risotto | Dinner | 45 mins | Butternut Squash, Arborio Rice, Parmesan | V · NF · PF |
| 296 | Vegetable Biryani | Dinner | 50 mins | Basmati Rice, Mixed Vegetables | V · DF · NF · PF |
| 297 | Coconut Chickpea and Sweet Potato Stew | Dinner | 40 mins | Chickpeas, Sweet Potato, Coconut Milk | V · DF · NF · PF |
| 298 | Eggplant and Chickpea Tagine | Dinner | 45 mins | Eggplant, Chickpeas | V · DF · NF · PF |
| 299 | Lentil Bolognese with Spaghetti | Dinner | 40 mins | Lentils, Spaghetti, Tomato | V · DF · NF · PF |
| 300 | Black Bean Burgers with Avocado | Dinner | 30 mins | Black Beans, Avocado | V · DF · NF · PF |
| 301 | Turmeric Tofu Scramble | Breakfast | 15 mins | Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 302 | Smoked Salmon Bagel with Dill | Breakfast | 5 mins | Smoked Salmon | Nut-free, Pork-free |
| 303 | Strawberry Banana Smoothie Bowl | Breakfast | 5 mins | Frozen Strawberries, Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 304 | Black Bean Breakfast Quesadilla | Breakfast | 12 mins | Eggs, Black Beans | Vegetarian, Nut-free, Pork-free |
| 305 | Denver Omelette | Breakfast | 12 mins | Eggs, Deli Ham | Nut-free |
| 306 | Coconut Mango Chia Pudding | Breakfast | 5 mins (plus overnight chill) | Chia Seeds, Mango | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 307 | Sweet Potato Hash with Fried Eggs | Breakfast | 20 mins | Sweet Potato, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 308 | Turkey Sausage & Egg English Muffin | Breakfast | 15 mins | Turkey Sausage, Eggs | Nut-free, Pork-free |
| 309 | Almond Butter & Banana Chia Toast | Breakfast | 5 mins | Almond Butter | Vegetarian, Dairy-free, Pork-free |
| 310 | Classic French Toast with Berries | Breakfast | 15 mins | Eggs, Whole Grain Bread | Vegetarian, Nut-free, Pork-free |
| 311 | Masala Omelette | Breakfast | 12 mins | Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 312 | Ginger Rice Porridge with Soft Egg | Breakfast | 15 mins | Cooked Rice, Eggs | Dairy-free, Nut-free, Pork-free |
| 313 | Blueberry Cottage Cheese Pancakes | Breakfast | 20 mins | Cottage Cheese, Oats | Vegetarian, Nut-free, Pork-free |
| 314 | Granola & Honey Yogurt Bowl | Breakfast | 5 mins | Greek Yogurt, Granola | Vegetarian, Nut-free, Pork-free |
| 315 | Blueberry Muesli with Milk | Breakfast | 5 mins | Oats | Vegetarian, Nut-free, Pork-free |
| 316 | Egg White & Veggie Scramble | Breakfast | 12 mins | Egg Whites | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 317 | Smashed Chickpea Breakfast Toast | Breakfast | 10 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 318 | Pumpkin Spice Overnight Oats | Breakfast | 5 mins (plus overnight chill) | Oats, Pumpkin Purée | Vegetarian, Nut-free, Pork-free |
| 319 | Spinach & Mushroom Frittata | Breakfast | 25 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 320 | Peach & Honey Cottage Cheese Bowl | Breakfast | 5 mins | Cottage Cheese | Vegetarian, Pork-free |
| 321 | Bircher Muesli with Grated Apple | Breakfast | 10 mins (plus overnight chill) | Oats, Apple | Vegetarian, Pork-free |
| 322 | Scrambled Eggs with Smoked Salmon & Chives | Breakfast | 10 mins | Eggs, Smoked Salmon | Nut-free, Pork-free |
| 323 | Farro Breakfast Bowl with Soft Egg | Breakfast | 20 mins | Farro, Eggs | Vegetarian, Nut-free, Pork-free |
| 324 | Zucchini & Feta Fritters | Breakfast | 25 mins | Zucchini, Eggs | Vegetarian, Nut-free, Pork-free |
| 325 | Banana Oat Blender Muffins | Breakfast | 25 mins | Oats, Banana | Vegetarian, Nut-free, Pork-free |
| 326 | Berry Spinach Protein Smoothie | Breakfast | 5 mins | Frozen Berries, Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 327 | Avocado & Black Bean Breakfast Bowl | Breakfast | 10 mins | Black Beans, Avocado | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 328 | Ham & Cheese Egg Cups | Breakfast | 25 mins | Eggs, Deli Ham | Nut-free |
| 329 | Hot Steel-Cut Oats with Stewed Apple | Breakfast | 10 mins | Steel-Cut Oats, Apple | Vegetarian, Pork-free |
| 330 | Chocolate Banana Chia Pudding | Breakfast | 5 mins (plus overnight chill) | Chia Seeds | Vegetarian, Nut-free, Pork-free |
| 331 | Breakfast Tacos with Egg & Salsa | Breakfast | 12 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 332 | Tomato & Basil Egg Skillet | Breakfast | 15 mins | Eggs, Tomatoes | Vegetarian, Nut-free, Pork-free |
| 333 | Blueberry Lemon Ricotta Toast | Breakfast | 10 mins | Ricotta | Vegetarian, Pork-free |
| 334 | Kale & Potato Breakfast Hash | Breakfast | 20 mins | Potatoes, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 335 | Cinnamon Raisin Protein Oatmeal | Breakfast | 10 mins | Oats | Vegetarian, Nut-free, Pork-free |
| 336 | Mango Lassi Smoothie | Breakfast | 5 mins | Mango, Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 337 | Everything Cottage Cheese Bowl | Breakfast | 5 mins | Cottage Cheese | Vegetarian, Nut-free, Pork-free |
| 338 | Egg & Avocado Rice Bowl | Breakfast | 12 mins | Cooked Rice, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 339 | Turkish Eggs with Garlic Yogurt | Breakfast | 15 mins | Eggs, Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 340 | Sweet Potato Toast with Avocado | Breakfast | 15 mins | Sweet Potato, Avocado | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 341 | Quinoa Breakfast Porridge | Breakfast | 20 mins | Quinoa | Vegetarian, Pork-free |
| 342 | Soft-Boiled Eggs with Toast Soldiers | Breakfast | 10 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 343 | Cherry Almond Overnight Oats | Breakfast | 5 mins (plus overnight chill) | Oats, Cherries | Vegetarian, Pork-free |
| 344 | Breakfast Barley Bowl with Figs & Honey | Breakfast | 20 mins | Pearl Barley | Vegetarian, Pork-free |
| 345 | Spiced Chickpea Breakfast Hash | Breakfast | 20 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 346 | Peach & Ginger Smoothie | Breakfast | 5 mins | Peaches | Vegetarian, Nut-free, Pork-free |
| 347 | Date & Tahini Oatmeal | Breakfast | 10 mins | Oats, Dates | Vegetarian, Nut-free, Pork-free |
| 348 | Egg & Avocado Tostadas | Breakfast | 15 mins | Eggs, Corn Tortillas | Vegetarian, Nut-free, Pork-free |
| 349 | Cheesy Grits with Poached Egg | Breakfast | 20 mins | Grits, Eggs | Vegetarian, Nut-free, Pork-free |
| 350 | Baked Berry Oatmeal Cups | Breakfast | 28 mins | Oats | Vegetarian, Nut-free, Pork-free |
| 351 | Kiwi Green Smoothie Bowl | Breakfast | 10 mins | Spinach, Kiwi | Vegetarian, Nut-free, Pork-free |
| 352 | Egg & Veggie Breakfast Pita | Breakfast | 15 mins | Eggs, Pita | Vegetarian, Nut-free, Pork-free |
| 353 | Banana Almond Smoothie | Breakfast | 5 mins | Banana, Almond Butter | Vegetarian, Pork-free |
| 354 | Pear & Cardamom Overnight Oats | Breakfast | 5 mins (plus overnight chill) | Oats, Pear | Vegetarian, Pork-free |
| 355 | Turkey Bacon, Egg & Spinach Plate | Breakfast | 15 mins | Turkey Bacon, Eggs | Dairy-free, Nut-free, Pork-free |
| 356 | Creamy Polenta with Egg & Parmesan | Breakfast | 20 mins | Polenta, Eggs | Vegetarian, Nut-free, Pork-free |
| 357 | Scrambled Tofu Breakfast Tacos | Breakfast | 15 mins | Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 358 | Smoked Paprika Egg & Potato Skillet | Breakfast | 25 mins | Potatoes, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 359 | Carrot Cake Overnight Oats | Breakfast | 10 mins (plus overnight chill) | Oats, Carrot | Vegetarian, Pork-free |
| 360 | Blackberry Ricotta Pancakes | Breakfast | 25 mins | Ricotta, Whole Wheat Flour | Vegetarian, Nut-free, Pork-free |
| 361 | Egg Salad Breakfast Toast | Breakfast | 15 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 362 | Matcha Banana Smoothie | Breakfast | 5 mins | Banana, Matcha | Vegetarian, Nut-free, Pork-free |
| 363 | Savory Yogurt Bowl with Za'atar | Breakfast | 10 mins | Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 364 | Caprese Breakfast Toast | Breakfast | 10 mins | Mozzarella, Tomato | Vegetarian, Nut-free, Pork-free |
| 365 | Buckwheat Blueberry Pancakes | Breakfast | 25 mins | Buckwheat Flour | Vegetarian, Nut-free, Pork-free |
| 366 | Hummus & Soft Egg Breakfast Plate | Breakfast | 15 mins | Hummus, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 367 | Apple Walnut Yogurt Bowl | Breakfast | 5 mins | Greek Yogurt, Apple | Vegetarian, Pork-free |
| 368 | Peanut Butter Oat Energy Bowl | Breakfast | 10 mins | Oats, Peanut Butter | Vegetarian, Pork-free |
| 369 | Spinach & Sun-Dried Tomato Egg Wrap | Breakfast | 12 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 370 | Coconut Berry Yogurt Freezer Smoothie | Breakfast | 5 mins | Frozen Berries | Vegetarian, Nut-free, Pork-free |
| 371 | Mushroom & Thyme Breakfast Toast | Breakfast | 15 mins | Mushrooms | Vegetarian, Nut-free, Pork-free |
| 372 | Breakfast Couscous with Dates & Pistachios | Breakfast | 10 mins | Couscous | Vegetarian, Pork-free |
| 373 | Greek Chicken Pita Pockets | Lunch | 10 mins | Rotisserie Chicken | Nut-free, Pork-free |
| 374 | Chicken Caesar Wrap | Lunch | 10 mins | Cooked Chicken | Nut-free, Pork-free |
| 375 | Cobb Salad Jar | Lunch | 15 mins | Chicken, Eggs | Nut-free, Pork-free |
| 376 | Tuna Niçoise Salad | Lunch | 20 mins | Canned Tuna, Potatoes | Dairy-free, Nut-free, Pork-free |
| 377 | Italian Antipasto Pasta Salad | Lunch | 20 mins | Pasta, Salami | Nut-free |
| 378 | Asian Chicken Lettuce Wraps | Lunch | 20 mins | Ground Chicken | Dairy-free, Nut-free, Pork-free |
| 379 | Smashed Chickpea Salad Sandwich | Lunch | 10 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 380 | Thai Peanut Chicken Wrap | Lunch | 10 mins | Cooked Chicken, Peanut Butter | Dairy-free, Pork-free |
| 381 | Falafel Hummus Bowl | Lunch | 15 mins | Falafel, Quinoa | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 382 | Quinoa Tabbouleh | Lunch | 20 mins | Quinoa | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 383 | Black Bean & Corn Salad | Lunch | 10 mins | Black Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 384 | Kale Caesar with Crispy Chickpeas | Lunch | 20 mins | Kale, Chickpeas | Vegetarian, Nut-free, Pork-free |
| 385 | Smoked Salmon Grain Bowl | Lunch | 10 mins | Smoked Salmon, Brown Rice | Dairy-free, Nut-free, Pork-free |
| 386 | Shrimp & Avocado Salad | Lunch | 15 mins | Shrimp | Dairy-free, Nut-free, Pork-free |
| 387 | Chicken Salad with Grapes & Celery | Lunch | 10 mins | Rotisserie Chicken | Pork-free |
| 388 | Curry Chicken Salad Lettuce Cups | Lunch | 10 mins | Cooked Chicken | Nut-free, Pork-free |
| 389 | Edamame Soba Noodle Salad | Lunch | 15 mins | Soba Noodles, Edamame | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 390 | Cold Sesame Cucumber Noodles | Lunch | 15 mins | Noodles, Tahini | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 391 | Turkey BLT Wrap | Lunch | 10 mins | Deli Turkey, Turkey Bacon | Dairy-free, Nut-free, Pork-free |
| 392 | Ham, Swiss & Apple Wrap | Lunch | 10 mins | Deli Ham, Swiss Cheese | Nut-free |
| 393 | Hummus Veggie Pinwheels | Lunch | 10 mins | Hummus | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 394 | Chicken Taco Salad | Lunch | 15 mins | Cooked Chicken | Nut-free, Pork-free |
| 395 | Greek Orzo Salad | Lunch | 20 mins | Orzo, Feta | Vegetarian, Nut-free, Pork-free |
| 396 | Couscous Salad with Roasted Red Peppers | Lunch | 15 mins | Couscous, Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 397 | Farro & Arugula Salad with Parmesan | Lunch | 20 mins | Farro | Vegetarian, Nut-free, Pork-free |
| 398 | Broccoli Cranberry Crunch Salad | Lunch | 15 mins | Broccoli | Vegetarian, Nut-free, Pork-free |
| 399 | Spinach, Strawberry & Chicken Salad | Lunch | 10 mins | Cooked Chicken | Pork-free |
| 400 | Turkey Pesto Panini | Lunch | 10 mins | Deli Turkey | Pork-free |
| 401 | Tomato Basil Soup | Lunch | 20 mins | Canned Tomatoes | Vegetarian, Nut-free, Pork-free |
| 402 | Quick Black Bean Soup | Lunch | 20 mins | Black Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 403 | Red Lentil Soup | Lunch | 25 mins | Red Lentils | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 404 | Miso Soup with Tofu & Noodles | Lunch | 15 mins | Miso, Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 405 | Canned Salmon Rice Bowl | Lunch | 10 mins | Canned Salmon | Dairy-free, Nut-free, Pork-free |
| 406 | Salmon Salad Sandwich | Lunch | 10 mins | Canned Salmon | Nut-free, Pork-free |
| 407 | Shrimp Summer Rolls | Lunch | 20 mins | Shrimp, Rice Paper | Dairy-free, Nut-free, Pork-free |
| 408 | Chicken Banh Mi-Style Sandwich | Lunch | 15 mins | Cooked Chicken | Dairy-free, Nut-free, Pork-free |
| 409 | Chicken & Cheese Quesadillas | Lunch | 15 mins | Cooked Chicken | Nut-free, Pork-free |
| 410 | Bean & Cheese Quesadillas | Lunch | 12 mins | Pinto Beans | Vegetarian, Nut-free, Pork-free |
| 411 | Hummus Veggie Grain Bowl | Lunch | 10 mins | Quinoa, Hummus | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 412 | Mediterranean Tuna Pasta Salad | Lunch | 20 mins | Canned Tuna, Pasta | Dairy-free, Nut-free, Pork-free |
| 413 | Chicken Gyro Bowl with Tzatziki | Lunch | 20 mins | Chicken Breast | Nut-free, Pork-free |
| 414 | Buffalo Chickpea Salad | Lunch | 10 mins | Chickpeas | Vegetarian, Nut-free, Pork-free |
| 415 | Thai Crunch Salad with Peanut Dressing | Lunch | 15 mins | Edamame, Peanuts | Vegetarian, Dairy-free, Pork-free |
| 416 | Asian Chicken Slaw | Lunch | 15 mins | Cooked Chicken | Dairy-free, Nut-free, Pork-free |
| 417 | Chicken & Hummus Snack Box | Lunch | 10 mins | Cooked Chicken, Hummus | Dairy-free, Nut-free, Pork-free |
| 418 | Turkey & Cheese Bento Box | Lunch | 10 mins | Deli Turkey | Nut-free, Pork-free |
| 419 | Egg & Veggie Bento Box | Lunch | 15 mins | Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 420 | Panzanella Bread Salad | Lunch | 15 mins | Whole Grain Bread, Tomatoes | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 421 | White Bean & Tuna Salad with Arugula | Lunch | 10 mins | Canned Tuna, White Beans | Dairy-free, Nut-free, Pork-free |
| 422 | Roasted Veggie & Feta Wrap | Lunch | 25 mins | Vegetables, Feta | Vegetarian, Nut-free, Pork-free |
| 423 | Quinoa, Beet & Goat Cheese Salad | Lunch | 15 mins | Quinoa, Beets | Vegetarian, Pork-free |
| 424 | Chickpea Shawarma Pita | Lunch | 20 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 425 | Sushi-Style Salmon Bowl | Lunch | 15 mins | Smoked Salmon, Rice | Dairy-free, Nut-free, Pork-free |
| 426 | Moroccan Carrot & Chickpea Salad | Lunch | 15 mins | Chickpeas, Carrots | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 427 | BBQ Chicken Salad Bowl | Lunch | 15 mins | Cooked Chicken | Nut-free, Pork-free |
| 428 | Caprese Grain Bowl with Farro | Lunch | 20 mins | Farro, Mozzarella | Vegetarian, Nut-free, Pork-free |
| 429 | Turkey Taco Lettuce Boats | Lunch | 20 mins | Ground Turkey | Nut-free, Pork-free |
| 430 | Greek Chicken Salad Jar | Lunch | 15 mins | Cooked Chicken, Feta | Nut-free, Pork-free |
| 431 | Pesto White Bean Salad | Lunch | 10 mins | White Beans | Vegetarian, Pork-free |
| 432 | Soba Noodle Bowl with Ginger Dressing | Lunch | 15 mins | Soba Noodles, Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 433 | Chicken, Apple & Cheddar Sandwich | Lunch | 10 mins | Cooked Chicken | Nut-free, Pork-free |
| 434 | Tuna Melt on Whole Grain | Lunch | 15 mins | Canned Tuna | Nut-free, Pork-free |
| 435 | Veggie Hummus Sandwich | Lunch | 10 mins | Hummus | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 436 | Chicken Satay Noodle Bowl | Lunch | 20 mins | Chicken Breast, Peanut Butter | Dairy-free, Pork-free |
| 437 | Mason Jar Greek Chickpea Salad | Lunch | 10 mins | Chickpeas | Vegetarian, Nut-free, Pork-free |
| 438 | Southwest Sweet Potato & Black Bean Bowl | Lunch | 25 mins | Sweet Potato, Black Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 439 | Chopped Italian Sub Salad | Lunch | 15 mins | Deli Meats | Nut-free |
| 440 | Lemon Herb Quinoa & Shrimp Bowl | Lunch | 20 mins | Shrimp, Quinoa | Dairy-free, Nut-free, Pork-free |
| 441 | Roasted Cauliflower & Chickpea Bowl | Lunch | 25 mins | Cauliflower, Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 442 | Turkey & Cranberry Wrap | Lunch | 10 mins | Deli Turkey | Nut-free, Pork-free |
| 443 | Curried Egg Salad Sandwich | Lunch | 15 mins | Eggs | Vegetarian, Nut-free, Pork-free |
| 444 | Antipasto Skewer Box | Lunch | 15 mins | Mozzarella, Salami | Nut-free |
| 445 | Chicken Pesto Grain Bowl | Lunch | 15 mins | Cooked Chicken, Quinoa | Pork-free |
| 446 | Cucumber & Chickpea Yogurt Salad | Lunch | 10 mins | Chickpeas, Greek Yogurt | Vegetarian, Nut-free, Pork-free |
| 447 | Veggie Sushi Bowl | Lunch | 15 mins | Rice, Edamame | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 448 | Chicken Fajita Salad | Lunch | 20 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 449 | Tortellini Pesto Salad | Lunch | 20 mins | Cheese Tortellini | Vegetarian, Pork-free |
| 450 | Chicken Noodle Soup | Lunch | 25 mins | Rotisserie Chicken | Dairy-free, Nut-free, Pork-free |
| 451 | Spicy Peanut Sweet Potato Soup | Lunch | 30 mins | Sweet Potato, Peanut Butter | Vegetarian, Dairy-free, Pork-free |
| 452 | Mushroom & Wild Rice Soup | Lunch | 25 mins | Mushrooms, Wild Rice | Vegetarian, Nut-free, Pork-free |
| 453 | Split Pea & Ham Soup with Red Lentils | Lunch | 30 mins | Red Lentils, Ham | Dairy-free, Nut-free |
| 454 | Garlic Lemon Shrimp Scampi | Dinner | 20 mins | Shrimp | Nut-free, Pork-free |
| 455 | Beef & Broccoli Stir-Fry with Flank Steak | Dinner | 20 mins | Flank Steak | Dairy-free, Nut-free, Pork-free |
| 456 | Baked Teriyaki Salmon | Dinner | 20 mins | Salmon | Dairy-free, Nut-free, Pork-free |
| 457 | Turkey Meatballs in Marinara | Dinner | 30 mins | Ground Turkey | Nut-free, Pork-free |
| 458 | Sticky Soy & Garlic Chicken Thighs | Dinner | 25 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 459 | One-Pan Lemon Herb Cod | Dinner | 20 mins | Cod | Dairy-free, Nut-free, Pork-free |
| 460 | Black Bean & Sweet Potato Enchilada Skillet | Dinner | 30 mins | Black Beans, Sweet Potato | Vegetarian, Nut-free, Pork-free |
| 461 | Thai Red Curry with Chicken | Dinner | 25 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 462 | Pork Tenderloin with Apple & Onion | Dinner | 30 mins | Pork Tenderloin | Dairy-free, Nut-free |
| 463 | Chickpea Tikka Masala | Dinner | 25 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 464 | Sheet Pan Sausage & Brussels Sprouts | Dinner | 30 mins | Turkey Sausage | Dairy-free, Nut-free, Pork-free |
| 465 | Spaghetti Aglio e Olio with Spinach | Dinner | 20 mins | Whole Wheat Spaghetti | Vegetarian, Nut-free, Pork-free |
| 466 | Blackened Tilapia with Corn Salsa | Dinner | 20 mins | Tilapia | Dairy-free, Nut-free, Pork-free |
| 467 | Ground Beef Taco Skillet with Rice | Dinner | 25 mins | Lean Ground Beef | Nut-free, Pork-free |
| 468 | Coconut Curry Shrimp | Dinner | 20 mins | Shrimp | Dairy-free, Nut-free, Pork-free |
| 469 | Vegetable Pad Thai | Dinner | 25 mins | Rice Noodles, Tofu | Vegetarian, Dairy-free, Pork-free |
| 470 | Greek Chicken Souvlaki Skewers | Dinner | 25 mins | Chicken Breast | Nut-free, Pork-free |
| 471 | White Bean & Kale Skillet with Sausage | Dinner | 25 mins | Turkey Sausage, White Beans | Nut-free, Pork-free |
| 472 | Miso-Glazed Cod with Bok Choy | Dinner | 20 mins | Cod | Dairy-free, Nut-free, Pork-free |
| 473 | Sheet Pan Harissa Chicken & Cauliflower | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 474 | Lemon Dill Salmon with Green Beans | Dinner | 20 mins | Salmon | Dairy-free, Nut-free, Pork-free |
| 475 | Cajun Chicken & Rice Skillet | Dinner | 30 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 476 | Sesame Ginger Tofu & Green Beans | Dinner | 25 mins | Extra-Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 477 | Bacon & Pea Carbonara | Dinner | 25 mins | Pork Bacon | Nut-free |
| 478 | Vegetarian Chili | Dinner | 30 mins | Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 479 | Chicken Parmesan Skillet | Dinner | 30 mins | Chicken Cutlets | Nut-free, Pork-free |
| 480 | Shrimp Fried Rice | Dinner | 20 mins | Shrimp, Cooked Rice | Dairy-free, Nut-free, Pork-free |
| 481 | Eggplant Parmesan Skillet | Dinner | 30 mins | Eggplant | Vegetarian, Nut-free, Pork-free |
| 482 | Korean-Style Beef Bowls | Dinner | 20 mins | Lean Ground Beef | Dairy-free, Nut-free, Pork-free |
| 483 | Creamy Tuscan Chicken | Dinner | 25 mins | Chicken Breast | Nut-free, Pork-free |
| 484 | Lentil Bolognese | Dinner | 30 mins | Lentils | Vegetarian, Nut-free, Pork-free |
| 485 | Fish Tacos with Lime Slaw | Dinner | 25 mins | White Fish | Nut-free, Pork-free |
| 486 | Chicken & Broccoli Alfredo | Dinner | 30 mins | Chicken Breast | Nut-free, Pork-free |
| 487 | Moroccan Chickpea & Vegetable Stew | Dinner | 30 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 488 | Garlic Butter Steak Bites with Potatoes | Dinner | 30 mins | Sirloin Steak | Nut-free, Pork-free |
| 489 | Spinach & Ricotta Stuffed Shells | Dinner | 30 mins | Ricotta | Vegetarian, Nut-free, Pork-free |
| 490 | Jerk-Spiced Chicken with Mango Salsa | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 491 | Hoisin Pork Stir-Fry with Snap Peas | Dinner | 20 mins | Pork Loin | Dairy-free, Nut-free |
| 492 | Butternut Squash & Sage Gnocchi | Dinner | 25 mins | Gnocchi | Vegetarian, Pork-free |
| 493 | Sheet Pan Salmon with Broccoli & Potatoes | Dinner | 30 mins | Salmon | Dairy-free, Nut-free, Pork-free |
| 494 | Chicken Shawarma Bowls | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 495 | Spicy Peanut Noodles with Chicken | Dinner | 25 mins | Chicken Breast, Peanut Butter | Dairy-free, Pork-free |
| 496 | Baked Ziti with Turkey | Dinner | 30 mins | Ground Turkey | Nut-free, Pork-free |
| 497 | Roasted Red Pepper & White Bean Pasta | Dinner | 25 mins | White Beans | Vegetarian, Nut-free, Pork-free |
| 498 | Chicken Enchilada Skillet | Dinner | 25 mins | Rotisserie Chicken | Nut-free, Pork-free |
| 499 | Garlic Ginger Bok Choy & Tofu | Dinner | 20 mins | Extra-Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 500 | Mediterranean Baked Cod with Olives | Dinner | 25 mins | Cod | Dairy-free, Nut-free, Pork-free |
| 501 | Pesto Shrimp Zucchini Noodles | Dinner | 20 mins | Shrimp | Pork-free |
| 502 | Smoky Black Bean Burgers | Dinner | 30 mins | Black Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 503 | Lemon Garlic Chicken with Orzo | Dinner | 30 mins | Chicken Thighs | Nut-free, Pork-free |
| 504 | Beef Fajita Skillet | Dinner | 25 mins | Flank Steak | Dairy-free, Nut-free, Pork-free |
| 505 | Cauliflower & Chickpea Curry | Dinner | 30 mins | Cauliflower, Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 506 | Turkey & Zucchini Skillet Lasagna | Dinner | 30 mins | Ground Turkey | Nut-free, Pork-free |
| 507 | Soy Ginger Glazed Salmon Bowls | Dinner | 25 mins | Salmon | Dairy-free, Nut-free, Pork-free |
| 508 | Spicy Sausage & Penne | Dinner | 25 mins | Italian Turkey Sausage | Nut-free, Pork-free |
| 509 | Crispy Baked Chicken Tenders with Slaw | Dinner | 30 mins | Chicken Tenders | Nut-free, Pork-free |
| 510 | Veggie Burrito Bowls with Lime Rice | Dinner | 25 mins | Black Beans | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 511 | Balsamic Chicken with Roasted Vegetables | Dinner | 30 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 512 | Tofu Tikka Masala | Dinner | 25 mins | Extra-Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 513 | Sausage, Pepper & Polenta Skillet | Dinner | 25 mins | Turkey Sausage | Nut-free, Pork-free |
| 514 | Lemon Pepper Chicken with Couscous | Dinner | 25 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 515 | Tuna Puttanesca Pasta | Dinner | 25 mins | Canned Tuna | Dairy-free, Nut-free, Pork-free |
| 516 | Chicken Gyros with Tzatziki | Dinner | 30 mins | Chicken Thighs | Nut-free, Pork-free |
| 517 | Creamy Mushroom & Spinach Pasta | Dinner | 25 mins | Mushrooms | Vegetarian, Nut-free, Pork-free |
| 518 | Air-Fryer Honey Mustard Salmon | Dinner | 20 mins | Salmon | Dairy-free, Nut-free, Pork-free |
| 519 | Black Pepper Beef & Onions | Dinner | 20 mins | Flank Steak | Dairy-free, Nut-free, Pork-free |
| 520 | Greek Baked Shrimp with Feta | Dinner | 25 mins | Shrimp | Nut-free, Pork-free |
| 521 | Sweet & Sour Chicken | Dinner | 30 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 522 | Salmon Cakes with Lemon Yogurt | Dinner | 25 mins | Canned Salmon | Nut-free, Pork-free |
| 523 | Spinach & Feta Stuffed Chicken | Dinner | 30 mins | Chicken Breast | Nut-free, Pork-free |
| 524 | Vegetable Lo Mein | Dinner | 25 mins | Noodles | Dairy-free, Nut-free, Pork-free |
| 525 | Chipotle Turkey Stuffed Peppers | Dinner | 30 mins | Ground Turkey | Nut-free, Pork-free |
| 526 | Garlic Parmesan Pork Chops with Green Beans | Dinner | 25 mins | Pork Chops | Nut-free |
| 527 | Coconut Lime Chicken & Rice | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 528 | Caprese Stuffed Portobello Mushrooms | Dinner | 25 mins | Portobello Mushrooms | Vegetarian, Nut-free, Pork-free |
| 529 | Szechuan-Style Green Beans with Ground Pork | Dinner | 20 mins | Ground Pork | Dairy-free, Nut-free |
| 530 | Mediterranean Quinoa Stuffed Zucchini | Dinner | 30 mins | Quinoa | Vegetarian, Nut-free, Pork-free |
| 531 | Hot Honey Chicken Thighs | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 532 | Chicken Caesar Flatbreads | Dinner | 20 mins | Cooked Chicken | Nut-free, Pork-free |
| 533 | Red Lentil Dal with Spinach | Dinner | 30 mins | Red Lentils | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 534 | Seared Scallops with Lemon Risotto-Style Orzo | Dinner | 30 mins | Scallops | Nut-free, Pork-free |
| 535 | Teriyaki Turkey Rice Bowls | Dinner | 25 mins | Ground Turkey | Dairy-free, Nut-free, Pork-free |
| 536 | Caprese Chicken Sheet Pan with Potatoes | Dinner | 30 mins | Chicken Breast | Nut-free, Pork-free |
| 537 | Spicy Tofu Lettuce Cups | Dinner | 25 mins | Extra-Firm Tofu | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 538 | Smoked Paprika Chicken & Chickpea Traybake | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 539 | Ramen-Style Noodle Soup with Chicken | Dinner | 25 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 540 | Baked Falafel Plate with Tahini | Dinner | 30 mins | Chickpeas | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 541 | Pan-Seared Steak with Chimichurri | Dinner | 25 mins | Sirloin Steak | Dairy-free, Nut-free, Pork-free |
| 542 | Sheet Pan Gnocchi with Tomatoes & Spinach | Dinner | 30 mins | Gnocchi | Vegetarian, Nut-free, Pork-free |
| 543 | Turkey Burger with Avocado | Dinner | 25 mins | Ground Turkey | Dairy-free, Nut-free, Pork-free |
| 544 | Cilantro Lime Shrimp Bowls | Dinner | 25 mins | Shrimp | Dairy-free, Nut-free, Pork-free |
| 545 | Pesto Salmon with Asparagus | Dinner | 20 mins | Salmon | Pork-free |
| 546 | Pork Stir-Fry with Broccoli & Cashews | Dinner | 25 mins | Pork Loin | Dairy-free |
| 547 | White Chicken Chili | Dinner | 30 mins | Rotisserie Chicken | Nut-free, Pork-free |
| 548 | Crispy Chickpea & Kale Caesar Pasta | Dinner | 30 mins | Chickpeas | Vegetarian, Nut-free, Pork-free |
| 549 | Beef & Bean Chili | Dinner | 30 mins | Lean Ground Beef | Dairy-free, Nut-free, Pork-free |
| 550 | Lemon Herb Roast Chicken Cutlets with Arugula | Dinner | 20 mins | Chicken Cutlets | Nut-free, Pork-free |
| 551 | Vegetable Fried Quinoa | Dinner | 20 mins | Quinoa | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 552 | Tomato & White Bean Baked Fish | Dinner | 25 mins | White Fish | Dairy-free, Nut-free, Pork-free |
| 553 | Orange Ginger Chicken Stir-Fry | Dinner | 25 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 554 | Mushroom & Barley Risotto-Style Skillet | Dinner | 30 mins | Mushrooms, Barley | Vegetarian, Nut-free, Pork-free |
| 555 | Chili Crisp Noodles with Bok Choy | Dinner | 20 mins | Noodles | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 556 | Sheet Pan Shrimp Boil | Dinner | 30 mins | Shrimp | Dairy-free, Nut-free, Pork-free |
| 557 | Peanut Tofu Buddha Bowl | Dinner | 30 mins | Extra-Firm Tofu, Peanut Butter | Vegetarian, Dairy-free, Pork-free |
| 558 | Chicken Marsala-Style Skillet | Dinner | 30 mins | Chicken Cutlets | Nut-free, Pork-free |
| 559 | Smoky Lentil & Sweet Potato Skillet | Dinner | 30 mins | Lentils, Sweet Potato | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 560 | Crispy Fish Sandwiches with Slaw | Dinner | 30 mins | White Fish | Nut-free, Pork-free |
| 561 | Baked Feta & Tomato Pasta | Dinner | 30 mins | Feta | Vegetarian, Nut-free, Pork-free |
| 562 | Turkey Sloppy Joes | Dinner | 25 mins | Ground Turkey | Dairy-free, Nut-free, Pork-free |
| 563 | Lemon Garlic Butter Tilapia | Dinner | 20 mins | Tilapia | Nut-free, Pork-free |
| 564 | Chickpea & Spinach Shakshuka Dinner | Dinner | 25 mins | Chickpeas, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 565 | Steak & Roasted Broccoli Bowls | Dinner | 30 mins | Sirloin Steak | Dairy-free, Nut-free, Pork-free |
| 566 | Roasted Vegetable & Halloumi Traybake | Dinner | 30 mins | Halloumi | Vegetarian, Nut-free, Pork-free |
| 567 | Zucchini Noodle Pad Thai | Dinner | 25 mins | Zucchini, Eggs | Dairy-free, Pork-free |
| 568 | Smothered Chicken with Onions & Gravy | Dinner | 30 mins | Chicken Thighs | Dairy-free, Nut-free, Pork-free |
| 569 | Mexican Street Corn Chicken Bowls | Dinner | 30 mins | Chicken Breast | Nut-free, Pork-free |
| 570 | Margherita Flatbread Pizzas | Dinner | 20 mins | Flatbread, Mozzarella | Vegetarian, Nut-free, Pork-free |
| 571 | Curried Cauliflower Rice Bowls with Egg | Dinner | 25 mins | Cauliflower, Eggs | Vegetarian, Dairy-free, Nut-free, Pork-free |
| 572 | Broccoli Cheddar Stuffed Baked Potatoes | Dinner | 30 mins | Potatoes | Vegetarian, Nut-free, Pork-free |
| 573 | Garlic Shrimp & Asparagus Risotto-Style Orzo | Dinner | 30 mins | Shrimp | Nut-free, Pork-free |
| 574 | Hoisin Glazed Meatballs with Rice | Dinner | 30 mins | Ground Turkey | Dairy-free, Nut-free, Pork-free |
| 575 | Zucchini Fritter Dinner Plate with Yogurt Sauce | Dinner | 30 mins | Zucchini | Vegetarian, Nut-free, Pork-free |
| 576 | Chicken & Vegetable Skewers with Couscous | Dinner | 30 mins | Chicken Breast | Dairy-free, Nut-free, Pork-free |
| 577 | Spiced Beef & Rice Stuffed Cabbage Skillet | Dinner | 30 mins | Lean Ground Beef | Dairy-free, Nut-free, Pork-free |
| 578 | Crispy Gnocchi with Sausage & Broccolini | Dinner | 25 mins | Gnocchi, Turkey Sausage | Nut-free, Pork-free |
| 579 | Paneer & Pea Curry | Dinner | 25 mins | Paneer | Vegetarian, Nut-free, Pork-free |

## Category 1: Breakfast Recipes (1 to 41)

### 1. Banana Berry Overnight Chia Oats

**Total Time:** 5 mins + overnight chill

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- ½ cup rolled oats
- 1 tbsp chia seeds
- ¾ cup milk (dairy or plant-based)
- 1 tbsp honey or maple syrup
- ½ sliced banana
- ⅓ cup frozen or fresh berries

**Instructions:**
1. In a glass jar or sealable container, combine oats, chia seeds, sweetener, and milk. Stir thoroughly.
2. Top with sliced banana and berries.
3. Cover tightly and refrigerate overnight (or at least 2 hours). Serve cold.

### 2. Spinach, Egg and Avocado Breakfast Wrap

**Total Time:** 10 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 large eggs
- 1 cup fresh baby spinach
- ½ ripe avocado (mashed or sliced)
- 1 large whole wheat tortilla
- 2 tbsp salsa
- Salt and black pepper to taste

**Instructions:**
1. Whisk eggs with salt and pepper in a small bowl.
2. Heat a non-stick skillet over medium heat with cooking spray. Saute spinach until wilted, about 1 minute.
3. Pour in whisked eggs and scramble until fully cooked, 2 to 3 minutes.
4. Spread mashed avocado on the tortilla, top with scrambled egg and spinach mix, and spoon salsa over top.
5. Fold the sides and roll tightly. Slice in half and serve warm.

### 3. High-Protein Greek Yogurt and Berry Parfait

**Total Time:** 5 mins

**Dietary:** Vegetarian · Pork-free

**Ingredients:**
- ¾ cup plain unsweetened Greek yogurt
- ½ cup mixed berries (strawberries, blueberries, raspberries)
- 2 tbsp chopped almonds or walnuts
- 1 tsp honey
- Pinch of ground cinnamon

**Instructions:**
1. Spoon half the Greek yogurt into a glass or jar.
2. Add a layer of mixed berries and chopped nuts.
3. Add the remaining yogurt, top with remaining berries and nuts, drizzle with honey, and dust with cinnamon.

### 4. Veggie Scramble with Feta and Herbs

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 4 large eggs
- 1 medium bell pepper (any color), diced
- 1 medium tomato, diced
- ⅓ cup crumbled feta cheese
- 2 tbsp fresh herbs (parsley, dill, or chives), chopped
- 1 tbsp olive oil
- Salt and black pepper to taste

**Instructions:**
1. Crack the eggs into a bowl and whisk lightly with a pinch of salt and pepper.
2. Heat the olive oil in a nonstick skillet over medium heat. Add the diced bell pepper and cook for 2 minutes, stirring occasionally, until slightly softened.
3. Add the diced tomato and cook for 1 minute more.
4. Pour in the whisked eggs. Let them sit for about 20 seconds, then gently push and fold them with a spatula, forming soft curds.
5. When the eggs are just set but still slightly glossy, about 2 minutes, remove the skillet from the heat.
6. Sprinkle the crumbled feta and fresh herbs over the top. Serve immediately.

### 5. Mushroom and Spinach Egg Muffin Cups

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 5 large eggs
- 1 cup cremini or white mushrooms, finely diced
- 1 cup fresh baby spinach, roughly chopped
- ⅓ cup shredded cheddar cheese
- 2 tbsp milk
- 1 tsp olive oil
- ¼ tsp garlic powder
- Salt and black pepper to taste

**Instructions:**
1. Preheat the oven to 375°F (190°C). Lightly grease a 6-cup muffin tin with olive oil or cooking spray.
2. Heat the olive oil in a small skillet over medium heat. Add the mushrooms and cook for 3 minutes until they release their moisture and begin to brown. Add the spinach and stir until wilted, about 1 minute. Remove from heat and let cool briefly.
3. In a bowl, whisk together the eggs, milk, garlic powder, salt, and pepper.
4. Divide the mushroom and spinach mixture evenly among the 6 muffin cups. Pour the egg mixture on top, filling each cup about three-quarters full. Sprinkle shredded cheddar over each cup.
5. Bake for 12 to 14 minutes, until the tops are set and lightly golden. Let cool in the tin for 2 minutes before removing.

### 6. Avocado and Egg Toast with Everything Seasoning

**Total Time:** 10 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 slices whole grain bread
- 1 ripe avocado
- 2 large eggs
- 1 tsp everything bagel seasoning
- 1 tsp lemon juice
- 1 tsp olive oil
- Pinch of red pepper flakes (optional)

**Instructions:**
1. Toast the bread to your preferred level of crispness.
2. While the bread toasts, heat the olive oil in a small nonstick skillet over medium heat. Crack the eggs into the skillet and cook until the whites are fully set and the yolks are still slightly runny, about 3 to 4 minutes.
3. Halve the avocado, remove the pit, and scoop the flesh into a bowl. Add the lemon juice and a pinch of salt, then mash with a fork until slightly chunky.
4. Spread the mashed avocado evenly on each slice of toast. Place a fried egg on top of each.
5. Sprinkle with everything bagel seasoning and red pepper flakes if using. Serve immediately.

### 7. Peanut Butter Banana Oatmeal

**Total Time:** 10 mins

**Dietary:** Vegetarian · Dairy-free · Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 cups milk (dairy or unsweetened plant-based)
- 1 large ripe banana, sliced
- 2 tbsp natural peanut butter
- 1 tbsp honey or maple syrup
- ¼ tsp cinnamon
- Pinch of salt

**Instructions:**
1. In a medium saucepan, combine the rolled oats, milk, cinnamon, and a pinch of salt. Bring to a gentle boil over medium heat, stirring occasionally.
2. Reduce the heat to low and simmer for 4 to 5 minutes, stirring now and then, until the oats are tender and the mixture has thickened.
3. Remove from heat. Stir in the peanut butter until melted and evenly distributed.
4. Divide between two bowls. Top each with banana slices and drizzle with honey or maple syrup. Serve warm.

### 8. Savory Oatmeal with Soft Egg and Scallions

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 cups low-sodium vegetable broth
- 2 large eggs
- 2 scallions, thinly sliced
- 1 tbsp soy sauce (or tamari for gluten-free)
- 1 tsp sesame oil
- ½ tsp grated fresh ginger
- Pinch of white or black pepper
- Sesame seeds for garnish (optional)

**Instructions:**
1. In a medium saucepan, bring the broth to a boil over medium-high heat. Add the oats and ginger, stir, then reduce heat to medium-low. Simmer for 5 to 6 minutes, stirring occasionally, until the oats are creamy and tender.
2. While the oats cook, bring a small pot of water to a gentle boil. Lower the eggs into the water and cook for 6 and a half minutes for a jammy yolk. Transfer to cold water for 1 minute, then peel.
3. Stir the soy sauce and sesame oil into the cooked oatmeal. Taste and adjust seasoning.
4. Divide between two bowls. Halve each soft-boiled egg and place on top. Garnish with sliced scallions, a pinch of pepper, and sesame seeds if using.

### 9. Whole Wheat Banana Pancakes

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- ¾ cup whole wheat flour
- 1 large ripe banana, mashed
- 1 large egg
- ½ cup milk (dairy or unsweetened plant-based)
- 1 tbsp maple syrup
- 1 tsp baking powder
- ½ tsp cinnamon
- ¼ tsp vanilla extract
- Pinch of salt
- 1 tsp coconut oil for the pan
- Fresh berries for topping (optional)

**Instructions:**
1. In a large bowl, mash the banana thoroughly with a fork. Add the egg, milk, maple syrup, and vanilla extract. Whisk until combined.
2. In a separate bowl, whisk together the whole wheat flour, baking powder, cinnamon, and salt.
3. Pour the wet ingredients into the dry ingredients and stir gently until just combined. A few small lumps are fine. Do not overmix.
4. Heat a nonstick skillet or griddle over medium heat. Add a small amount of coconut oil.
5. Pour about 3 tbsp of batter per pancake onto the skillet. Cook until bubbles form on the surface and the edges look set, about 2 to 3 minutes. Flip and cook for 1 to 2 minutes more, until golden brown.
6. Repeat with the remaining batter. Serve topped with fresh berries and a light drizzle of maple syrup if desired.

### 10. Tropical Green Power Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups packed fresh baby spinach
- 1 cup frozen mango chunks
- 1 medium banana (fresh or frozen)
- ½ cup plain Greek yogurt
- 1 cup milk (dairy or unsweetened plant-based)
- 1 tbsp ground flaxseed or chia seeds (optional)
- ½ cup water or ice, as needed

**Instructions:**
1. Add the spinach and milk to the blender first so the greens blend smoothly.
2. Add the mango chunks, banana, Greek yogurt, and flaxseed if using.
3. Blend on high for 45 to 60 seconds until completely smooth.
4. If the smoothie is too thick, add water or ice a little at a time and blend again. If too thin, add a few more frozen mango chunks.
5. Pour into two glasses and serve immediately.

### 11. Peanut Butter and Chocolate Protein Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian · Pork-free

**Ingredients:**
- 2 medium bananas (fresh or frozen)
- 2 tbsp natural peanut butter
- 1 tbsp unsweetened cocoa powder
- ½ cup plain Greek yogurt
- 1¼ cups milk (dairy or unsweetened plant-based)
- 1 tsp honey or maple syrup (optional)
- 3 to 4 ice cubes (if using fresh bananas)

**Instructions:**
1. Add all ingredients to a blender: milk first, then yogurt, peanut butter, cocoa powder, bananas, and ice if using.
2. Blend on high for 30 to 45 seconds until smooth and creamy. Scrape down the sides if needed and blend again briefly.
3. Taste and adjust sweetness. Ripe bananas usually make the honey unnecessary.
4. Pour into two glasses and serve immediately.

### 12. Ricotta and Berry Honey Toast

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 slices whole grain bread
- ½ cup whole-milk or part-skim ricotta cheese
- ½ cup mixed fresh berries
- 1 tbsp honey
- ½ tsp lemon zest
- Pinch of flaky sea salt (optional)
- 2 tsp chopped walnuts or sliced almonds (optional)

**Instructions:**
1. Toast the bread until golden and crisp.
2. While the bread toasts, stir together the ricotta and lemon zest in a small bowl.
3. Spread the lemon ricotta generously onto each slice of toast.
4. Arrange the mixed berries on top, pressing them gently into the ricotta.
5. Drizzle honey evenly over both slices. Finish with a pinch of flaky salt and chopped nuts if using.

### 13. Cottage Cheese and Tomato Toast

**Total Time:** 5 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 slices whole grain bread
- ¾ cup cottage cheese
- 1 medium ripe tomato, sliced
- 1 tsp extra-virgin olive oil
- Freshly cracked black pepper to taste
- Pinch of flaky sea salt
- Fresh basil leaves (optional)

**Instructions:**
1. Toast the bread until golden and firm.
2. Spoon the cottage cheese onto each slice and spread it evenly with the back of the spoon.
3. Arrange tomato slices on top of the cottage cheese.
4. Drizzle with olive oil, then season with cracked black pepper and a pinch of flaky salt.
5. Tear a few fresh basil leaves over the top if using. Serve immediately.

### 14. Apple Cinnamon Overnight Oats

**Total Time:** 5 mins + overnight chill

**Dietary:** Vegetarian · Pork-free

**Ingredients:**
- 1 cup rolled oats
- 1 cup milk (dairy or unsweetened plant-based)
- ½ cup plain Greek yogurt
- 1 medium apple, cored and diced
- 1 tbsp maple syrup
- ½ tsp cinnamon
- 2 tbsp chopped walnuts
- Pinch of salt

**Instructions:**
1. In a medium bowl or large jar, combine the rolled oats, milk, Greek yogurt, maple syrup, cinnamon, and a pinch of salt. Stir well.
2. Fold in the diced apple.
3. Divide the mixture between two jars with lids. Press the mixture down gently so the oats are submerged in the liquid.
4. Seal and refrigerate for at least 6 hours or overnight.
5. In the morning, stir the oats and add a splash of milk if too thick. Top with chopped walnuts and serve cold, or microwave for 1 to 2 minutes for warm oats.

### 15. Mediterranean Breakfast Bowl

**Total Time:** 15 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 cup pre-cooked quinoa
- 2 large eggs
- ½ medium cucumber, diced
- 1 cup cherry tomatoes, halved
- ¼ cup crumbled feta cheese
- 8 to 10 Kalamata olives, halved
- 1 tbsp extra-virgin olive oil
- 1 tsp red wine vinegar or lemon juice
- ¼ tsp dried oregano
- Salt and black pepper to taste
- Fresh parsley, chopped (optional)

**Instructions:**
1. Warm the pre-cooked quinoa briefly in the microwave or in a small saucepan with a splash of water. Fluff with a fork.
2. While the quinoa warms, bring a small pot of water to a gentle boil. Lower the eggs in carefully and cook for 7 minutes for a jammy center. Transfer to cold water, then peel and halve.
3. In a small bowl, whisk together the olive oil, red wine vinegar, oregano, and a pinch of salt and pepper.
4. Divide the quinoa between two bowls. Arrange the cucumber, cherry tomatoes, feta, and olives on top.
5. Drizzle the dressing over each bowl. Place the egg halves on top and garnish with fresh parsley if using.

### 16. Classic Buttermilk Pancakes

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups flour
- 3 1/2 tsp baking powder
- 1 tbsp sugar
- 1 1/4 cups buttermilk
- 1 egg
- 3 tbsp melted butter

**Instructions:**
1. In a large bowl, whisk together the flour, baking powder, sugar, and a pinch of salt.
2. In a separate bowl, whisk the buttermilk, egg, and melted butter.
3. Pour the wet mixture into the dry mixture and stir until just combined. Do not overmix.
4. Heat a griddle or nonstick pan over medium heat and lightly grease it.
5. Pour 1/4 cup portions of batter onto the griddle and cook 2 to 3 minutes per side, until golden and bubbles form on top.
6. Flip and cook the second side for 2 minutes, then serve warm.

### 17. French Toast with Cinnamon and Maple

**Total Time:** 15 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 4 thick slices bread
- 2 eggs
- 1/2 cup milk
- 1 tsp cinnamon
- 1/2 tsp vanilla extract
- 1 tbsp butter
- Maple syrup, for serving

**Instructions:**
1. Whisk together the eggs, milk, cinnamon, and vanilla in a shallow dish.
2. Dip each bread slice into the mixture, letting it soak for 10 seconds per side.
3. Melt the butter in a skillet over medium heat.
4. Cook each slice for 2 to 3 minutes per side, until golden brown.
5. Serve hot, drizzled with maple syrup.

### 18. Belgian Waffles

**Total Time:** 25 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups flour
- 1 tbsp sugar
- 4 tsp baking powder
- 2 eggs, separated
- 1 3/4 cups milk
- 1/2 cup melted butter
- 1 tsp vanilla extract

**Instructions:**
1. Whisk together the flour, sugar, and baking powder in a large bowl.
2. In another bowl, beat the egg yolks with the milk, melted butter, and vanilla, then stir into the dry ingredients.
3. Beat the egg whites until soft peaks form and fold them gently into the batter.
4. Let the batter rest for 10 minutes while preheating a waffle iron.
5. Pour batter onto the hot waffle iron and cook 4 to 5 minutes, until golden and crisp.
6. Repeat with remaining batter and serve immediately.

### 19. Eggs Benedict

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 2 English muffins, split
- 4 slices Canadian bacon
- 4 eggs
- 2 egg yolks
- 1/2 cup butter, melted
- 1 tbsp lemon juice
- 1 tbsp white vinegar

**Instructions:**
1. Toast the English muffin halves and set aside.
2. Whisk the egg yolks with the lemon juice in a heatproof bowl set over simmering water, then slowly drizzle in the melted butter, whisking until thick. Season with salt and pepper and keep warm.
3. Warm the Canadian bacon in a skillet over medium heat for 2 minutes per side.
4. Fill a pot with water, add the vinegar, and bring to a gentle simmer. Crack in each egg and poach for 3 minutes, until whites are set but yolks are soft.
5. Top each muffin half with a slice of bacon and a poached egg.
6. Spoon the hollandaise sauce over the top and serve right away.

### 20. Western Omelette

**Total Time:** 15 mins

**Dietary:** Nut-free

**Ingredients:**
- 3 eggs
- 1/4 cup diced ham
- 1/4 cup diced bell pepper
- 2 tbsp diced onion
- 1/4 cup shredded cheddar cheese
- 1 tbsp butter

**Instructions:**
1. Melt the butter in a nonstick pan over medium heat and sauté the ham, bell pepper, and onion for 3 minutes, until softened.
2. Whisk the eggs with a pinch of salt and pepper.
3. Push the ham mixture to one side of the pan, pour in the eggs, and tilt the pan to spread them evenly.
4. Cook for 2 minutes, until the edges set, then sprinkle the cheese over half of the eggs.
5. Fold the omelette in half and cook for 1 more minute, until the cheese melts.
6. Slide onto a plate and serve.

### 21. Huevos Rancheros

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 corn tortillas
- 4 eggs
- 1 cup black beans, drained
- 1 cup salsa
- 1/2 avocado, sliced
- 2 tbsp chopped cilantro
- Crumbled queso fresco (optional)

**Instructions:**
1. Warm the black beans in a small saucepan over low heat, mashing lightly.
2. Heat the tortillas in a dry skillet for 30 seconds per side and keep warm.
3. In the same skillet, heat a little oil and fry the eggs to your liking, about 3 minutes for sunny-side up.
4. Warm the salsa in a small pan for 2 minutes.
5. Layer each tortilla with black beans, a fried egg, and warm salsa.
6. Top with avocado slices and cilantro, and queso fresco if using, then serve.

### 22. Shakshuka

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 tbsp olive oil
- 1 onion, diced
- 1 red bell pepper, diced
- 3 garlic cloves, minced
- 1 tsp cumin
- 1 tsp paprika
- 1 can (28 oz) crushed tomatoes
- 6 eggs
- Crumbled feta (optional)

**Instructions:**
1. Heat the olive oil in a large skillet over medium heat and sauté the onion and bell pepper for 5 minutes, until soft.
2. Add the garlic, cumin, and paprika, and cook for 1 minute.
3. Pour in the crushed tomatoes, season with salt and pepper, and simmer for 10 minutes, until slightly thickened.
4. Make six small wells in the sauce and crack an egg into each.
5. Cover the skillet and cook for 6 to 8 minutes, until the egg whites are set and yolks are still soft.
6. Sprinkle with feta if using and serve straight from the skillet.

### 23. Loaded Breakfast Burrito

**Total Time:** 20 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 large flour tortillas
- 6 eggs
- 1/2 lb breakfast sausage
- 1 cup diced cooked potatoes
- 1/2 cup shredded cheddar cheese
- 1/4 cup salsa
- 2 tbsp chopped green onion

**Instructions:**
1. Cook the breakfast sausage in a skillet over medium heat for 5 to 6 minutes, breaking it up, until browned. Remove and set aside.
2. Add the diced potatoes to the same skillet and cook for 5 minutes, until crisp and heated through.
3. Whisk the eggs with a pinch of salt and pepper, pour into the skillet, and scramble for 3 minutes, until just set.
4. Return the sausage to the pan and stir in the cheese until melted.
5. Warm the tortillas, then divide the filling among them along with salsa and green onion.
6. Roll each tortilla tightly into a burrito and serve.

### 24. Blueberry Muffins

**Total Time:** 35 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups flour
- 3/4 cup sugar
- 2 1/2 tsp baking powder
- 2 eggs
- 1/2 cup milk
- 1/2 cup melted butter
- 1 tsp vanilla extract
- 1 1/2 cups blueberries

**Instructions:**
1. Preheat the oven to 400°F (200°C) and line a muffin tin with paper liners.
2. Whisk together the flour, sugar, and baking powder in a large bowl.
3. In another bowl, beat the eggs with the milk, melted butter, and vanilla, then fold into the dry ingredients until just combined.
4. Gently fold in the blueberries.
5. Divide the batter among the muffin cups, filling each about three-quarters full.
6. Bake for 20 to 22 minutes, until a toothpick inserted in the center comes out clean.

### 25. Classic Banana Bread

**Total Time:** 70 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 ripe bananas, mashed
- 1/3 cup melted butter
- 3/4 cup sugar
- 2 eggs
- 1 tsp vanilla extract
- 1 1/2 cups flour
- 1 tsp baking powder
- Chopped walnuts (optional)

**Instructions:**
1. Preheat the oven to 350°F (175°C) and grease a loaf pan.
2. In a large bowl, mix the mashed bananas with the melted butter.
3. Stir in the sugar, eggs, and vanilla until combined.
4. Add the flour, baking powder, and a pinch of salt, and stir just until no dry streaks remain. Fold in walnuts if using.
5. Pour the batter into the loaf pan and smooth the top.
6. Bake for 55 to 60 minutes, until a toothpick inserted in the center comes out clean.

### 26. Buttermilk Biscuits with Turkey Sausage Gravy

**Total Time:** 30 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 cups flour
- 1 tbsp baking powder
- 1/2 cup cold butter, cubed
- 3/4 cup buttermilk
- 1/2 lb ground turkey sausage
- 2 tbsp flour, for the gravy
- 2 cups milk

**Instructions:**
1. Preheat the oven to 425°F (220°C). Mix the flour, baking powder, and a pinch of salt, then cut in the cold butter until crumbly.
2. Stir in the buttermilk until a soft dough forms, pat it out on a floured surface, and cut into rounds.
3. Bake the biscuits for 12 to 14 minutes, until golden on top.
4. While the biscuits bake, cook the turkey sausage in a skillet over medium heat for 6 minutes, breaking it up, until browned.
5. Sprinkle the sausage with the 2 tablespoons of flour and stir for 1 minute, then slowly whisk in the milk.
6. Simmer for 5 minutes, stirring often, until the gravy thickens. Season with salt and pepper.
7. Split the warm biscuits and ladle the gravy over the top.

### 27. Steel-Cut Oats with Brown Sugar and Pecans

**Total Time:** 25 mins

**Dietary:** Vegetarian · Pork-free

**Ingredients:**
- 1 cup steel-cut oats
- 3 cups milk
- 1 cup water
- 1/4 cup brown sugar
- 1/2 cup chopped pecans
- 1/2 tsp cinnamon
- Pinch of salt

**Instructions:**
1. Bring the milk and water to a simmer in a saucepan over medium heat.
2. Stir in the oats and a pinch of salt, then reduce the heat to low.
3. Cook, stirring occasionally, for 18 to 20 minutes, until the oats are tender and creamy.
4. Stir in the cinnamon and half the brown sugar.
5. Divide among bowls and top with the remaining brown sugar and the pecans.

### 28. Homemade Maple Granola

**Total Time:** 45 mins

**Dietary:** Vegetarian · Dairy-free · Pork-free

**Ingredients:**
- 3 cups rolled oats
- 1/2 cup sliced almonds
- 1/2 cup chopped pecans
- 1/2 cup maple syrup
- 1/3 cup vegetable oil
- 1 tsp cinnamon
- 1/2 cup dried cranberries

**Instructions:**
1. Preheat the oven to 325°F (165°C) and line a baking sheet with parchment paper.
2. In a large bowl, toss the oats, almonds, and pecans with the maple syrup, oil, cinnamon, and a pinch of salt until evenly coated.
3. Spread the mixture in a thin, even layer on the baking sheet.
4. Bake for 25 to 30 minutes, stirring halfway through, until golden and fragrant.
5. Let cool completely on the sheet, then stir in the dried cranberries.
6. Store in an airtight container once fully cooled.

### 29. Classic Cheese Omelette

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 eggs
- 1/3 cup shredded cheddar cheese
- 1 tbsp butter
- 1 tbsp chopped chives (optional)

**Instructions:**
1. Whisk the eggs with a pinch of salt and pepper.
2. Melt the butter in a nonstick pan over medium-low heat.
3. Pour in the eggs and let them set for 1 minute, then gently push the edges toward the center as they cook.
4. Once mostly set, sprinkle the cheese over one half.
5. Fold the omelette over the cheese and cook for 1 more minute, until the cheese melts.
6. Slide onto a plate and garnish with chives if using.

### 30. Smoked Salmon and Cream Cheese Bagel

**Total Time:** 10 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 bagels, split
- 4 oz cream cheese
- 4 oz smoked salmon
- 1/4 red onion, thinly sliced
- 1 tbsp capers
- 1 tsp lemon juice
- 1 tbsp chopped dill

**Instructions:**
1. Toast the bagel halves until golden.
2. Spread each half generously with cream cheese.
3. Layer the smoked salmon over the cream cheese.
4. Top with red onion slices, capers, and a squeeze of lemon juice.
5. Finish with chopped dill and serve immediately.

### 31. Breakfast Potato and Pepper Hash

**Total Time:** 25 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 3 medium potatoes, diced
- 1 red bell pepper, diced
- 1 green bell pepper, diced
- 1/2 onion, diced
- 2 tbsp olive oil
- 1 tsp paprika
- 4 eggs

**Instructions:**
1. Heat the olive oil in a large skillet over medium heat and add the diced potatoes.
2. Cook for 10 minutes, stirring occasionally, until they begin to soften and brown.
3. Add the bell peppers, onion, and paprika, and season with salt and pepper.
4. Cook for another 8 minutes, until the vegetables are tender and the potatoes are crisp at the edges.
5. Make four small wells in the hash and crack an egg into each.
6. Cover and cook for 4 to 5 minutes, until the egg whites are set, then serve directly from the skillet.

### 32. Overnight Cinnamon French Toast Bake

**Total Time:** 20 mins + overnight chill

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 8 cups cubed day-old bread
- 6 eggs
- 2 cups milk
- 1/3 cup brown sugar
- 1 tbsp cinnamon
- 1 tsp vanilla extract
- 3 tbsp melted butter

**Instructions:**
1. Grease a baking dish and spread the bread cubes evenly across it.
2. Whisk together the eggs, milk, brown sugar, cinnamon, and vanilla, then pour evenly over the bread.
3. Press the bread down gently so it soaks up the liquid, cover, and refrigerate overnight.
4. The next morning, preheat the oven to 350°F (175°C) and drizzle the melted butter over the top.
5. Bake for 40 to 45 minutes, until puffed and golden on top and set in the center.
6. Let cool for 5 minutes before slicing and serving.

### 33. Egg and Turkey Sausage Breakfast Sandwich

**Total Time:** 15 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 English muffins, split
- 2 turkey sausage patties
- 2 eggs
- 2 slices cheddar cheese
- 1 tbsp butter

**Instructions:**
1. Toast the English muffin halves and set aside.
2. Cook the turkey sausage patties in a skillet over medium heat for 4 to 5 minutes per side, until browned through.
3. Melt the butter in the same skillet and fry the eggs, breaking the yolks, for about 2 minutes per side.
4. Place a slice of cheese on each muffin bottom, followed by a sausage patty and a fried egg.
5. Top with the muffin lids and serve warm.

### 34. Dutch Baby Pancake

**Total Time:** 25 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 eggs
- 1/2 cup milk
- 1/2 cup flour
- 1 tbsp sugar
- 1/2 tsp vanilla extract
- 4 tbsp butter
- Powdered sugar, for dusting

**Instructions:**
1. Preheat the oven to 425°F (220°C) with a cast-iron or oven-safe skillet inside.
2. Blend the eggs, milk, flour, sugar, and vanilla until smooth.
3. Carefully remove the hot skillet, add the butter, and swirl until melted and coating the bottom.
4. Pour in the batter immediately and return the skillet to the oven.
5. Bake for 18 to 20 minutes, until puffed and golden at the edges.
6. Dust with powdered sugar and serve right away, as it will deflate quickly.

### 35. Ginger Scallion Congee

**Total Time:** 45 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 3/4 cup rice
- 7 cups vegetable broth
- 2 tbsp minced ginger
- 3 scallions, thinly sliced
- 1 tbsp soy sauce
- 1 tsp sesame oil
- Soft-boiled eggs (optional)

**Instructions:**
1. Rinse the rice and combine it with the vegetable broth and half the ginger in a large pot.
2. Bring to a boil, then reduce to a low simmer and cover partially.
3. Cook for 35 to 40 minutes, stirring occasionally, until the rice breaks down into a thick, creamy porridge.
4. Stir in the soy sauce and season with salt to taste.
5. Ladle into bowls and top with the remaining ginger, scallions, and a drizzle of sesame oil.
6. Add a soft-boiled egg to each bowl if using.

### 36. Menemen

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 tbsp olive oil
- 1 green bell pepper, diced
- 1 onion, diced
- 2 tomatoes, diced
- 1/2 tsp red pepper flakes
- 4 eggs
- Crumbled feta (optional)

**Instructions:**
1. Heat the olive oil in a skillet over medium heat and sauté the onion and green pepper for 5 minutes, until softened.
2. Add the tomatoes and red pepper flakes, and cook for 5 minutes, until the tomatoes break down.
3. Season with salt and pepper.
4. Crack the eggs directly into the skillet and stir gently to combine with the vegetables.
5. Cook for 2 to 3 minutes, stirring occasionally, until the eggs are softly set.
6. Top with feta if using and serve immediately.

### 37. Chilaquiles Verdes

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 5 cups tortilla chips
- 2 cups salsa verde
- 4 eggs
- 1/4 onion, thinly sliced
- 2 tbsp chopped cilantro
- Crumbled queso fresco (optional)
- Sour cream (optional)

**Instructions:**
1. Warm the salsa verde in a large skillet over medium heat for 3 to 4 minutes.
2. Add the tortilla chips and toss gently to coat them in the sauce, cooking for 2 minutes, until slightly softened but still crisp in places.
3. In a separate pan, fry the eggs to your liking, about 3 minutes for sunny-side up.
4. Divide the chips among plates and top each with a fried egg.
5. Garnish with onion, cilantro, and queso fresco or sour cream if using, then serve right away.

### 38. Berry Smoothie Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups frozen mixed berries
- 1 banana
- 1/2 cup plain yogurt
- 1/4 cup milk
- 1 tbsp honey
- 1/4 cup granola, for topping
- Sliced fresh fruit, for topping

**Instructions:**
1. Combine the frozen berries, banana, yogurt, milk, and honey in a blender.
2. Blend until thick and smooth, adding a splash more milk only if needed to blend.
3. Pour the mixture into a bowl.
4. Top with granola and sliced fresh fruit.
5. Serve immediately with a spoon.

### 39. Classic Crepes with Berries and Cream

**Total Time:** 25 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 cup flour
- 2 eggs
- 1 1/4 cups milk
- 2 tbsp melted butter
- 1 tbsp sugar
- 1 1/2 cups mixed berries
- 1/2 cup whipped cream

**Instructions:**
1. Whisk together the flour, eggs, milk, melted butter, and sugar until smooth. Let the batter rest for 10 minutes.
2. Heat a lightly greased nonstick pan over medium heat.
3. Pour in a thin layer of batter, swirling to coat the bottom of the pan.
4. Cook for about 1 minute per side, until lightly golden, then transfer to a plate.
5. Repeat with the remaining batter, stacking the crepes as they finish.
6. Fill or top each crepe with berries and whipped cream and serve.

### 40. Spanish Potato Tortilla

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 medium potatoes, thinly sliced
- 1 onion, thinly sliced
- 1/2 cup olive oil
- 6 eggs
- Salt, to taste

**Instructions:**
1. Heat the olive oil in a large skillet over medium-low heat and add the potatoes and onion.
2. Cook for 20 minutes, stirring occasionally, until the potatoes are tender but not browned. Season with salt.
3. Drain the potatoes and onion, reserving the oil, and let cool slightly.
4. Whisk the eggs in a large bowl, then fold in the potatoes and onion.
5. Return 2 tablespoons of the reserved oil to the skillet over medium heat and pour in the egg mixture, pressing it into an even layer.
6. Cook for 5 minutes, until the bottom sets, then carefully flip using a plate and cook for another 4 minutes, until set through.

### 41. Cheesy Grits with Soft-Cooked Eggs

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 cup grits
- 3 cups milk
- 1 cup water
- 1 cup shredded cheddar cheese
- 2 tbsp butter
- 4 eggs
- 2 tbsp chopped chives

**Instructions:**
1. Bring the milk and water to a simmer in a saucepan over medium heat.
2. Whisk in the grits and reduce the heat to low.
3. Cook, stirring often, for 12 to 15 minutes, until thick and creamy.
4. Stir in the cheese and butter until melted, and season with salt and pepper.
5. Meanwhile, lower eggs into a pot of simmering water and cook for 6 to 7 minutes for soft-cooked yolks, then peel.
6. Divide the grits among bowls, top each with a halved soft-cooked egg, and sprinkle with chives.

## Category 2: Lunch Recipes (42 to 128)

### 42. Mediterranean Chickpea Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 1 cup diced English cucumber
- 1 cup halved cherry tomatoes
- ¼ cup finely diced red onion
- ⅓ cup crumbled feta cheese
- 1½ tbsp olive oil and 1 tbsp fresh lemon juice
- Salt, pepper, and dried oregano to taste

**Instructions:**
1. In a medium bowl, combine chickpeas, cucumber, cherry tomatoes, red onion, and feta.
2. Whisk together olive oil, lemon juice, oregano, salt, and pepper.
3. Pour dressing over salad and toss well. Store in an airtight container for up to 4 days.

### 43. Turkey, Avocado and Hummus Wrap

**Total Time:** 10 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 3 to 4 slices low-sodium deli turkey breast
- 2 tbsp store-bought hummus
- ½ ripe avocado, sliced
- ½ cup baby spinach
- 2 tbsp shredded carrots
- 1 whole wheat wrap

**Instructions:**
1. Spread hummus evenly across the whole wheat tortilla.
2. Layer deli turkey, sliced avocado, baby spinach, and shredded carrots down the center.
3. Roll up tightly, cut diagonally, and pack in a lunch container.

### 44. Southwestern Mason Jar Quinoa Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 cup cooked quinoa
- ½ cup canned black beans, rinsed and drained
- ½ cup canned sweet corn, drained
- ½ red bell pepper, diced
- 2 tbsp chopped fresh cilantro
- Dressing: 1 tbsp lime juice, 1 tbsp olive oil, ¼ tsp cumin, pinch of salt

**Instructions:**
1. Whisk lime juice, olive oil, cumin, and salt in the bottom of a mason jar or meal container.
2. Layer black beans first, followed by corn, diced bell pepper, cooked quinoa, and cilantro.
3. Seal and store cold. Shake or pour into a bowl before eating.

### 45. Lemon Dill Tuna and White Bean Salad

**Total Time:** 10 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 can (5 oz) tuna in water, drained
- ½ cup canned cannellini beans, rinsed
- ¼ cup finely diced celery
- 1 tbsp fresh chopped dill or parsley
- 1 tbsp lemon juice and 1 tbsp olive oil
- Salt and pepper to taste

**Instructions:**
1. Flake tuna into a mixing bowl using a fork.
2. Add white beans, diced celery, and chopped herbs.
3. Drizzle with lemon juice and olive oil, seasoning with salt and pepper. Toss gently.
4. Pack alongside whole grain crackers or serve on a bed of greens.

### 46. Healthy Egg Salad Lettuce Boats

**Total Time:** 15 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 hard-boiled eggs, peeled and diced
- 2 tbsp plain Greek yogurt
- 1 tsp Dijon mustard
- 2 tbsp chopped green onions
- 4 large Romaine lettuce leaves
- Salt and black pepper to taste

**Instructions:**
1. In a bowl, mash diced hard-boiled eggs with Greek yogurt, Dijon mustard, green onions, salt, and pepper.
2. Spoon equal portions into sturdy Romaine lettuce leaves.
3. Pack lettuce boats and egg mixture separately if transporting, to keep the leaves crisp.

### 47. Pesto Chicken Pasta Salad

**Total Time:** 15 mins

**Dietary:** Pork-free

**Ingredients:**
- 1 cup cooked whole wheat rotini or penne
- 1 cup cooked or rotisserie chicken breast, shredded
- ½ cup cherry tomatoes, halved
- 1 cup baby spinach
- 2 tbsp store-bought basil pesto
- 1 tbsp grated parmesan cheese

**Instructions:**
1. Boil pasta according to package instructions. Drain and rinse thoroughly with cold water.
2. In a large bowl, combine cooled pasta, shredded chicken, halved tomatoes, baby spinach, and pesto.
3. Toss until evenly coated and sprinkle with parmesan. Pack cold.

### 48. Caprese Chicken Ciabatta Sandwich

**Total Time:** 10 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 small ciabatta roll or whole grain bun
- 3 oz cooked or rotisserie chicken breast, sliced
- 2 slices fresh mozzarella cheese
- 2 slices ripe tomato
- 3 to 4 fresh basil leaves
- 1 tsp balsamic glaze or olive oil

**Instructions:**
1. Slice the roll in half.
2. Layer sliced chicken, fresh mozzarella, tomato slices, and basil leaves.
3. Drizzle with balsamic glaze, top with bread, and wrap securely for lunch.

### 49. Sesame Peanut Noodle Bowl

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Pork-free

**Ingredients:**
- 2 oz whole wheat spaghetti or ramen noodles
- ½ cup shredded carrots
- ½ cup matchstick cucumber
- Sauce: 2 tbsp peanut butter, 1 tbsp low-sodium soy sauce, 1 tsp lime juice, 1 tsp sesame oil, 1 to 2 tbsp warm water

**Instructions:**
1. Cook noodles according to package directions, then drain and rinse with cool water.
2. In a small bowl, whisk peanut butter, soy sauce, lime juice, sesame oil, and warm water until smooth.
3. Toss cold noodles, shredded carrots, and cucumber with the peanut sauce. Pack cold.

### 50. Quick Black Bean and Rice Burrito Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 microwave pouch brown rice (1 cup cooked)
- ½ cup canned black beans, rinsed and drained
- ½ cup canned corn, drained
- ¼ cup fresh salsa
- 2 tbsp shredded Mexican cheese blend
- ¼ avocado, diced

**Instructions:**
1. Warm brown rice, black beans, and corn in a container for 1 minute in the microwave.
2. Top with salsa, shredded cheese, and fresh diced avocado. Serve warm or at room temperature.

### 51. Classic Grilled Cheese

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 slices bread
- 2 tbsp butter, softened
- 2 slices cheddar cheese
- 1 slice American cheese

**Instructions:**
1. Spread butter on one side of each bread slice.
2. Heat a skillet over medium-low heat and place one slice butter-side down in the pan.
3. Layer the cheddar and American cheese on top, then close with the second slice, butter-side up.
4. Cook 3 to 4 minutes per side until golden brown and the cheese has melted.
5. Slice in half and serve warm.

### 52. Tuna Melt

**Total Time:** 15 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 can (5 oz) tuna, drained
- 3 tbsp mayonnaise
- 2 tbsp diced celery
- 1 tbsp diced red onion
- 2 slices bread
- 2 slices cheddar cheese
- 1 tsp lemon juice

**Instructions:**
1. In a bowl, mix the tuna, mayonnaise, celery, onion, and lemon juice.
2. Spread the tuna mixture on one slice of bread and top with cheddar cheese.
3. Broil open-faced on a baking sheet for 2 to 3 minutes at 450°F (230°C) until the cheese melts and bubbles.
4. Top with the second slice of bread, or leave open-faced, and serve warm.

### 53. Chicken Salad Sandwich

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups cooked shredded chicken breast
- 1/3 cup mayonnaise
- 1/4 cup diced celery
- 2 tbsp diced red onion
- 1 tsp lemon juice
- 4 slices bread
- Lettuce leaves

**Instructions:**
1. In a bowl, combine the chicken, mayonnaise, celery, onion, and lemon juice.
2. Season with salt and pepper to taste.
3. Spread the chicken salad over two slices of bread and top with lettuce.
4. Close each sandwich with the remaining bread and slice in half.
5. Wrap in parchment or foil to pack for later.

### 54. Classic Egg Salad Sandwich

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 large eggs
- 3 tbsp mayonnaise
- 1 tsp yellow mustard
- 2 tbsp diced celery
- 1 tbsp diced chives
- 4 slices bread
- Lettuce leaves

**Instructions:**
1. Place the eggs in a pot, cover with water, and bring to a boil. Cover, remove from heat, and let sit 10 minutes.
2. Cool the eggs under cold water, peel, and chop.
3. Mix the chopped eggs with mayonnaise, mustard, celery, and chives; season with salt and pepper.
4. Spread over two slices of bread, top with lettuce, and close with the remaining bread.
5. Wrap tightly for a packed lunch.

### 55. BLT Sandwich

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 4 slices bacon
- 2 slices bread, toasted
- 2 tbsp mayonnaise
- 2 lettuce leaves
- 3 slices tomato

**Instructions:**
1. Cook the bacon in a skillet over medium heat for 6 to 8 minutes until crisp, then drain on paper towels.
2. Toast the bread and spread mayonnaise on each slice.
3. Layer the lettuce, tomato slices, and bacon on one piece of bread.
4. Season the tomato with a pinch of salt and pepper, then close the sandwich with the second slice.

### 56. Turkey Club Sandwich

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 3 slices bread, toasted
- 4 slices deli turkey
- 3 slices bacon, cooked
- 2 tbsp mayonnaise
- 2 lettuce leaves
- 3 slices tomato

**Instructions:**
1. Cook the bacon in a skillet over medium heat 6 to 8 minutes until crisp; drain.
2. Toast the bread and spread mayonnaise on each slice.
3. Layer turkey and lettuce on the first slice, top with the second slice of bread.
4. Add the bacon, tomato, and more lettuce, then top with the third slice.
5. Secure with toothpicks and cut into quarters.

### 57. Reuben Sandwich

**Total Time:** 15 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 slices rye bread
- 2 tbsp butter, softened
- 8 oz sliced corned beef
- 1 cup sauerkraut, drained
- 4 slices Swiss cheese
- 3 tbsp Russian or Thousand Island dressing

**Instructions:**
1. Butter one side of each bread slice.
2. On the unbuttered side, layer dressing, corned beef, sauerkraut, and Swiss cheese on two slices, then close with the remaining bread.
3. Heat a skillet over medium heat and grill the sandwiches butter-side down, 3 to 4 minutes per side, until golden and the cheese melts.
4. Slice in half and serve warm.

### 58. Philly Cheesesteak

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 12 oz thinly sliced beef sirloin
- 1 green bell pepper, sliced
- 1 onion, sliced
- 4 oz mushrooms, sliced
- 4 slices provolone cheese
- 2 hoagie rolls

**Instructions:**
1. Heat oil in a skillet over medium-high heat and cook the onion, pepper, and mushrooms 5 to 6 minutes until softened; set aside.
2. In the same skillet, cook the beef 3 to 4 minutes, breaking it into smaller pieces, until browned.
3. Return the vegetables to the skillet and mix with the beef, then season with salt and pepper.
4. Split the hoagie rolls, fill with the beef mixture, and top each with 2 slices of provolone.
5. Broil 1 to 2 minutes until the cheese melts, then serve.

### 59. French Dip Sandwich

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 cups beef broth
- 1 tsp Worcestershire sauce
- 12 oz thinly sliced roast beef
- 2 baguette rolls or hoagie rolls
- 4 slices provolone cheese

**Instructions:**
1. In a saucepan, bring the beef broth and Worcestershire sauce to a simmer over medium heat.
2. Add the roast beef to the broth and warm through for 2 to 3 minutes.
3. Split the rolls, layer in the warm roast beef, and top with provolone cheese.
4. Broil 1 to 2 minutes until the cheese melts.
5. Ladle a little broth into small cups for dipping and serve alongside the sandwiches.

### 60. Italian Sub

**Total Time:** 10 mins

**Dietary:** Nut-free

**Ingredients:**
- 2 sub rolls
- 4 slices salami
- 4 slices ham
- 4 slices pepperoni
- 4 slices provolone cheese
- Shredded lettuce
- 2 slices tomato
- 1 tbsp red wine vinegar

**Instructions:**
1. Split the sub rolls open lengthwise.
2. Layer the salami, ham, pepperoni, and provolone on the bottom half of each roll.
3. Top with shredded lettuce and tomato, then drizzle with red wine vinegar and a little olive oil.
4. Season with salt and pepper, close the rolls, and slice in half to serve.

### 61. Meatball Sub

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1/4 cup breadcrumbs
- 1 egg
- 1 1/2 cups marinara sauce
- 4 sub rolls
- 1 cup shredded mozzarella cheese

**Instructions:**
1. Mix the ground beef, breadcrumbs, egg, salt, and pepper, then form into 12 small meatballs.
2. Heat oil in a skillet over medium heat and cook the meatballs 8 to 10 minutes, turning occasionally, until browned through.
3. Add the marinara sauce to the skillet and simmer 5 minutes, coating the meatballs.
4. Split the sub rolls, fill with meatballs and sauce, and top with mozzarella.
5. Broil 1 to 2 minutes until the cheese melts, then serve.

### 62. Sloppy Joes

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1/2 onion, diced
- 1/2 green bell pepper, diced
- 3/4 cup ketchup
- 1 tbsp Worcestershire sauce
- 1 tsp yellow mustard
- 4 hamburger buns

**Instructions:**
1. Heat a skillet over medium heat and cook the ground beef with the onion and pepper 6 to 8 minutes until the beef is browned.
2. Drain excess fat, then stir in the ketchup, Worcestershire sauce, and mustard.
3. Simmer 5 minutes, stirring occasionally, until thickened.
4. Season with salt and pepper and spoon onto the buns to serve.

### 63. Pulled BBQ Chicken Sandwich

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lb cooked shredded chicken breast
- 3/4 cup barbecue sauce
- 4 burger buns
- 1 cup coleslaw mix
- 2 tbsp mayonnaise
- 1 tsp apple cider vinegar

**Instructions:**
1. Warm the shredded chicken in a saucepan over medium-low heat and stir in the barbecue sauce until coated, about 5 minutes.
2. In a separate bowl, toss the coleslaw mix with mayonnaise and vinegar; season with salt and pepper.
3. Pile the barbecue chicken onto the buns.
4. Top each sandwich with a scoop of coleslaw and close with the bun top.

### 64. Chicken Shawarma Wrap

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken thighs, sliced thin
- 1 tsp ground cumin
- 1 tsp paprika
- 1/2 tsp ground coriander
- 1/4 tsp cinnamon
- 3 large flatbreads or wraps
- 1/4 cup garlic sauce (oil-based toum)
- 1 cup shredded lettuce
- 1 tomato, sliced

**Instructions:**
1. Toss the chicken with cumin, paprika, coriander, cinnamon, salt, and pepper.
2. Heat oil in a skillet over medium-high heat and cook the chicken 6 to 8 minutes, turning occasionally, until browned and cooked through.
3. Warm the flatbreads briefly in a dry pan or microwave.
4. Spread garlic sauce on each flatbread, then add chicken, lettuce, and tomato.
5. Roll tightly, folding in the ends, and wrap in foil to pack.

### 65. Falafel Pita with Tahini

**Total Time:** 25 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, drained
- 2 tbsp chopped parsley
- 1 tsp ground cumin
- 1 tsp ground coriander
- 2 tbsp flour
- 2 pita breads
- 3 tbsp tahini
- 1 tbsp lemon juice
- 1 cup shredded lettuce
- 1 tomato, diced

**Instructions:**
1. Pulse the chickpeas, parsley, cumin, coriander, flour, salt, and pepper in a food processor until coarsely ground, then form into small patties.
2. Heat oil in a skillet over medium heat and fry the patties 3 to 4 minutes per side until golden and crisp.
3. Whisk the tahini with lemon juice and a splash of water until smooth.
4. Warm the pitas, split them open, and fill with lettuce, tomato, and falafel.
5. Drizzle with tahini sauce and serve, or wrap for later.

### 66. Chicken Gyro Pita

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken thighs, sliced thin
- 1 tsp dried oregano
- 1 tsp garlic powder
- 3 pita breads
- 1/2 cup plain yogurt
- 1/4 cucumber, grated
- 1 tsp lemon juice
- 1 tomato, sliced
- 1/2 red onion, thinly sliced

**Instructions:**
1. Toss the chicken with oregano, garlic powder, salt, and pepper.
2. Heat oil in a skillet over medium-high heat and cook the chicken 6 to 8 minutes until browned and cooked through.
3. Mix the yogurt with grated cucumber and lemon juice to make tzatziki; season with a pinch of salt.
4. Warm the pitas and fill with chicken, tomato, and red onion.
5. Top with tzatziki, fold, and serve.

### 67. Hummus and Roasted Vegetable Wrap

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 zucchini, sliced
- 1 red bell pepper, sliced
- 1/2 red onion, sliced
- 2 large wraps or flatbreads
- 1/2 cup hummus
- 1 cup baby spinach

**Instructions:**
1. Preheat the oven to 425°F (220°C).
2. Toss the zucchini, pepper, and onion with olive oil, salt, and pepper, and spread on a baking sheet.
3. Roast 15 to 18 minutes, stirring once, until tender and lightly charred.
4. Spread hummus over each wrap, then layer with spinach and the roasted vegetables.
5. Roll tightly and slice in half to serve, or wrap in foil to pack.

### 68. Caprese Sandwich on Focaccia

**Total Time:** 10 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 piece focaccia, split
- 6 oz fresh mozzarella, sliced
- 1 large tomato, sliced
- 8 fresh basil leaves
- 1 tbsp balsamic glaze

**Instructions:**
1. Split the focaccia horizontally and drizzle the cut sides with a little olive oil.
2. Layer the mozzarella, tomato, and basil leaves on the bottom half.
3. Season with salt and pepper and drizzle with balsamic glaze.
4. Close with the top half of the focaccia and slice into portions.

### 69. Chicken Banh Mi

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken thighs, sliced thin
- 1 tsp soy sauce
- 1/2 cup shredded carrot
- 1/2 cup shredded daikon or cucumber
- 2 tbsp rice vinegar
- 2 baguette rolls or sub rolls
- 3 tbsp mayonnaise
- 1/4 cup cilantro leaves
- 1 jalapeno, sliced

**Instructions:**
1. Toss the chicken with soy sauce, salt, and pepper, then cook in an oiled skillet over medium-high heat 6 to 8 minutes until browned through.
2. Toss the carrot and daikon with rice vinegar and a pinch of sugar; let sit 10 minutes to quick-pickle.
3. Split the rolls and spread mayonnaise on the cut sides.
4. Fill with chicken, pickled vegetables, cilantro, and jalapeno slices.
5. Close and slice in half to serve.

### 70. Buffalo Chicken Wrap

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb cooked shredded chicken breast
- 1/3 cup buffalo hot sauce
- 3 large flatbreads or wraps
- 1/4 cup ranch dressing
- 1 cup shredded lettuce
- 1/2 cup diced celery

**Instructions:**
1. Warm the shredded chicken in a saucepan over medium-low heat and stir in the buffalo sauce until coated, about 5 minutes.
2. Warm the flatbreads briefly in a dry pan or microwave.
3. Spread ranch dressing over each flatbread, then top with lettuce and celery.
4. Add the buffalo chicken, roll tightly, and slice in half to serve.

### 71. Caesar Chicken Wrap

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb cooked sliced chicken breast
- 3 large flatbreads or wraps
- 1/3 cup Caesar dressing
- 2 cups chopped romaine lettuce
- 1/4 cup grated Parmesan cheese

**Instructions:**
1. Toss the chopped romaine with Caesar dressing and Parmesan in a bowl.
2. Warm the flatbreads briefly in a dry pan or microwave.
3. Layer the dressed romaine and sliced chicken down the center of each wrap.
4. Fold in the sides, roll tightly, and slice in half to serve.

### 72. Curried Chicken Salad Wrap

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups cooked shredded chicken breast
- 1/3 cup mayonnaise
- 1 tsp curry powder
- 2 tbsp raisins
- 2 tbsp diced celery
- 3 large flatbreads or wraps
- 1 cup shredded lettuce

**Instructions:**
1. Mix the chicken with mayonnaise, curry powder, raisins, and celery; season with salt and pepper.
2. Warm the flatbreads briefly in a dry pan or microwave.
3. Layer lettuce and the curried chicken salad down the center of each wrap.
4. Fold in the sides, roll tightly, and wrap in foil to pack.

### 73. Roast Beef and Horseradish Sandwich

**Total Time:** 10 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 slices rye or sourdough bread
- 3 tbsp mayonnaise
- 1 tbsp prepared horseradish
- 10 oz thinly sliced roast beef
- 1 cup arugula
- 1/2 red onion, thinly sliced

**Instructions:**
1. Mix the mayonnaise and horseradish in a small bowl.
2. Spread the horseradish mayonnaise on each slice of bread.
3. Layer the roast beef, arugula, and red onion on two slices.
4. Close each sandwich with the remaining bread and slice in half.

### 74. Turkey and Cranberry Sandwich

**Total Time:** 10 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 slices whole grain bread
- 3 tbsp cranberry sauce
- 2 tbsp mayonnaise
- 8 oz sliced deli turkey
- 1 cup baby spinach

**Instructions:**
1. Spread cranberry sauce on two slices of bread and mayonnaise on the other two.
2. Layer the turkey and spinach on the cranberry-covered slices.
3. Close each sandwich with the mayonnaise-covered slices.
4. Slice in half and wrap for a packed lunch.

### 75. Chickpea Smash Sandwich

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, drained
- 3 tbsp mayonnaise
- 1 tsp Dijon mustard
- 2 tbsp diced celery
- 1 tbsp diced red onion
- 1 tsp lemon juice
- 4 slices bread
- Lettuce leaves

**Instructions:**
1. Mash the chickpeas coarsely with a fork in a bowl, leaving some texture.
2. Stir in the mayonnaise, mustard, celery, onion, and lemon juice; season with salt and pepper.
3. Spread the chickpea mixture over two slices of bread and top with lettuce.
4. Close with the remaining bread, slice in half, and wrap to pack.

### 76. Grilled Vegetable and Goat Cheese Ciabatta

**Total Time:** 25 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 zucchini, sliced lengthwise
- 1 red bell pepper, sliced
- 1 small eggplant, sliced
- 2 ciabatta rolls, split
- 3 oz goat cheese, softened
- 1 cup arugula
- 1 tbsp balsamic glaze

**Instructions:**
1. Brush the zucchini, pepper, and eggplant slices with olive oil and season with salt and pepper.
2. Grill or pan-sear over medium-high heat 3 to 4 minutes per side until tender and lightly charred.
3. Spread goat cheese on the cut sides of the ciabatta rolls.
4. Layer the grilled vegetables and arugula on the bottom half, drizzle with balsamic glaze.
5. Close with the top half and slice in half to serve.

### 77. Classic Chicken Noodle Soup

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 8 cups chicken broth
- 2 carrots, sliced
- 2 celery stalks, sliced
- 1 onion, diced
- 2 cups egg noodles
- 1 bay leaf
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, and celery for 5 minutes.
2. Add chicken broth, chicken breasts, and bay leaf. Bring to a boil, then reduce heat and simmer 20 minutes.
3. Remove the chicken, shred it, and return it to the pot.
4. Add egg noodles and simmer 8 minutes until tender.
5. Remove the bay leaf, stir in parsley, and season with salt and pepper.

### 78. Creamy Tomato Soup

**Total Time:** 30 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 tbsp butter
- 1 onion, diced
- 2 cans (28 oz each) crushed tomatoes
- 3 cups vegetable broth
- 1/2 cup heavy cream
- 1 tsp dried basil
- 1 tsp sugar

**Instructions:**
1. Melt butter in a pot and cook onion until soft, about 5 minutes.
2. Add crushed tomatoes, vegetable broth, basil, and sugar. Bring to a simmer.
3. Simmer uncovered for 15 minutes, stirring occasionally.
4. Puree the soup with an immersion blender until smooth.
5. Stir in heavy cream and warm through for 2 minutes. Season with salt and pepper.

### 79. Minestrone Soup

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 2 zucchini, diced
- 1 can (14 oz) diced tomatoes
- 6 cups vegetable broth
- 1 can (15 oz) kidney beans, drained
- 1 cup small pasta (ditalini)
- 2 cups chopped kale
- 1 tsp dried oregano

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, and celery for 5 minutes.
2. Add zucchini, diced tomatoes, vegetable broth, and oregano. Bring to a boil.
3. Reduce heat and simmer 15 minutes.
4. Add kidney beans and pasta, and cook 10 minutes until the pasta is tender.
5. Stir in kale and cook 3 minutes until wilted. Season with salt and pepper.

### 80. Hearty Lentil Soup

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 1 1/2 cups brown lentils, rinsed
- 6 cups vegetable broth
- 1 can (14 oz) diced tomatoes
- 1 tsp ground cumin
- 1 tsp smoked paprika
- 2 cups chopped spinach

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, and celery for 5 minutes.
2. Add lentils, vegetable broth, diced tomatoes, cumin, and paprika. Bring to a boil.
3. Reduce heat and simmer 25 minutes until the lentils are tender.
4. Stir in spinach and cook 3 minutes until wilted.
5. Season with salt and pepper before serving.

### 81. Split Pea Soup

**Total Time:** 55 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 1 1/2 cups dried split peas, rinsed
- 7 cups vegetable broth
- 1 bay leaf
- 1 tsp dried thyme
- 1 tbsp lemon juice

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, and celery for 5 minutes.
2. Add split peas, vegetable broth, bay leaf, and thyme. Bring to a boil.
3. Reduce heat and simmer 45 minutes, stirring occasionally, until the peas break down.
4. Remove the bay leaf and stir in lemon juice.
5. Season with salt and pepper before serving.

### 82. Butternut Squash Soup

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 butternut squash (about 2 lbs), peeled and cubed
- 1 onion, diced
- 4 cups vegetable broth
- 1 cup coconut milk
- 1 tsp ground ginger
- 1/2 tsp ground cinnamon
- 1 apple, peeled and diced

**Instructions:**
1. Heat olive oil in a large pot and cook onion for 5 minutes until soft.
2. Add butternut squash, apple, vegetable broth, ginger, and cinnamon. Bring to a boil.
3. Reduce heat and simmer 25 minutes until the squash is tender.
4. Puree the soup with an immersion blender until smooth.
5. Stir in coconut milk and warm through for 3 minutes. Season with salt and pepper.

### 83. Broccoli Cheddar Soup

**Total Time:** 35 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 tbsp butter
- 1 onion, diced
- 3 cups broccoli florets, chopped
- 4 cups vegetable broth
- 1 1/2 cups milk
- 2 cups shredded cheddar cheese
- 3 tbsp flour
- 1 carrot, shredded

**Instructions:**
1. Melt butter in a large pot and cook onion and carrot for 5 minutes.
2. Stir in flour and cook 1 minute, then whisk in vegetable broth and milk.
3. Add broccoli and bring to a simmer. Cook 15 minutes until the broccoli is tender.
4. Puree half the soup with an immersion blender for a thicker texture, then stir it back in.
5. Reduce heat to low and stir in cheddar cheese until melted. Season with salt and pepper.

### 84. New England Clam Chowder

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 tbsp butter
- 1 onion, diced
- 2 celery stalks, diced
- 3 potatoes, peeled and diced
- 2 cans (6.5 oz each) chopped clams, juice reserved
- 2 cups clam juice or seafood broth
- 1 1/2 cups heavy cream
- 3 tbsp flour
- 1 tsp dried thyme

**Instructions:**
1. Melt butter in a large pot and cook onion and celery for 5 minutes.
2. Stir in flour and cook 1 minute, then whisk in the reserved clam juice and seafood broth.
3. Add potatoes and thyme. Bring to a simmer and cook 15 minutes until the potatoes are tender.
4. Stir in clams and heavy cream, and warm through for 5 minutes without boiling.
5. Season with salt and pepper before serving.

### 85. Corn Chowder

**Total Time:** 40 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 tbsp butter
- 1 onion, diced
- 2 celery stalks, diced
- 2 potatoes, peeled and diced
- 4 cups corn kernels (fresh or frozen)
- 4 cups vegetable broth
- 1 cup milk
- 3 tbsp flour
- 1 red bell pepper, diced

**Instructions:**
1. Melt butter in a large pot and cook onion, celery, and bell pepper for 5 minutes.
2. Stir in flour and cook 1 minute, then whisk in vegetable broth.
3. Add potatoes and corn. Bring to a simmer and cook 20 minutes until the potatoes are tender.
4. Puree 1 cup of the soup and stir it back in for a creamier texture.
5. Stir in milk and warm through for 3 minutes. Season with salt and pepper.

### 86. Black Bean Soup

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 1 red bell pepper, diced
- 3 cans (15 oz each) black beans, drained and rinsed
- 4 cups vegetable broth
- 1 can (14 oz) diced tomatoes
- 1 tsp ground cumin
- 1 tsp chili powder
- 2 tbsp lime juice
- 2 tbsp chopped cilantro

**Instructions:**
1. Heat olive oil in a large pot and cook onion and bell pepper for 5 minutes.
2. Add black beans, vegetable broth, diced tomatoes, cumin, and chili powder. Bring to a boil.
3. Reduce heat and simmer 20 minutes, stirring occasionally.
4. Puree half the soup with an immersion blender, then stir it back in for a thicker texture.
5. Stir in lime juice and cilantro before serving.

### 87. Miso Soup with Tofu

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 5 cups vegetable broth
- 4 tbsp miso paste
- 1 block (14 oz) soft tofu, cubed
- 2 green onions, sliced
- 1 sheet nori, cut into strips
- 1 cup sliced mushrooms
- 1 tbsp dried wakame seaweed

**Instructions:**
1. Bring vegetable broth to a gentle simmer in a pot.
2. Add mushrooms and wakame, and simmer 5 minutes.
3. Reduce heat to low. Ladle a little hot broth into a bowl, whisk in miso paste until smooth, then stir it back into the pot.
4. Add tofu and warm through for 3 minutes without boiling.
5. Ladle into bowls and top with green onions and nori.

### 88. Egg Drop Soup

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 6 cups chicken broth
- 3 eggs, beaten
- 2 tbsp cornstarch
- 3 tbsp water
- 2 green onions, sliced
- 1 tsp sesame oil
- 1/2 tsp ground ginger

**Instructions:**
1. Bring chicken broth to a boil in a pot and stir in ginger.
2. Mix cornstarch with water and stir into the broth. Simmer 2 minutes until slightly thickened.
3. Reduce heat to low. Slowly drizzle in beaten eggs while stirring gently in one direction to form ribbons.
4. Let the soup sit off heat for 1 minute to finish setting the eggs.
5. Stir in sesame oil and top with green onions before serving.

### 89. Chicken Tortilla Soup

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 1 onion, diced
- 1 red bell pepper, diced
- 6 cups chicken broth
- 1 can (14 oz) diced tomatoes
- 1 can (15 oz) black beans, drained and rinsed
- 1 cup corn kernels
- 1 tsp ground cumin
- 1 tsp chili powder
- 2 corn tortillas, sliced into strips and toasted
- 2 tbsp chopped cilantro

**Instructions:**
1. Heat olive oil in a large pot and cook onion and bell pepper for 5 minutes.
2. Add chicken broth, chicken breasts, diced tomatoes, cumin, and chili powder. Bring to a boil, then reduce heat and simmer 20 minutes.
3. Remove the chicken, shred it, and return it to the pot.
4. Add black beans and corn, and simmer 5 minutes.
5. Stir in cilantro and serve topped with the toasted tortilla strips.

### 90. Avgolemono

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 6 cups chicken broth
- 1 cooked chicken breast, shredded
- 1/2 cup rice
- 3 eggs
- 1/3 cup lemon juice
- 2 tbsp chopped fresh dill

**Instructions:**
1. Bring chicken broth to a boil in a pot and add rice. Reduce heat and simmer 15 minutes until the rice is tender.
2. Whisk eggs and lemon juice together in a bowl.
3. Ladle a cup of hot broth into the egg mixture slowly while whisking, to warm it without curdling.
4. Pour the tempered egg mixture back into the pot, stirring constantly over low heat for 2 minutes until slightly thickened.
5. Stir in shredded chicken and dill. Season with salt and pepper.

### 91. Beef and Barley Soup

**Total Time:** 90 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb beef stew meat, cubed
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 8 cups beef broth
- 3/4 cup pearl barley
- 1 can (14 oz) diced tomatoes
- 1 tsp dried thyme
- 2 cups chopped mushrooms

**Instructions:**
1. Heat olive oil in a large pot and brown the beef on all sides, about 6 minutes. Remove and set aside.
2. Add onion, carrots, celery, and mushrooms to the pot and cook 5 minutes.
3. Return the beef to the pot with beef broth, diced tomatoes, and thyme. Bring to a boil.
4. Reduce heat and simmer 45 minutes until the beef is tender.
5. Add barley and simmer 25 minutes more until tender. Season with salt and pepper.

### 92. French Onion Soup

**Total Time:** 60 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 tbsp butter
- 4 large onions, thinly sliced
- 6 cups beef broth
- 1 tsp sugar
- 1/2 cup dry white wine
- 4 slices baguette, toasted
- 1 1/2 cups shredded gruyere cheese

**Instructions:**
1. Melt butter in a large pot and add onions and sugar. Cook over medium-low heat, stirring often, for 30 minutes until deeply caramelized.
2. Add wine and scrape up any browned bits from the bottom of the pot.
3. Add beef broth and bring to a simmer. Cook 15 minutes. Season with salt and pepper.
4. Ladle the soup into oven-safe bowls and top each with a slice of toasted baguette.
5. Sprinkle gruyere over the bread and broil 3 minutes until bubbly and golden.

### 93. Gazpacho

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 6 large ripe tomatoes, chopped
- 1 cucumber, peeled and chopped
- 1 red bell pepper, chopped
- 1/2 red onion, chopped
- 2 tbsp red wine vinegar
- 1/4 cup olive oil
- 1 slice stale bread, torn into pieces
- 1 tbsp lemon juice

**Instructions:**
1. Combine tomatoes, cucumber, bell pepper, onion, and bread in a blender or food processor.
2. Add red wine vinegar, olive oil, and lemon juice. Blend until smooth.
3. Season with salt and pepper, and blend again briefly.
4. Chill in the refrigerator for at least 1 hour before serving.
5. Stir well and adjust the seasoning before serving cold.

### 94. Curried Lentil and Sweet Potato Soup

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 sweet potatoes, peeled and diced
- 1 1/2 cups red lentils, rinsed
- 1 tbsp curry powder
- 1 can (14 oz) coconut milk
- 5 cups vegetable broth
- 2 cups chopped spinach
- 1 tbsp grated fresh ginger

**Instructions:**
1. Heat olive oil in a large pot and cook onion and ginger for 3 minutes.
2. Stir in curry powder and cook 1 minute until fragrant.
3. Add sweet potatoes, lentils, vegetable broth, and coconut milk. Bring to a boil.
4. Reduce heat and simmer 25 minutes until the lentils and sweet potatoes are tender.
5. Stir in spinach and cook 3 minutes until wilted. Season with salt and pepper.

### 95. Potato Leek Soup

**Total Time:** 40 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 3 tbsp butter
- 3 leeks, sliced (white and light green parts)
- 4 potatoes, peeled and diced
- 5 cups vegetable broth
- 1/2 cup heavy cream
- 1 tsp dried thyme
- 2 tbsp chopped chives

**Instructions:**
1. Melt butter in a large pot and cook leeks for 5 minutes until soft.
2. Add potatoes, vegetable broth, and thyme. Bring to a boil.
3. Reduce heat and simmer 25 minutes until the potatoes are very tender.
4. Puree the soup with an immersion blender until smooth.
5. Stir in heavy cream and warm through. Season with salt and pepper, and top with chives.

### 96. Carrot Ginger Soup

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 lbs carrots, peeled and chopped
- 1 tbsp grated fresh ginger
- 5 cups vegetable broth
- 1/2 cup coconut milk
- 1 tbsp orange juice
- 1/2 tsp ground turmeric

**Instructions:**
1. Heat olive oil in a large pot and cook onion and ginger for 3 minutes.
2. Add carrots, vegetable broth, and turmeric. Bring to a boil.
3. Reduce heat and simmer 25 minutes until the carrots are very tender.
4. Puree the soup with an immersion blender until smooth.
5. Stir in coconut milk and orange juice, and warm through. Season with salt and pepper.

### 97. Italian Wedding Soup

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground turkey
- 1/4 cup breadcrumbs
- 1 egg
- 1/4 cup grated parmesan cheese
- 8 cups chicken broth
- 4 cups chopped escarole or spinach
- 1/2 cup small pasta (orzo or acini di pepe)
- 1 carrot, diced

**Instructions:**
1. Mix ground turkey, breadcrumbs, egg, and parmesan in a bowl. Season with salt and pepper and roll into small meatballs.
2. Bring chicken broth and carrot to a boil in a large pot.
3. Drop the meatballs into the simmering broth and cook 8 minutes.
4. Add pasta and cook 8 minutes until tender.
5. Stir in escarole and cook 3 minutes until wilted.

### 98. Tom Kha Gai

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, sliced thin
- 2 cans (14 oz each) coconut milk
- 2 cups chicken broth
- 2 tbsp fish sauce
- 2 tbsp lime juice
- 1 tbsp grated fresh ginger or galangal
- 1 cup sliced mushrooms
- 1 red chili, sliced
- 2 tbsp chopped cilantro

**Instructions:**
1. Bring coconut milk and chicken broth to a simmer in a large pot.
2. Add ginger and mushrooms, and simmer 5 minutes.
3. Add chicken and cook 8 minutes until cooked through.
4. Stir in fish sauce and lime juice.
5. Ladle into bowls and top with chili and cilantro.

### 99. Hot and Sour Soup

**Total Time:** 25 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 6 cups vegetable broth
- 1 block (14 oz) firm tofu, cubed
- 1 cup sliced mushrooms
- 1/4 cup rice vinegar
- 2 tbsp soy sauce
- 1 tbsp chili paste
- 3 tbsp cornstarch
- 2 eggs, beaten
- 2 green onions, sliced

**Instructions:**
1. Bring vegetable broth to a boil in a pot and add mushrooms. Simmer 5 minutes.
2. Add tofu, rice vinegar, soy sauce, and chili paste.
3. Mix cornstarch with a little water and stir into the soup. Simmer 2 minutes until slightly thickened.
4. Reduce heat to low and slowly drizzle in beaten eggs while stirring gently to form ribbons.
5. Top with green onions before serving.

### 100. Mushroom Barley Soup

**Total Time:** 60 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 1 lb mushrooms, sliced
- 3/4 cup pearl barley
- 7 cups vegetable broth
- 1 tsp dried thyme
- 2 tbsp soy sauce

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, and celery for 5 minutes.
2. Add mushrooms and cook 8 minutes until they release their liquid and start to brown.
3. Add vegetable broth, barley, thyme, and soy sauce. Bring to a boil.
4. Reduce heat and simmer 40 minutes until the barley is tender.
5. Season with salt and pepper before serving.

### 101. Chickpea and Kale Soup

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 onion, diced
- 2 carrots, diced
- 3 cans (15 oz each) chickpeas, drained and rinsed
- 1 can (14 oz) diced tomatoes
- 6 cups vegetable broth
- 4 cups chopped kale
- 1 tsp ground cumin
- 1 tsp smoked paprika

**Instructions:**
1. Heat olive oil in a large pot and cook onion and carrots for 5 minutes.
2. Add chickpeas, diced tomatoes, vegetable broth, cumin, and paprika. Bring to a boil.
3. Reduce heat and simmer 20 minutes.
4. Puree 1 cup of the soup and stir it back in for a thicker texture.
5. Stir in kale and cook 5 minutes until wilted. Season with salt and pepper.

### 102. Turkey and Wild Rice Soup

**Total Time:** 55 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked shredded turkey
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 6 cups chicken broth
- 1 cup wild rice
- 1 cup sliced mushrooms
- 1/2 cup milk
- 2 tbsp flour

**Instructions:**
1. Heat olive oil in a large pot and cook onion, carrots, celery, and mushrooms for 5 minutes.
2. Add chicken broth and wild rice. Bring to a boil, then reduce heat and simmer 40 minutes until the rice is tender.
3. Whisk flour into milk until smooth, then stir into the soup.
4. Add turkey and simmer 5 minutes until heated through and slightly thickened.
5. Season with salt and pepper before serving.

### 103. Chicken Caesar Salad

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 6 cups chopped romaine lettuce
- 1/2 cup grated parmesan cheese
- 1 cup croutons
- Dressing: 1/3 cup mayonnaise, 2 tbsp lemon juice, 2 anchovy fillets, 1 clove garlic, 2 tbsp grated parmesan
- Lemon wedges, for serving

**Instructions:**
1. Season the chicken with salt and pepper and pan-sear over medium heat for 6-7 minutes per side until cooked through. Let rest 5 minutes, then slice.
2. Whisk together the dressing ingredients in a small bowl until smooth.
3. Toss the romaine with half the dressing in a large bowl.
4. Top with sliced chicken, croutons, and parmesan, then drizzle with the remaining dressing.
5. Pack the chicken and croutons separately from the lettuce if making ahead, and combine just before eating.

### 104. Cobb Salad

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 cups chopped romaine lettuce
- 1 cooked chicken breast, chopped
- 4 slices bacon
- 2 hard-boiled eggs, sliced
- 1 avocado, diced
- 1 cup cherry tomatoes, halved
- 1/4 cup crumbled blue cheese
- Dressing: 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp Dijon mustard

**Instructions:**
1. Cook the bacon in a skillet over medium heat until crisp, about 6 minutes, then crumble.
2. Arrange the romaine in a large bowl or container and top with rows of chicken, bacon, eggs, avocado, tomatoes, and blue cheese.
3. Whisk together the dressing ingredients in a small jar.
4. Drizzle the dressing over the salad just before eating, or pack it separately to keep the lettuce crisp.

### 105. Greek Salad with Grilled Chicken

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 1 cucumber, diced
- 2 cups cherry tomatoes, halved
- 1/2 red onion, thinly sliced
- 1/2 cup crumbled feta cheese
- 1/3 cup kalamata olives
- Dressing: 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp dried oregano

**Instructions:**
1. Season the chicken with salt, pepper, and oregano, then grill or pan-sear over medium-high heat for 5-6 minutes per side until cooked through. Let rest, then slice.
2. Combine the cucumber, tomatoes, red onion, feta, and olives in a large bowl.
3. Whisk together the dressing ingredients and toss with the vegetables.
4. Top with the sliced chicken and pack into an airtight container for up to 3 days.

### 106. Salade Nicoise

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cans tuna in olive oil, drained
- 3 eggs
- 8 oz baby potatoes
- 1 cup green beans, trimmed
- 1 cup cherry tomatoes, halved
- 1/4 cup kalamata olives
- 4 anchovy fillets (optional)
- Dressing: 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp Dijon mustard

**Instructions:**
1. Boil the potatoes in salted water for 12-15 minutes until tender, then drain and halve.
2. Boil the eggs for 9 minutes, cool in cold water, then peel and quarter.
3. Blanch the green beans in boiling water for 2-3 minutes until bright green, then drain.
4. Arrange the potatoes, green beans, tomatoes, eggs, tuna, and olives on a platter or in containers.
5. Whisk together the dressing and drizzle over the top just before eating.

### 107. Waldorf Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Pork-free

**Ingredients:**
- 2 apples, diced
- 2 celery stalks, sliced
- 1 cup red grapes, halved
- 1/2 cup walnuts, chopped
- 1/3 cup mayonnaise
- 1 tbsp honey
- 1 tsp lemon juice
- 4 cups lettuce leaves, for serving

**Instructions:**
1. Combine the apples, celery, grapes, and walnuts in a large bowl.
2. Whisk together the mayonnaise, honey, and lemon juice in a small bowl.
3. Fold the dressing into the fruit mixture until evenly coated.
4. Serve over lettuce leaves, or pack in a sealed container for up to 2 days.

### 108. Tabbouleh

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1/2 cup fine bulgur
- 2 cups chopped parsley
- 1/4 cup chopped mint
- 3 tomatoes, diced
- 3 green onions, chopped
- Dressing: 1/4 cup olive oil, 3 tbsp lemon juice
- 1/2 tsp salt

**Instructions:**
1. Soak the bulgur in 1/2 cup hot water for 15 minutes, then drain any excess liquid.
2. Combine the bulgur with parsley, mint, tomatoes, and green onions in a large bowl.
3. Whisk together the olive oil, lemon juice, and salt, then toss with the salad.
4. Chill for at least 20 minutes before packing into containers.

### 109. Fattoush Salad

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 pita breads
- 1 head romaine lettuce, chopped
- 1 cucumber, diced
- 3 tomatoes, diced
- 4 radishes, thinly sliced
- 3 green onions, chopped
- 1 tsp sumac
- Dressing: 1/4 cup olive oil, 2 tbsp lemon juice, 1 tbsp pomegranate molasses

**Instructions:**
1. Toast or grill the pita until crisp, about 3-4 minutes per side, then break into pieces.
2. Combine the lettuce, cucumber, tomatoes, radishes, and green onions in a large bowl.
3. Whisk together the dressing ingredients and toss with the vegetables.
4. Add the toasted pita and sumac just before eating so it stays crisp.

### 110. Panzanella

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 cups day-old bread, cubed
- 4 tomatoes, chopped
- 1 cucumber, diced
- 1/2 red onion, thinly sliced
- 1/4 cup fresh basil leaves
- Dressing: 1/4 cup olive oil, 2 tbsp red wine vinegar

**Instructions:**
1. Toast the bread cubes in a dry skillet over medium heat for 5 minutes until lightly crisp.
2. Combine the tomatoes, cucumber, and red onion in a large bowl and season with salt.
3. Let the vegetables sit for 10 minutes so they release their juices.
4. Toss in the bread, basil, and dressing right before eating so the bread keeps its texture.

### 111. Classic Potato Salad

**Total Time:** 30 mins + 1 hr chill

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 lbs baby potatoes
- 3 eggs
- 2 celery stalks, diced
- 1/4 red onion, finely diced
- 1/2 cup mayonnaise
- 1 tbsp yellow mustard
- 1 tbsp chopped dill (optional)

**Instructions:**
1. Boil the potatoes in salted water for 15-18 minutes until fork-tender, then drain and cool slightly.
2. Boil the eggs for 9 minutes, cool in cold water, then peel and chop.
3. Cut the potatoes into bite-size pieces and combine with the celery, onion, and eggs in a large bowl.
4. Stir in the mayonnaise and mustard until evenly coated.
5. Chill for at least 1 hour and pack into containers for up to 3 days.

### 112. Creamy Macaroni Salad

**Total Time:** 20 mins + 30 min chill

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups elbow macaroni
- 1/2 cup mayonnaise
- 1 tbsp apple cider vinegar
- 1 tsp sugar
- 2 celery stalks, diced
- 1/2 red bell pepper, diced
- 1/4 red onion, finely diced
- 1/2 cup frozen peas, thawed

**Instructions:**
1. Cook the macaroni according to package instructions, about 8-9 minutes, then drain and cool.
2. Whisk together the mayonnaise, vinegar, and sugar in a large bowl.
3. Add the macaroni, celery, bell pepper, onion, and peas, and stir to coat evenly.
4. Chill for at least 30 minutes and pack into containers for up to 3 days.

### 113. Three-Bean Salad

**Total Time:** 15 mins + 1 hr chill

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 can kidney beans, drained and rinsed
- 1 can chickpeas, drained and rinsed
- 1 cup green beans, trimmed and halved
- 1/2 red onion, thinly sliced
- Dressing: 1/4 cup olive oil, 3 tbsp vinegar, 1 tbsp honey
- 1/2 tsp dried oregano

**Instructions:**
1. Blanch the green beans in boiling water for 2-3 minutes, then drain and cool under cold water.
2. Combine the kidney beans, chickpeas, green beans, and red onion in a large bowl.
3. Whisk together the dressing ingredients and toss with the beans.
4. Chill for at least 1 hour to let the flavors combine, then pack into containers.

### 114. Caprese Pasta Salad

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups fusilli or penne pasta
- 1 cup cherry tomatoes, halved
- 8 oz fresh mozzarella pearls
- 1/4 cup fresh basil leaves, torn
- 3 tbsp olive oil
- 1 tbsp balsamic vinegar

**Instructions:**
1. Cook the pasta according to package instructions, about 9-11 minutes, then drain and cool.
2. Combine the pasta, tomatoes, mozzarella, and basil in a large bowl.
3. Drizzle with olive oil and balsamic vinegar and toss to coat.
4. Pack into containers and chill for up to 3 days.

### 115. Farro Salad with Roasted Vegetables

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 cup farro
- 1 zucchini, diced
- 1 red bell pepper, diced
- 1/2 red onion, diced
- 1 cup cherry tomatoes, halved
- 2 tbsp olive oil
- 2 tbsp lemon juice
- 1/4 cup chopped parsley
- 1/4 cup crumbled feta (optional)

**Instructions:**
1. Preheat the oven to 425°F and cook the farro according to package instructions, about 20-25 minutes.
2. Toss the zucchini, bell pepper, and onion with olive oil and roast for 20 minutes, stirring once, until browned at the edges.
3. Combine the cooked farro, roasted vegetables, and cherry tomatoes in a large bowl.
4. Drizzle with lemon juice, sprinkle with parsley, and toss to combine.
5. Pack into containers for up to 4 days.

### 116. Lemon Herb Orzo Salad

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups orzo
- 1 cucumber, diced
- 1 cup cherry tomatoes, halved
- 1/4 cup chopped parsley
- 2 tbsp chopped dill
- 3 tbsp olive oil
- 2 tbsp lemon juice
- 1/4 cup crumbled feta (optional)

**Instructions:**
1. Cook the orzo according to package instructions, about 9-10 minutes, then drain and cool.
2. Combine the orzo, cucumber, tomatoes, parsley, and dill in a large bowl.
3. Drizzle with olive oil and lemon juice, then toss to coat.
4. Chill for at least 20 minutes and pack into containers for up to 3 days.

### 117. Lentil and Feta Salad

**Total Time:** 30 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 cup dried green or brown lentils
- 1/2 cup crumbled feta cheese
- 1 cucumber, diced
- 2 tomatoes, diced
- 1/4 red onion, finely diced
- 1/4 cup chopped parsley
- 3 tbsp olive oil
- 2 tbsp lemon juice

**Instructions:**
1. Cook the lentils in salted water for 18-20 minutes until tender but not mushy, then drain and cool.
2. Combine the lentils, feta, cucumber, tomatoes, onion, and parsley in a large bowl.
3. Drizzle with olive oil and lemon juice and toss to combine.
4. Pack into containers and chill for up to 4 days.

### 118. Tuna Poke Bowl

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked rice
- 12 oz sushi-grade tuna, cubed
- 2 tbsp soy sauce
- 1 tsp sesame oil
- 1 avocado, sliced
- 1 cucumber, diced
- 2 green onions, sliced
- 1 tbsp sesame seeds

**Instructions:**
1. Combine the tuna with soy sauce and sesame oil in a bowl and let marinate for 10 minutes.
2. Divide the rice among containers and top with the marinated tuna.
3. Arrange the avocado and cucumber alongside the tuna.
4. Garnish with green onions and sesame seeds, and keep chilled until ready to eat.

### 119. Salmon Rice Bowl

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 salmon fillets
- 2 cups cooked rice
- 1 cup shelled edamame
- 1 carrot, julienned
- 1 cucumber, diced
- 2 tbsp soy sauce
- 1 tsp sesame oil
- 1 tbsp sesame seeds

**Instructions:**
1. Season the salmon with salt and pepper and pan-sear over medium heat for 4-5 minutes per side until cooked through.
2. Steam the edamame for 3-4 minutes, then drain.
3. Divide the rice among containers and top with the salmon, edamame, carrot, and cucumber.
4. Drizzle with soy sauce and sesame oil, and sprinkle with sesame seeds.

### 120. Teriyaki Chicken Rice Bowl

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken thighs, cubed
- 2 cups cooked rice
- 2 cups broccoli florets
- 3 tbsp soy sauce
- 2 tbsp honey
- 1 tsp grated ginger
- 1 tbsp sesame seeds

**Instructions:**
1. Steam or blanch the broccoli for 3-4 minutes until bright green and just tender, then drain.
2. Cook the chicken in a skillet over medium-high heat for 6-7 minutes until browned and cooked through.
3. Whisk together the soy sauce, honey, and ginger, pour over the chicken, and simmer for 2 minutes until glossy.
4. Divide the rice among containers and top with the chicken, broccoli, and sesame seeds.

### 121. Bibimbap Bowl

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 oz ground beef
- 2 cups cooked rice
- 2 cups baby spinach
- 1 carrot, julienned
- 1 cup bean sprouts
- 2 eggs
- 2 tbsp gochujang
- 1 tsp sesame oil

**Instructions:**
1. Cook the ground beef in a skillet over medium-high heat for 5-6 minutes until browned, seasoning with soy sauce and garlic.
2. Blanch the spinach and bean sprouts separately in boiling water for 1-2 minutes each, then drain and season with a little sesame oil and salt.
3. Sauté the carrot in a lightly oiled pan for 2-3 minutes until just softened.
4. Fry the eggs to your liking, about 3 minutes for a runny yolk.
5. Divide the rice among bowls, arrange the beef, spinach, bean sprouts, and carrot on top, and finish with a fried egg and a spoon of gochujang.

### 122. Chicken Burrito Bowl

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 2 cups cooked rice
- 1 can black beans, drained and rinsed
- 1 cup corn kernels
- 1 cup salsa
- 2 cups chopped lettuce
- 1 avocado, diced
- 1 tsp cumin
- 1 tsp chili powder

**Instructions:**
1. Season the chicken with cumin, chili powder, salt, and pepper, then pan-sear over medium heat for 6-7 minutes per side until cooked through. Slice.
2. Warm the black beans and corn in a small pan for 3-4 minutes.
3. Divide the rice among containers and top with the chicken, beans, corn, lettuce, and avocado.
4. Spoon the salsa over the top and pack with the lid on for up to 3 days.

### 123. Roasted Vegetable Buddha Bowl with Tahini

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 sweet potato, cubed
- 1 can chickpeas, drained and rinsed
- 2 cups baby kale
- 1 cup cooked quinoa
- 2 tbsp olive oil
- Dressing: 3 tbsp tahini, 2 tbsp lemon juice, 2-3 tbsp water
- 1/2 tsp cumin

**Instructions:**
1. Preheat the oven to 425°F. Toss the sweet potato and chickpeas with olive oil, cumin, salt, and pepper, and roast for 25 minutes, stirring once, until browned.
2. Massage the kale with a little olive oil and salt to soften it.
3. Whisk together the tahini, lemon juice, and water until smooth and pourable.
4. Divide the quinoa among containers and top with the kale, roasted sweet potato, and chickpeas.
5. Drizzle with the tahini dressing just before eating.

### 124. Falafel Grain Bowl

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 12 frozen or fresh falafel patties
- 1 cup cooked bulgur or quinoa
- 1 cucumber, diced
- 2 tomatoes, diced
- 1/4 red onion, thinly sliced
- Dressing: 3 tbsp tahini, 2 tbsp lemon juice, 2-3 tbsp water
- 2 tbsp chopped parsley

**Instructions:**
1. Cook the falafel according to package instructions, about 10 minutes in the oven or pan, until golden and crisp.
2. Combine the cucumber, tomatoes, and red onion in a bowl.
3. Whisk together the tahini, lemon juice, and water until smooth.
4. Divide the bulgur among containers and top with the falafel and vegetable mixture.
5. Drizzle with the tahini dressing and sprinkle with parsley.

### 125. Southwest Chicken Salad with Lime Ranch

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 6 cups chopped romaine lettuce
- 1 can black beans, drained and rinsed
- 1 cup corn kernels
- 1 cup cherry tomatoes, halved
- 1 avocado, diced
- Dressing: 1/2 cup ranch dressing, juice of 1 lime, 1/2 tsp chili powder
- 1 tsp cumin

**Instructions:**
1. Season the chicken with cumin, chili powder, salt, and pepper, then pan-sear over medium heat for 6-7 minutes per side until cooked through. Slice.
2. Combine the romaine, black beans, corn, tomatoes, and avocado in a large bowl.
3. Whisk together the ranch dressing, lime juice, and chili powder.
4. Top the salad with the sliced chicken and drizzle with the lime ranch dressing.

### 126. Shrimp Taco Salad

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb shrimp, peeled and deveined
- 6 cups chopped romaine lettuce
- 1 can black beans, drained and rinsed
- 1 cup corn kernels
- 1 cup cherry tomatoes, halved
- 2 avocados
- 1 cup crushed tortilla chips
- Dressing: 1 avocado, juice of 2 limes, 3 tbsp olive oil, 1/4 cup water
- 1 tsp chili powder

**Instructions:**
1. Season the shrimp with chili powder, salt, and pepper, then cook in a skillet over medium-high heat for 2-3 minutes per side until pink and opaque.
2. Combine the romaine, black beans, corn, and tomatoes in a large bowl.
3. Blend the dressing avocado with lime juice, olive oil, and water until smooth.
4. Top the salad with the shrimp, sliced avocado, and crushed tortilla chips, and drizzle with the dressing.
5. Pack the tortilla chips separately to keep them crisp.

### 127. Lemongrass Chicken Vermicelli Bowl

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken thighs
- 1 stalk lemongrass, minced (or 1 tbsp lemongrass paste)
- 8 oz rice vermicelli noodles
- 2 cups shredded lettuce
- 1 cucumber, julienned
- 1 carrot, julienned
- 1/4 cup mint leaves
- 2 tbsp crushed peanuts (optional)
- Dressing: 1/4 cup fish sauce, 2 tbsp lime juice, 2 tbsp honey, 2 tbsp water

**Instructions:**
1. Marinate the chicken with the lemongrass, garlic, salt, and pepper for 10 minutes, then pan-sear over medium heat for 6-7 minutes per side until cooked through. Slice.
2. Cook the vermicelli noodles according to package instructions, about 3-4 minutes, then drain and cool under cold water.
3. Whisk together the fish sauce, lime juice, honey, and water for the dressing.
4. Divide the noodles and lettuce among containers, and top with the cucumber, carrot, mint, and sliced chicken.
5. Drizzle with the dressing just before eating, and add crushed peanuts if using.

### 128. Soba Noodle Salad with Edamame

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 oz soba noodles
- 1 cup shelled edamame
- 1 carrot, julienned
- 1 cucumber, julienned
- 3 green onions, sliced
- 1 tbsp sesame seeds
- Dressing: 3 tbsp soy sauce, 1 tbsp sesame oil, 1 tbsp rice vinegar, 1 tbsp honey

**Instructions:**
1. Cook the soba noodles according to package instructions, about 4-5 minutes, then drain and rinse under cold water.
2. Steam the edamame for 3-4 minutes, then drain and cool.
3. Whisk together the dressing ingredients in a small bowl.
4. Combine the noodles, edamame, carrot, cucumber, and green onions in a large bowl and toss with the dressing.
5. Sprinkle with sesame seeds and pack into containers for up to 3 days.

## Category 3: Dinner Recipes (129 to 300)

### 129. Sheet Pan Garlic Lemon Chicken and Asparagus

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken breast tenders or thin cutlets
- 1 bunch asparagus, woody ends trimmed
- 2 tbsp olive oil
- 1 tsp garlic powder and 1 tsp lemon zest
- 2 tbsp fresh lemon juice
- Salt and pepper to taste

**Instructions:**
1. Preheat oven to 400°F (200°C) and line a baking sheet with parchment paper.
2. Arrange chicken tenders and asparagus in a single layer on the tray.
3. Drizzle with olive oil, lemon juice, garlic powder, lemon zest, salt, and pepper.
4. Bake for 18 to 20 minutes until chicken reaches an internal temperature of 165°F (74°C).

### 130. 15-Minute Beef and Broccoli Stir-Fry

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb 90% lean ground beef
- 3 cups broccoli florets
- 2 cloves garlic, minced
- 1 tsp minced fresh ginger
- 3 tbsp low-sodium soy sauce and 1 tbsp honey
- Cooked brown rice for serving

**Instructions:**
1. Heat a large skillet over medium-high heat. Add ground beef and cook until browned, about 5 minutes. Drain excess fat.
2. Add minced garlic, ginger, and broccoli florets with 2 tbsp of water. Cover the pan to steam the broccoli for 4 minutes.
3. Stir in soy sauce and honey. Cook uncovered for 2 minutes until the sauce thickens slightly. Serve over brown rice.

### 131. Sheet Pan Salmon with Zucchini and Tomatoes

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 salmon fillets (about 5 oz each)
- 1 medium zucchini, sliced into half-moons
- 1 cup cherry tomatoes
- 1½ tbsp olive oil
- 1 tsp dried oregano
- 1 lemon, cut into wedges

**Instructions:**
1. Preheat oven to 400°F (200°C).
2. Place salmon fillets, sliced zucchini, and cherry tomatoes on a parchment-lined sheet pan.
3. Drizzle olive oil over everything and season with oregano, salt, and pepper. Place lemon wedges on the sheet.
4. Roast for 12 to 15 minutes until the salmon flakes easily with a fork.

### 132. Ground Turkey and Black Bean Skillet Tacos

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 2 tbsp low-sodium taco seasoning
- 1 can (15 oz) black beans, rinsed and drained
- ⅓ cup water
- 6 small corn or whole wheat tortillas
- Toppings: shredded lettuce, salsa, diced tomatoes

**Instructions:**
1. In a large skillet, cook ground turkey over medium-high heat until fully browned, 6 to 7 minutes.
2. Add taco seasoning, water, and rinsed black beans. Simmer for 5 minutes until the liquid reduces.
3. Warm tortillas in a dry skillet or microwave. Spoon the turkey mix into tortillas and add toppings.

### 133. Garlic Butter Shrimp and Spinach Pasta

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- ½ lb raw peeled shrimp, thawed
- 6 oz whole wheat thin spaghetti
- 2 cups baby spinach
- 3 cloves garlic, minced
- 1 tbsp butter and 1 tbsp olive oil
- 2 tbsp grated parmesan cheese

**Instructions:**
1. Boil spaghetti in salted water according to package directions. Reserve ¼ cup pasta water before draining.
2. In a skillet, melt butter with olive oil over medium heat. Saute garlic and shrimp for 3 to 4 minutes until pink.
3. Stir in baby spinach until wilted. Add drained pasta and reserved pasta water, tossing to combine.
4. Top with parmesan cheese and black pepper before serving.

### 134. One-Pot Chickpea and Spinach Coconut Curry

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 1 can (13.5 oz) light coconut milk
- 1 can (14.5 oz) diced tomatoes
- 1 tbsp yellow curry powder
- 2 cups fresh baby spinach
- Cooked jasmine or brown rice

**Instructions:**
1. In a deep skillet, combine chickpeas, diced tomatoes with their juice, and curry powder. Simmer for 5 minutes.
2. Pour in coconut milk and bring to a gentle simmer for another 5 minutes.
3. Fold in fresh baby spinach and stir until wilted, 1 to 2 minutes. Serve hot over cooked rice.

### 135. Skillet Caprese Chicken

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 boneless skinless chicken breasts, thinly sliced or pounded
- ¾ cup jarred low-sugar marinara sauce
- 4 slices fresh mozzarella cheese
- ¼ cup fresh basil leaves
- 1 tbsp olive oil

**Instructions:**
1. Heat olive oil in a large skillet over medium-high heat. Season chicken breasts with salt and pepper.
2. Sear chicken for 5 minutes per side until browned and cooked through.
3. Spoon marinara sauce over each breast and top with mozzarella slices. Cover the skillet for 2 to 3 minutes to melt the cheese.
4. Garnish with fresh basil and serve with a side salad or warm whole grain bread.

### 136. Crispy Teriyaki Tofu and Veggie Stir-Fry

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, drained, pressed, and cubed
- 3 cups frozen stir-fry vegetable mix
- ¼ cup low-sodium teriyaki sauce
- 1 tbsp olive oil
- Cooked brown rice

**Instructions:**
1. Heat olive oil in a wok or skillet over medium-high heat. Add cubed tofu and crisp for 8 minutes, turning occasionally.
2. Remove tofu from the skillet. Add frozen stir-fry vegetables and saute for 5 minutes.
3. Return tofu to the pan, pour teriyaki sauce over the top, and toss for 2 minutes. Serve over rice.

### 137. Sheet Pan Smoked Sausage, Peppers and Onions

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 12 oz pre-cooked turkey or chicken smoked sausage, sliced into coins
- 2 bell peppers (any color), sliced
- 1 medium red onion, sliced
- 1 tbsp olive oil
- 1 tsp Italian seasoning

**Instructions:**
1. Preheat oven to 400°F (200°C).
2. Combine sliced sausage, bell peppers, and onion on a parchment-lined baking sheet.
3. Drizzle with olive oil and sprinkle Italian seasoning, salt, and pepper. Toss to coat evenly.
4. Roast for 20 minutes until the vegetables are tender and the sausage edges are slightly crispy.

### 138. Easy Egg and Veggie Fried Rice

**Total Time:** 15 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups pre-cooked chilled brown rice
- 1 cup frozen peas and carrots
- 2 large eggs, lightly beaten
- 2 green onions, chopped
- 2 tbsp low-sodium soy sauce and 1 tsp sesame oil

**Instructions:**
1. Heat sesame oil in a skillet over medium heat. Scramble eggs until set, then push to the side of the pan.
2. Add frozen peas and carrots, stirring for 2 minutes.
3. Add cooked brown rice and soy sauce. Stir-fry everything together over high heat for 3 to 4 minutes.
4. Garnish with green onions and serve hot.

### 139. Honey Mustard Glazed Pork Chops

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 2 thin-cut boneless pork chops
- 2 tbsp Dijon mustard and 1 tbsp honey
- ½ tsp garlic powder
- 1 tbsp olive oil
- 2 cups fresh green beans

**Instructions:**
1. In a small bowl, whisk Dijon mustard, honey, and garlic powder.
2. Heat olive oil in a skillet over medium-high heat. Season pork chops with salt and pepper.
3. Sear pork chops for 3 minutes per side. Brush generously with the honey mustard glaze during the last 2 minutes.
4. Serve alongside green beans steamed in 2 tbsp water in the microwave for 3 minutes.

### 140. Tuscan White Bean and Spinach Soup

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz each) white cannellini beans, rinsed and drained
- 1 can (14.5 oz) diced tomatoes
- 3 cups vegetable broth
- 2 cloves garlic, minced
- 2 cups fresh baby spinach
- 1 tbsp olive oil and grated parmesan cheese

**Instructions:**
1. Saute minced garlic in olive oil at the bottom of a soup pot for 1 minute.
2. Add broth, diced tomatoes, and white beans. Bring to a simmer for 10 minutes.
3. Stir in fresh spinach until wilted, 1 to 2 minutes. Serve warm topped with parmesan.

### 141. Turkey Marinara over Zucchini Noodles

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 1½ cups jarred marinara sauce
- 2 medium zucchini, spiralized
- 1 tbsp olive oil
- 2 tbsp grated parmesan

**Instructions:**
1. Brown ground turkey in a pan over medium-high heat, 6 to 7 minutes. Drain excess fat.
2. Pour marinara sauce into the turkey and simmer for 5 minutes.
3. Saute zucchini noodles in olive oil in a separate skillet for 2 minutes until tender-crisp.
4. Spoon turkey marinara over zucchini noodles and sprinkle with parmesan.

### 142. Quick Sheet Pan Chicken Fajitas

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken breast, sliced into strips
- 2 bell peppers (red and green), sliced into strips
- 1 yellow onion, sliced
- 1 tbsp fajita seasoning
- 1½ tbsp olive oil
- Small corn or flour tortillas

**Instructions:**
1. Preheat oven to 400°F (200°C).
2. Toss sliced chicken, bell peppers, and onion with olive oil and fajita seasoning on a sheet pan.
3. Bake for 20 minutes until the chicken is cooked through and the peppers are tender. Serve wrapped in warm tortillas.

### 143. 15-Minute Tomato Spinach Tortellini

**Total Time:** 15 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 9 oz package refrigerated cheese tortellini
- 1 cup marinara sauce
- 2 tbsp heavy cream or plain Greek yogurt
- 1½ cups fresh baby spinach
- 2 tbsp grated parmesan

**Instructions:**
1. Boil tortellini according to package directions, 3 to 5 minutes, then drain.
2. In the same pot, heat marinara sauce, cream, and fresh spinach over low heat until the spinach wilts.
3. Fold tortellini into the sauce and serve garnished with parmesan cheese.

### 144. Baked Pesto White Fish with Cherry Tomatoes

**Total Time:** 20 mins

**Dietary:** Pork-free

**Ingredients:**
- 2 white fish fillets (cod, tilapia, or haddock)
- 2 tbsp store-bought basil pesto
- 1 cup cherry tomatoes, halved
- 1 tbsp lemon juice

**Instructions:**
1. Preheat oven to 400°F (200°C) and grease a baking dish.
2. Place fish fillets in the dish and spread 1 tbsp of basil pesto over each fillet.
3. Scatter cherry tomatoes around the fish and squeeze lemon juice over top.
4. Bake uncovered for 15 minutes until the fish flakes easily with a fork.

### 145. Spaghetti Bolognese

**Total Time:** 1 hr 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1 onion, diced
- 1 carrot, diced
- 1 celery stalk, diced
- 4 cloves garlic, minced
- 1 (28 oz) can crushed tomatoes
- 2 tbsp tomato paste
- 1/2 cup dry red wine
- 1 cup beef broth
- 1 lb spaghetti
- 2 tbsp olive oil

**Instructions:**
1. Heat olive oil in a large pot over medium heat and cook onion, carrot, and celery until softened, about 6 minutes.
2. Add garlic and ground beef, breaking it up, and cook until browned, about 8 minutes.
3. Stir in tomato paste and cook for 1 minute, then add red wine and simmer until mostly evaporated.
4. Add crushed tomatoes and beef broth, season with salt and pepper, and simmer uncovered on low heat for 45 minutes, stirring occasionally.
5. Cook spaghetti in salted boiling water according to package directions and drain.
6. Toss spaghetti with the sauce and serve hot.

### 146. Classic Lasagna

**Total Time:** 2 hrs

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1 onion, diced
- 3 cloves garlic, minced
- 1 (28 oz) can crushed tomatoes
- 2 tbsp tomato paste
- 12 lasagna noodles
- 15 oz ricotta cheese
- 1 egg
- 3 cups shredded mozzarella cheese
- 1/2 cup grated parmesan cheese
- 2 tbsp chopped fresh basil

**Instructions:**
1. Preheat oven to 375°F (190°C).
2. Cook ground beef, onion, and garlic in a large skillet over medium heat until browned, about 8 minutes, then stir in tomato paste and crushed tomatoes and simmer 15 minutes.
3. Boil lasagna noodles according to package directions and drain.
4. Mix ricotta, egg, basil, and half the parmesan in a bowl.
5. Layer noodles, meat sauce, ricotta mixture, and mozzarella in a baking dish, repeating to make three layers, and top with remaining mozzarella and parmesan.
6. Cover with foil and bake for 40 minutes, then uncover and bake 10 more minutes until bubbling.
7. Let rest for 10 minutes before slicing.

### 147. Fettuccine Alfredo

**Total Time:** 25 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb fettuccine
- 4 tbsp butter
- 2 cups heavy cream
- 1 1/2 cups grated parmesan cheese
- 2 cloves garlic, minced
- 2 tbsp chopped fresh parsley (optional)

**Instructions:**
1. Cook fettuccine in salted boiling water according to package directions and drain, reserving 1/2 cup pasta water.
2. Melt butter in a large skillet over medium heat and cook garlic for 1 minute.
3. Pour in heavy cream and bring to a gentle simmer.
4. Whisk in parmesan cheese until the sauce is smooth, adding reserved pasta water as needed to thin it.
5. Toss in the fettuccine and coat evenly, then season with salt and pepper.
6. Garnish with parsley and serve immediately.

### 148. Spaghetti Carbonara

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 1 lb spaghetti
- 6 oz pancetta, diced
- 3 large eggs
- 1 cup grated pecorino romano cheese
- 2 cloves garlic, minced
- 1 tsp black pepper

**Instructions:**
1. Cook spaghetti in salted boiling water according to package directions and drain, reserving 1 cup pasta water.
2. While the pasta cooks, fry pancetta and garlic in a large skillet over medium heat until crisp, about 6 minutes.
3. Whisk eggs, pecorino, and black pepper in a bowl.
4. Add the hot spaghetti to the skillet with the pancetta and toss off the heat.
5. Pour in the egg mixture, tossing quickly and adding reserved pasta water a little at a time until the sauce turns creamy.
6. Serve immediately with extra black pepper.

### 149. Penne alla Vodka

**Total Time:** 30 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb penne
- 2 tbsp butter
- 1 onion, diced
- 3 cloves garlic, minced
- 1/3 cup vodka
- 1 (28 oz) can crushed tomatoes
- 3/4 cup heavy cream
- 1/2 cup grated parmesan cheese
- 2 tbsp chopped fresh basil

**Instructions:**
1. Cook penne in salted boiling water according to package directions and drain.
2. Melt butter in a large skillet over medium heat and cook onion until softened, about 5 minutes, then add garlic and cook 1 minute more.
3. Pour in vodka and simmer for 2 minutes to cook off the alcohol smell.
4. Add crushed tomatoes and simmer for 10 minutes, then stir in heavy cream and parmesan.
5. Toss the penne with the sauce and season with salt and pepper.
6. Garnish with basil and serve.

### 150. Chicken Parmesan

**Total Time:** 40 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 large boneless chicken breasts, halved and pounded thin
- 1 cup breadcrumbs
- 1/2 cup grated parmesan cheese
- 2 eggs, beaten
- 1/2 cup flour
- 2 cups marinara sauce
- 1 1/2 cups shredded mozzarella cheese
- 1/2 lb spaghetti (optional, for serving)

**Instructions:**
1. Preheat oven to 425°F (220°C).
2. Set up three shallow bowls with flour, beaten eggs, and a mix of breadcrumbs and parmesan.
3. Dredge each chicken piece in flour, then egg, then the breadcrumb mixture.
4. Heat olive oil in a large skillet over medium-high heat and fry the chicken for 3 minutes per side until golden.
5. Place the chicken in a baking dish, top with marinara and mozzarella, and bake for 15 minutes until the cheese is melted and the chicken is cooked through.
6. Serve over spaghetti if using.

### 151. Eggplant Parmesan

**Total Time:** 50 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 medium eggplants, sliced into 1/2-inch rounds
- 1 cup breadcrumbs
- 1/2 cup grated parmesan cheese
- 2 eggs, beaten
- 1/2 cup flour
- 2 cups marinara sauce
- 2 cups shredded mozzarella cheese
- 2 tbsp chopped fresh basil

**Instructions:**
1. Preheat oven to 425°F (220°C).
2. Salt the eggplant slices and let sit for 10 minutes, then pat dry.
3. Dredge each slice in flour, then egg, then a mix of breadcrumbs and parmesan.
4. Arrange the slices on an oiled baking sheet and bake for 20 minutes, flipping halfway, until golden.
5. Spread a thin layer of marinara in a baking dish, layer in the eggplant, more marinara, and mozzarella, repeating until all the eggplant is used.
6. Bake for 15 minutes until the cheese is melted and bubbling.
7. Top with basil before serving.

### 152. Margherita Pizza

**Total Time:** 35 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb pizza dough
- 1/2 cup crushed tomatoes
- 8 oz fresh mozzarella, torn
- 2 tbsp olive oil
- 1/4 cup fresh basil leaves
- 1 clove garlic, minced

**Instructions:**
1. Preheat oven to 475°F (245°C) with a baking sheet or pizza stone inside.
2. Stretch the pizza dough into a round on a floured surface.
3. Mix crushed tomatoes with garlic, salt, and a pinch of pepper, then spread over the dough, leaving a border for the crust.
4. Scatter torn mozzarella over the sauce and drizzle with olive oil.
5. Bake for 12 to 15 minutes until the crust is golden and the cheese is bubbling.
6. Top with fresh basil before slicing.

### 153. Pepperoni Pizza

**Total Time:** 35 mins

**Dietary:** Nut-free

**Ingredients:**
- 1 lb pizza dough
- 1/2 cup pizza sauce
- 2 cups shredded mozzarella cheese
- 4 oz sliced pepperoni
- 1 tbsp olive oil
- 1 tsp dried oregano

**Instructions:**
1. Preheat oven to 475°F (245°C) with a baking sheet or pizza stone inside.
2. Stretch the pizza dough into a round on a floured surface.
3. Spread pizza sauce over the dough, leaving a border for the crust.
4. Sprinkle mozzarella evenly, then arrange pepperoni slices on top and drizzle with olive oil.
5. Bake for 12 to 15 minutes until the crust is golden and the cheese is bubbling.
6. Sprinkle with oregano before slicing.

### 154. Mushroom Risotto

**Total Time:** 45 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups arborio rice
- 1 lb mixed mushrooms, sliced
- 1 onion, diced
- 3 cloves garlic, minced
- 1/2 cup dry white wine
- 5 cups vegetable broth, warmed
- 3 tbsp butter
- 3/4 cup grated parmesan cheese
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Melt half the butter in a large skillet over medium-high heat and cook the mushrooms until browned, about 8 minutes, then set aside.
2. In a large pot, melt the remaining butter and cook onion until softened, about 5 minutes, then add garlic and rice, stirring for 2 minutes.
3. Pour in white wine and stir until absorbed.
4. Add warmed broth one ladle at a time, stirring often and waiting until each addition is absorbed before adding more, about 20 minutes total.
5. Stir in the mushrooms and parmesan, and season with salt and pepper.
6. Garnish with parsley and serve immediately.

### 155. Chicken Piccata

**Total Time:** 30 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 large boneless chicken breasts, halved and pounded thin
- 1/3 cup flour
- 4 tbsp butter
- 1/2 cup chicken broth
- 1/4 cup fresh lemon juice
- 3 tbsp capers, drained
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the chicken with salt and pepper and dredge in flour, shaking off the excess.
2. Melt 2 tablespoons butter with olive oil in a large skillet over medium-high heat and cook the chicken for 3 minutes per side until golden, then remove and set aside.
3. Add chicken broth, lemon juice, and capers to the skillet and simmer for 3 minutes, scraping up any browned bits.
4. Whisk in the remaining butter until the sauce is glossy.
5. Return the chicken to the skillet and spoon the sauce over the top, warming through for 2 minutes.
6. Garnish with parsley and serve.

### 156. Chicken Marsala

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 large boneless chicken breasts, halved and pounded thin
- 1/3 cup flour
- 8 oz mushrooms, sliced
- 1 shallot, minced
- 3/4 cup marsala wine
- 3/4 cup chicken broth
- 4 tbsp butter
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the chicken with salt and pepper and dredge in flour, shaking off the excess.
2. Melt 2 tablespoons butter with olive oil in a large skillet over medium-high heat and cook the chicken for 3 minutes per side until golden, then remove and set aside.
3. Add mushrooms and shallot to the skillet and cook until browned, about 6 minutes.
4. Pour in marsala wine and chicken broth, and simmer for 5 minutes to reduce slightly.
5. Whisk in the remaining butter until the sauce thickens slightly.
6. Return the chicken to the skillet and simmer for 3 minutes until warmed through.
7. Garnish with parsley and serve.

### 157. Baked Ziti

**Total Time:** 55 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ziti pasta
- 1 lb ground beef
- 1 onion, diced
- 3 cloves garlic, minced
- 3 cups marinara sauce
- 15 oz ricotta cheese
- 1 egg
- 2 cups shredded mozzarella cheese
- 1/2 cup grated parmesan cheese
- 2 tbsp chopped fresh basil

**Instructions:**
1. Preheat oven to 375°F (190°C).
2. Cook the ziti in salted boiling water until just shy of al dente, then drain.
3. Cook ground beef, onion, and garlic in a large skillet over medium heat until browned, about 8 minutes, then stir in marinara sauce and simmer 5 minutes.
4. Mix ricotta, egg, basil, and half the parmesan in a bowl.
5. Combine the ziti with the meat sauce and half the mozzarella, then spread half into a baking dish, dollop with the ricotta mixture, and top with the remaining ziti mixture.
6. Sprinkle with the remaining mozzarella and parmesan, cover with foil, and bake for 25 minutes, then uncover and bake 10 more minutes until golden.

### 158. Cacio e Pepe

**Total Time:** 20 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb spaghetti
- 4 tbsp butter
- 1 1/2 cups grated pecorino romano cheese
- 2 tsp coarsely ground black pepper

**Instructions:**
1. Cook spaghetti in salted boiling water according to package directions and drain, reserving 1 1/2 cups pasta water.
2. Toast the black pepper in a dry large skillet over medium heat for 1 minute until fragrant.
3. Add butter and 1/2 cup pasta water and bring to a simmer.
4. Add the spaghetti to the skillet and toss, then remove from heat.
5. Add pecorino a handful at a time, tossing constantly and adding more pasta water as needed, until the sauce is smooth and coats the pasta.
6. Serve immediately with extra black pepper.

### 159. Pasta Puttanesca

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb spaghetti
- 4 anchovy fillets, minced
- 4 cloves garlic, minced
- 1 (28 oz) can crushed tomatoes
- 1/2 cup pitted black olives, halved
- 2 tbsp capers, drained
- 1/2 tsp red pepper flakes
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Cook spaghetti in salted boiling water according to package directions and drain.
2. Heat olive oil in a large skillet over medium heat and cook anchovies and garlic until the anchovies dissolve, about 2 minutes.
3. Add red pepper flakes and crushed tomatoes and simmer for 15 minutes.
4. Stir in olives and capers and simmer 5 more minutes.
5. Toss the spaghetti with the sauce and season with black pepper.
6. Garnish with parsley and serve.

### 160. Shrimp Scampi

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb linguine
- 1 1/2 lbs large shrimp, peeled and deveined
- 5 cloves garlic, minced
- 1/2 cup dry white wine
- 1/4 cup fresh lemon juice
- 4 tbsp butter
- 1/4 tsp red pepper flakes
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Cook linguine in salted boiling water according to package directions and drain, reserving 1/2 cup pasta water.
2. Heat olive oil in a large skillet over medium-high heat and cook shrimp for 1 to 2 minutes per side until just pink, then remove and set aside.
3. Add garlic and red pepper flakes to the skillet and cook for 1 minute.
4. Pour in white wine and lemon juice and simmer for 2 minutes.
5. Whisk in butter until melted, then return the shrimp to the skillet along with the linguine, tossing to coat and adding pasta water as needed.
6. Garnish with parsley and serve immediately.

### 161. Linguine with Clams

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb linguine
- 3 lbs small clams, scrubbed
- 5 cloves garlic, minced
- 3/4 cup dry white wine
- 1/4 cup olive oil
- 1/4 tsp red pepper flakes
- 2 tbsp chopped fresh parsley
- 1 lemon, cut into wedges

**Instructions:**
1. Cook linguine in salted boiling water according to package directions and drain, reserving 1/2 cup pasta water.
2. Heat olive oil in a large pot over medium heat and cook garlic and red pepper flakes for 1 minute.
3. Add white wine and clams, cover, and cook for 5 to 7 minutes until the clams open, discarding any that do not open.
4. Add the linguine to the pot and toss with the clams and broth, adding pasta water as needed.
5. Season with salt and pepper and stir in parsley.
6. Serve with lemon wedges.

### 162. Beef Ragu with Pappardelle

**Total Time:** 2 hrs 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 lbs beef chuck roast, cut into large chunks
- 1 onion, diced
- 1 carrot, diced
- 1 celery stalk, diced
- 4 cloves garlic, minced
- 1 cup dry red wine
- 1 (28 oz) can crushed tomatoes
- 1 1/2 cups beef broth
- 1 lb pappardelle
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the beef with salt and pepper and brown in a large pot with olive oil over medium-high heat, about 8 minutes, then remove and set aside.
2. Add onion, carrot, and celery to the pot and cook until softened, about 6 minutes, then add garlic and cook 1 minute more.
3. Pour in red wine and simmer for 3 minutes, scraping up any browned bits.
4. Return the beef to the pot, add crushed tomatoes and beef broth, and bring to a simmer.
5. Cover and simmer on low heat for 2 hours, stirring occasionally, until the beef is fork-tender.
6. Shred the beef into the sauce with two forks.
7. Cook pappardelle in salted boiling water according to package directions, drain, and toss with the ragu.
8. Garnish with parsley and serve.

### 163. Stuffed Shells with Ricotta and Spinach

**Total Time:** 55 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 20 jumbo pasta shells
- 15 oz ricotta cheese
- 10 oz frozen chopped spinach, thawed and drained
- 1 egg
- 2 cups shredded mozzarella cheese
- 1/2 cup grated parmesan cheese
- 3 cups marinara sauce
- 2 cloves garlic, minced

**Instructions:**
1. Preheat oven to 375°F (190°C).
2. Cook the pasta shells in salted boiling water according to package directions until just shy of al dente, then drain.
3. Mix ricotta, spinach, egg, garlic, half the mozzarella, and half the parmesan in a bowl, and season with salt and pepper.
4. Spread 1 cup of marinara in the bottom of a baking dish.
5. Stuff each shell with the ricotta mixture and arrange in the dish.
6. Spoon the remaining marinara over the shells and top with the remaining mozzarella and parmesan.
7. Cover with foil and bake for 25 minutes, then uncover and bake 10 more minutes until bubbling.

### 164. Gnocchi with Tomato Basil Sauce

**Total Time:** 25 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb potato gnocchi
- 1 (28 oz) can crushed tomatoes
- 1 onion, diced
- 3 cloves garlic, minced
- 1/4 cup chopped fresh basil
- 1 tsp sugar
- grated parmesan cheese, for serving (optional)

**Instructions:**
1. Heat olive oil in a large skillet over medium heat and cook onion until softened, about 5 minutes, then add garlic and cook 1 minute more.
2. Add crushed tomatoes and sugar, season with salt and pepper, and simmer for 15 minutes.
3. Cook gnocchi in salted boiling water according to package directions and drain.
4. Toss the gnocchi with the sauce and stir in the basil.
5. Serve with parmesan on top if desired.

### 165. Osso Buco

**Total Time:** 2 hrs 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 veal shanks, about 1 1/2 inches thick
- 1/3 cup flour
- 1 onion, diced
- 1 carrot, diced
- 1 celery stalk, diced
- 1 cup dry white wine
- 1 1/2 cups beef broth
- 1 (14 oz) can diced tomatoes
- 1 tbsp lemon zest
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the veal shanks with salt and pepper and dredge in flour, shaking off the excess.
2. Heat olive oil in a large pot over medium-high heat and brown the shanks on all sides, about 8 minutes, then remove and set aside.
3. Add onion, carrot, and celery to the pot and cook until softened, about 6 minutes.
4. Pour in white wine and simmer for 3 minutes, scraping up any browned bits.
5. Return the shanks to the pot, add beef broth and diced tomatoes, and bring to a simmer.
6. Cover and simmer on low heat for 1 1/2 hours, turning the shanks once, until the meat is very tender.
7. Mix the lemon zest with parsley and sprinkle over the shanks before serving.

### 166. Chicken Cacciatore

**Total Time:** 55 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 bone-in chicken thighs
- 1 onion, sliced
- 2 bell peppers, sliced
- 8 oz mushrooms, sliced
- 4 cloves garlic, minced
- 1/2 cup dry white wine
- 1 (28 oz) can crushed tomatoes
- 1/3 cup pitted green olives
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the chicken thighs with salt and pepper and brown in a large skillet with olive oil over medium-high heat, about 4 minutes per side, then remove and set aside.
2. Add onion, bell peppers, and mushrooms to the skillet and cook until softened, about 8 minutes.
3. Add garlic and cook 1 minute more, then pour in white wine and simmer for 2 minutes.
4. Add crushed tomatoes and return the chicken to the skillet.
5. Cover and simmer on low heat for 30 minutes until the chicken is cooked through.
6. Stir in olives and simmer 5 more minutes.
7. Garnish with parsley and serve.

### 167. Pasta Primavera

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb penne
- 1 zucchini, sliced
- 1 bell pepper, sliced
- 1 carrot, julienned
- 1 cup cherry tomatoes, halved
- 1 cup frozen peas
- 3 cloves garlic, minced
- 1/4 cup vegetable broth
- 2 tbsp chopped fresh basil
- grated parmesan cheese, for serving (optional)

**Instructions:**
1. Cook penne in salted boiling water according to package directions and drain, reserving 1/2 cup pasta water.
2. Heat olive oil in a large skillet over medium-high heat and cook zucchini, bell pepper, and carrot until just tender, about 6 minutes.
3. Add garlic and cherry tomatoes and cook 2 minutes more.
4. Stir in peas and vegetable broth and simmer for 3 minutes.
5. Add the penne to the skillet and toss to combine, adding pasta water as needed.
6. Season with salt and pepper, stir in basil, and serve with parmesan if desired.

### 168. Greek Moussaka

**Total Time:** 1 hr 30 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 medium eggplants, sliced into 1/2-inch rounds
- 1 lb ground lamb
- 1 onion, diced
- 3 cloves garlic, minced
- 1 (14 oz) can diced tomatoes
- 2 tbsp tomato paste
- 1 tsp cinnamon
- 3 tbsp butter
- 3 tbsp flour
- 2 cups milk
- 1/2 cup grated parmesan cheese
- 1 egg

**Instructions:**
1. Preheat oven to 400°F (200°C).
2. Salt the eggplant slices and let sit for 10 minutes, then pat dry and brush with olive oil.
3. Arrange the eggplant on a baking sheet and roast for 20 minutes, flipping halfway, until softened.
4. Cook ground lamb, onion, and garlic in a large skillet over medium heat until browned, about 8 minutes, then stir in diced tomatoes, tomato paste, and cinnamon and simmer 10 minutes.
5. Melt butter in a saucepan over medium heat, whisk in flour, and cook 1 minute, then slowly whisk in milk and simmer until thickened, about 5 minutes; remove from heat and whisk in parmesan and egg.
6. Layer half the eggplant in a baking dish, top with the lamb mixture, then the remaining eggplant, and pour the white sauce over the top.
7. Bake for 35 minutes until golden on top, then let rest for 10 minutes before serving.

### 169. Chicken Souvlaki with Lemon Potatoes

**Total Time:** 45 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs boneless chicken breast, cubed
- 1/4 cup fresh lemon juice
- 3 tbsp olive oil
- 3 cloves garlic, minced
- 1 tsp dried oregano
- 4 medium potatoes, cut into wedges
- 1 cup plain yogurt
- 1/2 cucumber, grated and squeezed dry
- 1 tbsp chopped fresh dill

**Instructions:**
1. Preheat oven to 425°F (220°C).
2. Toss the potato wedges with olive oil, salt, and pepper on a baking sheet and roast for 30 minutes, flipping once, until golden.
3. Mix lemon juice, 2 tablespoons olive oil, garlic, and oregano in a bowl, add the chicken cubes, and marinate for at least 20 minutes.
4. Thread the chicken onto skewers and grill or pan-sear over medium-high heat for 3 to 4 minutes per side until cooked through.
5. Mix yogurt, cucumber, dill, and a pinch of salt to make the sauce.
6. Serve the chicken skewers with the lemon potatoes and yogurt sauce.

### 170. Lamb Gyro Platter

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground lamb
- 1 small onion, grated and squeezed dry
- 3 cloves garlic, minced
- 1 tsp dried oregano
- 1 tsp ground cumin
- 4 pita breads
- 1 cup plain yogurt
- 1/2 cucumber, grated and squeezed dry
- 1 tomato, sliced
- 1/2 red onion, thinly sliced

**Instructions:**
1. Mix ground lamb, grated onion, half the garlic, oregano, cumin, salt, and pepper in a bowl.
2. Shape the mixture into patties or logs and cook in a skillet with olive oil over medium-high heat for 4 to 5 minutes per side until cooked through.
3. Mix yogurt, cucumber, remaining garlic, and a pinch of salt to make tzatziki.
4. Warm the pita breads in a dry skillet or oven for 1 minute per side.
5. Slice the lamb and serve on the pitas with tzatziki, tomato, and red onion.

### 171. Spanakopita

**Total Time:** 1 hr

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb frozen chopped spinach, thawed and drained
- 8 oz feta cheese, crumbled
- 1 onion, diced
- 3 green onions, chopped
- 2 eggs, beaten
- 2 tbsp chopped fresh dill
- 1/2 cup melted butter
- 12 sheets phyllo dough

**Instructions:**
1. Preheat oven to 375°F (190°C).
2. Heat olive oil in a skillet over medium heat and cook onion and green onions until softened, about 5 minutes.
3. Mix in spinach, feta, eggs, and dill in a bowl, and season with salt and pepper.
4. Brush a baking dish with melted butter and layer half the phyllo sheets, brushing each with butter.
5. Spread the spinach filling over the phyllo, then top with the remaining phyllo sheets, brushing each with butter.
6. Score the top layer into squares and bake for 35 to 40 minutes until golden and crisp.
7. Let cool for 10 minutes before cutting along the scored lines.

### 172. Paella Valenciana

**Total Time:** 1 hr

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs bone-in chicken thighs, cut into pieces
- 1/2 lb large shrimp, peeled and deveined
- 1/2 lb mussels, scrubbed
- 1 1/2 cups short-grain rice
- 1 onion, diced
- 1 red bell pepper, sliced
- 3 cloves garlic, minced
- 1 (14 oz) can diced tomatoes
- 1/2 tsp saffron threads
- 4 cups chicken broth
- 1/2 cup green beans, trimmed
- lemon wedges, for serving

**Instructions:**
1. Heat olive oil in a large wide pan over medium-high heat and brown the chicken pieces on all sides, about 8 minutes, then remove and set aside.
2. Add onion and bell pepper to the pan and cook until softened, about 6 minutes, then add garlic and cook 1 minute more.
3. Stir in diced tomatoes and cook for 5 minutes.
4. Add rice, saffron, and green beans, stirring to coat the rice.
5. Pour in chicken broth, return the chicken to the pan, and bring to a simmer; cook uncovered on low heat for 18 to 20 minutes without stirring.
6. Nestle the shrimp and mussels into the rice and cook for 6 to 8 minutes more until the shrimp are pink and the mussels open, discarding any that do not open.
7. Let rest for 5 minutes and serve with lemon wedges.

### 173. Moroccan Chicken Tagine with Olives

**Total Time:** 1 hr 10 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 bone-in chicken thighs
- 1 onion, sliced
- 3 cloves garlic, minced
- 1 tsp ground cumin
- 1 tsp ground ginger
- 1/2 tsp cinnamon
- 1/4 tsp saffron threads
- 1 1/2 cups chicken broth
- 1 lemon, quartered
- 1 cup green olives
- 2 tbsp chopped fresh cilantro

**Instructions:**
1. Season the chicken thighs with salt and pepper and brown in a large pot with olive oil over medium-high heat, about 4 minutes per side, then remove and set aside.
2. Add onion to the pot and cook until softened, about 6 minutes, then add garlic, cumin, ginger, cinnamon, and saffron and cook 1 minute more.
3. Pour in chicken broth and return the chicken to the pot.
4. Add the lemon quarters, cover, and simmer on low heat for 40 minutes until the chicken is tender.
5. Stir in olives and simmer 5 more minutes.
6. Garnish with cilantro and serve.

### 174. Mediterranean Stuffed Bell Peppers

**Total Time:** 55 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 large bell peppers, tops cut off and seeded
- 1 1/2 cups cooked rice
- 1 (15 oz) can chickpeas, drained and rinsed
- 1 (14 oz) can diced tomatoes, drained
- 1/2 onion, diced
- 3 cloves garlic, minced
- 1/4 cup chopped fresh parsley
- 2 tbsp chopped fresh mint
- 2 tbsp lemon juice
- 1 tsp ground cumin

**Instructions:**
1. Preheat oven to 375°F (190°C).
2. Heat olive oil in a skillet over medium heat and cook onion until softened, about 5 minutes, then add garlic and cook 1 minute more.
3. Stir in chickpeas, diced tomatoes, and cumin and cook for 5 minutes.
4. Remove from heat and mix in the cooked rice, parsley, mint, and lemon juice, and season with salt and pepper.
5. Stuff the mixture into the bell peppers and stand them upright in a baking dish.
6. Add 1/2 inch of water to the bottom of the dish, cover with foil, and bake for 35 minutes until the peppers are tender.

### 175. Lemon Herb Roast Chicken with Potatoes

**Total Time:** 1 hr 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 whole chicken, about 4 lbs
- 2 lemons, one sliced and one juiced
- 4 cloves garlic, smashed
- 2 tbsp chopped fresh rosemary
- 2 tbsp chopped fresh thyme
- 1/4 cup olive oil
- 1 1/2 lbs baby potatoes, halved

**Instructions:**
1. Preheat oven to 425°F (220°C).
2. Pat the chicken dry and rub with olive oil, lemon juice, garlic, rosemary, thyme, salt, and pepper, inside and out.
3. Stuff the cavity with lemon slices and tie the legs together with kitchen string.
4. Arrange the potatoes around the chicken in a roasting pan and drizzle with olive oil, salt, and pepper.
5. Roast for 1 hour to 1 hour 15 minutes, until a thermometer inserted in the thigh reads 165°F (74°C), basting the potatoes once halfway through.
6. Let the chicken rest for 10 minutes before carving and serve with the potatoes.

### 176. Falafel Platter with Tahini and Salad

**Total Time:** 1 hr

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 (15 oz) cans chickpeas, drained and rinsed
- 1/2 onion, diced
- 3 cloves garlic, minced
- 1/2 cup chopped fresh parsley
- 1/4 cup chopped fresh cilantro
- 1 tsp ground cumin
- 1 tsp ground coriander
- 1/4 cup flour
- 1/4 cup tahini
- 2 tbsp lemon juice
- 4 cups mixed salad greens
- 1 tomato, diced
- 1/2 cucumber, diced

**Instructions:**
1. Pulse chickpeas, onion, garlic, parsley, cilantro, cumin, and coriander in a food processor until finely chopped but not pureed.
2. Mix in flour, season with salt and pepper, and chill the mixture for 20 minutes.
3. Shape the mixture into small patties.
4. Heat a shallow layer of olive oil in a skillet over medium heat and fry the patties for 3 to 4 minutes per side until golden and crisp.
5. Whisk tahini with lemon juice and a few tablespoons of water until smooth to make the sauce.
6. Toss the salad greens with tomato and cucumber.
7. Serve the falafel over the salad, drizzled with tahini sauce.

### 177. Beef Tacos with Pico de Gallo

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 8 small corn tortillas
- 1 tbsp chili powder
- 1 tsp cumin
- 1/2 tsp oregano
- 2 tomatoes, diced
- 1/2 white onion, diced
- 1 jalapeno, minced
- 1/4 cup cilantro, chopped
- 1 lime, juiced
- 1/2 cup shredded lettuce
- 1/2 cup shredded cheese (optional)

**Instructions:**
1. Heat a skillet over medium-high heat and brown the ground beef, about 6 minutes, breaking it up as it cooks.
2. Drain excess fat, then stir in chili powder, cumin, oregano, and a pinch of salt. Add 1/4 cup water and simmer 5 minutes.
3. Make pico de gallo by combining tomatoes, onion, jalapeno, cilantro, and lime juice in a bowl. Season with salt.
4. Warm the tortillas in a dry skillet or over a flame, about 20 seconds per side.
5. Fill tortillas with beef, top with pico de gallo, lettuce, and cheese if using.

### 178. Chicken Enchiladas Verdes

**Total Time:** 40 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked, shredded chicken
- 8 corn tortillas
- 2 cups green enchilada sauce (salsa verde)
- 1 cup shredded Monterey Jack cheese
- 1/2 white onion, diced
- 1/2 cup sour cream (optional)
- 1/4 cup chopped cilantro
- 1 tbsp vegetable oil

**Instructions:**
1. Preheat the oven to 375F (190C). Spread 1/2 cup of the green sauce in the bottom of a baking dish.
2. Warm the tortillas briefly in a skillet so they roll without cracking.
3. In a bowl, mix the shredded chicken with onion and 1/2 cup of the green sauce.
4. Fill each tortilla with the chicken mixture, roll, and place seam-side down in the baking dish.
5. Pour the remaining green sauce over the enchiladas and top with cheese.
6. Bake for 20 minutes, until the cheese is melted and bubbling.
7. Top with cilantro and sour cream if using before serving.

### 179. Beef Enchiladas Rojas

**Total Time:** 45 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 8 corn tortillas
- 2 cups red enchilada sauce
- 1 1/2 cups shredded cheddar cheese
- 1/2 onion, diced
- 1 tbsp vegetable oil
- 1/4 cup chopped cilantro
- 1/2 tsp cumin

**Instructions:**
1. Heat oil in a skillet over medium heat and cook the onion until soft, about 4 minutes.
2. Add the ground beef and cumin, and cook until browned, about 7 minutes. Drain excess fat.
3. Preheat the oven to 375F (190C). Spread 1/2 cup red sauce in the bottom of a baking dish.
4. Warm the tortillas, then dip each in the remaining red sauce.
5. Fill each tortilla with the beef mixture, roll, and place in the baking dish.
6. Top with the remaining sauce and cheese, then bake for 20 minutes until bubbling.
7. Garnish with cilantro before serving.

### 180. Carne Asada with Charred Salsa

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1.5 lb skirt or flank steak
- 3 limes, juiced
- 1/4 cup orange juice
- 3 cloves garlic, minced
- 1 tsp cumin
- 4 Roma tomatoes
- 2 jalapenos
- 1/2 white onion, quartered
- 1/4 cup chopped cilantro
- 8 corn tortillas

**Instructions:**
1. Combine lime juice, orange juice, garlic, cumin, and a pinch of salt in a bowl. Pour over the steak and marinate at room temperature for 20 minutes.
2. Heat a grill or grill pan over high heat. Char the tomatoes, jalapenos, and onion, turning occasionally, about 8 minutes, until blackened in spots.
3. Blend the charred vegetables with cilantro and salt to taste to make the salsa.
4. Remove the steak from the marinade and pat dry. Grill 3 to 4 minutes per side for medium-rare.
5. Let the steak rest 5 minutes, then slice thinly against the grain.
6. Warm the tortillas and serve the steak with the charred salsa.

### 181. Baja Fish Tacos

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb white fish fillets (cod or tilapia), cut into strips
- 1 cup flour
- 1 tsp baking powder
- 3/4 cup beer or sparkling water
- Vegetable oil, for frying
- 2 cups shredded cabbage
- 1/2 cup mayonnaise
- 1 tbsp chipotle sauce
- 1 lime, juiced
- 8 small corn tortillas

**Instructions:**
1. Whisk together flour, baking powder, and a pinch of salt. Stir in the beer until a smooth batter forms.
2. Heat 1 inch of oil in a deep skillet to 350F (175C).
3. Dip the fish strips in the batter and fry in batches, 3 to 4 minutes, until golden. Drain on paper towels.
4. Mix mayonnaise, chipotle sauce, and half the lime juice to make the crema.
5. Toss the cabbage with the remaining lime juice and a pinch of salt.
6. Warm the tortillas and fill with fried fish, cabbage slaw, and chipotle crema.

### 182. Shrimp Tacos with Chipotle Crema

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb shrimp, peeled and deveined
- 1 tbsp olive oil
- 1 tsp chili powder
- 1/2 tsp cumin
- 1/2 cup sour cream
- 2 tbsp mayonnaise
- 1 tbsp chipotle sauce (or 1 minced chipotle in adobo)
- 1 lime, juiced
- 2 cups shredded cabbage
- 8 small corn tortillas

**Instructions:**
1. Toss the shrimp with olive oil, chili powder, cumin, and a pinch of salt.
2. Heat a skillet over medium-high heat and cook the shrimp 2 to 3 minutes per side, until pink and opaque.
3. Whisk together sour cream, mayonnaise, chipotle sauce, and half the lime juice for the crema.
4. Toss the cabbage with the remaining lime juice and a pinch of salt.
5. Warm the tortillas and fill with shrimp, cabbage, and chipotle crema.

### 183. Chicken Tinga Tostadas

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked, shredded chicken
- 2 tomatoes, chopped
- 1/2 white onion, sliced
- 2 chipotle peppers in adobo, chopped
- 1 tbsp adobo sauce (from the can)
- 1 cup chicken broth
- 8 tostada shells
- 1 cup refried beans (optional)
- 1/2 avocado, sliced
- 1/4 cup chopped cilantro

**Instructions:**
1. Heat a splash of oil in a skillet over medium heat and cook half the onion until soft, about 4 minutes.
2. Add the tomatoes, chipotle peppers, adobo sauce, and chicken broth. Simmer 8 minutes, then blend or mash into a chunky sauce.
3. Stir the shredded chicken into the sauce and simmer 5 minutes, until heated through and coated.
4. Spread refried beans on each tostada shell, if using.
5. Top with the chicken tinga, remaining onion, avocado, and cilantro.

### 184. Carnitas Tacos

**Total Time:** 3 hrs 30 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 3 lb pork shoulder, cut into large chunks
- 1 onion, quartered
- 4 cloves garlic, smashed
- 1 orange, halved
- 2 bay leaves
- 1 tsp cumin
- 1 tsp oregano
- 8 corn tortillas
- 1/2 cup diced onion, for serving
- 1/4 cup chopped cilantro, for serving
- 2 limes, cut into wedges

**Instructions:**
1. Preheat the oven to 300F (150C). Season the pork chunks generously with salt, cumin, and oregano.
2. Place the pork in a Dutch oven with the onion, garlic, orange halves, and bay leaves. Add enough water to reach halfway up the meat.
3. Cover and cook in the oven for 3 hours, until the pork is very tender and shreds easily.
4. Remove the pork, discard the orange and bay leaves, and shred the meat with two forks.
5. Heat a skillet over high heat and crisp the shredded pork in batches, about 4 minutes per batch, until browned at the edges.
6. Warm the tortillas and serve the carnitas with diced onion, cilantro, and lime wedges.

### 185. Texas Chili Con Carne

**Total Time:** 1 hr 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 lb beef chuck, cut into small cubes
- 1 onion, diced
- 2 tbsp chili powder
- 1 tbsp cumin
- 1 tbsp tomato paste
- 2 cups beef broth
- 1 (14 oz) can diced tomatoes
- 2 dried ancho chiles, stemmed and seeded
- 1 tbsp masa harina or flour (for thickening)
- Shredded cheese, for serving (optional)
- Sour cream, for serving (optional)

**Instructions:**
1. Heat a splash of oil in a large pot over medium-high heat and brown the beef in batches, about 8 minutes total. Set aside.
2. Add the onion to the pot and cook until soft, about 5 minutes.
3. Stir in chili powder, cumin, and tomato paste, and cook 1 minute.
4. Return the beef to the pot along with the broth, diced tomatoes, and dried chiles. Bring to a simmer.
5. Cover and simmer on low for 1 hour, stirring occasionally, until the beef is tender.
6. Remove the dried chiles, stir in the masa harina to thicken, and simmer 5 more minutes.
7. Serve topped with cheese and sour cream if using.

### 186. Vegetarian Black Bean Chili

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 tbsp olive oil
- 1 onion, diced
- 1 red bell pepper, diced
- 2 (15 oz) cans black beans, drained
- 1 (14 oz) can diced tomatoes
- 1 cup vegetable broth
- 1 tbsp chili powder
- 1 tsp cumin
- 1 tbsp tomato paste
- 1 cup corn kernels
- Shredded cheese, for serving (optional)
- Chopped cilantro, for serving

**Instructions:**
1. Heat the olive oil in a large pot over medium heat and cook the onion and bell pepper until soft, about 6 minutes.
2. Stir in the chili powder, cumin, and tomato paste, and cook 1 minute.
3. Add the black beans, diced tomatoes, and vegetable broth. Bring to a simmer.
4. Cover and simmer 20 minutes, stirring occasionally.
5. Stir in the corn and simmer 5 more minutes.
6. Serve topped with cheese and cilantro if using.

### 187. Elote Chicken Rice Bowl

**Total Time:** 30 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb chicken breast, cut into strips
- 2 cups cooked white rice
- 2 cups corn kernels (fresh or frozen)
- 2 tbsp mayonnaise
- 1/4 cup crumbled cotija cheese
- 1 tsp chili powder
- 1/2 tsp cumin
- 1 lime, juiced
- 1/4 cup chopped cilantro

**Instructions:**
1. Season the chicken strips with chili powder, cumin, and a pinch of salt.
2. Heat a splash of oil in a skillet over medium-high heat and cook the chicken 5 to 6 minutes per side, until cooked through. Slice and set aside.
3. In the same skillet, cook the corn over medium-high heat until lightly charred, about 6 minutes.
4. Stir the mayonnaise, half the lime juice, and half the cotija into the corn.
5. Divide the rice among bowls, top with the sliced chicken and elote corn.
6. Sprinkle with the remaining cotija, cilantro, and remaining lime juice.

### 188. Arroz con Pollo

**Total Time:** 50 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 chicken thighs, bone-in
- 1 cup long-grain rice
- 1/2 onion, diced
- 1 red bell pepper, diced
- 2 cloves garlic, minced
- 2 cups chicken broth
- 1/2 cup tomato sauce
- 1 tsp cumin
- 1/4 cup green olives, sliced
- 1/4 cup frozen peas
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet or Dutch oven over medium-high heat. Season the chicken with salt and cumin and brown on both sides, about 8 minutes total. Remove and set aside.
2. Add the onion, bell pepper, and garlic to the same pan and cook until soft, about 5 minutes.
3. Stir in the rice and cook 1 minute to coat it in the fat.
4. Add the chicken broth, tomato sauce, and olives. Return the chicken to the pan.
5. Bring to a simmer, cover, and cook on low for 20 minutes, until the rice is tender and the chicken is cooked through.
6. Stir in the peas, cover, and let sit off heat for 5 minutes before serving.

### 189. Cuban Black Beans and Rice

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 tbsp olive oil
- 1/2 onion, diced
- 1/2 green bell pepper, diced
- 3 cloves garlic, minced
- 2 (15 oz) cans black beans, with liquid
- 1 tsp cumin
- 1 tsp oregano
- 1 tbsp vinegar
- 1 bay leaf
- 2 cups cooked white rice

**Instructions:**
1. Heat the olive oil in a saucepan over medium heat and cook the onion and bell pepper until soft, about 6 minutes.
2. Add the garlic and cook 1 minute more.
3. Stir in the black beans with their liquid, cumin, oregano, and bay leaf. Bring to a simmer.
4. Cover and simmer 15 minutes, mashing a few beans against the side of the pan to thicken the liquid.
5. Remove the bay leaf and stir in the vinegar. Season with salt to taste.
6. Serve the beans over the rice.

### 190. Ropa Vieja

**Total Time:** 2 hrs 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 lb flank steak
- 1 onion, sliced
- 1 red bell pepper, sliced
- 1 green bell pepper, sliced
- 3 cloves garlic, minced
- 1 (14 oz) can diced tomatoes
- 2 cups beef broth
- 1/4 cup pimento-stuffed green olives
- 1 tsp cumin
- 1 bay leaf

**Instructions:**
1. Season the flank steak with salt and cumin. Heat a splash of oil in a large pot over medium-high heat and brown the steak on both sides, about 6 minutes. Remove and set aside.
2. Add the onion and garlic to the pot and cook until soft, about 5 minutes.
3. Return the steak to the pot with the diced tomatoes, beef broth, and bay leaf. Bring to a simmer.
4. Cover and simmer on low for 1 hour 30 minutes, until the steak is tender enough to shred.
5. Remove the steak, shred with two forks, and discard the bay leaf.
6. Return the shredded steak to the pot with the bell peppers and olives. Simmer uncovered 15 minutes, until the peppers soften.

### 191. Picadillo

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1.5 lb ground beef
- 1/2 onion, diced
- 1/2 green bell pepper, diced
- 3 cloves garlic, minced
- 1 (14 oz) can diced tomatoes
- 1 medium potato, diced small
- 1/4 cup raisins
- 1/4 cup green olives, sliced
- 1 tsp cumin
- 1 tbsp tomato paste

**Instructions:**
1. Heat a splash of oil in a large skillet over medium heat and cook the onion, bell pepper, and garlic until soft, about 5 minutes.
2. Add the ground beef and cumin, and cook until browned, about 7 minutes, breaking it up as it cooks.
3. Stir in the diced tomatoes, tomato paste, and potato. Bring to a simmer.
4. Cover and simmer 15 minutes, until the potato is tender.
5. Stir in the raisins and olives and simmer 5 more minutes, uncovered.
6. Season with salt to taste before serving.

### 192. Pollo Asado with Lime Rice

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 chicken thighs, boneless
- 3 limes, juiced
- 1/4 cup orange juice
- 3 cloves garlic, minced
- 1 tsp cumin
- 1 tsp oregano
- 1 cup long-grain rice
- 2 cups chicken broth
- 1/4 cup chopped cilantro

**Instructions:**
1. Combine lime juice, orange juice, garlic, cumin, oregano, and a pinch of salt. Pour over the chicken and marinate 15 minutes.
2. Meanwhile, combine the rice and chicken broth in a saucepan. Bring to a boil, then cover and simmer on low 15 minutes, until the liquid is absorbed.
3. Heat a splash of oil in a skillet over medium-high heat. Remove the chicken from the marinade and cook 6 to 7 minutes per side, until cooked through.
4. Let the chicken rest 5 minutes, then slice.
5. Fluff the rice and stir in the cilantro and a squeeze of lime juice.
6. Serve the sliced chicken over the lime rice.

### 193. Chicken Mole Poblano

**Total Time:** 1 hr 15 mins

**Dietary:** Dairy-free · Pork-free

**Ingredients:**
- 4 chicken thighs, bone-in
- 3 dried ancho chiles, stemmed and seeded
- 2 dried pasilla chiles, stemmed and seeded
- 1/2 onion, chopped
- 2 cloves garlic
- 2 tbsp almonds
- 1 tbsp sesame seeds, plus more for garnish
- 1 corn tortilla, torn
- 1 oz dark chocolate, chopped
- 2 cups chicken broth
- 1 tomato, chopped

**Instructions:**
1. Toast the dried chiles in a dry skillet over medium heat for 1 minute per side, then soak in hot water 15 minutes to soften.
2. In the same skillet, toast the almonds and sesame seeds for 2 minutes, until fragrant. Set aside a pinch of sesame seeds for garnish.
3. Blend the soaked chiles, onion, garlic, almonds, sesame seeds, torn tortilla, and tomato with 1 cup of the chicken broth until smooth.
4. Heat a splash of oil in a large pot over medium heat. Pour in the blended sauce and cook 5 minutes, stirring often.
5. Add the remaining chicken broth and the chocolate, stirring until the chocolate melts and the sauce thickens slightly.
6. Season the chicken with salt and nestle it into the sauce. Cover and simmer 35 minutes, until the chicken is cooked through.
7. Garnish with the reserved sesame seeds before serving.

### 194. Skillet Tamale Pie

**Total Time:** 50 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1/2 onion, diced
- 1 (15 oz) can black beans, drained
- 1 cup corn kernels
- 1 cup enchilada sauce
- 1 cup cornmeal
- 1 cup milk
- 1 egg
- 2 tbsp butter, melted
- 1 tsp baking powder
- 1 cup shredded cheddar cheese

**Instructions:**
1. Preheat the oven to 400F (200C).
2. Heat a splash of oil in an oven-safe skillet over medium heat and cook the onion until soft, about 4 minutes. Add the ground beef and cook until browned, about 7 minutes.
3. Stir in the black beans, corn, and enchilada sauce, and simmer 5 minutes. Spread evenly in the skillet.
4. Whisk together the cornmeal, baking powder, milk, egg, and melted butter to make the cornbread batter.
5. Pour the batter over the beef mixture and sprinkle with cheese.
6. Bake for 25 minutes, until the cornbread topping is golden and set.

### 195. Chiles Rellenos

**Total Time:** 45 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 6 poblano peppers
- 2 cups shredded Monterey Jack cheese
- 4 eggs, separated
- 1/2 cup flour
- Vegetable oil, for frying
- 2 cups tomato sauce
- 1/2 onion, chopped
- 1 clove garlic, minced

**Instructions:**
1. Char the poblano peppers over a gas flame or under a broiler, turning until blackened on all sides, about 8 minutes. Place in a covered bowl to steam 10 minutes, then peel off the skins.
2. Slit each pepper lengthwise and remove the seeds, leaving the stem intact. Stuff each pepper with cheese.
3. Beat the egg whites to stiff peaks, then fold in the yolks.
4. Dust each stuffed pepper with flour, then dip in the egg mixture to coat.
5. Heat 1/2 inch of oil in a skillet over medium heat and fry the peppers 3 to 4 minutes per side, until golden.
6. For the sauce, cook the onion and garlic in a splash of oil until soft, then add the tomato sauce and simmer 10 minutes.
7. Serve the fried peppers topped with the tomato sauce.

### 196. Chicken Pozole Rojo

**Total Time:** 1 hr

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1.5 lb chicken thighs, bone-in
- 4 cups chicken broth
- 1 (28 oz) can hominy, drained
- 3 dried guajillo chiles, stemmed and seeded
- 1/2 onion, chopped
- 2 cloves garlic
- 1 cup shredded cabbage, for serving
- 2 radishes, thinly sliced, for serving
- 1 lime, cut into wedges, for serving
- 1/4 cup chopped cilantro, for serving

**Instructions:**
1. Soak the dried chiles in hot water for 15 minutes to soften, then drain.
2. Bring the chicken broth to a boil in a large pot, add the chicken thighs, and simmer 25 minutes, until cooked through. Remove the chicken, shred the meat, and reserve the broth.
3. Blend the softened chiles, onion, and garlic with 1 cup of the reserved broth until smooth.
4. Strain the blended mixture into the pot of broth and bring to a simmer.
5. Add the shredded chicken and hominy, and simmer 15 minutes.
6. Season with salt to taste and serve topped with cabbage, radishes, lime, and cilantro.

### 197. Peruvian Lomo Saltado

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb sirloin steak, cut into strips
- 2 tomatoes, cut into wedges
- 1 red onion, sliced
- 2 tbsp soy sauce
- 1 tbsp red wine vinegar
- 2 cups frozen french fries, cooked according to package
- 2 cups cooked white rice
- 1/4 cup chopped cilantro

**Instructions:**
1. Season the steak strips with salt and pepper.
2. Heat a splash of oil in a large skillet or wok over high heat and sear the steak in batches, about 2 minutes per batch. Set aside.
3. In the same skillet, cook the onion for 2 minutes, then add the tomatoes and cook 2 more minutes.
4. Return the steak to the skillet, add the soy sauce and vinegar, and toss to combine.
5. Stir in the cooked fries and toss gently to coat without crushing them.
6. Sprinkle with cilantro and serve with rice.

### 198. Chimichurri Skirt Steak

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1.5 lb skirt steak
- 1 cup chopped parsley
- 2 cloves garlic, minced
- 2 tbsp red wine vinegar
- 1/2 cup olive oil
- 1/2 tsp red pepper flakes
- 1 tsp oregano

**Instructions:**
1. Combine the parsley, garlic, vinegar, olive oil, red pepper flakes, and oregano in a bowl. Season with salt and set aside.
2. Season the steak with salt and pepper on both sides.
3. Heat a grill or skillet over high heat and cook the steak 3 to 4 minutes per side for medium-rare.
4. Let the steak rest 5 minutes, then slice thinly against the grain.
5. Spoon the chimichurri over the sliced steak before serving.

### 199. Beef Empanadas

**Total Time:** 1 hr 10 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef
- 1/2 onion, diced
- 1 (14 oz) can diced tomatoes, drained
- 1/4 cup green olives, sliced
- 1 tsp cumin
- 2 cups flour
- 1/2 cup butter, cold and cubed
- 1 egg, beaten (for the dough and for egg wash)
- 1/2 cup cold water

**Instructions:**
1. Combine the flour and a pinch of salt in a bowl. Rub in the cold butter until the mixture looks like coarse crumbs.
2. Stir in the egg and enough cold water to form a smooth dough. Wrap and chill 20 minutes.
3. Heat a splash of oil in a skillet over medium heat and cook the onion until soft, about 4 minutes. Add the ground beef and cumin, and cook until browned, about 7 minutes.
4. Stir in the diced tomatoes and olives, and simmer 5 minutes. Let the filling cool slightly.
5. Preheat the oven to 400F (200C). Roll out the dough and cut into 6-inch circles.
6. Spoon filling onto each circle, fold over, and crimp the edges with a fork. Brush with egg wash.
7. Bake for 20 minutes, until golden brown.

### 200. Cheese Pupusas with Curtido

**Total Time:** 45 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups masa harina
- 1 1/2 cups warm water
- 1/2 tsp salt
- 1 1/2 cups shredded mozzarella or quesillo cheese
- 2 cups shredded cabbage
- 1 carrot, grated
- 1/4 cup vinegar
- 1/2 tsp oregano
- 1/4 onion, thinly sliced

**Instructions:**
1. For the curtido, combine the cabbage, carrot, onion, vinegar, oregano, and a pinch of salt in a bowl. Let sit at room temperature at least 20 minutes.
2. Mix the masa harina, warm water, and salt in a bowl until a soft, pliable dough forms. Let rest 10 minutes.
3. Divide the dough into 6 balls. Flatten each into a disc, place a spoonful of cheese in the center, and fold the edges up around it.
4. Pat each stuffed ball back into a flat disc, sealing the cheese inside.
5. Heat a dry griddle or skillet over medium heat and cook each pupusa 4 to 5 minutes per side, until golden brown spots appear.
6. Serve warm topped with the curtido.

### 201. Camarones a la Diabla

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1.5 lb shrimp, peeled and deveined
- 3 dried chiles de arbol, stemmed
- 2 tomatoes, chopped
- 1/4 onion, chopped
- 2 cloves garlic
- 2 tbsp olive oil
- 1 tbsp tomato paste
- 1 tbsp lime juice

**Instructions:**
1. Soak the dried chiles in hot water for 10 minutes to soften, then drain.
2. Blend the softened chiles, tomatoes, onion, garlic, and tomato paste until smooth.
3. Heat the olive oil in a skillet over medium heat and pour in the blended sauce. Simmer 8 minutes, until slightly thickened.
4. Season the sauce with salt and stir in the lime juice.
5. Add the shrimp to the sauce and cook 4 to 5 minutes, until pink and opaque.
6. Serve hot with rice or tortillas.

### 202. Vegetarian Enchilada Casserole

**Total Time:** 45 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 8 corn tortillas, cut into quarters
- 2 (15 oz) cans black beans, drained
- 1 cup corn kernels
- 2 cups red enchilada sauce
- 2 cups shredded Monterey Jack cheese
- 1/2 onion, diced
- 1/4 cup chopped cilantro

**Instructions:**
1. Preheat the oven to 375F (190C).
2. Spread a thin layer of enchilada sauce in the bottom of a baking dish.
3. Layer a third of the tortilla pieces, followed by a third of the black beans, corn, onion, sauce, and cheese. Repeat to make three layers, ending with cheese.
4. Cover with foil and bake for 20 minutes.
5. Uncover and bake 10 more minutes, until the cheese is bubbling and lightly browned.
6. Let sit 5 minutes, then top with cilantro before serving.

### 203. Chicken Fried Rice

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked and chilled long-grain rice
- 1 lb boneless chicken breast, diced small
- 2 large eggs, beaten
- 1/2 cup frozen peas and carrots
- 3 green onions, sliced
- 1 small onion, diced
- 3 tbsp soy sauce
- 1 tbsp sesame oil
- 2 tbsp vegetable oil

**Instructions:**
1. Heat 1 tbsp vegetable oil in a large skillet or wok over medium-high heat. Add the chicken and cook for 5-6 minutes until browned and cooked through. Remove and set aside.
2. Add another 1 tbsp oil to the pan and pour in the eggs. Scramble until just set, about 1 minute, then push to one side.
3. Add the onion, peas, and carrots. Cook for 3 minutes until the onion softens.
4. Add the cold rice, breaking up any clumps. Stir-fry for 4-5 minutes until heated through.
5. Return the chicken and eggs to the pan. Add soy sauce and sesame oil and toss to coat evenly.
6. Stir in green onions and cook 1 more minute. Serve hot.

### 204. Kung Pao Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into bite-size pieces
- 1/2 cup roasted peanuts
- 1 red bell pepper, diced
- 3 dried red chilies, halved
- 3 green onions, cut into 1-inch pieces
- 2 tbsp soy sauce
- 1 tbsp rice vinegar
- 1 tbsp hoisin sauce
- 1 tsp cornstarch
- 2 tbsp vegetable oil

**Instructions:**
1. Toss the chicken with 1 tsp cornstarch and 1 tbsp soy sauce. Let sit for 10 minutes.
2. Mix remaining soy sauce, rice vinegar, and hoisin sauce in a small bowl for the sauce.
3. Heat oil in a wok over high heat. Add dried chilies and stir for 30 seconds until fragrant.
4. Add chicken and stir-fry for 5-6 minutes until browned and cooked through.
5. Add bell pepper and green onions, stir-fry for 2 minutes.
6. Pour in the sauce and toss until it thickens slightly, about 1 minute.
7. Stir in peanuts and serve immediately.

### 205. General Tso's Chicken

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into chunks
- 1/2 cup cornstarch, plus 1 tsp for sauce
- 1 large egg, beaten
- 3 tbsp soy sauce
- 2 tbsp rice vinegar
- 3 tbsp sugar
- 1 tbsp tomato paste
- 2 dried red chilies, chopped
- 3 green onions, sliced
- vegetable oil for frying

**Instructions:**
1. Toss chicken pieces in beaten egg, then dredge in the 1/2 cup cornstarch until coated.
2. Heat about 1/2 inch of oil in a skillet over medium-high heat. Fry chicken in batches for 4-5 minutes per batch until golden and crisp. Drain on paper towels.
3. In a small bowl, whisk soy sauce, rice vinegar, sugar, tomato paste, and 1 tsp cornstarch with 3 tbsp water.
4. Heat 1 tbsp oil in a clean pan. Add dried chilies and stir for 30 seconds.
5. Pour in the sauce mixture and simmer for 2 minutes until it thickens.
6. Add the fried chicken and toss to coat well.
7. Garnish with green onions and serve.

### 206. Sweet and Sour Pork

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 1 lb pork loin, cut into cubes
- 1/2 cup cornstarch
- 1 large egg, beaten
- 1 green bell pepper, diced
- 1 red bell pepper, diced
- 1 cup pineapple chunks
- 1/3 cup ketchup
- 3 tbsp rice vinegar
- 3 tbsp sugar
- vegetable oil for frying

**Instructions:**
1. Toss pork cubes in beaten egg, then coat in cornstarch.
2. Heat 1/2 inch oil in a skillet over medium-high heat. Fry pork in batches for 4-5 minutes until golden and cooked through. Drain on paper towels.
3. In a bowl, mix ketchup, rice vinegar, sugar, and 3 tbsp water to make the sauce.
4. Heat 1 tbsp oil in a clean pan over medium heat. Add bell peppers and stir-fry for 2 minutes.
5. Add pineapple chunks and the sauce, simmer for 2 minutes until slightly thickened.
6. Add the fried pork and toss to coat. Cook for 1 more minute and serve.

### 207. Mongolian Beef

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb flank steak, thinly sliced against the grain
- 1/4 cup cornstarch
- 3 green onions, cut into 2-inch pieces
- 1/3 cup soy sauce
- 3 tbsp brown sugar
- 1 tbsp rice vinegar
- 2 tbsp vegetable oil

**Instructions:**
1. Toss sliced steak with cornstarch until evenly coated.
2. Heat oil in a wok over high heat. Add steak in a single layer and sear for 2 minutes per side until browned. Remove and set aside.
3. In the same wok, add soy sauce, brown sugar, rice vinegar, and 2 tbsp water. Simmer for 2 minutes until it thickens slightly.
4. Return the beef to the wok and toss to coat in the sauce.
5. Add green onions and stir-fry for 1 minute. Serve hot over rice.

### 208. Orange Chicken

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into bite-size pieces
- 1/2 cup cornstarch, plus 1 tsp for sauce
- 1 large egg, beaten
- zest and juice of 2 oranges
- 3 tbsp soy sauce
- 3 tbsp sugar
- 1 tbsp rice vinegar
- 1/2 tsp red pepper flakes
- vegetable oil for frying

**Instructions:**
1. Toss chicken in beaten egg, then dredge in the 1/2 cup cornstarch.
2. Heat 1/2 inch oil in a skillet over medium-high heat. Fry chicken in batches for 4-5 minutes until golden and cooked through. Drain on paper towels.
3. In a saucepan, combine orange zest, orange juice, soy sauce, sugar, rice vinegar, and red pepper flakes. Bring to a simmer.
4. Whisk 1 tsp cornstarch with 1 tbsp water and stir into the sauce. Simmer for 2 minutes until thickened.
5. Add the fried chicken to the sauce and toss to coat.
6. Serve immediately over rice.

### 209. Ginger Scallion Steamed Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs
- 1 tbsp Shaoxing wine (or dry sherry)
- 2 tbsp minced ginger
- 4 green onions, finely sliced
- 2 tbsp soy sauce
- 1 tbsp sesame oil
- 1/2 tsp sugar
- 2 tbsp vegetable oil

**Instructions:**
1. Rub chicken thighs with Shaoxing wine and a pinch of salt. Let sit for 10 minutes.
2. Set up a steamer over boiling water. Place chicken on a heatproof plate and steam for 15-18 minutes until cooked through.
3. While the chicken steams, mix ginger, green onions, soy sauce, sesame oil, and sugar in a bowl.
4. Heat vegetable oil in a small pan until shimmering, then pour it over the ginger-scallion mixture to sizzle.
5. Slice the steamed chicken and spoon the ginger-scallion sauce over the top. Serve with the resting juices.

### 210. Mapo Tofu

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 1 lb soft tofu, cut into 1-inch cubes
- 1/2 lb ground pork
- 2 tbsp doubanjiang (fermented chili bean paste)
- 1 tsp Sichuan peppercorns, crushed
- 3 green onions, sliced
- 1 cup chicken broth
- 2 tbsp soy sauce
- 1 tbsp cornstarch mixed with 2 tbsp water
- 2 tbsp vegetable oil

**Instructions:**
1. Bring a pot of water to a gentle simmer and add the tofu cubes for 2 minutes to firm them up. Drain gently.
2. Heat oil in a skillet over medium heat. Add ground pork and cook for 4-5 minutes, breaking it apart, until browned.
3. Add doubanjiang and crushed Sichuan peppercorns, stir for 1 minute until fragrant.
4. Pour in chicken broth and soy sauce, bring to a simmer.
5. Gently add the tofu cubes and simmer for 3 minutes.
6. Stir in the cornstarch slurry and cook for 1 minute until the sauce thickens.
7. Top with green onions and serve.

### 211. Dan Dan Noodles

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 12 oz fresh wheat noodles
- 1/2 lb ground pork
- 2 tbsp sesame paste (tahini)
- 3 tbsp soy sauce
- 1 tbsp chili oil
- 1 tsp Sichuan peppercorns, crushed
- 3 green onions, sliced
- 1 tbsp rice vinegar
- 2 tbsp vegetable oil

**Instructions:**
1. Cook noodles according to package directions. Drain and divide between bowls.
2. Heat vegetable oil in a skillet over medium heat. Add ground pork and cook for 5-6 minutes, breaking it up, until browned and crisp at the edges.
3. In each serving bowl, whisk together sesame paste, soy sauce, chili oil, crushed Sichuan peppercorns, and rice vinegar with 2 tbsp hot water.
4. Top the sauce with the cooked noodles.
5. Spoon the ground pork over the noodles and sprinkle with green onions.
6. Toss everything together before eating.

### 212. Vegetable Chow Mein

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 12 oz chow mein noodles
- 2 cups shredded cabbage
- 1 carrot, julienned
- 1 red bell pepper, sliced
- 1 cup bean sprouts
- 3 green onions, sliced
- 3 tbsp soy sauce
- 1 tbsp sesame oil
- 2 tbsp vegetable oil

**Instructions:**
1. Cook noodles according to package directions until just tender. Drain and set aside.
2. Heat vegetable oil in a large skillet or wok over high heat. Add carrot and bell pepper, stir-fry for 2 minutes.
3. Add cabbage and bean sprouts, stir-fry for 2 more minutes until just softened.
4. Add the noodles to the pan along with soy sauce and sesame oil. Toss well to coat.
5. Stir-fry for 2-3 minutes until everything is heated through.
6. Add green onions, toss once more, and serve.

### 213. Singapore Noodles with Shrimp

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 oz thin rice vermicelli noodles
- 1/2 lb shrimp, peeled and deveined
- 2 tsp curry powder
- 1 cup shredded cabbage
- 1 carrot, julienned
- 1/2 onion, thinly sliced
- 2 large eggs, beaten
- 3 tbsp soy sauce
- 2 tbsp vegetable oil

**Instructions:**
1. Soak rice noodles in warm water for 10 minutes until softened. Drain well.
2. Heat 1 tbsp oil in a wok over high heat. Add eggs and scramble briefly, then remove and set aside.
3. Add remaining oil to the wok. Add onion and carrot, stir-fry for 2 minutes.
4. Add shrimp and cook for 2 minutes until just pink.
5. Add cabbage and curry powder, stir-fry for 1 minute until fragrant.
6. Add the drained noodles and soy sauce. Toss well, breaking up any clumps, for 2-3 minutes.
7. Return the scrambled egg to the wok, toss to combine, and serve.

### 214. Black Pepper Beef Stir-Fry

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb flank steak, thinly sliced
- 1 tbsp cornstarch
- 1 green bell pepper, sliced
- 1 red bell pepper, sliced
- 1/2 onion, sliced
- 2 tbsp soy sauce
- 1 tbsp oyster sauce
- 1 1/2 tsp coarsely ground black pepper
- 2 tbsp vegetable oil

**Instructions:**
1. Toss sliced steak with cornstarch and 1 tbsp soy sauce. Let sit for 10 minutes.
2. Heat 1 tbsp oil in a wok over high heat. Sear the beef for 1-2 minutes per side until browned. Remove and set aside.
3. Add remaining oil to the wok. Add onion and bell peppers, stir-fry for 3 minutes until slightly softened.
4. Return the beef to the wok. Add oyster sauce, remaining soy sauce, and black pepper.
5. Toss everything together for 1-2 minutes until well combined and heated through. Serve hot.

### 215. Cashew Chicken

**Total Time:** 25 mins

**Dietary:** Dairy-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, cut into bite-size pieces
- 3/4 cup roasted cashews
- 1 red bell pepper, diced
- 3 green onions, cut into 1-inch pieces
- 3 tbsp soy sauce
- 1 tbsp hoisin sauce
- 1 tbsp rice vinegar
- 1 tsp cornstarch
- 2 tbsp vegetable oil

**Instructions:**
1. Toss chicken with cornstarch and 1 tbsp soy sauce. Let sit for 5 minutes.
2. Heat oil in a wok over high heat. Add chicken and stir-fry for 5-6 minutes until browned and cooked through. Remove and set aside.
3. Add bell pepper to the wok and stir-fry for 2 minutes.
4. Mix remaining soy sauce, hoisin sauce, and rice vinegar in a small bowl.
5. Return chicken to the wok, add the sauce, and toss for 1-2 minutes until glazed.
6. Stir in cashews and green onions, toss once more, and serve.

### 216. Chicken Katsu with Japanese Curry

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts, pounded flat
- 1/2 cup flour
- 1 large egg, beaten
- 1 cup panko breadcrumbs
- 1 onion, sliced
- 1 carrot, sliced
- 1 potato, diced
- 2 tbsp Japanese curry powder
- 2 cups chicken broth
- vegetable oil for frying

**Instructions:**
1. Season chicken with salt and pepper. Dredge in flour, dip in egg, then coat in panko.
2. Heat 1/2 inch oil in a skillet over medium heat. Fry chicken for 3-4 minutes per side until golden and cooked through. Drain and slice.
3. In a separate pot, heat 1 tbsp oil and sauté onion, carrot, and potato for 3 minutes.
4. Add chicken broth and bring to a simmer. Cook for 10 minutes until vegetables are tender.
5. Stir in curry powder and simmer for 3 minutes until the sauce thickens slightly.
6. Serve the curry over rice with the sliced katsu chicken on top.

### 217. Teriyaki Salmon Donburi

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 salmon fillets
- 1/4 cup soy sauce
- 2 tbsp mirin
- 2 tbsp sugar
- 1 tsp cornstarch mixed with 1 tbsp water
- 2 cups cooked short-grain rice
- 1 green onion, sliced
- 1 tsp sesame seeds
- 1 tbsp vegetable oil

**Instructions:**
1. In a small saucepan, combine soy sauce, mirin, and sugar. Simmer for 2 minutes.
2. Stir in the cornstarch slurry and simmer 1 more minute until the sauce thickens. Set aside.
3. Heat oil in a skillet over medium heat. Season salmon with salt and pepper, then cook skin-side down for 4 minutes.
4. Flip and cook for 3 more minutes until just cooked through.
5. Spoon the teriyaki sauce over the salmon and let it glaze for 1 minute.
6. Serve the salmon over rice, drizzled with extra sauce and topped with green onion and sesame seeds.

### 218. Miso Glazed Cod

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cod fillets
- 2 tbsp miso paste
- 1 tbsp mirin
- 1 tbsp sugar
- 1 tsp soy sauce
- 1 tsp sesame oil
- 1 green onion, sliced
- 1 tsp sesame seeds

**Instructions:**
1. Preheat the oven broiler on high.
2. In a small bowl, mix miso paste, mirin, sugar, soy sauce, and sesame oil into a smooth glaze.
3. Pat cod fillets dry and place on a lined baking sheet. Brush generously with the miso glaze.
4. Broil for 6-8 minutes until the top is caramelized and the fish flakes easily.
5. Garnish with green onion and sesame seeds before serving.

### 219. Beef Sukiyaki

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb thinly sliced beef (ribeye or sirloin)
- 8 oz firm tofu, cubed
- 4 oz shiitake mushrooms, sliced
- 2 cups napa cabbage, chopped
- 1 bunch enoki mushrooms
- 4 green onions, cut into 2-inch pieces
- 1/3 cup soy sauce
- 3 tbsp sugar
- 3 tbsp mirin

**Instructions:**
1. In a bowl, mix soy sauce, sugar, and mirin with 1/2 cup water to make the sukiyaki broth.
2. Heat a large skillet or shallow pot over medium-high heat. Add a few slices of beef and sear briefly, about 1 minute per side.
3. Pour in about half the broth and bring to a simmer.
4. Add tofu, mushrooms, cabbage, and green onions. Simmer for 5-6 minutes until vegetables are tender.
5. Add the remaining beef slices and cook for 2-3 minutes until just done.
6. Add more broth as needed and serve everything straight from the pot over rice.

### 220. Chicken Yakitori Rice Bowl

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into chunks
- 1/3 cup soy sauce
- 3 tbsp mirin
- 2 tbsp sugar
- 2 tbsp sake (optional)
- 3 green onions, cut into 1-inch pieces
- 2 cups cooked short-grain rice
- 1 tsp sesame seeds
- 1 tbsp vegetable oil

**Instructions:**
1. In a small saucepan, combine soy sauce, mirin, sugar, and sake. Simmer for 5 minutes until slightly thickened. Set aside.
2. Thread chicken and green onions onto skewers, alternating pieces.
3. Heat oil in a grill pan or skillet over medium-high heat. Cook skewers for 3-4 minutes per side until cooked through.
4. Brush skewers generously with the yakitori sauce during the last 2 minutes of cooking.
5. Serve skewers over rice, drizzled with remaining sauce and sprinkled with sesame seeds.

### 221. Shoyu Ramen with Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken thighs
- 4 cups chicken broth
- 3 tbsp soy sauce
- 1 tbsp mirin
- 2 packs ramen noodles (discard seasoning packet)
- 2 soft-boiled eggs, halved
- 1 cup baby spinach
- 2 green onions, sliced
- 1 sheet nori, cut into strips

**Instructions:**
1. Season chicken thighs with salt and pepper. Pan-fry in a lightly oiled skillet for 5-6 minutes per side until cooked through. Slice.
2. In a pot, combine chicken broth, soy sauce, and mirin. Bring to a simmer for 5 minutes.
3. Cook ramen noodles in a separate pot according to package directions. Drain.
4. Add spinach to the hot broth and let it wilt for 1 minute.
5. Divide noodles between bowls and pour the hot broth over them.
6. Top each bowl with sliced chicken, a soft-boiled egg half, green onions, and nori.

### 222. Chicken Udon Noodle Soup

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, sliced
- 4 cups chicken broth (or dashi)
- 3 tbsp soy sauce
- 2 tbsp mirin
- 2 packs fresh udon noodles
- 1 cup baby bok choy, halved
- 2 green onions, sliced
- 1 tbsp vegetable oil

**Instructions:**
1. Heat oil in a pot over medium-high heat. Add chicken and cook for 5 minutes until browned and cooked through.
2. Pour in chicken broth, soy sauce, and mirin. Bring to a simmer for 5 minutes.
3. Add bok choy and simmer for 2 minutes until tender.
4. Meanwhile, cook udon noodles in boiling water for 2-3 minutes according to package directions. Drain.
5. Divide noodles between bowls and ladle the hot broth, chicken, and bok choy over the top.
6. Garnish with green onions and serve.

### 223. Korean Beef Bulgogi

**Total Time:** 30 mins + 30 mins marinate

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb ribeye steak, thinly sliced
- 1/4 cup soy sauce
- 2 tbsp sugar
- 1 tbsp sesame oil
- 1/2 pear, grated (or 1 tbsp honey)
- 1/2 onion, thinly sliced
- 3 green onions, sliced
- 1 tsp sesame seeds
- 1 tbsp vegetable oil

**Instructions:**
1. In a bowl, mix soy sauce, sugar, sesame oil, and grated pear. Add the sliced beef and marinate for 30 minutes.
2. Heat vegetable oil in a skillet over high heat. Add the onion and cook for 2 minutes until softened.
3. Add the marinated beef along with its marinade. Cook for 4-5 minutes until browned and the sauce reduces slightly.
4. Stir in green onions and cook 1 more minute.
5. Sprinkle with sesame seeds and serve over rice.

### 224. Korean Fried Chicken

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into pieces
- 1/2 cup cornstarch
- 1/4 cup flour
- 2 tbsp gochujang
- 2 tbsp honey
- 2 tbsp soy sauce
- 1 tbsp rice vinegar
- 1 tsp sesame seeds
- vegetable oil for frying

**Instructions:**
1. Season chicken with salt and pepper. Toss with cornstarch and flour until evenly coated.
2. Heat 1/2 inch oil in a skillet over medium-high heat. Fry chicken in batches for 5-6 minutes until golden and cooked through. Drain on paper towels.
3. In a saucepan, combine gochujang, honey, soy sauce, and rice vinegar. Simmer for 2 minutes until slightly thickened.
4. Add the fried chicken to the sauce and toss to coat evenly.
5. Sprinkle with sesame seeds and serve immediately.

### 225. Kimchi Fried Rice

**Total Time:** 20 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked and chilled short-grain rice
- 1 cup vegetarian kimchi, chopped
- 2 tbsp kimchi juice
- 2 large eggs
- 2 green onions, sliced
- 1 tbsp gochujang
- 1 tbsp soy sauce
- 1 tsp sesame oil
- 2 tbsp vegetable oil

**Instructions:**
1. Heat 1 tbsp vegetable oil in a skillet over medium heat. Add kimchi and cook for 3 minutes until slightly caramelized.
2. Stir in gochujang and kimchi juice, cook for 1 minute.
3. Add the cold rice, breaking up clumps, and stir-fry for 4-5 minutes until heated through.
4. Add soy sauce and sesame oil, tossing to coat evenly.
5. In a separate small pan, heat remaining oil and fry the eggs to your liking.
6. Divide the rice between bowls, top each with a fried egg and green onions.

### 226. Japchae

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 oz Korean sweet potato glass noodles (dangmyeon)
- 1 carrot, julienned
- 1 red bell pepper, julienned
- 4 oz shiitake mushrooms, sliced
- 2 cups baby spinach
- 1/2 onion, thinly sliced
- 1/4 cup soy sauce
- 2 tbsp sugar
- 1 tbsp sesame oil
- 1 tsp sesame seeds
- 2 tbsp vegetable oil

**Instructions:**
1. Cook glass noodles in boiling water for 6-7 minutes until tender. Drain, rinse with cold water, and cut into shorter lengths.
2. Toss the noodles with 1 tbsp soy sauce and 1 tsp sesame oil. Set aside.
3. Heat 1 tbsp vegetable oil in a skillet and sauté onion and carrot for 2 minutes. Remove and set aside.
4. In the same skillet, sauté mushrooms and bell pepper for 2 minutes, then add spinach and wilt for 1 minute. Remove and set aside.
5. Combine all the cooked vegetables with the noodles. Add remaining soy sauce, sugar, and sesame oil.
6. Toss everything well over low heat for 2 minutes until warmed through. Sprinkle with sesame seeds and serve.

### 227. Spicy Korean Chicken Stir-Fry

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into pieces
- 2 tbsp gochujang
- 1 tbsp gochugaru (Korean chili flakes)
- 2 tbsp soy sauce
- 1 tbsp sugar
- 1/2 cabbage, sliced
- 1 sweet potato, thinly sliced
- 1 onion, sliced
- 2 green onions, sliced
- 1 tbsp vegetable oil

**Instructions:**
1. In a bowl, mix gochujang, gochugaru, soy sauce, and sugar with the chicken. Let marinate for 10 minutes.
2. Heat oil in a large skillet over medium-high heat. Add the sweet potato slices and cook for 4 minutes until slightly softened.
3. Add the marinated chicken and cook for 6-7 minutes until browned and cooked through.
4. Add cabbage and onion, stir-fry for 4 minutes until the cabbage wilts.
5. Stir in green onions and cook 1 more minute. Serve hot over rice.

### 228. Thai Green Curry with Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, sliced
- 3 tbsp green curry paste
- 1 can (14 oz) coconut milk
- 1 cup Thai eggplant or regular eggplant, chopped
- 1 red bell pepper, sliced
- 1 tbsp fish sauce
- 1 tbsp sugar
- 10 Thai basil leaves
- 1 tbsp vegetable oil

**Instructions:**
1. Heat oil in a pot over medium heat. Add green curry paste and fry for 1-2 minutes until fragrant.
2. Add half the coconut milk and stir until the paste dissolves and the mixture thickens slightly.
3. Add the chicken and cook for 5 minutes, stirring often.
4. Add the remaining coconut milk, eggplant, and bell pepper. Simmer for 8-10 minutes until the chicken is cooked and vegetables are tender.
5. Stir in fish sauce and sugar.
6. Remove from heat, stir in Thai basil leaves, and serve with rice.

### 229. Thai Red Curry with Shrimp

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb shrimp, peeled and deveined
- 3 tbsp red curry paste
- 1 can (14 oz) coconut milk
- 1 cup bamboo shoots, sliced
- 1 red bell pepper, sliced
- 1 tbsp fish sauce
- 1 tbsp sugar
- 10 Thai basil leaves
- 1 tbsp vegetable oil

**Instructions:**
1. Heat oil in a pot over medium heat. Add red curry paste and fry for 1-2 minutes until fragrant.
2. Add half the coconut milk and stir until smooth and slightly thickened.
3. Add bamboo shoots and bell pepper, simmer for 3 minutes.
4. Add the remaining coconut milk and bring to a gentle simmer.
5. Add shrimp and cook for 3-4 minutes until just pink and cooked through.
6. Stir in fish sauce and sugar, then remove from heat and stir in basil leaves. Serve with rice.

### 230. Pad Thai

**Total Time:** 30 mins

**Dietary:** Dairy-free · Pork-free

**Ingredients:**
- 8 oz flat rice noodles
- 1/2 lb shrimp, peeled and deveined
- 2 large eggs
- 1 cup bean sprouts
- 3 green onions, sliced
- 1/3 cup roasted peanuts, chopped
- 3 tbsp fish sauce
- 3 tbsp tamarind paste
- 3 tbsp sugar
- 2 tbsp vegetable oil
- 1 lime, cut into wedges

**Instructions:**
1. Soak rice noodles in warm water for 20-25 minutes until pliable. Drain well.
2. In a small bowl, mix fish sauce, tamarind paste, and sugar to make the sauce.
3. Heat 1 tbsp oil in a wok over high heat. Add shrimp and cook for 2 minutes until just pink. Push to one side.
4. Add eggs to the empty side and scramble briefly.
5. Add the drained noodles and the sauce. Toss well for 2-3 minutes until the noodles soften and absorb the sauce.
6. Add bean sprouts and half the peanuts, toss for 1 more minute.
7. Serve topped with remaining peanuts, green onions, and lime wedges.

### 231. Pad See Ew

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 oz wide flat rice noodles
- 1/2 lb beef flank steak, thinly sliced (or chicken)
- 2 cups Chinese broccoli (or broccolini), chopped
- 1 large egg
- 3 tbsp soy sauce
- 2 tbsp dark soy sauce
- 1 tbsp oyster sauce
- 1 tbsp sugar
- 2 tbsp vegetable oil

**Instructions:**
1. If using dried noodles, soak or cook according to package directions until just tender. Drain.
2. Heat 1 tbsp oil in a wok over high heat. Add beef and cook for 2-3 minutes until browned. Remove and set aside.
3. Add remaining oil, crack in the egg, and scramble briefly. Push to one side.
4. Add Chinese broccoli and stir-fry for 2 minutes until just wilted.
5. Return the beef to the wok. Add noodles, soy sauce, dark soy sauce, oyster sauce, and sugar.
6. Toss everything together for 2-3 minutes until well combined and the noodles are lightly charred in spots. Serve hot.

### 232. Thai Basil Chicken

**Total Time:** 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb ground chicken
- 4 cloves garlic, minced
- 3 Thai chilies, sliced (adjust to taste)
- 1 cup Thai basil leaves
- 2 tbsp fish sauce
- 1 tbsp soy sauce
- 1 tbsp oyster sauce
- 1 tsp sugar
- 2 tbsp vegetable oil
- 2 fried eggs (optional, for serving)

**Instructions:**
1. Heat oil in a wok over high heat. Add garlic and chilies, stir for 30 seconds until fragrant.
2. Add ground chicken and cook for 5-6 minutes, breaking it apart, until browned and cooked through.
3. Add fish sauce, soy sauce, oyster sauce, and sugar. Stir to combine.
4. Cook for 2 more minutes until the sauce is absorbed.
5. Remove from heat and stir in basil leaves until just wilted.
6. Serve over rice, topped with a fried egg if desired.

### 233. Massaman Beef Curry

**Total Time:** 1 hr 10 mins

**Dietary:** Dairy-free · Pork-free

**Ingredients:**
- 1 lb beef stew meat, cubed
- 3 tbsp massaman curry paste
- 1 can (14 oz) coconut milk
- 1 cup beef broth
- 2 potatoes, cubed
- 1/2 onion, chopped
- 1/3 cup roasted peanuts
- 2 tbsp fish sauce
- 2 tbsp sugar
- 1 tbsp vegetable oil

**Instructions:**
1. Heat oil in a pot over medium heat. Add curry paste and fry for 1-2 minutes until fragrant.
2. Add beef and cook for 5 minutes, stirring to coat in the paste.
3. Pour in coconut milk and beef broth. Bring to a simmer, cover, and cook for 40 minutes until the beef is tender.
4. Add potatoes and onion, simmer uncovered for 15 minutes until the potatoes are tender.
5. Stir in peanuts, fish sauce, and sugar.
6. Simmer for 5 more minutes and serve with rice.

### 234. Chicken Pho

**Total Time:** 45 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 boneless chicken breasts
- 6 cups chicken broth
- 1 onion, halved
- 3-inch piece ginger, sliced
- 2 star anise
- 1 cinnamon stick
- 8 oz dried rice noodles (pho noodles)
- 2 tbsp fish sauce
- 1 cup bean sprouts
- 1/4 cup cilantro and Thai basil, chopped
- 1 lime, cut into wedges

**Instructions:**
1. Char the onion and ginger under a broiler or in a dry skillet for 5 minutes until lightly blackened in spots.
2. In a pot, combine chicken broth, charred onion, ginger, star anise, and cinnamon stick. Simmer for 20 minutes.
3. Add chicken breasts and poach for 12-15 minutes until cooked through. Remove, shred, and set aside.
4. Strain the broth to remove the spices and onion. Stir in fish sauce.
5. Cook rice noodles according to package directions. Drain and divide between bowls.
6. Ladle hot broth over the noodles and top with shredded chicken, bean sprouts, and herbs.
7. Serve with lime wedges.

### 235. Vietnamese Caramelized Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cut into pieces
- 3 tbsp sugar
- 2 tbsp fish sauce
- 1 tbsp soy sauce
- 3 cloves garlic, minced
- 1 shallot, sliced
- 1 red chili, sliced (optional)
- 2 green onions, sliced
- 1 tbsp vegetable oil

**Instructions:**
1. In a skillet over medium heat, melt the sugar until it turns amber and caramelized, about 3-4 minutes. Watch closely so it does not burn.
2. Carefully add the chicken pieces, stirring to coat them in the caramel.
3. Add fish sauce, soy sauce, garlic, and shallot. Stir to combine.
4. Add 1/4 cup water, bring to a simmer, and cook for 15 minutes, stirring occasionally, until the sauce thickens and the chicken is cooked through.
5. Stir in chili if using and cook 1 more minute.
6. Garnish with green onions and serve with rice.

### 236. Chicken Tikka Masala

**Total Time:** 40 mins + 30 mins marinate

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, cubed
- 1/2 cup plain yogurt
- 2 tbsp tikka masala spice blend (or garam masala)
- 1 onion, chopped
- 1 can (14 oz) crushed tomatoes
- 1/2 cup heavy cream
- 1 tbsp tomato paste
- 1 tsp paprika
- 2 tbsp vegetable oil

**Instructions:**
1. Mix chicken with yogurt and half the spice blend. Marinate for 30 minutes.
2. Heat 1 tbsp oil in a skillet over medium-high heat. Cook the marinated chicken for 6-7 minutes until browned. Remove and set aside.
3. Add remaining oil to the skillet and sauté onion for 4 minutes until softened.
4. Stir in remaining spice blend, tomato paste, and paprika, cooking for 1 minute.
5. Add crushed tomatoes and simmer for 10 minutes.
6. Stir in heavy cream and the cooked chicken. Simmer for 8-10 minutes until the chicken is cooked through and the sauce thickens.
7. Serve with rice or flatbread.

### 237. Butter Chicken

**Total Time:** 40 mins + 30 mins marinate

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb boneless chicken thighs, cubed
- 1/2 cup plain yogurt
- 2 tbsp garam masala
- 3 tbsp butter
- 1 onion, chopped
- 1 can (14 oz) crushed tomatoes
- 1/2 cup heavy cream
- 1 tsp paprika
- 1 tsp turmeric

**Instructions:**
1. Mix chicken with yogurt and half the garam masala. Marinate for 30 minutes.
2. Heat 1 tbsp butter in a skillet over medium-high heat. Cook the marinated chicken for 6-7 minutes until browned. Remove and set aside.
3. Melt remaining butter in the skillet and sauté onion for 4 minutes.
4. Stir in remaining garam masala, paprika, and turmeric, cooking for 1 minute.
5. Add crushed tomatoes and simmer for 10 minutes.
6. Stir in heavy cream and the cooked chicken. Simmer for 8-10 minutes until the sauce thickens and the chicken is cooked through.
7. Serve with rice or naan.

### 238. Chana Masala

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz each) chickpeas, drained and rinsed
- 1 onion, chopped
- 2 tomatoes, chopped (or 1 cup canned crushed tomatoes)
- 2 tsp ground cumin
- 2 tsp ground coriander
- 1 tsp turmeric
- 1 tsp garam masala
- 1/2 tsp chili powder
- 2 tbsp vegetable oil
- 1/4 cup cilantro, chopped

**Instructions:**
1. Heat oil in a pot over medium heat. Add onion and cook for 5 minutes until softened.
2. Stir in cumin, coriander, turmeric, and chili powder, cooking for 1 minute until fragrant.
3. Add tomatoes and cook for 5 minutes until they break down.
4. Add chickpeas and 1 cup water. Simmer for 12-15 minutes, mashing a few chickpeas to thicken the sauce.
5. Stir in garam masala and cook 2 more minutes.
6. Garnish with cilantro and serve with rice.

### 239. Palak Paneer

**Total Time:** 30 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 8 oz paneer, cubed
- 1 lb spinach, roughly chopped
- 1 onion, chopped
- 1 tomato, chopped
- 1 tsp ground cumin
- 1 tsp garam masala
- 1/2 tsp turmeric
- 1/4 cup heavy cream
- 2 tbsp vegetable oil

**Instructions:**
1. Heat 1 tbsp oil in a skillet over medium heat. Add paneer cubes and fry for 3-4 minutes until lightly golden. Remove and set aside.
2. Blanch spinach in boiling water for 1 minute, then drain and blend into a smooth puree.
3. Heat remaining oil in the same skillet. Add onion and cook for 4 minutes until softened.
4. Add tomato, cumin, turmeric, and garam masala, cooking for 3 minutes.
5. Stir in the spinach puree and simmer for 5 minutes.
6. Add the fried paneer and heavy cream. Simmer for 3-4 minutes and serve with rice or flatbread.

### 240. Dal Tadka with Basmati Rice

**Total Time:** 35 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 cup yellow split lentils (toor dal or moong dal)
- 1 tomato, chopped
- 1 tsp turmeric
- 1 tsp cumin seeds
- 1/2 tsp mustard seeds
- 3 cloves garlic, minced
- 1 dried red chili
- 2 tbsp vegetable oil
- 1 cup basmati rice
- 1/4 cup cilantro, chopped

**Instructions:**
1. Rinse lentils and combine with 3 cups water and turmeric in a pot. Simmer for 20-25 minutes until soft, skimming off any foam.
2. Meanwhile, rinse basmati rice and cook with 2 cups water according to package directions, about 15 minutes.
3. Once the lentils are soft, stir in the chopped tomato and simmer for 5 minutes. Season with salt.
4. In a small pan, heat oil over medium heat. Add cumin seeds, mustard seeds, dried chili, and garlic. Cook for 1 minute until fragrant and the garlic is golden.
5. Pour this tempering over the cooked dal and stir to combine.
6. Garnish with cilantro and serve hot over the basmati rice.

### 241. Classic Meatloaf

**Total Time:** 1 hr 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 lbs ground beef
- 1 cup breadcrumbs
- 1/2 cup milk
- 2 large eggs
- 1 small onion, finely chopped
- 2 cloves garlic, minced
- 1/2 cup ketchup, divided
- 1 tbsp Worcestershire sauce
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 350°F (175°C) and line a baking sheet or loaf pan with foil.
2. In a bowl, soak the breadcrumbs in the milk for 2 minutes, then mix in the eggs, onion, garlic, 1/4 cup ketchup, Worcestershire sauce, salt, and pepper.
3. Add the ground beef and mix gently until just combined. Do not overmix.
4. Shape the mixture into a loaf on the prepared pan and spread the remaining ketchup over the top.
5. Bake for 55 to 60 minutes, until the internal temperature reaches 160°F (71°C).
6. Let the meatloaf rest for 10 minutes before slicing.

### 242. Buttermilk Fried Chicken

**Total Time:** 1 hr

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 8 chicken drumsticks and thighs
- 2 cups buttermilk
- 2 cups flour
- 1 tbsp paprika
- 1 tsp cayenne pepper
- 1 tsp salt
- 1/2 tsp black pepper
- 2 cups vegetable oil, for frying

**Instructions:**
1. Combine the chicken and buttermilk in a bowl and let sit for at least 30 minutes.
2. In a separate bowl, whisk together the flour, paprika, cayenne, salt, and pepper.
3. Remove each chicken piece from the buttermilk and dredge thoroughly in the flour mixture, pressing the coating on.
4. Heat the oil in a deep skillet to 350°F (175°C).
5. Fry the chicken in batches for 12 to 15 minutes per batch, turning occasionally, until golden and cooked through to 165°F (74°C) internally.
6. Drain on a wire rack or paper towels before serving.

### 243. Chicken Pot Pie

**Total Time:** 1 hr 5 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 cups cooked chicken, shredded
- 1 sheet refrigerated pie crust (top and bottom)
- 1/3 cup butter
- 1 small onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 1/3 cup flour
- 1 3/4 cups chicken broth
- 2/3 cup milk
- 1 cup frozen peas
- 1/2 tsp salt
- 1/4 tsp black pepper

**Instructions:**
1. Preheat the oven to 400°F (200°C).
2. Melt the butter in a large skillet and cook the onion, carrots, and celery for 5 minutes, until softened.
3. Stir in the flour and cook for 1 minute, then slowly whisk in the broth and milk until smooth.
4. Simmer for 5 minutes until thickened, then stir in the chicken, peas, salt, and pepper.
5. Line a pie dish with the bottom crust, pour in the filling, and cover with the top crust, sealing and cutting slits for steam.
6. Bake for 35 to 40 minutes, until the crust is golden brown.
7. Let stand for 10 minutes before serving.

### 244. Hearty Beef Stew

**Total Time:** 2 hrs 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 lbs beef stew meat, cubed
- 3 tbsp flour
- 2 tbsp vegetable oil
- 4 cups beef broth
- 2 tbsp tomato paste
- 4 carrots, sliced
- 3 potatoes, cubed
- 1 onion, chopped
- 2 cloves garlic, minced
- 2 bay leaves
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Toss the beef cubes in the flour to coat.
2. Heat the oil in a large pot over medium-high heat and brown the beef on all sides, about 8 minutes.
3. Add the onion and garlic and cook for 3 minutes.
4. Stir in the tomato paste, then add the broth, bay leaves, salt, and pepper. Bring to a simmer.
5. Cover and simmer on low for 1 hour 20 minutes, then add the carrots and potatoes.
6. Continue simmering uncovered for 30 minutes, until the vegetables and beef are tender.
7. Remove the bay leaves before serving.

### 245. Pot Roast with Gravy

**Total Time:** 3 hrs 20 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 3 lb beef chuck roast
- 2 tbsp vegetable oil
- 4 cups beef broth
- 1 onion, quartered
- 4 carrots, cut into chunks
- 3 potatoes, halved
- 3 cloves garlic, minced
- 2 tbsp flour
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 325°F (163°C).
2. Season the roast with salt and pepper, then sear in the oil in a large oven-safe pot over medium-high heat, about 4 minutes per side.
3. Add the onion, garlic, and broth. Cover and transfer to the oven.
4. Braise for 2 hours, then add the carrots and potatoes and continue braising for 45 minutes, until the meat is fork-tender.
5. Remove the roast and vegetables and set aside. Whisk the flour into the pot liquid on the stovetop over medium heat until thickened into gravy, about 5 minutes.
6. Slice the roast and serve with the vegetables and gravy.

### 246. Shepherd's Pie

**Total Time:** 50 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs ground beef
- 1 onion, diced
- 2 carrots, diced
- 1 cup frozen peas
- 2 tbsp flour
- 1 cup beef broth
- 1 tbsp tomato paste
- 4 cups mashed potatoes
- 1/4 cup milk
- 3 tbsp butter
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 400°F (200°C).
2. In a skillet, brown the ground beef with the onion and carrots over medium-high heat, about 8 minutes.
3. Stir in the flour, then add the broth and tomato paste. Simmer for 5 minutes until thickened.
4. Stir in the peas, salt, and pepper, then transfer the mixture to a baking dish.
5. Warm the mashed potatoes with the milk and butter, then spread evenly over the filling.
6. Bake for 25 minutes, until the top is golden and the filling is bubbling.

### 247. Baked Macaroni and Cheese

**Total Time:** 40 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb elbow macaroni
- 4 tbsp butter
- 4 tbsp flour
- 3 cups milk
- 3 cups shredded cheddar cheese
- 1/2 cup breadcrumbs
- 1/2 tsp salt
- 1/4 tsp black pepper

**Instructions:**
1. Preheat the oven to 375°F (190°C) and cook the macaroni in salted boiling water until al dente. Drain.
2. In a saucepan, melt the butter, whisk in the flour, and cook for 1 minute.
3. Slowly whisk in the milk and cook for 5 minutes, until thickened.
4. Remove from heat and stir in 2 1/2 cups of the cheese, salt, and pepper until melted and smooth.
5. Combine the sauce with the macaroni and pour into a baking dish. Top with the remaining cheese and breadcrumbs.
6. Bake for 20 to 25 minutes, until golden and bubbling.

### 248. Turkey Chili with Beans

**Total Time:** 1 hr

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs ground turkey
- 1 onion, diced
- 1 bell pepper, diced
- 2 cloves garlic, minced
- 2 cans (15 oz each) kidney beans, drained
- 1 can (28 oz) crushed tomatoes
- 2 tbsp chili powder
- 1 tsp cumin
- 2 cups chicken broth
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Heat oil in a large pot over medium heat and cook the onion and bell pepper for 5 minutes.
2. Add the garlic and ground turkey, breaking it up, and cook until browned, about 8 minutes.
3. Stir in the chili powder and cumin, then add the beans, crushed tomatoes, and broth.
4. Season with salt and pepper and bring to a simmer.
5. Simmer uncovered for 40 minutes, stirring occasionally, until thickened.

### 249. BBQ Pulled Pork Sandwiches

**Total Time:** 3 hrs 45 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 3 lb pork shoulder
- 1 tbsp paprika
- 1 tsp onion powder
- 1 tsp salt
- 1/2 tsp black pepper
- 1 1/2 cups barbecue sauce
- 1 cup chicken broth
- 8 hamburger buns
- 2 cups coleslaw mix
- 1/3 cup mayonnaise
- 1 tbsp vinegar

**Instructions:**
1. Preheat the oven to 300°F (150°C).
2. Rub the pork shoulder with paprika, onion powder, salt, and pepper.
3. Place the pork in a roasting pan with the broth, cover tightly, and roast for 3 to 3 1/2 hours, until it shreds easily with a fork.
4. Shred the pork, discard excess fat, and toss with the barbecue sauce.
5. Toss the coleslaw mix with the mayonnaise and vinegar.
6. Pile the pulled pork onto the buns and top with coleslaw.

### 250. BBQ Baby Back Ribs

**Total Time:** 3 hrs 10 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 2 racks baby back ribs
- 2 tbsp paprika
- 1 tbsp brown sugar
- 1 tsp onion powder
- 1 tsp salt
- 1/2 tsp black pepper
- 1 1/2 cups barbecue sauce

**Instructions:**
1. Preheat the oven to 300°F (150°C).
2. Pat the ribs dry and remove the thin membrane from the back of each rack.
3. Mix the paprika, brown sugar, onion powder, salt, and pepper and rub over both sides of the ribs.
4. Wrap the ribs tightly in foil and bake for 2 1/2 hours, until tender.
5. Unwrap, brush generously with barbecue sauce, and broil or grill for 8 to 10 minutes, until the sauce caramelizes.
6. Rest for 5 minutes before slicing between the bones.

### 251. Grilled BBQ Chicken Thighs

**Total Time:** 45 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 8 boneless chicken thighs
- 1 tbsp paprika
- 1 tsp onion powder
- 1 tsp salt
- 1/2 tsp black pepper
- 1 cup barbecue sauce, divided
- 2 tbsp vegetable oil

**Instructions:**
1. Toss the chicken thighs with the oil, paprika, onion powder, salt, and pepper, and let sit for 20 minutes.
2. Preheat a grill or grill pan to medium-high heat.
3. Grill the chicken for 6 to 7 minutes per side, until the internal temperature reaches 165°F (74°C).
4. In the last 2 minutes of cooking, brush both sides with 1/2 cup of the barbecue sauce.
5. Remove from the grill and serve with the remaining barbecue sauce on the side.

### 252. Smash Burgers

**Total Time:** 20 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb ground beef, divided into 4 balls
- 4 slices American cheese
- 4 hamburger buns
- 1 small onion, thinly sliced
- 4 tsp mustard
- 4 tsp ketchup
- 8 dill pickle slices
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Heat a large skillet or griddle over high heat.
2. Place a ball of beef on the hot skillet and immediately smash flat with a spatula. Season with salt and pepper.
3. Cook for 2 minutes, flip, top with a slice of cheese, and cook for 1 more minute.
4. Toast the buns cut-side down on the skillet for 30 seconds.
5. Assemble the burgers with mustard, ketchup, onion, and pickles on the buns.

### 253. Turkey Burgers with Avocado

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/4 lbs ground turkey
- 1 tsp paprika
- 1 tsp salt
- 1/2 tsp black pepper
- 2 tbsp vegetable oil
- 4 hamburger buns
- 1 avocado, sliced
- 1/4 cup mayonnaise
- 4 lettuce leaves
- 1 tomato, sliced

**Instructions:**
1. Mix the ground turkey with paprika, salt, and pepper, and form into 4 patties.
2. Heat the oil in a skillet over medium heat and cook the patties for 6 to 7 minutes per side, until the internal temperature reaches 165°F (74°C).
3. Toast the buns lightly in the same skillet.
4. Spread mayonnaise on the buns and layer with lettuce and tomato.
5. Add the patties and top with avocado slices before closing the burgers.

### 254. Salisbury Steak with Mushroom Gravy

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs ground beef
- 1/3 cup breadcrumbs
- 1 egg
- 1 tbsp Worcestershire sauce
- 2 tbsp vegetable oil
- 8 oz mushrooms, sliced
- 1 onion, sliced
- 2 tbsp flour
- 2 cups beef broth
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. In a bowl, mix the ground beef, breadcrumbs, egg, Worcestershire sauce, salt, and pepper. Shape into 4 oval patties.
2. Heat 1 tbsp oil in a skillet over medium-high heat and cook the patties for 4 minutes per side, until browned. Remove and set aside.
3. In the same skillet, add the remaining oil and cook the onion and mushrooms for 6 minutes, until softened.
4. Stir in the flour, then slowly whisk in the broth. Simmer for 5 minutes, until thickened.
5. Return the patties to the skillet and simmer in the gravy for 8 minutes, until cooked through.

### 255. Chicken and Dumplings

**Total Time:** 1 hr

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs boneless chicken thighs, cubed
- 1 onion, diced
- 2 carrots, sliced
- 2 celery stalks, sliced
- 4 cups chicken broth
- 2 cups flour
- 1 tbsp baking powder
- 1 cup milk
- 3 tbsp butter, melted
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. In a large pot, combine the chicken, onion, carrots, celery, and broth. Bring to a boil, then simmer for 20 minutes, until the chicken is cooked through.
2. In a bowl, mix the flour, baking powder, and salt, then stir in the milk and melted butter to form a soft dough.
3. Drop spoonfuls of the dough onto the surface of the simmering broth.
4. Cover and simmer for 15 minutes without lifting the lid, until the dumplings are cooked through.
5. Season with black pepper and serve hot.

### 256. Country Fried Steak with Gravy

**Total Time:** 40 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 beef cube steaks
- 1 cup flour, divided
- 2 eggs
- 1/4 cup milk
- 1 tsp paprika
- 1 tsp salt
- 1/2 tsp black pepper
- 1/2 cup vegetable oil
- 2 cups milk (for gravy)

**Instructions:**
1. Whisk the eggs with 1/4 cup milk in a shallow bowl. In another bowl, mix 3/4 cup flour with paprika, salt, and pepper.
2. Dredge each steak in the flour, then the egg mixture, then the flour again.
3. Heat the oil in a skillet over medium-high heat and fry the steaks for 4 minutes per side, until golden brown. Remove and set aside.
4. Whisk the remaining 1/4 cup flour into the drippings left in the skillet and cook for 1 minute.
5. Slowly whisk in the 2 cups milk and simmer for 5 minutes, until thickened, seasoning with salt and pepper.
6. Pour the gravy over the steaks to serve.

### 257. Jambalaya

**Total Time:** 1 hr

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 1 lb boneless chicken thighs, cubed
- 8 oz andouille sausage, sliced
- 1/2 lb shrimp, peeled and deveined
- 1 onion, diced
- 1 bell pepper, diced
- 2 celery stalks, diced
- 3 cloves garlic, minced
- 1 can (14 oz) diced tomatoes
- 1 1/2 cups rice
- 2 1/2 cups chicken broth
- 1 tbsp cajun seasoning
- 1 tsp salt

**Instructions:**
1. Heat oil in a large pot over medium-high heat and brown the chicken and sausage for 6 minutes. Remove and set aside.
2. Add the onion, bell pepper, celery, and garlic to the pot and cook for 5 minutes.
3. Stir in the diced tomatoes, rice, cajun seasoning, and salt, then add the broth and the chicken and sausage.
4. Bring to a boil, then cover and simmer on low for 20 minutes.
5. Stir in the shrimp and cook for 5 more minutes, until the shrimp are pink and the rice is tender.

### 258. Chicken and Sausage Gumbo

**Total Time:** 1 hr 20 mins

**Dietary:** Dairy-free · Nut-free

**Ingredients:**
- 1 lb boneless chicken thighs, cubed
- 8 oz andouille sausage, sliced
- 1/2 cup vegetable oil
- 1/2 cup flour
- 1 onion, diced
- 1 bell pepper, diced
- 2 celery stalks, diced
- 3 cloves garlic, minced
- 1 cup okra, sliced
- 6 cups chicken broth
- 1 can (14 oz) diced tomatoes
- 2 tbsp cajun seasoning
- 1 tsp salt

**Instructions:**
1. In a large pot, whisk together the oil and flour over medium heat and cook, stirring constantly, for 15 to 20 minutes, until the roux is a deep brown.
2. Add the onion, bell pepper, celery, and garlic and cook for 5 minutes.
3. Slowly whisk in the broth, then add the diced tomatoes, cajun seasoning, and salt.
4. Bring to a simmer and add the chicken and sausage. Simmer for 30 minutes.
5. Stir in the okra and simmer for 10 more minutes, until the chicken is cooked through.
6. Skim excess fat from the surface before serving.

### 259. Vegetarian Red Beans and Rice

**Total Time:** 1 hr

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz each) kidney beans, drained
- 1 onion, diced
- 1 bell pepper, diced
- 2 celery stalks, diced
- 3 cloves garlic, minced
- 2 tbsp vegetable oil
- 2 tsp smoked paprika
- 1 tbsp cajun seasoning
- 3 cups vegetable broth
- 1 1/2 cups rice
- 1 tsp salt

**Instructions:**
1. Heat the oil in a large pot over medium heat and cook the onion, bell pepper, and celery for 6 minutes, until softened.
2. Add the garlic, smoked paprika, and cajun seasoning and cook for 1 minute.
3. Stir in the kidney beans and vegetable broth. Bring to a simmer and cook for 30 minutes, mashing some beans against the side of the pot to thicken.
4. While the beans simmer, cook the rice separately according to package directions.
5. Season the beans with salt and serve spooned over the rice.

### 260. Shrimp and Grits

**Total Time:** 40 mins

**Dietary:** Nut-free

**Ingredients:**
- 1 lb shrimp, peeled and deveined
- 1 cup grits
- 3 cups milk
- 1 cup shredded cheddar cheese
- 2 tbsp butter
- 3 strips bacon, chopped
- 2 cloves garlic, minced
- 1 tsp paprika
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Bring the milk to a simmer in a saucepan, whisk in the grits, and cook for 15 to 20 minutes, stirring often, until thick and creamy.
2. Stir the cheese and butter into the grits and season with salt. Keep warm.
3. In a skillet, cook the bacon over medium heat until crisp, about 5 minutes. Remove and set aside, leaving the fat in the pan.
4. Season the shrimp with paprika, salt, and pepper, and cook in the bacon fat with the garlic for 3 to 4 minutes, until pink and opaque.
5. Spoon the shrimp over the grits and top with the crispy bacon.

### 261. Crab Cakes with Remoulade

**Total Time:** 45 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb crab meat, picked over
- 1/2 cup breadcrumbs
- 1 egg
- 3 tbsp mayonnaise
- 1 tbsp mustard
- 1 tsp paprika
- 2 tbsp vegetable oil
- 1/2 cup mayonnaise (for remoulade)
- 1 tbsp pickle relish
- 1 tsp hot sauce
- 1 tsp lemon juice

**Instructions:**
1. In a bowl, gently mix the crab meat, breadcrumbs, egg, 3 tbsp mayonnaise, mustard, and paprika, being careful not to break up the crab too much.
2. Form the mixture into 8 patties and chill for 15 minutes.
3. Meanwhile, stir together the 1/2 cup mayonnaise, pickle relish, hot sauce, and lemon juice for the remoulade.
4. Heat the oil in a skillet over medium heat and cook the crab cakes for 4 to 5 minutes per side, until golden brown.
5. Serve the crab cakes warm with the remoulade sauce.

### 262. New England Lobster Rolls

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb cooked lobster meat, chopped
- 1/3 cup mayonnaise
- 1 celery stalk, finely diced
- 1 tbsp lemon juice
- 1 tbsp chives, chopped
- 4 split-top hot dog buns
- 3 tbsp butter, softened
- 1/4 tsp salt
- pinch of black pepper

**Instructions:**
1. In a bowl, combine the lobster meat, mayonnaise, celery, lemon juice, chives, salt, and pepper. Chill until ready to serve.
2. Heat a skillet over medium heat.
3. Butter the outer sides of the buns and toast in the skillet for 1 to 2 minutes per side, until golden.
4. Fill each toasted bun with the lobster mixture and serve immediately.

### 263. Grilled Ribeye with Garlic Butter

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 ribeye steaks, about 1 inch thick
- 1 tsp salt
- 1/2 tsp black pepper
- 1 tbsp vegetable oil
- 4 tbsp butter, softened
- 2 cloves garlic, minced
- 1 tbsp parsley, chopped

**Instructions:**
1. Let the steaks sit at room temperature for 15 minutes, then season both sides with salt and pepper.
2. Mix the softened butter with the garlic and parsley to make garlic butter.
3. Preheat a grill or grill pan to high heat and brush the steaks with the oil.
4. Grill the steaks for 4 to 5 minutes per side for medium-rare, until the internal temperature reaches 130 to 135°F (54 to 57°C).
5. Rest the steaks for 5 minutes, then top each with a spoonful of garlic butter before serving.

### 264. Beef Stroganoff

**Total Time:** 45 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs beef sirloin, thinly sliced
- 2 tbsp vegetable oil
- 8 oz mushrooms, sliced
- 1 onion, sliced
- 2 cloves garlic, minced
- 2 tbsp flour
- 2 cups beef broth
- 1 cup sour cream
- 12 oz egg noodles
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Cook the egg noodles in salted boiling water according to package directions. Drain.
2. Heat 1 tbsp oil in a large skillet over medium-high heat and sear the beef for 2 to 3 minutes, until browned. Remove and set aside.
3. Add the remaining oil to the skillet and cook the onion and mushrooms for 6 minutes, then add the garlic.
4. Stir in the flour, then slowly whisk in the broth. Simmer for 5 minutes, until thickened.
5. Reduce heat to low, stir in the sour cream, and return the beef to the skillet. Season with salt and pepper and warm through for 2 minutes.
6. Serve over the egg noodles.

### 265. Tuna Noodle Casserole

**Total Time:** 40 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 8 oz egg noodles
- 2 cans (5 oz each) tuna, drained
- 3 tbsp butter
- 3 tbsp flour
- 2 cups milk
- 1 cup shredded cheddar cheese
- 1 cup frozen peas
- 1/2 cup breadcrumbs
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 375°F (190°C) and cook the egg noodles in salted boiling water until al dente. Drain.
2. In a saucepan, melt the butter, whisk in the flour, and cook for 1 minute.
3. Slowly whisk in the milk and cook for 5 minutes, until thickened, then stir in the cheese, salt, and pepper.
4. Combine the sauce with the noodles, tuna, and peas, then pour into a baking dish and top with breadcrumbs.
5. Bake for 20 minutes, until bubbling and the top is lightly browned.

### 266. King Ranch Chicken Casserole

**Total Time:** 50 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 3 cups cooked chicken, shredded
- 10 small corn tortillas, torn into pieces
- 1 can (10 oz) diced tomatoes with green chilies
- 1 cup sour cream
- 1 can (10 oz) cream of chicken soup
- 1 onion, diced
- 1 bell pepper, diced
- 2 cups shredded cheddar cheese
- 1 tsp cumin
- 1 tsp salt

**Instructions:**
1. Preheat the oven to 350°F (175°C).
2. In a large bowl, mix the chicken, tomatoes with green chilies, sour cream, cream of chicken soup, onion, bell pepper, cumin, and salt.
3. Spread a third of the mixture in a baking dish, layer with a third of the tortilla pieces, and sprinkle with a third of the cheese. Repeat the layers twice more.
4. Cover with foil and bake for 25 minutes.
5. Uncover and bake for 10 more minutes, until the cheese is bubbling and golden.

### 267. Buffalo Chicken Macaroni and Cheese

**Total Time:** 35 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb elbow macaroni
- 2 cups cooked chicken, shredded
- 1/2 cup buffalo sauce
- 4 tbsp butter
- 4 tbsp flour
- 3 cups milk
- 3 cups shredded cheddar cheese
- 1/4 cup blue cheese, crumbled
- 1/2 tsp salt

**Instructions:**
1. Cook the macaroni in salted boiling water until al dente. Drain.
2. Toss the shredded chicken with the buffalo sauce.
3. In a saucepan, melt the butter, whisk in the flour, and cook for 1 minute.
4. Slowly whisk in the milk and cook for 5 minutes, until thickened, then stir in the cheddar cheese and salt until melted.
5. Combine the cheese sauce with the macaroni and buffalo chicken.
6. Transfer to a serving dish and top with the crumbled blue cheese.

### 268. Roast Turkey Breast with Pan Gravy

**Total Time:** 2 hrs

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 3 lb boneless turkey breast
- 2 tbsp olive oil
- 1 tsp paprika
- 1 tsp onion powder
- 1 tsp salt
- 1/2 tsp black pepper
- 2 cups chicken broth
- 2 tbsp flour

**Instructions:**
1. Preheat the oven to 325°F (163°C).
2. Rub the turkey breast with the olive oil, paprika, onion powder, salt, and pepper.
3. Place in a roasting pan with 1 cup of the broth and roast for 1 hour 30 minutes, until the internal temperature reaches 165°F (74°C).
4. Remove the turkey and let rest for 15 minutes, keeping the pan drippings.
5. Whisk the flour into the remaining broth, add to the pan drippings, and simmer on the stovetop for 5 minutes, until thickened into gravy.
6. Slice the turkey and serve with the gravy.

### 269. Spinach and Cheese Stuffed Chicken Breast

**Total Time:** 50 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 boneless chicken breasts
- 2 cups fresh spinach, chopped
- 1 cup shredded mozzarella cheese
- 1/4 cup cream cheese, softened
- 2 cloves garlic, minced
- 2 tbsp olive oil
- 1 tsp paprika
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 375°F (190°C).
2. In a bowl, mix the spinach, mozzarella, cream cheese, and garlic.
3. Cut a pocket into the side of each chicken breast and stuff with the spinach mixture, securing with toothpicks if needed.
4. Rub the outside of the chicken with olive oil and season with paprika, salt, and pepper.
5. Heat a skillet over medium-high heat and sear the chicken for 2 minutes per side, then transfer to a baking dish.
6. Bake for 25 to 30 minutes, until the internal temperature reaches 165°F (74°C).

### 270. Oven-Fried Chicken Tenders with Honey Mustard

**Total Time:** 35 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs chicken tenders
- 1 cup panko breadcrumbs
- 1/2 cup flour
- 2 eggs, beaten
- 1 tsp paprika
- 1 tsp salt
- 1/2 tsp black pepper
- 1/4 cup honey
- 3 tbsp mustard
- 2 tbsp mayonnaise

**Instructions:**
1. Preheat the oven to 425°F (220°C) and line a baking sheet with foil.
2. Mix the panko with paprika, salt, and pepper.
3. Dredge each chicken tender in the flour, then the beaten eggs, then the panko mixture, pressing to coat.
4. Arrange the tenders on the baking sheet and bake for 18 to 20 minutes, flipping halfway, until golden and the internal temperature reaches 165°F (74°C).
5. Whisk together the honey, mustard, and mayonnaise for the dipping sauce.
6. Serve the tenders hot with the honey mustard sauce.

### 271. Barbecue Turkey Meatballs with Rice

**Total Time:** 45 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 lbs ground turkey
- 1/2 cup breadcrumbs
- 1 egg
- 1 small onion, grated
- 2 cloves garlic, minced
- 1 cup barbecue sauce, divided
- 1 1/2 cups rice
- 3 cups chicken broth
- 1 tsp salt
- 1/2 tsp black pepper

**Instructions:**
1. Preheat the oven to 400°F (200°C).
2. In a bowl, mix the ground turkey, breadcrumbs, egg, onion, garlic, 1/4 cup barbecue sauce, salt, and pepper. Shape into 20 meatballs.
3. Arrange the meatballs on a baking sheet and bake for 20 minutes, until cooked through.
4. Meanwhile, bring the rice and broth to a boil, then cover and simmer on low for 18 to 20 minutes, until the rice is tender.
5. Toss the baked meatballs with the remaining barbecue sauce and serve over the rice.

### 272. Baked Beans and Cornbread Skillet

**Total Time:** 50 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz each) navy beans, drained
- 1 onion, diced
- 1/2 cup ketchup
- 1/4 cup brown sugar
- 2 tbsp mustard
- 1 cup vegetable broth
- 1 cup cornmeal
- 1 cup flour
- 1 tbsp baking powder
- 1 cup milk
- 1 egg
- 3 tbsp butter, melted

**Instructions:**
1. Preheat the oven to 375°F (190°C).
2. In an oven-safe skillet, cook the onion in a little oil over medium heat for 4 minutes, then stir in the beans, ketchup, brown sugar, mustard, and vegetable broth. Simmer for 10 minutes.
3. In a bowl, mix the cornmeal, flour, and baking powder, then stir in the milk, egg, and melted butter until just combined.
4. Pour the cornbread batter evenly over the beans in the skillet.
5. Bake for 25 to 30 minutes, until the cornbread is golden and a toothpick comes out clean.
6. Let stand for 5 minutes before serving.

### 273. Pan-Seared Salmon with Dill Cream Sauce

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 salmon fillets, skin on
- 2 tbsp olive oil
- 1/2 cup heavy cream
- 1/4 cup sour cream
- 2 tbsp fresh dill, chopped
- 1 tbsp lemon juice
- 1 small shallot, minced
- 1/2 cup chicken or vegetable broth

**Instructions:**
1. Pat the salmon dry and season both sides with salt and pepper.
2. Heat olive oil in a skillet over medium-high heat and sear the salmon skin-side down for 4 minutes.
3. Flip and cook for another 3 to 4 minutes until the fish flakes easily. Remove and set aside.
4. In the same skillet, cook the shallot for 1 minute, then add the broth and simmer for 2 minutes.
5. Stir in the heavy cream, sour cream, and lemon juice and simmer for 3 minutes until slightly thickened.
6. Stir in the dill, spoon the sauce over the salmon, and serve.

### 274. Baked Lemon Butter Cod

**Total Time:** 30 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 4 cod fillets
- 4 tbsp butter, melted
- 2 tbsp lemon juice
- 1 lemon, sliced
- 2 cloves garlic, minced
- 1 tbsp fresh parsley, chopped
- 1/2 tsp paprika

**Instructions:**
1. Preheat the oven to 400°F (200°C) and lightly grease a baking dish.
2. Place the cod fillets in the dish and season with salt, pepper, and paprika.
3. Mix the melted butter, lemon juice, and garlic, then pour over the fillets.
4. Top with lemon slices and bake for 15 to 18 minutes until the fish is opaque and flakes easily.
5. Sprinkle with parsley before serving.

### 275. Fish and Chips

**Total Time:** 40 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 white fish fillets (cod or haddock)
- 1 cup flour, divided
- 1 tsp baking powder
- 1 cup cold sparkling water
- 4 medium potatoes, cut into thick chips
- 3 cups vegetable oil, for frying
- 1/2 tsp paprika
- 1 lemon, cut into wedges

**Instructions:**
1. Soak the potato chips in cold water for 10 minutes, then drain and pat dry.
2. Heat the oil in a deep pot to 325°F (165°C) and fry the chips for 6 minutes. Remove and drain.
3. Whisk 3/4 cup flour, baking powder, paprika, salt, and sparkling water into a smooth batter.
4. Dust the fish in the remaining flour, dip into the batter, and fry at 350°F (175°C) for 5 to 6 minutes until golden.
5. Raise the oil back to 375°F (190°C) and fry the chips a second time for 3 minutes until crisp.
6. Drain fish and chips on paper towels, season with salt, and serve with lemon wedges.

### 276. Grilled Halibut with Mango Salsa

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 halibut fillets
- 2 tbsp olive oil
- 1 mango, diced
- 1/2 red onion, finely diced
- 1/2 red bell pepper, diced
- 1 tbsp lime juice
- 2 tbsp fresh cilantro, chopped
- 1 small jalapeno, minced

**Instructions:**
1. Preheat a grill or grill pan to medium-high heat.
2. Brush the halibut with olive oil and season with salt and pepper.
3. Grill the fillets for 4 to 5 minutes per side until opaque and flaking.
4. While the fish cooks, combine the mango, red onion, bell pepper, lime juice, cilantro, and jalapeno in a bowl.
5. Season the salsa with salt and spoon over the grilled halibut to serve.

### 277. Blackened Tilapia with Rice

**Total Time:** 25 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 tilapia fillets
- 2 tbsp olive oil
- 1 tbsp paprika
- 1 tsp cayenne pepper
- 1 tsp onion powder
- 1 tsp garlic powder
- 1 1/2 cups cooked white rice
- 1 lime, cut into wedges

**Instructions:**
1. Cook the rice according to package instructions and keep warm.
2. Mix the paprika, cayenne, onion powder, garlic powder, salt, and pepper in a small bowl.
3. Rub the tilapia fillets with olive oil, then coat both sides with the spice mix.
4. Heat a skillet over medium-high heat and cook the fillets for 3 to 4 minutes per side until blackened and cooked through.
5. Serve the tilapia over the rice with lime wedges.

### 278. Cioppino

**Total Time:** 45 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 lb shrimp, peeled and deveined
- 1/2 lb clams, scrubbed
- 1/2 lb mussels, scrubbed
- 1/2 lb white fish, cut into chunks
- 1 can (28 oz) crushed tomatoes
- 1 cup dry white wine
- 1/2 onion, diced
- 3 cloves garlic, minced
- 2 cups seafood or vegetable stock

**Instructions:**
1. Heat olive oil in a large pot over medium heat and cook the onion for 4 minutes until soft.
2. Add the garlic and cook for 1 minute, then pour in the white wine and simmer for 3 minutes.
3. Stir in the crushed tomatoes and stock, season with salt, pepper, and oregano, and simmer for 15 minutes.
4. Add the clams and mussels, cover, and cook for 5 minutes until they start to open.
5. Add the shrimp and fish chunks and simmer for 5 more minutes until everything is cooked through.
6. Discard any unopened shells and serve the stew hot.

### 279. Mussels in White Wine and Garlic

**Total Time:** 25 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 lbs mussels, scrubbed and debearded
- 3 tbsp butter
- 4 cloves garlic, minced
- 1 shallot, minced
- 1 cup dry white wine
- 1/4 cup fresh parsley, chopped
- 1 lemon, cut into wedges

**Instructions:**
1. Melt the butter in a large pot over medium heat and cook the shallot and garlic for 2 minutes.
2. Pour in the white wine and bring to a simmer for 2 minutes.
3. Add the mussels, cover the pot, and cook for 5 to 6 minutes, shaking occasionally, until the shells open.
4. Discard any mussels that do not open.
5. Stir in the parsley and season with salt and pepper.
6. Serve with lemon wedges and the broth spooned over the top.

### 280. Garlic Butter Scallops

**Total Time:** 15 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 1 lb large scallops, patted dry
- 3 tbsp butter
- 1 tbsp olive oil
- 4 cloves garlic, minced
- 1 tbsp lemon juice
- 2 tbsp fresh parsley, chopped

**Instructions:**
1. Season the scallops with salt and pepper on both sides.
2. Heat the olive oil in a skillet over high heat until shimmering.
3. Sear the scallops for 2 minutes per side until golden brown. Remove and set aside.
4. Lower the heat to medium, add the butter and garlic, and cook for 1 minute until fragrant.
5. Stir in the lemon juice, return the scallops to the pan, and toss to coat.
6. Sprinkle with parsley and serve immediately.

### 281. Sesame Crusted Tuna Steak

**Total Time:** 15 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 tuna steaks
- 1/4 cup sesame seeds, mixed white and black
- 2 tbsp soy sauce
- 1 tbsp sesame oil
- 1 tbsp vegetable oil
- 1 tsp fresh ginger, grated
- 2 green onions, sliced

**Instructions:**
1. Mix the soy sauce, sesame oil, and ginger in a shallow dish and marinate the tuna for 10 minutes.
2. Spread the sesame seeds on a plate and press each tuna steak into them to coat all sides.
3. Heat the vegetable oil in a skillet over high heat until very hot.
4. Sear the tuna for 1 to 2 minutes per side for a rare center, or longer for more doneness.
5. Slice the tuna against the grain and top with sliced green onions before serving.

### 282. Coq au Vin

**Total Time:** 1 hr 30 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 chicken thighs and 4 drumsticks, skin on
- 4 slices bacon, chopped
- 8 oz mushrooms, halved
- 1 onion, sliced
- 2 carrots, sliced
- 2 cups red wine
- 1 cup chicken stock
- 2 tbsp butter
- 2 tbsp flour

**Instructions:**
1. Cook the bacon in a large pot over medium heat until crisp. Remove and set aside, leaving the fat in the pot.
2. Season the chicken with salt and pepper and brown on all sides in the bacon fat, about 8 minutes. Remove and set aside.
3. Add the onion, carrots, and mushrooms to the pot and cook for 6 minutes until softened.
4. Stir in the flour, then pour in the red wine and chicken stock, scraping up any browned bits.
5. Return the chicken and bacon to the pot, bring to a simmer, cover, and cook for 45 minutes until the chicken is tender.
6. Stir in the butter to finish the sauce and season with salt and pepper before serving.

### 283. Beef Bourguignon

**Total Time:** 2 hrs 30 mins

**Dietary:** Nut-free

**Ingredients:**
- 2 lbs beef chuck, cut into chunks
- 4 oz bacon, chopped
- 1 onion, diced
- 2 carrots, sliced
- 8 oz mushrooms, halved
- 2 cups red wine
- 2 cups beef stock
- 2 tbsp tomato paste
- 2 tbsp flour

**Instructions:**
1. Cook the bacon in a large pot over medium heat until crisp, then remove and set aside.
2. Pat the beef dry, season with salt and pepper, and brown in the bacon fat in batches, about 8 minutes total. Remove and set aside.
3. Add the onion and carrots to the pot and cook for 5 minutes, then stir in the flour and tomato paste.
4. Pour in the red wine and beef stock, scraping up the browned bits, and return the beef and bacon to the pot.
5. Bring to a simmer, cover, and cook on low heat for 2 hours, or until the beef is very tender.
6. Add the mushrooms in the last 20 minutes of cooking and season with salt and pepper to finish.

### 284. Ratatouille

**Total Time:** 45 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 eggplant, diced
- 2 zucchini, diced
- 1 red bell pepper, diced
- 1 yellow bell pepper, diced
- 1 onion, diced
- 3 tomatoes, diced
- 3 tbsp olive oil
- 2 tbsp tomato paste
- 2 tbsp fresh basil, chopped

**Instructions:**
1. Heat the olive oil in a large pan over medium heat and cook the onion for 4 minutes until soft.
2. Add the eggplant and cook for 6 minutes, stirring occasionally.
3. Add the bell peppers and zucchini and cook for 8 minutes until starting to soften.
4. Stir in the tomatoes, tomato paste, dried thyme, and dried oregano.
5. Season with salt and pepper, cover, and simmer for 20 minutes until all the vegetables are tender.
6. Stir in the fresh basil before serving.

### 285. Chicken Cordon Bleu

**Total Time:** 45 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 chicken breasts, butterflied
- 4 slices ham
- 4 slices Swiss cheese
- 1 cup breadcrumbs
- 2 eggs, beaten
- 1/2 cup flour
- 2 tbsp butter
- 2 tbsp olive oil

**Instructions:**
1. Preheat the oven to 375°F (190°C).
2. Season the chicken breasts with salt and pepper, then lay a slice of ham and a slice of cheese on each and roll up, securing with toothpicks.
3. Dredge each roll in flour, dip in the beaten egg, then coat in breadcrumbs.
4. Heat the butter and olive oil in an oven-safe skillet over medium heat and brown the rolls on all sides, about 5 minutes total.
5. Transfer the skillet to the oven and bake for 20 minutes until the chicken is cooked through.
6. Remove the toothpicks before slicing and serving.

### 286. Quiche Lorraine

**Total Time:** 1 hr

**Dietary:** Nut-free

**Ingredients:**
- 1 pie crust, unbaked
- 6 slices bacon, chopped
- 1 onion, diced
- 4 eggs
- 1 cup heavy cream
- 1/2 cup milk
- 1 cup Gruyere cheese, grated

**Instructions:**
1. Preheat the oven to 375°F (190°C) and fit the pie crust into a tart pan.
2. Cook the bacon in a skillet over medium heat until crisp, then add the onion and cook for 4 minutes. Drain and set aside.
3. Whisk the eggs, heavy cream, and milk together and season with salt and pepper.
4. Scatter the bacon, onion, and cheese into the pie crust, then pour the egg mixture over the top.
5. Bake for 35 to 40 minutes until the center is set and the top is lightly golden.
6. Let the quiche rest for 10 minutes before slicing.

### 287. Spinach and Mushroom Quiche

**Total Time:** 1 hr

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 pie crust, unbaked
- 2 cups fresh spinach, chopped
- 8 oz mushrooms, sliced
- 1 small onion, diced
- 4 eggs
- 1 cup heavy cream
- 1/2 cup milk
- 1 cup cheddar cheese, grated

**Instructions:**
1. Preheat the oven to 375°F (190°C) and fit the pie crust into a tart pan.
2. Heat olive oil in a skillet over medium heat and cook the onion and mushrooms for 6 minutes until softened.
3. Add the spinach and cook for 2 minutes until wilted, then remove from heat and let cool slightly.
4. Whisk the eggs, heavy cream, and milk together and season with salt and pepper.
5. Spread the vegetables and cheese into the pie crust, then pour the egg mixture over the top.
6. Bake for 35 to 40 minutes until the center is set and lightly golden, then rest for 10 minutes before slicing.

### 288. Steak Frites with Herb Butter

**Total Time:** 40 mins

**Dietary:** Nut-free · Pork-free

**Ingredients:**
- 2 ribeye or sirloin steaks
- 4 tbsp butter, softened
- 1 tbsp fresh parsley, chopped
- 1 tsp fresh chives, chopped
- 1 tsp lemon juice
- 4 medium potatoes, cut into thin fries
- 3 cups vegetable oil, for frying
- 1 tbsp olive oil

**Instructions:**
1. Soak the potato fries in cold water for 10 minutes, then drain and pat dry.
2. Heat the vegetable oil to 325°F (165°C) and fry the potatoes for 5 minutes. Remove and drain.
3. Mix the softened butter with parsley, chives, and lemon juice, then season with salt. Set aside.
4. Raise the oil to 375°F (190°C) and fry the potatoes again for 3 to 4 minutes until golden and crisp. Drain and salt.
5. Season the steaks with salt and pepper, heat olive oil in a skillet over high heat, and sear for 3 to 4 minutes per side for medium-rare.
6. Let the steaks rest for 5 minutes, top with a spoonful of herb butter, and serve with the fries.

### 289. Salmon en Papillote

**Total Time:** 30 mins

**Dietary:** Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 4 salmon fillets
- 1 zucchini, thinly sliced
- 1 carrot, julienned
- 1 lemon, thinly sliced
- 2 tbsp olive oil
- 2 tbsp fresh dill, chopped
- 1/4 cup dry white wine

**Instructions:**
1. Preheat the oven to 400°F (200°C) and cut four large squares of parchment paper.
2. Divide the zucchini and carrot among the parchment squares and place a salmon fillet on top of each.
3. Season with salt and pepper, drizzle with olive oil and white wine, and top with lemon slices and dill.
4. Fold the parchment over each fillet and crimp the edges tightly to seal into a packet.
5. Bake for 15 to 18 minutes until the salmon is opaque and flakes easily.
6. Carefully open the packets, mindful of escaping steam, and serve.

### 290. Vegetable Lasagna

**Total Time:** 1 hr 15 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 9 lasagna noodles
- 2 cups ricotta cheese
- 2 cups mozzarella cheese, shredded
- 1/2 cup parmesan cheese, grated
- 1 egg
- 2 cups marinara sauce
- 1 zucchini, diced
- 2 cups fresh spinach, chopped
- 8 oz mushrooms, sliced

**Instructions:**
1. Preheat the oven to 375°F (190°C) and cook the lasagna noodles according to package instructions.
2. Heat olive oil in a skillet and cook the zucchini and mushrooms for 6 minutes, then add the spinach and cook until wilted. Season with salt and pepper.
3. Mix the ricotta, egg, half the parmesan, and half the mozzarella in a bowl.
4. Spread a layer of marinara in a baking dish, then layer noodles, ricotta mixture, vegetables, and marinara, repeating to use all the ingredients.
5. Top with the remaining mozzarella and parmesan.
6. Cover with foil and bake for 30 minutes, then uncover and bake 10 more minutes until golden and bubbling.

### 291. Mushroom Stroganoff

**Total Time:** 30 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 lb mixed mushrooms, sliced
- 1 onion, diced
- 2 cloves garlic, minced
- 1 cup sour cream
- 1 cup vegetable stock
- 2 tbsp flour
- 2 tbsp butter
- 8 oz egg noodles

**Instructions:**
1. Cook the egg noodles according to package instructions and drain.
2. Melt the butter in a large skillet over medium heat and cook the onion for 4 minutes.
3. Add the mushrooms and garlic and cook for 8 minutes until the mushrooms release their liquid and start to brown.
4. Stir in the flour and cook for 1 minute, then pour in the vegetable stock and simmer for 3 minutes.
5. Lower the heat and stir in the sour cream, season with salt and pepper, and warm through without boiling.
6. Serve the stroganoff over the egg noodles.

### 292. Lentil Shepherd's Pie

**Total Time:** 1 hr

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 1 1/2 cups dried lentils, cooked
- 1 onion, diced
- 2 carrots, diced
- 1 cup frozen peas
- 2 cups vegetable stock
- 2 tbsp tomato paste
- 2 lbs potatoes, peeled and cubed
- 4 tbsp butter
- 1/4 cup milk

**Instructions:**
1. Boil the potatoes in salted water for 15 minutes until fork-tender, then drain.
2. Mash the potatoes with the butter and milk, and season with salt and pepper.
3. Preheat the oven to 400°F (200°C).
4. Heat olive oil in a pan and cook the onion and carrots for 6 minutes, then stir in the tomato paste, vegetable stock, dried thyme, and cooked lentils.
5. Simmer for 10 minutes until thickened, then stir in the peas and season with salt and pepper.
6. Spread the lentil mixture in a baking dish, top with the mashed potatoes, and bake for 20 minutes until golden on top.

### 293. Stuffed Portobello Mushrooms

**Total Time:** 35 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 4 large portobello mushroom caps, stems removed
- 2 cups fresh spinach, chopped
- 1/2 cup ricotta cheese
- 1/2 cup mozzarella cheese, shredded
- 1/4 cup breadcrumbs
- 2 cloves garlic, minced
- 2 tbsp olive oil
- 1 tbsp balsamic vinegar

**Instructions:**
1. Preheat the oven to 400°F (200°C) and brush the mushroom caps with olive oil and balsamic vinegar.
2. Place the caps gill-side up on a baking sheet and bake for 10 minutes to release moisture.
3. Heat a little olive oil in a pan and cook the garlic and spinach for 2 minutes until wilted.
4. Mix the spinach with the ricotta, breadcrumbs, and season with salt and pepper.
5. Spoon the mixture into the mushroom caps and top with mozzarella.
6. Bake for 12 to 15 minutes until the cheese is melted and golden.

### 294. Cauliflower Steaks with Chimichurri

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 large head cauliflower, cut into thick steaks
- 3 tbsp olive oil, divided
- 1/2 cup fresh parsley, chopped
- 2 tbsp fresh oregano, chopped
- 2 cloves garlic, minced
- 2 tbsp red wine vinegar
- 1/4 tsp red pepper flakes

**Instructions:**
1. Preheat the oven to 425°F (220°C).
2. Brush the cauliflower steaks with 2 tablespoons olive oil and season with salt and pepper.
3. Roast on a baking sheet for 12 minutes per side until tender and browned at the edges.
4. Meanwhile, mix the parsley, oregano, garlic, red wine vinegar, remaining olive oil, and red pepper flakes in a bowl.
5. Season the chimichurri with salt and let it sit for 10 minutes to develop flavor.
6. Spoon the chimichurri generously over the roasted cauliflower steaks before serving.

### 295. Butternut Squash and Sage Risotto

**Total Time:** 45 mins

**Dietary:** Vegetarian · Nut-free · Pork-free

**Ingredients:**
- 2 cups butternut squash, diced
- 1 1/2 cups arborio rice
- 4 cups vegetable stock, warmed
- 1/2 onion, diced
- 1/2 cup dry white wine
- 4 tbsp butter, divided
- 1/2 cup parmesan cheese, grated
- 2 tbsp fresh sage, chopped

**Instructions:**
1. Preheat the oven to 400°F (200°C), toss the squash with olive oil, salt, and pepper, and roast for 20 minutes until tender.
2. Melt 2 tablespoons butter in a large pot over medium heat and cook the onion for 4 minutes.
3. Add the rice and stir for 1 minute, then pour in the white wine and cook until absorbed.
4. Add the warm stock one ladle at a time, stirring often and waiting for each addition to absorb before adding more, about 20 minutes total.
5. Stir in the roasted squash, remaining butter, parmesan, and sage.
6. Season with salt and pepper and serve immediately.

### 296. Vegetable Biryani

**Total Time:** 50 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cups basmati rice
- 1 carrot, diced
- 1 potato, diced
- 1/2 cup green beans, chopped
- 1/2 cup frozen peas
- 1 onion, thinly sliced
- 3 tbsp vegetable oil
- 2 tsp garam masala
- 1 tsp turmeric
- 2 1/2 cups vegetable stock

**Instructions:**
1. Rinse the rice and soak in water for 15 minutes, then drain.
2. Heat the vegetable oil in a large pot over medium heat and cook the onion for 8 minutes until golden.
3. Add the carrot, potato, and green beans and cook for 5 minutes, stirring in the garam masala and turmeric.
4. Add the rice and stir to coat in the spices, then pour in the vegetable stock and stir in the peas.
5. Season with salt, bring to a boil, then cover and reduce heat to low, cooking for 18 minutes.
6. Remove from heat and let stand, covered, for 5 minutes before fluffing with a fork.

### 297. Coconut Chickpea and Sweet Potato Stew

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz) chickpeas, drained and rinsed
- 2 sweet potatoes, peeled and cubed
- 1 can (14 oz) coconut milk
- 1 onion, diced
- 2 cloves garlic, minced
- 1 tbsp curry powder
- 1 tsp ground cumin
- 2 cups vegetable stock

**Instructions:**
1. Heat olive oil in a large pot over medium heat and cook the onion for 4 minutes until soft.
2. Add the garlic, curry powder, and cumin and cook for 1 minute until fragrant.
3. Stir in the sweet potatoes, chickpeas, coconut milk, and vegetable stock.
4. Bring to a boil, then reduce heat and simmer for 25 minutes until the sweet potatoes are tender.
5. Season with salt and pepper before serving.

### 298. Eggplant and Chickpea Tagine

**Total Time:** 45 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 large eggplant, cubed
- 1 can (15 oz) chickpeas, drained and rinsed
- 1 can (14 oz) diced tomatoes
- 1 onion, diced
- 2 cloves garlic, minced
- 1 tsp ground cumin
- 1 tsp ground cinnamon
- 1/4 cup dried apricots, chopped
- 2 cups vegetable stock

**Instructions:**
1. Heat olive oil in a large pot over medium heat and cook the onion for 4 minutes.
2. Add the garlic, cumin, and cinnamon and cook for 1 minute until fragrant.
3. Add the eggplant and cook for 6 minutes, stirring occasionally.
4. Stir in the chickpeas, tomatoes, dried apricots, and vegetable stock.
5. Bring to a simmer, cover, and cook for 25 minutes until the eggplant is tender.
6. Season with salt and pepper before serving.

### 299. Lentil Bolognese with Spaghetti

**Total Time:** 40 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 1 cup dried brown lentils
- 12 oz spaghetti
- 1 can (28 oz) crushed tomatoes
- 1 onion, diced
- 1 carrot, diced
- 1 celery stalk, diced
- 2 cloves garlic, minced
- 1/2 cup red wine
- 2 tbsp tomato paste

**Instructions:**
1. Cook the lentils in a pot of water for 20 minutes until tender, then drain.
2. Cook the spaghetti according to package instructions and drain.
3. Heat olive oil in a large pan over medium heat and cook the onion, carrot, and celery for 6 minutes.
4. Add the garlic and tomato paste and cook for 1 minute, then pour in the red wine and simmer for 2 minutes.
5. Stir in the crushed tomatoes and cooked lentils, season with salt, pepper, and dried oregano, and simmer for 15 minutes.
6. Toss the sauce with the spaghetti and serve.

### 300. Black Bean Burgers with Avocado

**Total Time:** 30 mins

**Dietary:** Vegetarian · Dairy-free · Nut-free · Pork-free

**Ingredients:**
- 2 cans (15 oz) black beans, drained and rinsed
- 1/2 cup breadcrumbs
- 1 egg
- 1/2 red onion, finely diced
- 2 cloves garlic, minced
- 1 tsp ground cumin
- 1 avocado, sliced
- 4 burger buns
- 2 tbsp olive oil

**Instructions:**
1. Mash the black beans in a large bowl, leaving some texture, then mix in the breadcrumbs, egg, onion, garlic, and cumin.
2. Season with salt and pepper and shape the mixture into 4 patties.
3. Heat the olive oil in a skillet over medium heat and cook the patties for 5 minutes per side until browned and firm.
4. Toast the burger buns lightly.
5. Assemble the burgers on the buns topped with sliced avocado and serve.

## Category 4: Expansion Pool (301 to 579)

Added 2026-10-29 from `Expanded_Recipe_Pool_300.md`. That file offered 300 recipes; 21 repeated a dish already in this database and were not taken, so 279 were added. Existing entries keep their numbers and photos.

### 301. Turmeric Tofu Scramble

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) firm tofu, drained
- 1 cup fresh baby spinach
- ½ red bell pepper, diced
- ¼ cup diced onion
- ¼ tsp ground turmeric
- 1 tbsp olive oil
- Salt and black pepper to taste

**Instructions:**
1. Pat the tofu dry with paper towel. Crumble it into a bowl by hand.
2. Heat the olive oil in a nonstick skillet over medium heat. Cook the onion and bell pepper for 3 minutes.
3. Add the tofu, turmeric, ½ tsp garlic powder, salt, and pepper. Cook for 5 minutes and stir often.
4. Add the spinach. Stir until it wilts, about 1 minute. Serve warm.

### 302. Smoked Salmon Bagel with Dill

**Total Time:** 5 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 whole wheat bagels, halved
- 3 oz smoked salmon
- 3 tbsp light cream cheese
- ½ English cucumber, thinly sliced
- 2 tbsp thinly sliced red onion
- 1 tsp capers, drained
- 1 tsp chopped fresh dill

**Instructions:**
1. Toast the bagel halves.
2. Spread the cream cheese on each half.
3. Add the cucumber, smoked salmon, red onion, capers, and dill. Serve immediately.

### 303. Strawberry Banana Smoothie Bowl

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1½ cups frozen strawberries
- 1 frozen banana, sliced
- ¾ cup plain Greek yogurt
- ½ cup milk
- 2 tbsp hemp seeds
- ½ cup fresh blueberries

**Instructions:**
1. Put the strawberries, banana, yogurt, and milk in a blender. Blend until thick and smooth. Add milk 1 tbsp at a time if the blender stalls.
2. Divide the mixture between 2 bowls.
3. Add the blueberries and hemp seeds. Serve immediately.

### 304. Black Bean Breakfast Quesadilla

**Total Time:** 12 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 3 large eggs
- ½ cup canned black beans, rinsed and drained
- ½ cup shredded cheddar cheese
- 2 tbsp salsa
- Salt and black pepper to taste

**Instructions:**
1. Whisk the eggs with salt and pepper. Scramble them in a nonstick skillet with cooking spray over medium heat until fully set, about 2 minutes. Remove the eggs.
2. Put 1 tortilla in the skillet. Add half the cheese, then the eggs and beans, then the rest of the cheese. Put the second tortilla on top.
3. Cook for 2 to 3 minutes on each side until the tortilla is golden and the cheese melts.
4. Cut into wedges. Serve with the salsa.

### 305. Denver Omelette

**Total Time:** 12 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 large eggs
- 2 oz lean deli ham, diced
- ¼ cup diced green bell pepper
- ¼ cup diced onion
- ¼ cup shredded cheddar cheese
- 1 tsp butter
- Salt and black pepper to taste

**Instructions:**
1. Whisk the eggs with salt and pepper.
2. Melt the butter in a nonstick skillet over medium heat. Cook the ham, bell pepper, and onion for 3 minutes.
3. Pour the eggs over the filling. Lift the edges with a spatula so that the uncooked egg flows under. Cook until the eggs are fully set, about 3 minutes.
4. Add the cheese to one half and fold the omelette. Cut in half and serve.

### 306. Coconut Mango Chia Pudding

**Total Time:** 5 mins (plus overnight chill)

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- ¼ cup chia seeds
- 1 cup light coconut milk
- 1 tbsp maple syrup
- ½ tsp vanilla extract
- 1 cup diced fresh or thawed frozen mango

**Instructions:**
1. Mix the chia seeds, coconut milk, maple syrup, and vanilla in a jar. Stir well.
2. Wait 5 minutes, then stir again to break up any clumps.
3. Cover and refrigerate overnight, or at least 2 hours.
4. Add the mango on top. Serve cold.

### 307. Sweet Potato Hash with Fried Eggs

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 medium sweet potato, cut into ½-inch cubes
- ½ red bell pepper, diced
- ¼ cup diced onion
- 4 large eggs
- 1 tbsp olive oil
- ½ tsp smoked paprika
- Salt and black pepper to taste

**Instructions:**
1. Put the sweet potato cubes in a microwave-safe bowl with 1 tbsp water. Cover and microwave for 4 minutes until just tender.
2. Heat the olive oil in a large skillet over medium-high heat. Add the sweet potato, bell pepper, onion, paprika, salt, and pepper. Cook for 7 minutes and stir sometimes, until the potatoes brown.
3. Make 4 wells in the hash. Break 1 egg into each well.
4. Cover the skillet. Cook for 4 minutes until the egg whites are fully set. Serve hot.

### 308. Turkey Sausage & Egg English Muffin

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 whole wheat English muffins, split
- 2 pre-cooked turkey sausage patties
- 2 large eggs
- 2 slices cheddar cheese
- ½ cup fresh baby spinach

**Instructions:**
1. Toast the English muffins.
2. Heat the sausage patties in a skillet over medium heat for 2 to 3 minutes on each side, until they reach 165°F (74°C).
3. Coat the skillet with cooking spray. Cook the eggs until fully set, about 3 minutes. Break the yolks to keep the eggs flat.
4. Build each sandwich in this order: muffin, spinach, sausage, egg, cheese, muffin. Serve warm.

### 309. Almond Butter & Banana Chia Toast

**Total Time:** 5 mins

**Dietary:** Vegetarian, Dairy-free, Pork-free

**Ingredients:**
- 2 slices whole grain bread
- 2 tbsp almond butter
- 1 banana, sliced
- 1 tsp chia seeds
- 1 tsp maple syrup

**Instructions:**
1. Toast the bread.
2. Spread the almond butter on each slice.
3. Add the banana slices. Sprinkle with the chia seeds and a pinch of cinnamon, then drizzle with the maple syrup. Serve.

### 310. Classic French Toast with Berries

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 slices whole grain bread
- 2 large eggs
- ⅓ cup milk
- ½ tsp vanilla extract
- ½ tsp cinnamon
- 1 tsp butter
- 1 cup mixed berries
- 1 tbsp maple syrup

**Instructions:**
1. Whisk the eggs, milk, vanilla, and cinnamon in a shallow dish.
2. Melt the butter in a large nonstick skillet over medium heat.
3. Dip each bread slice in the egg mixture for 10 seconds on each side.
4. Cook the slices for 2 to 3 minutes on each side, until golden and no liquid egg remains.
5. Add the berries and maple syrup. Serve warm.

### 311. Masala Omelette

**Total Time:** 12 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- ¼ cup finely diced onion
- ¼ cup diced tomato
- 1 small green chili, finely diced
- 2 tbsp chopped fresh cilantro
- ¼ tsp ground turmeric
- 1 tbsp olive oil
- Salt to taste

**Instructions:**
1. Whisk the eggs with the turmeric and salt. Stir in the onion, tomato, chili, and cilantro.
2. Heat half the oil in a nonstick skillet over medium heat.
3. Pour in half the egg mixture. Cook for 2 minutes until the bottom sets. Flip and cook 1 minute more, until fully set.
4. Repeat with the rest of the oil and egg mixture. Serve warm.

### 312. Ginger Rice Porridge with Soft Egg

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked white or brown rice
- 2½ cups low-sodium chicken broth
- 1 tsp grated fresh ginger
- 2 large eggs
- 2 green onions, sliced
- 1 tsp sesame oil
- 2 tsp low-sodium soy sauce

**Instructions:**
1. Put the rice, broth, and ginger in a saucepan. Bring to a boil.
2. Reduce the heat and simmer for 10 minutes. Stir often, until the porridge is thick and creamy.
3. While the rice simmers, boil the eggs for 7 minutes. Cool them in cold water, then peel and halve them.
4. Divide the porridge between 2 bowls. Add the eggs, green onions, sesame oil, and soy sauce. Serve hot.

### 313. Blueberry Cottage Cheese Pancakes

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup low-fat cottage cheese
- 2 large eggs
- ¾ cup rolled oats
- ½ tsp baking powder
- ½ tsp vanilla extract
- ½ cup fresh blueberries
- 1 tbsp maple syrup

**Instructions:**
1. Put the cottage cheese, eggs, oats, baking powder, and vanilla in a blender. Blend until smooth.
2. Stir in the blueberries by hand.
3. Heat a nonstick skillet over medium heat and coat it with cooking spray. Pour ¼ cup of batter for each pancake.
4. Cook for 2 to 3 minutes until bubbles form on the surface. Flip and cook 1 to 2 minutes more, until cooked through.
5. Serve with the maple syrup.

### 314. Granola & Honey Yogurt Bowl

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1½ cups plain Greek yogurt
- ½ cup low-sugar granola
- 1 tbsp honey
- 1 banana, sliced
- 1 tbsp pumpkin seeds

**Instructions:**
1. Divide the yogurt between 2 bowls.
2. Add the granola, banana, and pumpkin seeds.
3. Drizzle with the honey. Serve immediately so that the granola stays crisp.

### 315. Blueberry Muesli with Milk

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 tbsp sunflower seeds
- 2 tbsp raisins
- 1 cup milk
- 1 cup fresh blueberries
- 1 tbsp honey

**Instructions:**
1. Mix the oats, sunflower seeds, and raisins in 2 bowls.
2. Pour the milk over the mixture. Wait 3 minutes so that the oats soften.
3. Add the blueberries and honey. Serve.

### 316. Egg White & Veggie Scramble

**Total Time:** 12 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 cup liquid egg whites (about 8 egg whites)
- 1 cup sliced mushrooms
- 1 cup fresh baby spinach
- ½ cup diced tomato
- 1 tsp olive oil
- Salt and black pepper to taste

**Instructions:**
1. Heat the olive oil in a nonstick skillet over medium heat. Cook the mushrooms for 4 minutes until browned.
2. Add the tomato and spinach. Cook for 1 minute until the spinach wilts.
3. Pour in the egg whites with salt and pepper. Stir gently until fully set, about 3 minutes. Serve warm.

### 317. Smashed Chickpea Breakfast Toast

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 cup canned chickpeas, rinsed and drained
- 1 tbsp tahini
- 1 tbsp lemon juice
- 2 slices whole grain bread
- ½ cup cherry tomatoes, halved
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Mash the chickpeas with a fork until they are mostly broken.
2. Stir in the tahini, lemon juice, ¼ tsp cumin, salt, and pepper.
3. Toast the bread. Spread the chickpea mixture on each slice.
4. Add the tomatoes and parsley. Serve.

### 318. Pumpkin Spice Overnight Oats

**Total Time:** 5 mins (plus overnight chill)

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup rolled oats
- ½ cup canned pumpkin purée
- 1 cup milk
- 1 tbsp maple syrup
- 1 tsp pumpkin pie spice
- 2 tbsp pumpkin seeds

**Instructions:**
1. Mix the oats, pumpkin purée, milk, maple syrup, and spice in 2 jars.
2. Cover the jars and refrigerate overnight, or at least 2 hours.
3. Add the pumpkin seeds in the morning. Serve cold.

### 319. Spinach & Mushroom Frittata

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 6 large eggs
- 2 cups sliced mushrooms
- 2 cups fresh baby spinach
- ¼ cup grated parmesan cheese
- 2 tbsp milk
- 1 tbsp olive oil
- Salt and black pepper to taste

**Instructions:**
1. Heat the oven to 400°F (200°C).
2. Heat the olive oil in an oven-safe skillet over medium heat. Cook the mushrooms for 5 minutes. Add the spinach and cook 1 minute until it wilts.
3. Whisk the eggs with the milk, parmesan, salt, and pepper. Pour the mixture into the skillet.
4. Cook on the stove for 3 minutes until the edges set.
5. Move the skillet to the oven. Bake for 10 minutes until the center is set and no liquid egg remains.
6. Cut into wedges. Serve warm.

### 320. Peach & Honey Cottage Cheese Bowl

**Total Time:** 5 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1½ cups low-fat cottage cheese
- 2 ripe peaches, sliced (or 1½ cups thawed frozen peach slices)
- 2 tbsp sliced almonds
- 1 tbsp honey

**Instructions:**
1. Divide the cottage cheese between 2 bowls.
2. Add the peach slices and almonds.
3. Drizzle with the honey and add a pinch of cinnamon. Serve cold.

### 321. Bircher Muesli with Grated Apple

**Total Time:** 10 mins (plus overnight chill)

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 1 apple, grated
- ¾ cup milk
- ⅓ cup plain Greek yogurt
- 1 tbsp honey
- 2 tbsp chopped walnuts

**Instructions:**
1. Mix the oats, grated apple, milk, yogurt, and honey in a bowl.
2. Divide the mixture between 2 jars. Cover and refrigerate overnight.
3. Add the walnuts and a pinch of cinnamon in the morning. Serve cold.

### 322. Scrambled Eggs with Smoked Salmon & Chives

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 3 oz smoked salmon, torn into pieces
- 2 tbsp chopped fresh chives
- 2 tbsp milk
- 1 tsp butter
- 2 slices whole grain bread
- Black pepper to taste

**Instructions:**
1. Whisk the eggs with the milk and pepper.
2. Toast the bread.
3. Melt the butter in a nonstick skillet over low heat. Pour in the eggs.
4. Stir slowly and constantly for 3 minutes, until the eggs form soft curds and are fully set.
5. Remove the skillet from the heat. Fold in the salmon and chives. Serve on the toast.

### 323. Farro Breakfast Bowl with Soft Egg

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup quick-cook farro
- 2 large eggs
- 1 cup cherry tomatoes, halved
- 2 cups fresh baby spinach
- 2 tbsp crumbled feta cheese
- 1 tbsp olive oil
- 1 tbsp lemon juice

**Instructions:**
1. Cook the farro as the package says, usually 10 minutes. Drain it.
2. Boil the eggs for 7 minutes. Cool them in cold water, then peel and halve them.
3. Toss the warm farro with the spinach, tomatoes, olive oil, lemon juice, salt, and pepper. The heat wilts the spinach.
4. Divide between 2 bowls. Add the eggs and feta. Serve warm.

### 324. Zucchini & Feta Fritters

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 medium zucchini, grated
- 2 large eggs
- ⅓ cup crumbled feta cheese
- ⅓ cup whole wheat flour
- 2 green onions, sliced
- 2 tbsp olive oil
- ¼ cup plain Greek yogurt

**Instructions:**
1. Put the grated zucchini in a clean towel. Squeeze out as much water as you can.
2. Mix the zucchini, eggs, feta, flour, green onions, salt, and pepper.
3. Heat the olive oil in a large skillet over medium heat.
4. Drop ¼-cup portions into the pan and flatten them. Cook for 3 minutes on each side until golden and firm in the center.
5. Serve with the Greek yogurt.

### 325. Banana Oat Blender Muffins

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups rolled oats
- 2 ripe bananas
- 2 large eggs
- ½ cup plain Greek yogurt
- 2 tbsp maple syrup
- 1 tsp baking powder
- ½ cup blueberries

**Instructions:**
1. Heat the oven to 375°F (190°C). Coat a 12-cup muffin tin with cooking spray.
2. Put the oats, bananas, eggs, yogurt, maple syrup, baking powder, and 1 tsp cinnamon in a blender. Blend until smooth.
3. Stir in the blueberries by hand.
4. Fill each muffin cup about three-quarters full.
5. Bake for 16 to 18 minutes, until a toothpick comes out clean. Cool for 3 minutes before you remove them.

### 326. Berry Spinach Protein Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1½ cups frozen mixed berries
- 2 cups fresh baby spinach
- ½ cup plain Greek yogurt
- 1 cup milk
- 1 tbsp ground flaxseed
- 1 tsp honey

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 60 seconds until completely smooth with no spinach flecks.
3. Pour into 2 glasses. Serve immediately.

### 327. Avocado & Black Bean Breakfast Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) black beans, rinsed and drained
- 1 avocado, diced
- 1 cup cherry tomatoes, halved
- ¼ cup diced red onion
- 2 tbsp chopped fresh cilantro
- 2 tbsp lime juice
- 1 tbsp olive oil

**Instructions:**
1. Warm the beans in a small pan with ½ tsp cumin and 2 tbsp water for 3 minutes.
2. Divide the beans between 2 bowls.
3. Add the avocado, tomatoes, onion, and cilantro.
4. Mix the lime juice and olive oil with salt and pepper. Drizzle over the bowls. Serve.

### 328. Ham & Cheese Egg Cups

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 6 large eggs
- 3 oz lean deli ham, diced
- ⅓ cup shredded Swiss cheese
- 2 tbsp milk
- 2 tbsp chopped fresh chives
- Salt and black pepper to taste

**Instructions:**
1. Heat the oven to 375°F (190°C). Coat a 6-cup muffin tin with cooking spray.
2. Whisk the eggs with the milk, salt, and pepper.
3. Divide the ham and cheese among the 6 cups. Pour the egg mixture on top, filling each cup three-quarters full.
4. Bake for 15 to 17 minutes, until the tops are set and no liquid egg remains.
5. Add the chives. Cool for 2 minutes before you remove them. Serve 3 per person.

### 329. Hot Steel-Cut Oats with Stewed Apple

**Total Time:** 10 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup quick-cook steel-cut oats
- 1 apple, diced
- 2 cups milk
- 1 tsp cinnamon
- 1 tbsp maple syrup
- 2 tbsp chopped pecans

**Instructions:**
1. Bring the milk to a simmer in a saucepan.
2. Add the oats, apple, and cinnamon. Simmer for 6 to 7 minutes and stir often, until thick.
3. Add the maple syrup. Divide between 2 bowls.
4. Add the pecans. Serve hot.

### 330. Chocolate Banana Chia Pudding

**Total Time:** 5 mins (plus overnight chill)

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¼ cup chia seeds
- 1 cup milk
- 2 tbsp unsweetened cocoa powder
- 1 tbsp maple syrup
- ½ tsp vanilla extract
- 1 banana, sliced

**Instructions:**
1. Whisk the milk, cocoa powder, maple syrup, and vanilla until smooth.
2. Stir in the chia seeds. Wait 5 minutes, then stir again to break up clumps.
3. Cover and refrigerate overnight, or at least 2 hours.
4. Add the banana slices. Serve cold.

### 331. Breakfast Tacos with Egg & Salsa

**Total Time:** 12 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 4 small corn tortillas
- ½ cup shredded cheddar cheese
- ½ cup salsa
- ¼ avocado, sliced
- 2 tbsp chopped fresh cilantro

**Instructions:**
1. Heat the tortillas in a dry skillet for 30 seconds on each side. Keep them warm.
2. Whisk the eggs with salt and pepper.
3. Coat the skillet with cooking spray. Scramble the eggs over medium heat until fully set, about 2 minutes.
4. Divide the eggs among the tortillas. Add the cheese, salsa, avocado, and cilantro. Serve.

### 332. Tomato & Basil Egg Skillet

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 2 cups cherry tomatoes, halved
- ¼ cup torn fresh basil
- 2 tbsp grated parmesan cheese
- 1 tbsp olive oil
- 2 slices whole grain bread

**Instructions:**
1. Heat the olive oil in a skillet over medium heat. Cook the tomatoes with 1 clove minced garlic for 5 minutes, until they soften and release their juice.
2. Make 4 wells in the tomatoes. Break 1 egg into each well.
3. Cover the skillet. Cook for 5 minutes until the whites are fully set.
4. Add the basil and parmesan. Serve with the toast.

### 333. Blueberry Lemon Ricotta Toast

**Total Time:** 10 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 2 slices whole grain bread
- ½ cup part-skim ricotta cheese
- ¾ cup fresh blueberries
- 1 tsp lemon zest
- 1 tsp honey
- 1 tbsp sliced almonds

**Instructions:**
1. Toast the bread.
2. Mix the ricotta with the lemon zest and a pinch of salt.
3. Spread the ricotta on each slice.
4. Add the blueberries, almonds, and honey. Serve.

### 334. Kale & Potato Breakfast Hash

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cups frozen diced hash brown potatoes
- 3 cups chopped kale, stems removed
- 4 large eggs
- ¼ cup diced onion
- 1 tbsp olive oil
- ½ tsp smoked paprika

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat. Cook the potatoes and onion for 8 minutes, until browned and crisp.
2. Add the kale and paprika. Cook for 3 minutes until the kale softens.
3. Make 4 wells. Break 1 egg into each well.
4. Cover the skillet. Cook for 4 minutes until the whites are fully set. Serve hot.

### 335. Cinnamon Raisin Protein Oatmeal

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 cups milk
- ⅓ cup raisins
- 1 tsp cinnamon
- ¼ cup plain Greek yogurt
- 1 tbsp maple syrup

**Instructions:**
1. Bring the milk to a simmer in a saucepan.
2. Add the oats, raisins, and cinnamon. Simmer for 5 minutes and stir often.
3. Remove from the heat. Stir in the Greek yogurt and maple syrup.
4. Divide between 2 bowls. Serve hot.

### 336. Mango Lassi Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups frozen mango chunks
- 1 cup plain Greek yogurt
- ¾ cup milk
- 1 tbsp honey
- ¼ tsp ground cardamom

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 45 seconds until smooth and thick.
3. Pour into 2 glasses. Serve cold.

### 337. Everything Cottage Cheese Bowl

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1½ cups low-fat cottage cheese
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- 2 tsp everything bagel seasoning
- 1 tbsp olive oil

**Instructions:**
1. Divide the cottage cheese between 2 bowls.
2. Add the cucumber and tomatoes.
3. Drizzle with the olive oil and sprinkle with the seasoning. Serve cold.

### 338. Egg & Avocado Rice Bowl

**Total Time:** 12 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked brown rice
- 2 large eggs
- 1 avocado, sliced
- 2 green onions, sliced
- 1 tbsp low-sodium soy sauce
- 1 tsp sesame oil
- 1 tsp sesame seeds

**Instructions:**
1. Warm the rice in the microwave for 1 minute. Divide it between 2 bowls.
2. Coat a nonstick skillet with cooking spray. Fry the eggs over medium heat until the whites are fully set, about 3 minutes.
3. Add the egg and avocado to each bowl.
4. Drizzle with the soy sauce and sesame oil. Add the green onions and sesame seeds. Serve.

### 339. Turkish Eggs with Garlic Yogurt

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 1 cup plain Greek yogurt
- 1 clove garlic, finely minced
- 1 tbsp butter
- ½ tsp smoked paprika
- 2 tbsp chopped fresh dill
- 2 slices whole grain bread

**Instructions:**
1. Mix the yogurt with the garlic and a pinch of salt. Divide it between 2 shallow bowls.
2. Bring a pot of water to a gentle simmer. Poach the eggs for 4 minutes, until the whites are fully set.
3. Melt the butter in a small pan with the paprika and a pinch of red pepper flakes. Cook for 30 seconds.
4. Put 2 eggs on each bowl of yogurt. Spoon the paprika butter over the top.
5. Add the dill. Serve with the toast.

### 340. Sweet Potato Toast with Avocado

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 large sweet potato, cut lengthwise into ¼-inch slices
- 1 avocado
- 1 tbsp lemon juice
- ½ tsp red pepper flakes
- 2 tbsp pumpkin seeds
- Salt and black pepper to taste

**Instructions:**
1. Toast the sweet potato slices in a toaster on the highest setting, 2 or 3 cycles, until tender. You can also bake them at 400°F (200°C) for 12 minutes.
2. Mash the avocado with the lemon juice, salt, and pepper.
3. Spread the avocado on the sweet potato slices.
4. Add the pumpkin seeds and red pepper flakes. Serve.

### 341. Quinoa Breakfast Porridge

**Total Time:** 20 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- ¾ cup quinoa, rinsed
- 1½ cups milk
- 1 tbsp maple syrup
- ½ tsp vanilla extract
- 1 cup mixed berries
- 2 tbsp sliced almonds

**Instructions:**
1. Put the quinoa and milk in a saucepan. Bring to a boil.
2. Reduce the heat and simmer, covered, for 15 minutes until the milk is absorbed and the quinoa is tender.
3. Stir in the maple syrup, vanilla, and ½ tsp cinnamon.
4. Divide between 2 bowls. Add the berries and almonds. Serve hot.

### 342. Soft-Boiled Eggs with Toast Soldiers

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 2 slices whole grain bread
- 1 tsp butter
- 1 tsp flaky sea salt
- Black pepper to taste

**Instructions:**
1. Bring a pot of water to a boil. Lower the eggs in with a spoon.
2. Boil for 6 minutes for a runny yolk, or 8 minutes for a firm yolk.
3. Toast the bread, spread it with the butter, and cut it into narrow strips.
4. Put each egg in an egg cup. Cut off the top.
5. Add the salt and pepper. Dip the toast strips into the egg. Serve immediately.

### 343. Cherry Almond Overnight Oats

**Total Time:** 5 mins (plus overnight chill)

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 1 cup milk
- ⅓ cup plain Greek yogurt
- 1 cup frozen sweet cherries
- 2 tbsp sliced almonds
- 1 tbsp honey
- ¼ tsp almond extract

**Instructions:**
1. Mix the oats, milk, yogurt, honey, and almond extract in 2 jars.
2. Add the frozen cherries on top. They thaw overnight.
3. Cover and refrigerate overnight.
4. Add the almonds in the morning. Serve cold.

### 344. Breakfast Barley Bowl with Figs & Honey

**Total Time:** 20 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup quick-cook pearl barley
- 2 cups milk
- 6 dried figs, chopped
- 2 tbsp honey
- 2 tbsp chopped pistachios
- 1/2 tsp ground cardamom

**Instructions:**
1. Bring the milk to a simmer in a saucepan. Watch it closely, because milk boils over fast.
2. Add the barley, figs, and cardamom.
3. Reduce the heat. Simmer for 15 minutes and stir often, until the barley is tender and the liquid is creamy.
4. Divide between 2 bowls. Add the honey and pistachios. Serve hot.

### 345. Spiced Chickpea Breakfast Hash

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and patted dry
- 1 red bell pepper, diced
- 1 small onion, diced
- 2 cups fresh baby spinach
- 1 tbsp olive oil
- 1 tsp smoked paprika
- 1 tbsp lemon juice

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat.
2. Add the chickpeas. Cook for 6 minutes without stirring much, so that they brown and crisp.
3. Add the onion, bell pepper, paprika, and 1 tsp cumin. Cook for 5 minutes.
4. Add the spinach. Stir until it wilts, about 1 minute.
5. Add the lemon juice, salt, and pepper. Serve hot.

### 346. Peach & Ginger Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups frozen peach slices
- 1 banana
- 1 cup plain Greek yogurt
- ¾ cup milk
- ½ tsp grated fresh ginger
- 1 tsp honey

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 45 seconds until smooth.
3. Pour into 2 glasses. Serve cold.

### 347. Date & Tahini Oatmeal

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 cups milk
- 4 medjool dates, pitted and chopped
- 2 tbsp tahini
- ½ tsp cinnamon
- 1 tbsp sesame seeds

**Instructions:**
1. Bring the milk to a simmer in a saucepan.
2. Add the oats, dates, and cinnamon. Simmer for 5 minutes and stir often.
3. Remove from the heat. Swirl in the tahini.
4. Divide between 2 bowls. Add the sesame seeds. Serve hot.

### 348. Egg & Avocado Tostadas

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 small corn tortillas
- 4 large eggs
- 1 avocado, mashed
- ½ cup salsa verde
- ¼ cup crumbled feta cheese
- 2 tbsp chopped fresh cilantro

**Instructions:**
1. Heat the oven to 400°F (200°C). Put the tortillas on a baking sheet and coat them lightly with cooking spray.
2. Bake for 7 minutes until crisp. Turn them once.
3. Coat a skillet with cooking spray. Fry the eggs over medium heat until the whites are fully set, about 3 minutes.
4. Spread the mashed avocado on the crisp tortillas. Add 1 egg to each.
5. Add the salsa verde, feta, and cilantro. Serve.

### 349. Cheesy Grits with Poached Egg

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup quick-cook grits
- 3 cups water
- ½ cup shredded sharp cheddar cheese
- 4 large eggs
- 2 green onions, sliced
- 1 tbsp butter

**Instructions:**
1. Bring the water to a boil with ½ tsp salt. Whisk in the grits.
2. Reduce the heat. Simmer for 6 minutes and whisk often, until thick.
3. Stir in the cheese and butter. Keep the pan warm.
4. Bring a second pot of water to a gentle simmer. Poach the eggs for 4 minutes, until the whites are fully set.
5. Divide the grits between 2 bowls. Add 2 eggs to each. Add the green onions and black pepper. Serve hot.

### 350. Baked Berry Oatmeal Cups

**Total Time:** 28 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups rolled oats
- 1½ cups milk
- 2 large eggs
- 3 tbsp maple syrup
- 1 tsp baking powder
- 1 cup mixed berries
- ½ tsp cinnamon

**Instructions:**
1. Heat the oven to 400°F (200°C). Coat a 12-cup muffin tin with cooking spray.
2. Mix the oats, milk, eggs, maple syrup, baking powder, and cinnamon in a bowl.
3. Stir in the berries.
4. Fill each muffin cup three-quarters full.
5. Bake for 20 minutes until the tops are set and lightly golden. Cool for 3 minutes before you remove them.

### 351. Kiwi Green Smoothie Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups fresh baby spinach
- 1 frozen banana
- 2 kiwis, peeled, 1 for blending and 1 sliced
- ½ cup plain Greek yogurt
- ½ cup milk
- 2 tbsp unsweetened shredded coconut
- 1 tbsp chia seeds

**Instructions:**
1. Put the spinach, banana, 1 kiwi, yogurt, and milk in a blender. Blend until thick and smooth.
2. Divide between 2 bowls.
3. Add the sliced kiwi, coconut, and chia seeds. Serve immediately.

### 352. Egg & Veggie Breakfast Pita

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 whole wheat pitas, halved
- 4 large eggs
- ½ red bell pepper, diced
- ¼ cup diced red onion
- 1 cup fresh baby spinach
- ¼ cup crumbled feta cheese
- 1 tsp olive oil

**Instructions:**
1. Heat the olive oil in a nonstick skillet over medium heat. Cook the bell pepper and onion for 3 minutes.
2. Add the spinach. Cook 1 minute until it wilts.
3. Whisk the eggs with salt and pepper. Pour them into the pan. Scramble until fully set, about 2 minutes.
4. Warm the pita halves. Fill them with the egg mixture and feta. Serve warm.

### 353. Banana Almond Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 2 frozen bananas
- 2 tbsp almond butter
- 1½ cups milk
- 1 tbsp ground flaxseed
- ½ tsp cinnamon
- 1 tsp honey

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 45 seconds until smooth and creamy.
3. Pour into 2 glasses. Serve cold.

### 354. Pear & Cardamom Overnight Oats

**Total Time:** 5 mins (plus overnight chill)

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 1 cup milk
- ⅓ cup plain Greek yogurt
- 1 ripe pear, diced
- 1 tbsp maple syrup
- ¼ tsp ground cardamom
- 2 tbsp chopped walnuts

**Instructions:**
1. Mix the oats, milk, yogurt, maple syrup, and cardamom in 2 jars.
2. Add the diced pear on top.
3. Cover and refrigerate overnight.
4. Add the walnuts in the morning. Serve cold.

### 355. Turkey Bacon, Egg & Spinach Plate

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 slices turkey bacon
- 4 large eggs
- 3 cups fresh baby spinach
- 1 cup cherry tomatoes, halved
- 1 tsp olive oil
- 2 slices whole grain bread

**Instructions:**
1. Cook the turkey bacon in a skillet over medium heat for 3 minutes on each side until crisp. Set it aside.
2. Add the olive oil to the same pan. Cook the spinach and tomatoes for 2 minutes until the spinach wilts. Set them aside.
3. Coat the pan with cooking spray. Fry the eggs until the whites are fully set, about 3 minutes.
4. Toast the bread. Build each plate with bacon, vegetables, 2 eggs, and toast. Serve.

### 356. Creamy Polenta with Egg & Parmesan

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup quick-cook polenta
- 3 cups water
- ⅓ cup grated parmesan cheese
- 4 large eggs
- 2 cups fresh baby spinach
- 1 tbsp olive oil

**Instructions:**
1. Bring the water to a boil with ½ tsp salt. Whisk in the polenta.
2. Reduce the heat. Cook for 6 minutes and whisk often, until thick. Stir in the parmesan.
3. Heat the olive oil in a skillet. Cook the spinach for 1 minute until it wilts. Set it aside.
4. Coat the skillet with cooking spray. Fry the eggs until the whites are fully set, about 3 minutes.
5. Divide the polenta between 2 bowls. Add the spinach and 2 eggs each. Add black pepper. Serve hot.

### 357. Scrambled Tofu Breakfast Tacos

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) firm tofu, drained and crumbled
- 4 small corn tortillas
- ½ red bell pepper, diced
- ¼ tsp ground turmeric
- 2 tbsp nutritional yeast
- ½ cup salsa
- ¼ avocado, sliced

**Instructions:**
1. Pat the tofu dry and crumble it by hand.
2. Heat 1 tbsp olive oil in a skillet over medium heat. Cook the bell pepper for 3 minutes.
3. Add the tofu, turmeric, nutritional yeast, ½ tsp cumin, salt, and pepper. Cook for 5 minutes.
4. Warm the tortillas in a dry pan for 30 seconds on each side.
5. Fill the tortillas with the tofu. Add the salsa and avocado. Serve.

### 358. Smoked Paprika Egg & Potato Skillet

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 3 cups frozen diced hash brown potatoes
- 4 large eggs
- 1 red bell pepper, diced
- ½ onion, diced
- 1 tsp smoked paprika
- 2 tbsp olive oil
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat.
2. Add the potatoes. Cook for 8 minutes without stirring much, so that they crisp.
3. Add the bell pepper, onion, paprika, salt, and pepper. Cook for 5 minutes.
4. Make 4 wells. Break 1 egg into each well.
5. Cover the skillet. Cook for 5 minutes until the whites are fully set.
6. Add the parsley. Serve from the skillet.

### 359. Carrot Cake Overnight Oats

**Total Time:** 10 mins (plus overnight chill)

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 1 cup grated carrot
- 1 cup milk
- ⅓ cup plain Greek yogurt
- 2 tbsp raisins
- 1 tbsp maple syrup
- 1 tsp cinnamon
- 2 tbsp chopped walnuts

**Instructions:**
1. Mix the oats, carrot, milk, yogurt, raisins, maple syrup, and cinnamon in 2 jars.
2. Cover and refrigerate overnight.
3. Add the walnuts in the morning. Serve cold.

### 360. Blackberry Ricotta Pancakes

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup whole wheat flour
- ½ cup part-skim ricotta cheese
- 2 large eggs
- ¾ cup milk
- 1 tsp baking powder
- 1 tbsp maple syrup
- 1 cup blackberries

**Instructions:**
1. Whisk the flour and baking powder in a bowl.
2. Whisk the ricotta, eggs, milk, and maple syrup in a second bowl.
3. Combine the wet and dry mixtures. Stir until just mixed. Some lumps are fine.
4. Heat a nonstick skillet over medium heat and coat it with cooking spray. Pour ¼ cup of batter for each pancake. Add a few blackberries to each.
5. Cook for 2 to 3 minutes until bubbles form. Flip and cook 2 minutes more, until cooked through. Serve warm.

### 361. Egg Salad Breakfast Toast

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 2 tbsp plain Greek yogurt
- 1 tsp Dijon mustard
- 2 tbsp chopped fresh chives
- 2 slices whole grain bread
- ½ cup arugula

**Instructions:**
1. Boil the eggs for 10 minutes. Cool them in cold water, then peel and chop them.
2. Mix the eggs with the Greek yogurt, Dijon mustard, chives, salt, and pepper.
3. Toast the bread.
4. Add the arugula, then the egg salad. Serve.

### 362. Matcha Banana Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 frozen bananas
- 1 tsp matcha powder
- 1 cup milk
- ½ cup plain Greek yogurt
- 1 tbsp honey
- 1 tbsp chia seeds

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 45 seconds until smooth and no matcha lumps remain.
3. Pour into 2 glasses. Serve cold.

### 363. Savory Yogurt Bowl with Za'atar

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1½ cups plain Greek yogurt
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- 2 tsp za'atar seasoning
- 1 tbsp olive oil
- 2 tbsp chopped fresh mint
- 2 whole wheat pitas, warmed

**Instructions:**
1. Divide the yogurt between 2 shallow bowls. Spread it to the edges with the back of a spoon.
2. Add the cucumber and tomatoes.
3. Drizzle with the olive oil. Sprinkle with the za'atar and mint.
4. Serve with the warm pita for dipping.

### 364. Caprese Breakfast Toast

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 slices whole grain bread
- 4 oz fresh mozzarella, sliced
- 1 large tomato, sliced
- ¼ cup fresh basil leaves
- 1 tsp balsamic glaze
- 1 tsp olive oil

**Instructions:**
1. Toast the bread.
2. Drizzle each slice with the olive oil.
3. Add the mozzarella, tomato, and basil.
4. Add the balsamic glaze, salt, and pepper. Serve.

### 365. Buckwheat Blueberry Pancakes

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup buckwheat flour
- 1 tsp baking powder
- 1 large egg
- 1 cup milk
- 1 tbsp maple syrup
- 1 cup fresh blueberries

**Instructions:**
1. Whisk the buckwheat flour, baking powder, and a pinch of salt in a bowl.
2. Whisk the egg, milk, and maple syrup in a second bowl.
3. Combine the wet and dry mixtures. Stir until just mixed.
4. Heat a nonstick skillet over medium heat and coat it with cooking spray. Pour ¼ cup of batter for each pancake. Add blueberries to each.
5. Cook for 2 to 3 minutes until bubbles form. Flip and cook 2 minutes more. Serve warm.

### 366. Hummus & Soft Egg Breakfast Plate

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- ¾ cup hummus
- 4 large eggs
- 1 cup cherry tomatoes, halved
- 1 cup sliced cucumber
- 2 whole wheat pitas, warmed
- 1 tsp olive oil
- ½ tsp smoked paprika

**Instructions:**
1. Boil the eggs for 7 minutes. Cool them in cold water, then peel and halve them.
2. Spread the hummus on 2 plates. Make a shallow well in the center of each.
3. Add the eggs, tomatoes, and cucumber.
4. Drizzle with the olive oil and sprinkle with the paprika. Serve with the warm pita.

### 367. Apple Walnut Yogurt Bowl

**Total Time:** 5 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1½ cups plain Greek yogurt
- 1 apple, diced
- 2 tbsp chopped walnuts
- 1 tbsp honey
- ½ tsp cinnamon
- 1 tbsp ground flaxseed

**Instructions:**
1. Divide the yogurt between 2 bowls.
2. Add the apple, walnuts, and flaxseed.
3. Drizzle with the honey and sprinkle with the cinnamon. Serve cold.

### 368. Peanut Butter Oat Energy Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 cup rolled oats
- 2 cups milk
- 2 tbsp peanut butter
- 1 tbsp cocoa powder
- 1 banana, sliced
- 1 tbsp honey

**Instructions:**
1. Bring the milk to a simmer in a saucepan.
2. Add the oats and cocoa powder. Simmer for 5 minutes and stir often.
3. Remove from the heat. Stir in the peanut butter and honey.
4. Divide between 2 bowls. Add the banana. Serve hot.

### 369. Spinach & Sun-Dried Tomato Egg Wrap

**Total Time:** 12 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 4 large eggs
- 2 cups fresh baby spinach
- ¼ cup chopped sun-dried tomatoes
- ¼ cup crumbled goat cheese
- 1 tsp olive oil

**Instructions:**
1. Heat the olive oil in a nonstick skillet over medium heat. Cook the spinach and sun-dried tomatoes for 2 minutes.
2. Whisk the eggs with salt and pepper. Pour them into the pan. Scramble until fully set, about 2 minutes.
3. Warm the tortillas in the microwave for 15 seconds.
4. Divide the egg mixture and goat cheese between the tortillas. Roll tightly. Serve warm.

### 370. Coconut Berry Yogurt Freezer Smoothie

**Total Time:** 5 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cups frozen mixed berries
- 1 cup coconut milk (drink type)
- ½ cup plain Greek yogurt
- 2 tbsp unsweetened shredded coconut
- 1 tbsp honey
- 1 tbsp ground flaxseed

**Instructions:**
1. Put all ingredients in a blender.
2. Blend for 45 seconds until smooth.
3. Pour into 2 glasses. Serve cold.
4. To prepare ahead, put the berries, coconut, and flaxseed in a freezer bag. Add the liquid and yogurt at blending time.

### 371. Mushroom & Thyme Breakfast Toast

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 3 cups sliced mushrooms
- 2 slices whole grain bread
- 2 tbsp part-skim ricotta cheese
- 1 tsp chopped fresh thyme
- 1 tbsp olive oil
- 1 tsp lemon juice

**Instructions:**
1. Heat the olive oil in a skillet over medium-high heat.
2. Add the mushrooms. Cook for 6 minutes without stirring much, so that they brown.
3. Add 1 clove minced garlic, the thyme, salt, and pepper. Cook for 1 minute.
4. Toast the bread. Spread it with the ricotta.
5. Add the mushrooms and the lemon juice. Serve.

### 372. Breakfast Couscous with Dates & Pistachios

**Total Time:** 10 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- ¾ cup whole wheat couscous
- 1 cup milk
- 4 medjool dates, pitted and chopped
- 2 tbsp chopped pistachios
- 1 tbsp honey
- ¼ tsp ground cardamom

**Instructions:**
1. Bring the milk to a boil in a small saucepan.
2. Put the couscous, dates, and cardamom in a bowl. Pour the hot milk over them.
3. Cover the bowl. Wait 5 minutes, then fluff with a fork.
4. Divide between 2 bowls. Add the pistachios and honey. Serve warm.

### 373. Greek Chicken Pita Pockets

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 whole wheat pitas, halved
- 1½ cups shredded rotisserie chicken breast
- ½ cup store-bought tzatziki
- ½ cup diced cucumber
- ½ cup halved cherry tomatoes
- 2 tbsp thinly sliced red onion
- 1 cup chopped romaine lettuce

**Instructions:**
1. Mix the chicken with half the tzatziki.
2. Open each pita half. Fill it with lettuce, chicken, cucumber, tomatoes, and onion.
3. Pack the rest of the tzatziki in a small container. Add it before eating.

### 374. Chicken Caesar Wrap

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 1½ cups sliced cooked chicken breast
- 3 cups chopped romaine lettuce
- 3 tbsp light Caesar dressing
- 2 tbsp grated parmesan cheese

**Instructions:**
1. Toss the romaine with the Caesar dressing and parmesan.
2. Divide the salad and chicken between the tortillas.
3. Fold in the sides and roll tightly. Cut in half and pack.

### 375. Cobb Salad Jar

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 cup diced cooked chicken breast
- 2 hard-boiled eggs, chopped
- 2 slices cooked turkey bacon, chopped
- ½ avocado, diced
- ½ cup cherry tomatoes, halved
- ¼ cup crumbled blue cheese
- 3 cups chopped romaine lettuce
- 3 tbsp red wine vinaigrette

**Instructions:**
1. Put half the vinaigrette in the bottom of each jar.
2. Layer the tomatoes, chicken, egg, turkey bacon, and blue cheese.
3. Add the avocado and romaine last, so that they stay crisp. Seal and refrigerate.
4. Shake the jar into a bowl before eating.

### 376. Tuna Niçoise Salad

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (5 oz) tuna in olive oil, drained
- 6 baby potatoes, halved
- 1 cup green beans, trimmed
- 2 hard-boiled eggs, quartered
- ½ cup cherry tomatoes, halved
- ¼ cup pitted Kalamata olives
- 4 cups mixed salad greens
- 3 tbsp olive oil, 1 tbsp red wine vinegar, 1 tsp Dijon mustard

**Instructions:**
1. Boil the potatoes for 10 minutes. Add the green beans and boil 3 minutes more. Drain and cool them under cold water.
2. Whisk the olive oil, vinegar, Dijon mustard, salt, and pepper.
3. Arrange the greens, potatoes, green beans, eggs, tomatoes, olives, and tuna in 2 containers.
4. Pack the dressing separately. Add it before eating.

### 377. Italian Antipasto Pasta Salad

**Total Time:** 20 mins

**Dietary:** Nut-free

**Ingredients:**
- 8 oz whole wheat rotini
- 2 oz salami, diced
- 2 oz provolone cheese, diced
- ½ cup marinated artichoke hearts, chopped
- ½ cup cherry tomatoes, halved
- ¼ cup sliced black olives
- ¼ cup Italian vinaigrette

**Instructions:**
1. Cook the pasta as the package says. Drain it and rinse it with cold water.
2. Put the salami, provolone, artichokes, tomatoes, and olives in a large bowl.
3. Add the pasta and the vinaigrette. Toss well.
4. Divide into containers. Refrigerate up to 3 days.

### 378. Asian Chicken Lettuce Wraps

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground chicken
- 1 can (8 oz) water chestnuts, drained and diced
- 2 green onions, sliced
- 1 tsp minced fresh ginger
- 3 tbsp hoisin sauce
- 1 tbsp low-sodium soy sauce
- 1 head butter lettuce, leaves separated

**Instructions:**
1. Heat 1 tsp sesame oil in a skillet over medium-high heat. Cook the chicken for 6 to 7 minutes and break it up, until it reaches 165°F (74°C).
2. Add 2 cloves minced garlic, the ginger, and the water chestnuts. Cook for 1 minute.
3. Stir in the hoisin sauce and soy sauce. Cook for 1 minute. Add the green onions.
4. Pack the filling and the lettuce leaves separately. Spoon the filling into the leaves before eating.

### 379. Smashed Chickpea Salad Sandwich

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 2 tbsp tahini
- 1 tbsp lemon juice
- 1 tsp Dijon mustard
- ¼ cup diced celery
- 1 tbsp chopped fresh dill
- 4 slices whole grain bread
- 1 cup baby spinach

**Instructions:**
1. Mash the chickpeas with a fork until they are mostly broken.
2. Stir in the tahini, lemon juice, Dijon mustard, celery, dill, salt, and pepper.
3. Spread the mixture on 2 slices of bread. Add the spinach and the other bread slices.
4. Cut in half and pack.

### 380. Thai Peanut Chicken Wrap

**Total Time:** 10 mins

**Dietary:** Dairy-free, Pork-free

**Ingredients:**
- 1½ cups sliced cooked chicken breast
- 2 large whole wheat tortillas
- 1 cup shredded red cabbage
- ½ cup shredded carrots
- ¼ cup chopped fresh cilantro
- 2 tbsp peanut butter, 1 tbsp low-sodium soy sauce, 1 tsp lime juice, 1 tsp honey, 1 tbsp warm water

**Instructions:**
1. Whisk the peanut butter, soy sauce, lime juice, honey, and warm water until smooth.
2. Toss the chicken with half the sauce.
3. Divide the cabbage, carrots, chicken, and cilantro between the tortillas. Drizzle with the rest of the sauce.
4. Roll tightly, cut in half, and pack.

### 381. Falafel Hummus Bowl

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 8 frozen baked falafel balls
- 1 cup cooked quinoa
- ¼ cup hummus
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- 2 tbsp thinly sliced red onion
- 1 tbsp lemon juice

**Instructions:**
1. Heat the falafel as the package says, usually 10 to 12 minutes in the oven or air fryer.
2. Divide the quinoa between 2 containers.
3. Add the cucumber, tomatoes, onion, and falafel. Drizzle with the lemon juice.
4. Pack the hummus in a small container. Add it before eating.

### 382. Quinoa Tabbouleh

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 cup dry quinoa, rinsed
- 1½ cups finely chopped fresh parsley
- ¼ cup chopped fresh mint
- 1 cup diced cucumber
- 1 cup diced tomato
- 2 green onions, sliced
- 3 tbsp olive oil, 3 tbsp lemon juice

**Instructions:**
1. Cook the quinoa in 2 cups of water for 15 minutes. Spread it on a plate to cool.
2. Put the parsley, mint, cucumber, tomato, and green onions in a bowl.
3. Add the quinoa, olive oil, lemon juice, salt, and pepper. Toss well.
4. Divide into containers. Refrigerate up to 4 days.

### 383. Black Bean & Corn Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) black beans, rinsed and drained
- 1 cup canned corn, drained
- 1 red bell pepper, diced
- ¼ cup diced red onion
- ¼ cup chopped fresh cilantro
- 1 avocado, diced
- 2 tbsp lime juice, 1 tbsp olive oil

**Instructions:**
1. Put the beans, corn, bell pepper, onion, and cilantro in a bowl.
2. Add the lime juice, olive oil, ½ tsp cumin, salt, and pepper. Toss well.
3. Pack the avocado separately, or add it just before eating so that it does not brown.

### 384. Kale Caesar with Crispy Chickpeas

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 cups chopped kale, stems removed
- 1 can (15 oz) chickpeas, rinsed and patted dry
- 3 tbsp light Caesar dressing
- 3 tbsp grated parmesan cheese
- 1 tbsp olive oil

**Instructions:**
1. Toss the chickpeas with the olive oil, ½ tsp garlic powder, and salt. Roast at 425°F (220°C) for 15 minutes until crisp.
2. Massage the kale with the Caesar dressing for 1 minute, until the leaves soften.
3. Add the parmesan. Divide into containers.
4. Pack the chickpeas separately. Add them before eating so that they stay crisp.

### 385. Smoked Salmon Grain Bowl

**Total Time:** 10 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked brown rice
- 3 oz smoked salmon, torn into pieces
- 1 cup diced cucumber
- ½ avocado, sliced
- 1 cup shelled edamame, thawed
- 1 tbsp low-sodium soy sauce, 1 tsp rice vinegar
- 1 tsp sesame seeds

**Instructions:**
1. Divide the rice between 2 containers.
2. Add the salmon, cucumber, avocado, and edamame.
3. Mix the soy sauce and rice vinegar. Drizzle it over the bowls.
4. Add the sesame seeds. Refrigerate until lunch.

### 386. Shrimp & Avocado Salad

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 8 oz peeled cooked shrimp, thawed
- 1 avocado, diced
- 1 cup cherry tomatoes, halved
- ¼ cup diced red onion
- 2 tbsp chopped fresh cilantro
- 2 tbsp lime juice, 1 tbsp olive oil
- 3 cups mixed salad greens

**Instructions:**
1. Cut the shrimp into bite-size pieces.
2. Mix the shrimp, avocado, tomatoes, onion, and cilantro.
3. Add the lime juice, olive oil, salt, and pepper. Toss gently.
4. Pack the greens in the container first, then the shrimp mixture on top. Serve cold.

### 387. Chicken Salad with Grapes & Celery

**Total Time:** 10 mins

**Dietary:** Pork-free

**Ingredients:**
- 2 cups diced rotisserie chicken breast
- ⅓ cup plain Greek yogurt
- 1 tsp Dijon mustard
- 1 cup red grapes, halved
- ½ cup diced celery
- 2 tbsp chopped pecans
- 4 large lettuce leaves

**Instructions:**
1. Mix the Greek yogurt, Dijon mustard, salt, and pepper.
2. Add the chicken, grapes, celery, and pecans. Stir well.
3. Pack the lettuce leaves separately. Spoon the salad into the leaves before eating.

### 388. Curry Chicken Salad Lettuce Cups

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 cups diced cooked chicken breast
- ⅓ cup plain Greek yogurt
- 1 tsp curry powder
- ¼ cup golden raisins
- ¼ cup diced celery
- 1 green onion, sliced
- 6 butter lettuce leaves

**Instructions:**
1. Mix the Greek yogurt, curry powder, salt, and pepper.
2. Add the chicken, raisins, celery, and green onion. Stir well.
3. Pack the lettuce leaves separately. Spoon the salad into the leaves before eating.

### 389. Edamame Soba Noodle Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 oz soba noodles
- 1 cup shelled edamame, thawed
- 1 cup shredded red cabbage
- 1 cup shredded carrots
- 2 green onions, sliced
- 2 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tsp sesame oil, 1 tsp maple syrup

**Instructions:**
1. Cook the soba noodles as the package says, usually 4 to 5 minutes. Drain them and rinse them with cold water.
2. Whisk the soy sauce, rice vinegar, sesame oil, and maple syrup.
3. Toss the noodles, edamame, cabbage, carrots, and green onions with the dressing.
4. Divide into containers. Refrigerate up to 3 days.

### 390. Cold Sesame Cucumber Noodles

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 oz whole wheat spaghetti
- 1 English cucumber, cut into matchsticks
- 2 green onions, sliced
- 1 tsp sesame seeds
- 2 tbsp tahini, 1½ tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tsp sesame oil, 1 tsp maple syrup, 1 tbsp warm water

**Instructions:**
1. Cook the spaghetti as the package says. Drain it and rinse it with cold water.
2. Whisk the tahini, soy sauce, rice vinegar, sesame oil, maple syrup, and warm water until smooth.
3. Toss the noodles, cucumber, and green onions with the sauce.
4. Add the sesame seeds. Pack cold.

### 391. Turkey BLT Wrap

**Total Time:** 10 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 4 oz low-sodium deli turkey breast
- 4 slices cooked turkey bacon
- 1 cup shredded romaine lettuce
- 1 tomato, thinly sliced
- 2 tbsp light mayonnaise

**Instructions:**
1. Spread the mayonnaise on the tortillas.
2. Layer the turkey, turkey bacon, lettuce, and tomato down the center.
3. Roll tightly, cut in half, and pack.

### 392. Ham, Swiss & Apple Wrap

**Total Time:** 10 mins

**Dietary:** Nut-free

**Ingredients:**
- 2 large whole wheat tortillas
- 4 oz lean deli ham
- 2 slices Swiss cheese
- ½ apple, thinly sliced
- 1 cup baby spinach
- 2 tsp Dijon mustard

**Instructions:**
1. Spread the Dijon mustard on the tortillas.
2. Layer the ham, Swiss cheese, apple slices, and spinach.
3. Roll tightly, cut in half, and pack.

### 393. Hummus Veggie Pinwheels

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- ⅓ cup hummus
- ½ cup shredded carrots
- ½ red bell pepper, cut into thin strips
- ½ cup baby spinach
- ½ cucumber, cut into thin strips

**Instructions:**
1. Spread the hummus to the edges of each tortilla.
2. Layer the vegetables over the bottom half of each tortilla.
3. Roll tightly from the bottom. Cut each roll into 1-inch slices.
4. Pack the pinwheels close together so that they stay rolled.

### 394. Chicken Taco Salad

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ cups shredded cooked chicken breast
- 4 cups chopped romaine lettuce
- ½ cup canned black beans, rinsed and drained
- ½ cup cherry tomatoes, halved
- ¼ cup shredded cheddar cheese
- ½ avocado, diced
- ¼ cup salsa, 2 tbsp plain Greek yogurt

**Instructions:**
1. Mix the chicken with 1 tsp chili powder and ½ tsp cumin.
2. Divide the romaine, beans, tomatoes, cheese, and chicken between 2 containers.
3. Mix the salsa and Greek yogurt to make the dressing.
4. Pack the dressing and avocado separately. Add them before eating.

### 395. Greek Orzo Salad

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup dry orzo
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- ⅓ cup pitted Kalamata olives, halved
- ⅓ cup crumbled feta cheese
- ¼ cup diced red onion
- 3 tbsp olive oil, 2 tbsp lemon juice

**Instructions:**
1. Cook the orzo as the package says. Drain it and rinse it with cold water.
2. Put the orzo, cucumber, tomatoes, olives, and onion in a bowl.
3. Whisk the olive oil, lemon juice, 1 tsp dried oregano, salt, and pepper. Pour it over the salad.
4. Add the feta. Toss and divide into containers.

### 396. Couscous Salad with Roasted Red Peppers

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 cup dry whole wheat couscous
- 1 cup canned chickpeas, rinsed and drained
- ½ cup jarred roasted red peppers, chopped
- ½ cup diced cucumber
- ¼ cup chopped fresh parsley
- 2 tbsp olive oil, 2 tbsp lemon juice

**Instructions:**
1. Put the couscous in a bowl. Add 1 cup of boiling water. Cover it for 5 minutes, then fluff it with a fork.
2. Add the chickpeas, peppers, cucumber, and parsley.
3. Add the olive oil, lemon juice, ½ tsp cumin, salt, and pepper. Toss well and pack.

### 397. Farro & Arugula Salad with Parmesan

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup quick-cook farro
- 3 cups baby arugula
- 1 cup cherry tomatoes, halved
- ¼ cup shaved parmesan cheese
- 2 tbsp olive oil, 1 tbsp lemon juice

**Instructions:**
1. Cook the farro as the package says, usually 10 minutes. Drain it and cool it.
2. Toss the farro with the tomatoes, olive oil, lemon juice, salt, and pepper.
3. Pack the arugula separately. Combine them and add the parmesan before eating.

### 398. Broccoli Cranberry Crunch Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 cups small broccoli florets
- ⅓ cup dried cranberries
- ¼ cup sunflower seeds
- ¼ cup diced red onion
- ⅓ cup plain Greek yogurt
- 1 tbsp apple cider vinegar
- 1 tsp honey

**Instructions:**
1. Whisk the Greek yogurt, vinegar, honey, salt, and pepper.
2. Put the broccoli, cranberries, sunflower seeds, and onion in a bowl.
3. Add the dressing and toss well.
4. Refrigerate for 10 minutes before packing, so that the broccoli softens a little.

### 399. Spinach, Strawberry & Chicken Salad

**Total Time:** 10 mins

**Dietary:** Pork-free

**Ingredients:**
- 4 cups baby spinach
- 1½ cups sliced cooked chicken breast
- 1 cup sliced strawberries
- ¼ cup crumbled goat cheese
- 2 tbsp sliced almonds
- 2 tbsp balsamic vinaigrette

**Instructions:**
1. Divide the spinach between 2 containers.
2. Add the chicken, strawberries, goat cheese, and almonds.
3. Pack the vinaigrette separately. Add it before eating.

### 400. Turkey Pesto Panini

**Total Time:** 10 mins

**Dietary:** Pork-free

**Ingredients:**
- 4 slices whole grain bread
- 4 oz low-sodium deli turkey breast
- 2 slices mozzarella cheese
- 2 tbsp basil pesto
- 1 tomato, sliced

**Instructions:**
1. Spread the pesto on 2 slices of bread.
2. Add the turkey, tomato, and mozzarella. Put the other bread slices on top.
3. Cook in a skillet with cooking spray over medium heat. Press with a spatula and cook 3 minutes on each side, until golden and melted.
4. Cut in half. Serve warm, or cool and pack.

### 401. Tomato Basil Soup

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cans (28 oz each) crushed tomatoes
- 1 small onion, diced
- 2 cups low-sodium vegetable broth
- ¼ cup chopped fresh basil
- ¼ cup light cream
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a pot over medium heat. Cook the onion and 2 cloves minced garlic for 4 minutes.
2. Add the tomatoes and broth. Simmer for 10 minutes.
3. Stir in the basil and cream. Blend with a stick blender until smooth.
4. Add salt and pepper. Pack hot in an insulated container.

### 402. Quick Black Bean Soup

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) black beans, rinsed and drained
- 1 small onion, diced
- 1 red bell pepper, diced
- 3 cups low-sodium vegetable broth
- ½ cup salsa
- 1 tbsp lime juice

**Instructions:**
1. Heat 1 tbsp olive oil in a pot over medium heat. Cook the onion, bell pepper, and 2 cloves minced garlic for 5 minutes.
2. Add the beans, broth, salsa, and 1 tsp cumin. Simmer for 10 minutes.
3. Blend half the soup with a stick blender. Stir it back in.
4. Add the lime juice. Pack hot in an insulated container.

### 403. Red Lentil Soup

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 cup dry red lentils, rinsed
- 1 onion, diced
- 2 carrots, diced
- 4 cups low-sodium vegetable broth
- 1 can (14 oz) diced tomatoes
- 1 tbsp lemon juice

**Instructions:**
1. Heat 1 tbsp olive oil in a pot. Cook the onion, carrots, and 2 cloves minced garlic for 5 minutes.
2. Add the lentils, broth, tomatoes, and 1 tsp cumin. Bring to a boil.
3. Reduce the heat. Simmer for 15 minutes until the lentils are soft.
4. Add the lemon juice, salt, and pepper. Pack hot.

### 404. Miso Soup with Tofu & Noodles

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 3 cups water
- 2 tbsp white miso paste
- 4 oz soft tofu, cubed
- 2 oz dried udon noodles
- 1 cup baby spinach
- 2 green onions, sliced

**Instructions:**
1. Cook the noodles as the package says. Drain them.
2. Heat the water until hot but not boiling. Whisk in the miso paste.
3. Add the tofu and spinach. Heat for 2 minutes. Do not boil the soup, because boiling spoils the miso flavor.
4. Add the noodles and green onions. Pack hot.

### 405. Canned Salmon Rice Bowl

**Total Time:** 10 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (6 oz) boneless salmon, drained
- 1½ cups cooked brown rice
- 1 cup diced cucumber
- ½ avocado, diced
- 1 tbsp light mayonnaise, 1 tsp hot sauce
- 1 tbsp low-sodium soy sauce

**Instructions:**
1. Flake the salmon. Mix it with the mayonnaise and hot sauce.
2. Divide the rice between 2 containers.
3. Add the salmon, cucumber, and avocado. Drizzle with the soy sauce. Pack cold.

### 406. Salmon Salad Sandwich

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 can (6 oz) boneless salmon, drained
- 2 tbsp plain Greek yogurt
- 1 tsp Dijon mustard
- 2 tbsp diced celery
- 1 tbsp chopped fresh dill
- 1 tbsp lemon juice
- 4 slices whole grain bread
- 2 lettuce leaves

**Instructions:**
1. Flake the salmon into a bowl.
2. Add the Greek yogurt, Dijon mustard, celery, dill, lemon juice, salt, and pepper. Mix well.
3. Spread the mixture on 2 slices of bread. Add the lettuce and the other bread slices. Cut and pack.

### 407. Shrimp Summer Rolls

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 8 rice paper wrappers
- 8 oz peeled cooked shrimp, halved lengthwise
- 2 oz rice noodles
- 1 cup shredded lettuce
- 1 cup cucumber matchsticks
- ¼ cup fresh mint leaves
- 2 tbsp low-sodium soy sauce, 1 tbsp lime juice, 1 tsp maple syrup

**Instructions:**
1. Cook the rice noodles as the package says. Drain them and rinse them with cold water.
2. Dip 1 rice paper wrapper in warm water for 10 seconds. Lay it flat on a board.
3. Add lettuce, noodles, cucumber, mint, and 2 shrimp halves. Fold in the sides and roll it tightly. Repeat for the rest.
4. Mix the soy sauce, lime juice, and maple syrup. Pack the sauce separately.

### 408. Chicken Banh Mi-Style Sandwich

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 whole wheat baguette pieces, 6 inches each
- 1½ cups sliced cooked chicken breast
- ½ cup shredded carrots
- ½ cucumber, thinly sliced
- ¼ cup rice vinegar
- ¼ cup fresh cilantro
- 2 tbsp light mayonnaise, 1 tsp hot sauce

**Instructions:**
1. Mix the carrots with the rice vinegar and a pinch of salt. Wait 10 minutes, then drain them.
2. Mix the mayonnaise and hot sauce. Spread it inside the baguettes.
3. Fill with the chicken, pickled carrots, cucumber, and cilantro. Wrap tightly and pack.

### 409. Chicken & Cheese Quesadillas

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 1 cup shredded cooked chicken breast
- ½ cup shredded Monterey Jack cheese
- ½ red bell pepper, diced
- ¼ cup salsa

**Instructions:**
1. Put half the cheese, the chicken, and the bell pepper on half of each tortilla. Fold them over.
2. Cook in a skillet with cooking spray over medium heat for 2 to 3 minutes on each side, until golden and melted.
3. Cut into wedges. Pack with the salsa.

### 410. Bean & Cheese Quesadillas

**Total Time:** 12 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 1 cup canned pinto beans, rinsed and mashed
- ½ cup shredded cheddar cheese
- 2 tbsp chopped green chilies
- ¼ cup salsa

**Instructions:**
1. Mix the mashed beans with the chilies and ½ tsp cumin.
2. Spread the beans on half of each tortilla. Add the cheese and fold them over.
3. Cook in a skillet with cooking spray for 2 to 3 minutes on each side, until golden.
4. Cut into wedges. Pack with the salsa.

### 411. Hummus Veggie Grain Bowl

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked quinoa
- ⅓ cup hummus
- 1 cup cherry tomatoes, halved
- 1 cup diced cucumber
- ½ cup shredded carrots
- ½ cup jarred roasted red peppers, sliced
- 1 tbsp lemon juice

**Instructions:**
1. Divide the quinoa between 2 containers.
2. Add the tomatoes, cucumber, carrots, and red peppers.
3. Drizzle with the lemon juice. Add a spoon of hummus to each bowl. Pack cold.

### 412. Mediterranean Tuna Pasta Salad

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 6 oz whole wheat penne
- 1 can (5 oz) tuna in water, drained
- 1 cup cherry tomatoes, halved
- ¼ cup pitted Kalamata olives, halved
- ¼ cup diced red onion
- 2 tbsp capers, drained
- 3 tbsp olive oil, 2 tbsp lemon juice

**Instructions:**
1. Cook the pasta as the package says. Drain it and rinse it with cold water.
2. Put the pasta, tuna, tomatoes, olives, onion, and capers in a bowl.
3. Add the olive oil, lemon juice, 1 tsp dried oregano, salt, and pepper. Toss and pack.

### 413. Chicken Gyro Bowl with Tzatziki

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 12 oz boneless chicken breast, cut into strips
- 1 cup cooked brown rice
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- ¼ cup thinly sliced red onion
- ½ cup store-bought tzatziki
- 1 tbsp lemon juice

**Instructions:**
1. Toss the chicken with 1 tbsp olive oil, the lemon juice, 1 tsp dried oregano, ½ tsp garlic powder, salt, and pepper.
2. Cook in a skillet over medium-high heat for 6 to 8 minutes, until the chicken reaches 165°F (74°C).
3. Divide the rice, chicken, cucumber, tomatoes, and onion between 2 containers.
4. Pack the tzatziki separately. Add it before eating.

### 414. Buffalo Chickpea Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 2 tbsp buffalo-style hot sauce
- 4 cups chopped romaine lettuce
- ½ cup diced celery
- ½ cup shredded carrots
- 2 tbsp crumbled blue cheese
- 2 tbsp light ranch dressing

**Instructions:**
1. Toss the chickpeas with the hot sauce.
2. Divide the romaine, celery, and carrots between 2 containers.
3. Add the chickpeas and blue cheese.
4. Pack the ranch dressing separately. Add it before eating.

### 415. Thai Crunch Salad with Peanut Dressing

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Pork-free

**Ingredients:**
- 3 cups shredded green and red cabbage
- 1 cup shelled edamame, thawed
- 1 cup shredded carrots
- 1 red bell pepper, thinly sliced
- ¼ cup chopped fresh cilantro
- 2 tbsp chopped roasted peanuts
- 2 tbsp peanut butter, 1 tbsp low-sodium soy sauce, 1 tbsp lime juice, 1 tsp honey, 1 tbsp warm water

**Instructions:**
1. Whisk the peanut butter, soy sauce, lime juice, honey, and warm water until smooth.
2. Put the cabbage, edamame, carrots, bell pepper, and cilantro in a bowl.
3. Add the dressing and toss well.
4. Add the peanuts and pack. This salad holds its crunch for 2 days.

### 416. Asian Chicken Slaw

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups shredded cooked chicken breast
- 3 cups coleslaw mix
- 1 cup shelled edamame, thawed
- 2 green onions, sliced
- 1 can (11 oz) mandarin oranges, drained
- 2 tbsp rice vinegar, 1 tbsp low-sodium soy sauce, 1 tsp sesame oil, 1 tsp honey

**Instructions:**
1. Whisk the rice vinegar, soy sauce, sesame oil, and honey.
2. Toss the chicken, coleslaw mix, edamame, and green onions with the dressing.
3. Add the mandarin oranges on top. Pack cold.

### 417. Chicken & Hummus Snack Box

**Total Time:** 10 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups sliced cooked chicken breast
- ½ cup hummus
- 1 cup baby carrots
- 1 cup sliced cucumber
- 1 cup grapes
- 16 whole grain crackers

**Instructions:**
1. Divide the hummus between 2 small containers.
2. Put the chicken, carrots, cucumber, grapes, and crackers in 2 divided lunch boxes.
3. Pack the hummus inside the boxes. Refrigerate until lunch.

### 418. Turkey & Cheese Bento Box

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 oz low-sodium deli turkey breast
- 2 oz cheddar cheese, cubed
- 1 cup cherry tomatoes
- 1 cup sugar snap peas
- 1 apple, sliced
- 1 tbsp lemon juice
- 16 whole grain crackers

**Instructions:**
1. Roll each turkey slice.
2. Brush the apple slices with the lemon juice, so that they stay light in color.
3. Put the turkey, cheese, tomatoes, snap peas, apple, and crackers in 2 divided lunch boxes. Refrigerate until lunch.

### 419. Egg & Veggie Bento Box

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- ½ cup hummus
- 1 cup sugar snap peas
- 1 red bell pepper, cut into strips
- 1 cup cherry tomatoes
- 1 cup grapes

**Instructions:**
1. Boil the eggs for 10 minutes. Cool them in cold water, then peel and halve them.
2. Put the eggs, vegetables, and grapes in 2 divided lunch boxes.
3. Pack the hummus in small containers for dipping.

### 420. Panzanella Bread Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 3 cups cubed whole grain bread, preferably day-old
- 3 ripe tomatoes, chopped
- 1 English cucumber, chopped
- ¼ cup thinly sliced red onion
- ¼ cup torn fresh basil
- 3 tbsp olive oil, 2 tbsp red wine vinegar

**Instructions:**
1. Toast the bread cubes at 400°F (200°C) for 8 minutes until crisp.
2. Put the tomatoes, cucumber, onion, and basil in a bowl with the olive oil, vinegar, salt, and pepper.
3. Pack the bread separately. Toss everything together 10 minutes before eating, so that the bread softens but stays firm.

### 421. White Bean & Tuna Salad with Arugula

**Total Time:** 10 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (5 oz) tuna in water, drained
- 1 can (15 oz) cannellini beans, rinsed and drained
- 3 cups baby arugula
- ¼ cup thinly sliced red onion
- 2 tbsp capers, drained
- 2 tbsp olive oil, 1 tbsp lemon juice

**Instructions:**
1. Put the beans, onion, and capers in a bowl.
2. Add the olive oil, lemon juice, salt, and pepper. Toss gently.
3. Flake the tuna on top.
4. Pack the arugula separately. Combine them before eating.

### 422. Roasted Veggie & Feta Wrap

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 1 zucchini, sliced into half-moons
- 1 red bell pepper, sliced
- ½ red onion, sliced
- ⅓ cup crumbled feta cheese
- 3 tbsp hummus
- 1 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the zucchini, bell pepper, and onion with the olive oil, 1 tsp dried oregano, salt, and pepper. Spread them on a baking sheet.
3. Roast for 15 minutes until tender and lightly browned. Cool for 5 minutes.
4. Spread the hummus on the tortillas. Add the vegetables and feta.
5. Roll tightly, cut in half, and pack.

### 423. Quinoa, Beet & Goat Cheese Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1½ cups cooked quinoa
- 1 cup cooked beets, diced
- ¼ cup crumbled goat cheese
- 3 cups baby arugula
- 2 tbsp chopped walnuts
- 2 tbsp olive oil, 1 tbsp balsamic vinegar

**Instructions:**
1. Toss the quinoa with the olive oil, balsamic vinegar, salt, and pepper.
2. Divide the quinoa between 2 containers. Add the beets.
3. Pack the arugula, goat cheese, and walnuts on top, or in a separate container if you prefer the greens dry.

### 424. Chickpea Shawarma Pita

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and patted dry
- 2 whole wheat pitas, halved
- 1 tsp smoked paprika
- 1 tsp cumin
- ½ tsp turmeric
- 1 tbsp olive oil
- 1 cup shredded lettuce, 1 cup diced tomato
- 3 tbsp tahini, 1 tbsp lemon juice, 2 tbsp water

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the chickpeas with the olive oil, paprika, cumin, turmeric, salt, and pepper. Spread them on a baking sheet.
3. Roast for 15 minutes until crisp. Shake the pan once.
4. Whisk the tahini, lemon juice, and water to make a sauce.
5. Fill the pita halves with lettuce, tomato, and chickpeas. Pack the sauce separately.

### 425. Sushi-Style Salmon Bowl

**Total Time:** 15 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked sushi rice or short-grain brown rice
- 4 oz smoked salmon, sliced
- 1 avocado, sliced
- 1 cup diced cucumber
- 1 sheet nori, cut into thin strips
- 1 tbsp rice vinegar
- 1 tbsp low-sodium soy sauce, 1 tsp sesame seeds

**Instructions:**
1. Toss the warm rice with the rice vinegar and a pinch of salt. Cool it.
2. Divide the rice between 2 containers.
3. Add the salmon, avocado, and cucumber in sections.
4. Add the nori strips and sesame seeds. Pack the soy sauce separately.

### 426. Moroccan Carrot & Chickpea Salad

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 3 cups shredded carrots
- ⅓ cup raisins
- ¼ cup chopped fresh cilantro
- 2 tbsp olive oil, 2 tbsp lemon juice
- 1 tsp cumin
- ½ tsp cinnamon

**Instructions:**
1. Put the chickpeas, carrots, raisins, and cilantro in a bowl.
2. Whisk the olive oil, lemon juice, cumin, cinnamon, salt, and pepper.
3. Add the dressing and toss well.
4. Refrigerate for 10 minutes before packing. This salad holds 4 days.

### 427. BBQ Chicken Salad Bowl

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ cups shredded cooked chicken breast
- 2 tbsp barbecue sauce
- 4 cups chopped romaine lettuce
- ½ cup canned corn, drained
- ½ cup canned black beans, rinsed and drained
- ¼ cup shredded cheddar cheese
- 2 tbsp light ranch dressing

**Instructions:**
1. Mix the chicken with the barbecue sauce.
2. Divide the romaine, corn, beans, and cheese between 2 containers.
3. Add the chicken on top.
4. Pack the ranch dressing separately. Add it before eating.

### 428. Caprese Grain Bowl with Farro

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- ¾ cup quick-cook farro
- 1 cup fresh mozzarella pearls
- 1½ cups cherry tomatoes, halved
- ¼ cup torn fresh basil
- 2 tbsp olive oil, 1 tbsp balsamic vinegar

**Instructions:**
1. Cook the farro as the package says, usually 10 minutes. Drain it and cool it.
2. Toss the farro with the olive oil, balsamic vinegar, salt, and pepper.
3. Add the tomatoes, mozzarella, and basil. Toss gently.
4. Divide into containers. Refrigerate up to 3 days.

### 429. Turkey Taco Lettuce Boats

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 8 large romaine or butter lettuce leaves
- 1 tbsp taco seasoning
- ½ cup salsa
- ¼ cup shredded cheddar cheese
- ½ avocado, diced

**Instructions:**
1. Heat 1 tsp olive oil in a skillet over medium-high heat.
2. Cook the turkey for 7 to 8 minutes and break it up, until it reaches 165°F (74°C).
3. Add the taco seasoning and ¼ cup water. Simmer for 2 minutes.
4. Cool the turkey. Pack it with the lettuce leaves, salsa, cheese, and avocado in separate sections.
5. Build the boats before eating, so that the lettuce stays crisp.

### 430. Greek Chicken Salad Jar

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ cups diced cooked chicken breast
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- ¼ cup pitted Kalamata olives
- ⅓ cup crumbled feta cheese
- 3 cups chopped romaine lettuce
- 3 tbsp Greek vinaigrette

**Instructions:**
1. Put half the vinaigrette in the bottom of each jar.
2. Layer the cucumber, tomatoes, olives, and chicken.
3. Add the feta, then the romaine on top. Seal and refrigerate.
4. Shake the jar into a bowl before eating.

### 431. Pesto White Bean Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 can (15 oz) cannellini beans, rinsed and drained
- 2 tbsp basil pesto
- 1 cup cherry tomatoes, halved
- 2 cups baby spinach
- 2 tbsp grated parmesan cheese
- 1 tbsp lemon juice

**Instructions:**
1. Toss the beans with the pesto and lemon juice.
2. Add the tomatoes and parmesan. Stir gently.
3. Pack the spinach at the bottom of the container and the bean mixture on top.
4. Mix them before eating.

### 432. Soba Noodle Bowl with Ginger Dressing

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 oz soba noodles
- 8 oz baked or smoked tofu, cubed
- 1 cup shredded carrots
- 1 cup cucumber matchsticks
- 2 green onions, sliced
- 2 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tsp sesame oil, 1 tsp grated fresh ginger

**Instructions:**
1. Cook the soba noodles as the package says. Drain them and rinse them with cold water.
2. Whisk the soy sauce, rice vinegar, sesame oil, and ginger.
3. Toss the noodles, tofu, carrots, cucumber, and green onions with the dressing.
4. Divide into containers. Pack cold.

### 433. Chicken, Apple & Cheddar Sandwich

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 slices whole grain bread
- 1½ cups sliced cooked chicken breast
- 2 slices cheddar cheese
- ½ apple, thinly sliced
- 2 tsp Dijon mustard
- 1 cup baby spinach

**Instructions:**
1. Spread the Dijon mustard on 2 slices of bread.
2. Add the chicken, cheddar, apple, and spinach.
3. Put the other bread slices on top. Cut in half and pack.

### 434. Tuna Melt on Whole Grain

**Total Time:** 15 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 can (5 oz) tuna in water, drained
- 2 tbsp plain Greek yogurt
- 1 tsp Dijon mustard
- 2 tbsp diced celery
- 4 slices whole grain bread
- 2 slices cheddar cheese
- 1 tomato, sliced

**Instructions:**
1. Mix the tuna, Greek yogurt, Dijon mustard, celery, salt, and pepper.
2. Spread the mixture on 2 slices of bread. Add the tomato and cheddar.
3. Put the other bread slices on top.
4. Cook in a skillet with cooking spray over medium heat for 3 minutes on each side, until golden and melted. Cut and serve.

### 435. Veggie Hummus Sandwich

**Total Time:** 10 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 slices whole grain bread
- ⅓ cup hummus
- ½ cucumber, thinly sliced
- 1 tomato, sliced
- ½ cup shredded carrots
- 1 cup baby spinach
- ¼ avocado, mashed

**Instructions:**
1. Spread the hummus on 2 slices of bread and the mashed avocado on the other 2.
2. Layer the cucumber, tomato, carrots, and spinach.
3. Close the sandwiches. Cut in half and pack. The hummus and avocado keep the bread from going soggy.

### 436. Chicken Satay Noodle Bowl

**Total Time:** 20 mins

**Dietary:** Dairy-free, Pork-free

**Ingredients:**
- 12 oz boneless chicken breast, cut into strips
- 4 oz rice noodles
- 1 cup shredded carrots
- 1 cup shredded red cabbage
- 2 tbsp chopped fresh cilantro
- 3 tbsp peanut butter, 1 tbsp low-sodium soy sauce, 1 tbsp lime juice, 1 tsp honey, 2 tbsp warm water

**Instructions:**
1. Cook the rice noodles as the package says. Drain them and rinse them with cold water.
2. Toss the chicken with ½ tsp curry powder, salt, and pepper. Cook in a skillet with 1 tsp olive oil over medium-high heat for 6 to 8 minutes, until it reaches 165°F (74°C).
3. Whisk the peanut butter, soy sauce, lime juice, honey, and warm water until smooth.
4. Divide the noodles, carrots, cabbage, and chicken between 2 containers. Add the cilantro.
5. Pack the sauce separately. Add it before eating.

### 437. Mason Jar Greek Chickpea Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 1 cup diced cucumber
- 1 cup cherry tomatoes, halved
- ¼ cup diced red onion
- ⅓ cup crumbled feta cheese
- 3 cups chopped romaine lettuce
- 3 tbsp olive oil, 2 tbsp red wine vinegar, 1 tsp dried oregano

**Instructions:**
1. Whisk the olive oil, vinegar, oregano, salt, and pepper. Put half in the bottom of each jar.
2. Layer the chickpeas, cucumber, tomatoes, and onion.
3. Add the feta, then the romaine on top. Seal and refrigerate.
4. Shake the jar into a bowl before eating.

### 438. Southwest Sweet Potato & Black Bean Bowl

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 medium sweet potatoes, cut into ½-inch cubes
- 1 can (15 oz) black beans, rinsed and drained
- 1 cup cooked brown rice
- ½ cup salsa
- ¼ cup chopped fresh cilantro
- 1 tbsp olive oil
- 1 tsp chili powder

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the sweet potato cubes with the olive oil, chili powder, ½ tsp cumin, salt, and pepper.
3. Roast for 20 minutes until tender and browned at the edges.
4. Divide the rice, beans, and sweet potatoes between 2 containers.
5. Add the salsa and cilantro. Pack cold or reheat before eating.

### 439. Chopped Italian Sub Salad

**Total Time:** 15 mins

**Dietary:** Nut-free

**Ingredients:**
- 3 oz lean deli turkey, chopped
- 2 oz salami, chopped
- 2 oz provolone cheese, cubed
- 4 cups chopped romaine lettuce
- 1 cup cherry tomatoes, halved
- ¼ cup sliced pepperoncini
- 3 tbsp Italian vinaigrette

**Instructions:**
1. Put the turkey, salami, provolone, tomatoes, and pepperoncini in a bowl.
2. Add the romaine.
3. Pack the vinaigrette separately. Add it and toss before eating.

### 440. Lemon Herb Quinoa & Shrimp Bowl

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 8 oz peeled raw shrimp
- 1½ cups cooked quinoa
- 1 cup cherry tomatoes, halved
- 1 cup diced cucumber
- 2 tbsp chopped fresh parsley
- 2 tbsp olive oil, 2 tbsp lemon juice

**Instructions:**
1. Toss the shrimp with 1 tsp olive oil, salt, and pepper.
2. Cook in a skillet over medium-high heat for 2 minutes on each side, until pink and opaque.
3. Toss the quinoa with the rest of the olive oil, the lemon juice, parsley, salt, and pepper.
4. Divide the quinoa between 2 containers. Add the shrimp, tomatoes, and cucumber. Pack cold.

### 441. Roasted Cauliflower & Chickpea Bowl

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 cups cauliflower florets
- 1 can (15 oz) chickpeas, rinsed and patted dry
- 1 cup cooked quinoa
- 2 tbsp olive oil
- 1 tsp curry powder
- 3 tbsp tahini, 1 tbsp lemon juice, 2 tbsp water

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the cauliflower and chickpeas with the olive oil, curry powder, salt, and pepper. Spread them on a baking sheet.
3. Roast for 20 minutes until browned at the edges.
4. Whisk the tahini, lemon juice, and water to make a sauce.
5. Divide the quinoa, cauliflower, and chickpeas between 2 containers. Pack the sauce separately.

### 442. Turkey & Cranberry Wrap

**Total Time:** 10 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 large whole wheat tortillas
- 4 oz low-sodium deli turkey breast
- 2 tbsp whole-berry cranberry sauce
- 2 tbsp light cream cheese
- 1 cup baby spinach
- ½ apple, thinly sliced

**Instructions:**
1. Spread the cream cheese on the tortillas, then the cranberry sauce.
2. Add the turkey, apple, and spinach.
3. Roll tightly, cut in half, and pack.

### 443. Curried Egg Salad Sandwich

**Total Time:** 15 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large eggs
- 3 tbsp plain Greek yogurt
- 1 tsp curry powder
- 2 tbsp diced celery
- 1 green onion, sliced
- 4 slices whole grain bread
- 2 lettuce leaves

**Instructions:**
1. Boil the eggs for 10 minutes. Cool them in cold water, then peel and chop them.
2. Mix the eggs with the Greek yogurt, curry powder, celery, green onion, salt, and pepper.
3. Spread the mixture on 2 slices of bread. Add the lettuce and the other bread slices. Cut and pack.

### 444. Antipasto Skewer Box

**Total Time:** 15 mins

**Dietary:** Nut-free

**Ingredients:**
- 12 fresh mozzarella pearls
- 3 oz salami, folded
- 12 cherry tomatoes
- 12 pitted green olives
- ½ cup marinated artichoke hearts
- 12 fresh basil leaves
- 1 tbsp olive oil, 1 tbsp balsamic vinegar
- 16 whole grain crackers

**Instructions:**
1. Thread the mozzarella, salami, tomatoes, olives, and basil onto 12 short skewers.
2. Put the skewers in 2 containers with the artichoke hearts and crackers.
3. Mix the olive oil and balsamic vinegar. Pack it in a small container for dipping.

### 445. Chicken Pesto Grain Bowl

**Total Time:** 15 mins

**Dietary:** Pork-free

**Ingredients:**
- 1½ cups cooked quinoa
- 1½ cups diced cooked chicken breast
- 2 tbsp basil pesto
- 1 cup cherry tomatoes, halved
- 2 cups baby spinach
- 2 tbsp grated parmesan cheese

**Instructions:**
1. Toss the quinoa with the pesto.
2. Divide it between 2 containers.
3. Add the chicken, tomatoes, and spinach. Add the parmesan. Pack cold.

### 446. Cucumber & Chickpea Yogurt Salad

**Total Time:** 10 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 2 English cucumbers, diced
- ¾ cup plain Greek yogurt
- 2 tbsp chopped fresh dill
- 1 tbsp lemon juice
- 1 clove garlic, finely minced

**Instructions:**
1. Mix the Greek yogurt, dill, lemon juice, garlic, salt, and pepper.
2. Add the chickpeas and cucumber. Stir to coat them.
3. Divide into containers. Refrigerate. This salad holds 2 days.

### 447. Veggie Sushi Bowl

**Total Time:** 15 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups cooked short-grain brown rice
- 1 cup shelled edamame, thawed
- 1 avocado, sliced
- 1 cup diced cucumber
- ½ cup shredded carrots
- 1 sheet nori, cut into thin strips
- 1 tbsp rice vinegar, 1 tbsp low-sodium soy sauce, 1 tsp sesame seeds

**Instructions:**
1. Toss the rice with the rice vinegar and a pinch of salt.
2. Divide the rice between 2 containers.
3. Add the edamame, avocado, cucumber, and carrots in sections.
4. Add the nori and sesame seeds. Pack the soy sauce separately.

### 448. Chicken Fajita Salad

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 12 oz boneless chicken breast, cut into strips
- 1 red bell pepper, sliced
- ½ onion, sliced
- 4 cups chopped romaine lettuce
- ½ cup salsa
- ½ avocado, diced
- 1 tbsp olive oil, 1 tbsp fajita seasoning

**Instructions:**
1. Toss the chicken, bell pepper, and onion with the olive oil and fajita seasoning.
2. Cook in a skillet over medium-high heat for 8 minutes, until the chicken reaches 165°F (74°C) and the vegetables soften.
3. Cool for 5 minutes.
4. Divide the romaine between 2 containers. Add the chicken and vegetables.
5. Pack the salsa and avocado separately. Add them before eating.

### 449. Tortellini Pesto Salad

**Total Time:** 20 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 10 oz refrigerated cheese tortellini
- 3 tbsp basil pesto
- 1 cup cherry tomatoes, halved
- 1 cup baby spinach
- ¼ cup pitted black olives, halved
- 2 tbsp grated parmesan cheese

**Instructions:**
1. Cook the tortellini as the package says, usually 3 to 4 minutes. Drain them and rinse them with cold water.
2. Toss the tortellini with the pesto.
3. Add the tomatoes, spinach, olives, and parmesan. Toss gently.
4. Divide into containers. Refrigerate up to 3 days.

### 450. Chicken Noodle Soup

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cups shredded rotisserie chicken breast
- 4 oz whole wheat egg noodles
- 1 onion, diced
- 2 carrots, sliced
- 2 celery stalks, sliced
- 6 cups low-sodium chicken broth
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat 1 tbsp olive oil in a pot. Cook the onion, carrots, and celery for 5 minutes.
2. Add the broth and 1 tsp dried thyme. Bring to a boil.
3. Add the noodles. Simmer for 7 minutes until tender.
4. Add the chicken. Heat for 3 minutes.
5. Add the parsley, salt, and pepper. Pack hot.

### 451. Spicy Peanut Sweet Potato Soup

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Pork-free

**Ingredients:**
- 3 medium sweet potatoes, peeled and cubed
- 1 onion, diced
- 4 cups low-sodium vegetable broth
- 3 tbsp peanut butter
- 1 can (14 oz) diced tomatoes
- 1 tsp grated fresh ginger
- ½ tsp red pepper flakes

**Instructions:**
1. Heat 1 tbsp olive oil in a pot. Cook the onion, ginger, and 2 cloves minced garlic for 4 minutes.
2. Add the sweet potatoes, broth, tomatoes, and red pepper flakes. Bring to a boil.
3. Reduce the heat. Simmer for 18 minutes until the sweet potatoes are soft.
4. Stir in the peanut butter until it dissolves. Blend half the soup with a stick blender.
5. Add salt and pepper. Pack hot.

### 452. Mushroom & Wild Rice Soup

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 cups sliced mushrooms
- 1½ cups cooked wild rice blend
- 1 onion, diced
- 2 celery stalks, diced
- 4 cups low-sodium vegetable broth
- ½ cup light cream
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a pot over medium-high heat. Cook the mushrooms for 6 minutes until browned.
2. Add the onion, celery, 2 cloves minced garlic, and 1 tsp dried thyme. Cook for 4 minutes.
3. Add the broth and cooked rice. Simmer for 10 minutes.
4. Stir in the cream. Add salt and pepper. Pack hot.

### 453. Split Pea & Ham Soup with Red Lentils

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free

**Ingredients:**
- 1 cup dry red lentils, rinsed
- 4 oz lean cooked ham, diced
- 1 onion, diced
- 2 carrots, diced
- 5 cups low-sodium chicken broth
- 1 tsp dried thyme

**Instructions:**
1. Heat 1 tbsp olive oil in a pot. Cook the onion, carrots, and 2 cloves minced garlic for 5 minutes.
2. Add the lentils, broth, and thyme. Bring to a boil.
3. Reduce the heat. Simmer for 18 minutes until the lentils break down.
4. Add the ham. Heat for 3 minutes.
5. Add salt and pepper. Pack hot.

### 454. Garlic Lemon Shrimp Scampi

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 8 oz whole wheat linguine
- 3 cloves garlic, minced
- 2 tbsp butter, 1 tbsp olive oil
- 2 tbsp lemon juice
- ¼ cup chopped fresh parsley
- ½ tsp red pepper flakes

**Instructions:**
1. Cook the linguine as the package says. Reserve ½ cup of the pasta water, then drain.
2. Heat the butter and olive oil in a large skillet over medium heat. Cook the garlic and red pepper flakes for 30 seconds.
3. Add the shrimp. Cook for 2 minutes on each side, until pink and opaque.
4. Add the pasta, lemon juice, and a splash of the pasta water. Toss well.
5. Add the parsley, salt, and pepper. Serve hot.

### 455. Beef & Broccoli Stir-Fry with Flank Steak

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb flank steak, sliced thin against the grain
- 4 cups broccoli florets
- 1 tbsp cornstarch
- 3 tbsp low-sodium soy sauce
- 1 tsp grated fresh ginger
- ½ cup low-sodium beef broth
- 1 tbsp olive oil

**Instructions:**
1. Toss the beef with the cornstarch and 1 tbsp of the soy sauce.
2. Heat the olive oil in a large skillet over high heat. Sear the beef for 2 minutes. Remove it from the pan.
3. Add the broccoli, ginger, 2 cloves minced garlic, and the broth. Cover and cook for 5 minutes.
4. Return the beef. Add the rest of the soy sauce. Toss for 2 minutes until the sauce thickens. Serve hot.

### 456. Baked Teriyaki Salmon

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 3 tbsp low-sodium soy sauce
- 1 tbsp honey
- 1 tsp grated fresh ginger
- 1 tsp rice vinegar
- 1 tsp sesame seeds
- 2 green onions, sliced

**Instructions:**
1. Heat the oven to 400°F (200°C). Line a baking sheet with parchment paper.
2. Mix the soy sauce, honey, ginger, rice vinegar, and 1 clove minced garlic.
3. Put the salmon on the sheet. Brush it with half the sauce.
4. Bake for 12 minutes, until the salmon reaches 145°F (63°C) and flakes easily.
5. Brush with the rest of the sauce. Add the sesame seeds and green onions. Serve.

### 457. Turkey Meatballs in Marinara

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- ⅓ cup whole wheat breadcrumbs
- 1 large egg
- ¼ cup grated parmesan cheese
- 3 cups marinara sauce
- 2 tbsp chopped fresh basil
- 1 tbsp olive oil

**Instructions:**
1. Mix the turkey, breadcrumbs, egg, parmesan, 1 tsp Italian seasoning, salt, and pepper. Do not overwork it.
2. Shape the mixture into 16 meatballs.
3. Heat the olive oil in a large skillet over medium-high heat. Brown the meatballs for 5 minutes and turn them.
4. Add the marinara sauce. Cover and simmer for 12 minutes, until the meatballs reach 165°F (74°C).
5. Add the basil. Serve over pasta or with bread.

### 458. Sticky Soy & Garlic Chicken Thighs

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 3 tbsp honey
- 2 tbsp low-sodium soy sauce
- 3 cloves garlic, minced
- 1 tbsp rice vinegar
- 1 tbsp olive oil
- 2 green onions, sliced

**Instructions:**
1. Season the chicken with salt and pepper.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 6 minutes on each side, until it reaches 165°F (74°C). Remove it from the pan.
3. Add the garlic to the pan. Cook for 30 seconds.
4. Add the honey, soy sauce, and rice vinegar. Simmer for 2 minutes until the sauce thickens.
5. Return the chicken and turn it to coat. Add the green onions. Serve.

### 459. One-Pan Lemon Herb Cod

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 cod fillets, about 5 oz each
- 2 cups cherry tomatoes
- 1 lb asparagus, trimmed
- 2 tbsp olive oil
- 2 tbsp lemon juice
- 1 tsp dried oregano
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the asparagus and tomatoes with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet.
3. Roast for 5 minutes.
4. Push the vegetables aside and add the cod. Brush it with the rest of the oil, the lemon juice, and the oregano.
5. Bake for 10 minutes, until the cod reaches 145°F (63°C) and flakes easily.
6. Add the parsley. Serve.

### 460. Black Bean & Sweet Potato Enchilada Skillet

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 medium sweet potatoes, cut into ½-inch cubes
- 1 can (15 oz) black beans, rinsed and drained
- 1½ cups red enchilada sauce
- 6 corn tortillas, cut into strips
- ¾ cup shredded Mexican cheese blend
- 1 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat the olive oil in a large oven-safe skillet over medium heat.
2. Add the sweet potatoes and ¼ cup water. Cover and cook for 10 minutes until tender.
3. Add the beans, enchilada sauce, tortilla strips, 1 tsp cumin, and 1 tsp chili powder. Stir well.
4. Add the cheese on top. Cover and cook for 5 minutes until melted.
5. Add the cilantro. Serve from the skillet.

### 461. Thai Red Curry with Chicken

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, sliced
- 2 tbsp red curry paste
- 1 can (14 oz) light coconut milk
- 1 red bell pepper, sliced
- 2 cups green beans, trimmed
- 1 tbsp fish sauce
- 1 tbsp lime juice

**Instructions:**
1. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook the chicken for 5 minutes, until it reaches 165°F (74°C). Remove it from the pan.
2. Add the curry paste. Cook for 1 minute until fragrant.
3. Add the coconut milk, bell pepper, and green beans. Simmer for 8 minutes.
4. Return the chicken. Add the fish sauce and lime juice. Heat for 2 minutes. Serve over rice.

### 462. Pork Tenderloin with Apple & Onion

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free

**Ingredients:**
- 1 lb pork tenderloin, cut into 1-inch medallions
- 1 apple, sliced
- 1 onion, sliced
- 1 tbsp Dijon mustard
- ½ cup low-sodium chicken broth
- 1 tsp dried thyme
- 1 tbsp olive oil

**Instructions:**
1. Season the pork with salt, pepper, and the thyme.
2. Heat the olive oil in a large skillet over medium-high heat. Sear the medallions for 3 minutes on each side.
3. Remove the pork. Add the apple and onion. Cook for 5 minutes.
4. Add the broth and Dijon mustard. Simmer for 3 minutes.
5. Return the pork. Cover and cook for 5 minutes, until it reaches 145°F (63°C). Rest for 3 minutes before serving.

### 463. Chickpea Tikka Masala

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) chickpeas, rinsed and drained
- 1 onion, diced
- 1 can (14 oz) crushed tomatoes
- 1 cup light coconut milk
- 1 tbsp garam masala
- 1 tsp grated fresh ginger
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet. Cook the onion, ginger, and 2 cloves minced garlic for 5 minutes.
2. Add the garam masala, 1 tsp paprika, and ½ tsp turmeric. Stir for 1 minute.
3. Add the tomatoes and chickpeas. Simmer for 10 minutes.
4. Stir in the coconut milk. Heat for 3 minutes.
5. Add salt and pepper. Serve over rice.

### 464. Sheet Pan Sausage & Brussels Sprouts

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb smoked turkey sausage, sliced into coins
- 4 cups Brussels sprouts, halved
- 2 cups baby potatoes, halved
- 2 tbsp olive oil
- 1 tsp smoked paprika
- 1 tbsp balsamic vinegar

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the potatoes with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet. Roast for 10 minutes.
3. Add the Brussels sprouts and sausage with the rest of the oil and the paprika. Toss on the pan.
4. Roast for 15 minutes more, until the sprouts are browned and the sausage is hot throughout.
5. Drizzle with the balsamic vinegar. Serve.

### 465. Spaghetti Aglio e Olio with Spinach

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat spaghetti
- ¼ cup olive oil
- 5 cloves garlic, thinly sliced
- 1 tsp red pepper flakes
- 4 cups baby spinach
- ¼ cup chopped fresh parsley
- ¼ cup grated parmesan cheese

**Instructions:**
1. Cook the spaghetti as the package says. Reserve 1 cup of the pasta water, then drain.
2. Heat the olive oil in a large skillet over low heat. Cook the garlic and red pepper flakes for 3 minutes, until the garlic is pale gold. Do not let it brown, because burnt garlic turns bitter.
3. Add the spinach. Stir until it wilts.
4. Add the pasta and ½ cup of the pasta water. Toss for 1 minute until the sauce coats the pasta.
5. Add the parsley and parmesan. Serve hot.

### 466. Blackened Tilapia with Corn Salsa

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 tilapia fillets, about 5 oz each
- 2 tsp smoked paprika
- 1 tsp garlic powder
- ½ tsp cayenne pepper
- 1 cup canned corn, drained
- 1 cup cherry tomatoes, halved
- ¼ cup chopped fresh cilantro, 2 tbsp lime juice
- 1 tbsp olive oil

**Instructions:**
1. Mix the paprika, garlic powder, cayenne, 1 tsp dried oregano, salt, and pepper. Coat both sides of the fillets.
2. Mix the corn, tomatoes, cilantro, and lime juice for the salsa.
3. Heat the olive oil in a large skillet over medium-high heat.
4. Cook the fillets for 3 minutes on each side, until the crust is dark and the fish reaches 145°F (63°C).
5. Serve with the corn salsa.

### 467. Ground Beef Taco Skillet with Rice

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb 90% lean ground beef
- 1 cup instant brown rice
- 1 can (15 oz) black beans, rinsed and drained
- 1 cup salsa
- 1½ cups low-sodium beef broth
- ¾ cup shredded cheddar cheese
- 1 tbsp taco seasoning

**Instructions:**
1. Heat a large skillet over medium-high heat. Cook the beef for 6 minutes and break it up, until it reaches 160°F (71°C). Drain the excess fat.
2. Add the taco seasoning, rice, beans, salsa, and broth. Stir well.
3. Bring to a boil, then cover and reduce the heat. Simmer for 10 minutes until the rice is tender.
4. Add the cheese. Cover for 2 minutes until it melts. Serve from the skillet.

### 468. Coconut Curry Shrimp

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 1 can (14 oz) light coconut milk
- 1 tbsp red curry paste
- 1 red bell pepper, sliced
- 2 cups baby spinach
- 1 tbsp lime juice
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet over medium heat. Cook the curry paste for 1 minute.
2. Add the coconut milk and bell pepper. Simmer for 5 minutes.
3. Add the shrimp. Cook for 3 minutes, until pink and opaque.
4. Add the spinach and lime juice. Stir until the spinach wilts. Serve over rice.

### 469. Vegetable Pad Thai

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Pork-free

**Ingredients:**
- 8 oz flat rice noodles
- 8 oz extra-firm tofu, cubed
- 2 large eggs, beaten
- 2 cups bean sprouts
- 3 green onions, sliced
- ¼ cup chopped roasted peanuts
- 3 tbsp low-sodium soy sauce, 2 tbsp lime juice, 1 tbsp brown sugar, 1 tbsp rice vinegar

**Instructions:**
1. Soak the rice noodles in hot water for 8 minutes until pliable. Drain them.
2. Whisk the soy sauce, lime juice, brown sugar, and rice vinegar.
3. Heat 1 tbsp olive oil in a large skillet over high heat. Cook the tofu for 5 minutes until golden. Push it to one side.
4. Add the eggs. Scramble for 1 minute until fully set.
5. Add the noodles and sauce. Toss for 2 minutes.
6. Add the bean sprouts and green onions. Toss for 1 minute.
7. Add the peanuts. Serve hot.

### 470. Greek Chicken Souvlaki Skewers

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cut into 1-inch cubes
- 3 tbsp olive oil
- 2 tbsp lemon juice
- 1 tbsp dried oregano
- 1 red onion, cut into wedges
- 1 red bell pepper, cut into squares
- ½ cup store-bought tzatziki

**Instructions:**
1. Toss the chicken with the olive oil, lemon juice, oregano, 2 cloves minced garlic, salt, and pepper.
2. Thread the chicken, onion, and bell pepper onto 8 skewers.
3. Heat a grill pan or broiler to high.
4. Cook for 5 minutes on each side, until the chicken reaches 165°F (74°C) and the edges char.
5. Serve with the tzatziki.

### 471. White Bean & Kale Skillet with Sausage

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 12 oz Italian turkey sausage, casings removed
- 2 cans (15 oz each) cannellini beans, rinsed and drained
- 6 cups chopped kale, stems removed
- 1 cup low-sodium chicken broth
- 1 tbsp olive oil
- ¼ cup grated parmesan cheese

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat.
2. Cook the sausage for 7 minutes and break it up, until it reaches 165°F (74°C).
3. Add 3 cloves minced garlic and ½ tsp red pepper flakes. Cook for 30 seconds.
4. Add the kale and broth. Cover and cook for 5 minutes until the kale softens.
5. Add the beans. Simmer for 5 minutes.
6. Add the parmesan, salt, and pepper. Serve.

### 472. Miso-Glazed Cod with Bok Choy

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 cod fillets, about 5 oz each
- 3 tbsp white miso paste
- 1 tbsp honey
- 1 tbsp rice vinegar
- 4 heads baby bok choy, halved
- 1 tbsp sesame oil
- 1 tsp sesame seeds

**Instructions:**
1. Heat the broiler to high. Line a baking sheet with foil.
2. Whisk the miso paste, honey, and rice vinegar.
3. Put the cod on the sheet. Spread the glaze on top.
4. Broil for 7 minutes, until the glaze bubbles and the fish reaches 145°F (63°C).
5. Heat the sesame oil in a skillet. Cook the bok choy cut-side down for 4 minutes, until browned and tender.
6. Serve the cod on the bok choy. Add the sesame seeds.

### 473. Sheet Pan Harissa Chicken & Cauliflower

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 5 cups cauliflower florets
- 2 tbsp harissa paste
- 2 tbsp olive oil
- 1 tbsp lemon juice
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Mix the harissa, olive oil, lemon juice, salt, and pepper.
3. Toss the chicken and cauliflower with the mixture. Spread them on a baking sheet in one layer.
4. Roast for 22 minutes, until the chicken reaches 165°F (74°C) and the cauliflower browns at the edges.
5. Add the cilantro. Serve.

### 474. Lemon Dill Salmon with Green Beans

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 1 lb green beans, trimmed
- 2 tbsp olive oil
- 2 tbsp lemon juice
- 2 tbsp chopped fresh dill
- 1 lemon, sliced

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the green beans with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet.
3. Put the salmon on the same sheet. Brush it with the rest of the oil and the lemon juice. Add the lemon slices on top.
4. Bake for 13 minutes, until the salmon reaches 145°F (63°C) and flakes easily.
5. Add the dill. Serve.

### 475. Cajun Chicken & Rice Skillet

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, cubed
- 1 cup instant brown rice
- 1 red bell pepper, diced
- 1 green bell pepper, diced
- 1 can (14 oz) diced tomatoes
- 1½ cups low-sodium chicken broth
- 1 tbsp Cajun seasoning
- 1 tbsp olive oil

**Instructions:**
1. Toss the chicken with half the Cajun seasoning.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 6 minutes, until it reaches 165°F (74°C). Remove it from the pan.
3. Add the peppers and the rest of the seasoning. Cook for 4 minutes.
4. Add the rice, tomatoes, and broth. Bring to a boil, then cover and reduce the heat.
5. Simmer for 10 minutes until the rice is tender.
6. Return the chicken. Heat for 2 minutes. Serve from the skillet.

### 476. Sesame Ginger Tofu & Green Beans

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, pressed and cubed
- 1 lb green beans, trimmed
- 2 tbsp cornstarch
- 3 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tbsp honey
- 1 tbsp grated fresh ginger
- 2 tbsp olive oil, 1 tsp sesame oil
- 1 tbsp sesame seeds

**Instructions:**
1. Toss the tofu with the cornstarch.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the tofu for 8 minutes and turn it, until all sides are golden. Remove it from the pan.
3. Add the green beans and 2 tbsp water. Cover and cook for 5 minutes.
4. Whisk the soy sauce, rice vinegar, honey, ginger, and sesame oil. Add it to the pan.
5. Return the tofu. Toss for 2 minutes until the sauce coats everything.
6. Add the sesame seeds. Serve over rice.

### 477. Bacon & Pea Carbonara

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 10 oz whole wheat spaghetti
- 4 slices pork bacon, chopped
- 3 large eggs
- ¾ cup grated parmesan cheese
- 1 cup frozen peas
- Black pepper to taste

**Instructions:**
1. Cook the spaghetti as the package says. Reserve 1 cup of the pasta water, then drain.
2. Cook the bacon in a large skillet over medium heat for 6 minutes until crisp. Drain most of the fat.
3. Whisk the eggs, parmesan, and plenty of black pepper in a bowl.
4. Add the peas to the skillet. Heat for 1 minute.
5. Remove the skillet from the heat. Add the hot pasta and toss.
6. Pour in the egg mixture and toss fast. Add pasta water a little at a time until the sauce is creamy. The pan heat must cook the egg without scrambling it. Serve immediately.

### 478. Vegetarian Chili

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) black beans, rinsed and drained
- 1 can (15 oz) kidney beans, rinsed and drained
- 1 can (28 oz) crushed tomatoes
- 1 onion, diced
- 1 red bell pepper, diced
- 1 cup frozen corn
- 2 tbsp chili powder
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large pot. Cook the onion, bell pepper, and 3 cloves minced garlic for 5 minutes.
2. Add the chili powder, 1 tbsp cumin, and 1 tsp smoked paprika. Stir for 1 minute.
3. Add the tomatoes, both kinds of beans, the corn, and 1 cup water. Bring to a boil.
4. Reduce the heat. Simmer for 18 minutes and stir sometimes.
5. Add salt and pepper. Serve with your choice of toppings.

### 479. Chicken Parmesan Skillet

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb thin chicken cutlets
- ⅓ cup whole wheat breadcrumbs
- ¼ cup grated parmesan cheese
- 1 large egg, beaten
- 2 cups marinara sauce
- ¾ cup shredded mozzarella cheese
- 2 tbsp olive oil
- 2 tbsp chopped fresh basil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Mix the breadcrumbs, parmesan, and 1 tsp Italian seasoning on a plate.
3. Dip each cutlet in the egg, then press it into the breadcrumb mixture.
4. Heat the olive oil in a large oven-safe skillet over medium-high heat. Cook the cutlets for 3 minutes on each side until golden.
5. Add the marinara around the cutlets. Add the mozzarella on top.
6. Bake for 10 minutes, until the chicken reaches 165°F (74°C) and the cheese melts.
7. Add the basil. Serve.

### 480. Shrimp Fried Rice

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 12 oz peeled shrimp
- 4 cups cooked cold brown rice
- 2 large eggs, beaten
- 1½ cups frozen peas and carrots
- 3 green onions, sliced
- 3 tbsp low-sodium soy sauce
- 1 tbsp olive oil, 1 tsp sesame oil

**Instructions:**
1. Heat the olive oil in a large skillet over high heat.
2. Cook the shrimp for 2 minutes on each side, until pink and opaque. Remove them from the pan.
3. Add the eggs. Scramble for 1 minute until fully set. Remove them.
4. Add the rice and the peas and carrots. Cook for 5 minutes and press the rice flat sometimes, so that it crisps.
5. Return the shrimp and eggs. Add the soy sauce and sesame oil. Toss well.
6. Add the green onions. Serve hot.

### 481. Eggplant Parmesan Skillet

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 large eggplant, sliced into ½-inch rounds
- 2 cups marinara sauce
- ¾ cup shredded mozzarella cheese
- ¼ cup grated parmesan cheese
- 2 tbsp olive oil
- 2 tbsp chopped fresh basil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Brush the eggplant slices with the olive oil. Season them with salt and pepper. Spread them on a baking sheet.
3. Roast for 15 minutes, turning once, until tender and browned.
4. Put the slices in an oven-safe skillet. Spoon the marinara over them. Add both cheeses.
5. Bake for 8 minutes until the cheese melts and bubbles.
6. Add the basil. Serve.

### 482. Korean-Style Beef Bowls

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb 90% lean ground beef
- 3 tbsp low-sodium soy sauce
- 1 tbsp brown sugar
- 1 tbsp grated fresh ginger
- 1 tsp sesame oil
- 3 cups cooked brown rice
- 2 cups steamed broccoli
- 2 green onions, sliced, 1 tbsp sesame seeds

**Instructions:**
1. Heat a large skillet over medium-high heat. Cook the beef for 6 minutes and break it up, until it reaches 160°F (71°C). Drain the excess fat.
2. Add 3 cloves minced garlic and the ginger. Cook for 1 minute.
3. Add the soy sauce, brown sugar, and sesame oil. Simmer for 2 minutes.
4. Serve over the rice with the broccoli.
5. Add the green onions and sesame seeds.

### 483. Creamy Tuscan Chicken

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, cut into thin cutlets
- ⅓ cup chopped sun-dried tomatoes
- 3 cups baby spinach
- ¾ cup light cream
- ½ cup low-sodium chicken broth
- ¼ cup grated parmesan cheese
- 1 tbsp olive oil

**Instructions:**
1. Season the cutlets with salt, pepper, and 1 tsp Italian seasoning.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the cutlets for 4 minutes on each side, until they reach 165°F (74°C). Remove them from the pan.
3. Add 3 cloves minced garlic and the sun-dried tomatoes. Cook for 1 minute.
4. Add the broth, cream, and parmesan. Simmer for 4 minutes until the sauce thickens.
5. Add the spinach. Stir until it wilts.
6. Return the chicken and turn it to coat. Serve.

### 484. Lentil Bolognese

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) lentils, rinsed and drained
- 10 oz whole wheat spaghetti
- 1 onion, diced
- 2 carrots, finely diced
- 1 can (28 oz) crushed tomatoes
- 2 tbsp tomato paste
- 1 tbsp olive oil
- ¼ cup grated parmesan cheese

**Instructions:**
1. Cook the spaghetti as the package says. Drain it.
2. Heat the olive oil in a large pot. Cook the onion, carrots, and 3 cloves minced garlic for 6 minutes.
3. Add the tomato paste and 1 tbsp Italian seasoning. Stir for 1 minute.
4. Add the tomatoes and lentils. Simmer for 15 minutes and stir sometimes.
5. Add salt and pepper. Serve over the spaghetti with the parmesan.

### 485. Fish Tacos with Lime Slaw

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb cod or tilapia fillets
- 8 small corn tortillas
- 3 cups coleslaw mix
- ¼ cup plain Greek yogurt
- 2 tbsp lime juice
- 1 tbsp chili powder
- 1 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Mix the coleslaw mix, Greek yogurt, lime juice, salt, and pepper for the slaw. Refrigerate it.
2. Season the fish with the chili powder, 1 tsp cumin, salt, and pepper.
3. Heat the olive oil in a large skillet over medium-high heat. Cook the fish for 4 minutes on each side, until it reaches 145°F (63°C) and flakes easily.
4. Break the fish into large pieces.
5. Warm the tortillas in a dry pan for 30 seconds on each side.
6. Fill the tortillas with the slaw, fish, and cilantro. Serve.

### 486. Chicken & Broccoli Alfredo

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, cubed
- 10 oz whole wheat fettuccine
- 4 cups broccoli florets
- 1 cup light cream
- ¾ cup grated parmesan cheese
- 1 tbsp olive oil
- 2 cloves garlic, minced

**Instructions:**
1. Cook the fettuccine as the package says. Add the broccoli for the last 3 minutes. Reserve ½ cup of the pasta water, then drain.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 7 minutes, until it reaches 165°F (74°C).
3. Add the garlic. Cook for 30 seconds.
4. Add the cream and parmesan. Simmer for 3 minutes until the sauce thickens.
5. Add the pasta and broccoli. Toss and add pasta water until the sauce coats the pasta.
6. Add black pepper. Serve.

### 487. Moroccan Chickpea & Vegetable Stew

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) chickpeas, rinsed and drained
- 1 can (28 oz) diced tomatoes
- 2 carrots, sliced
- 1 zucchini, sliced into half-moons
- 1 onion, diced
- 2 cups low-sodium vegetable broth
- 1 tsp cinnamon
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large pot. Cook the onion and 3 cloves minced garlic for 5 minutes.
2. Add 1 tbsp cumin, the cinnamon, and 1 tsp paprika. Stir for 1 minute.
3. Add the tomatoes, broth, carrots, and chickpeas. Bring to a boil.
4. Reduce the heat. Simmer for 15 minutes.
5. Add the zucchini. Simmer for 5 minutes more.
6. Add salt and pepper. Serve over couscous.

### 488. Garlic Butter Steak Bites with Potatoes

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb sirloin steak, cut into 1-inch cubes
- 1 lb baby potatoes, halved
- 3 tbsp butter
- 4 cloves garlic, minced
- 1 tbsp olive oil
- 1 tsp dried thyme
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Put the potatoes in a microwave-safe bowl with 2 tbsp water. Cover and microwave for 6 minutes until just tender.
2. Heat the olive oil in a large skillet over high heat. Pat the steak dry and season it with salt and pepper.
3. Sear the steak for 2 minutes on each side, until it reaches 145°F (63°C) for medium. Remove it and rest it for 3 minutes.
4. Add the potatoes to the pan. Cook for 5 minutes until browned.
5. Add the butter, garlic, and thyme. Cook for 1 minute.
6. Return the steak and toss. Add the parsley. Serve.

### 489. Spinach & Ricotta Stuffed Shells

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 20 jumbo pasta shells
- 1½ cups part-skim ricotta cheese
- 4 cups baby spinach, chopped
- 1 large egg
- ½ cup grated parmesan cheese
- 2½ cups marinara sauce
- ¾ cup shredded mozzarella cheese

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Cook the shells as the package says, but 2 minutes less than the package time. Drain them.
3. Mix the ricotta, spinach, egg, parmesan, salt, and pepper.
4. Spread 1 cup of the marinara in a baking dish. Fill the shells and arrange them in the dish.
5. Spoon the rest of the marinara over the shells. Add the mozzarella.
6. Bake for 15 minutes until hot and bubbling. Serve.

### 490. Jerk-Spiced Chicken with Mango Salsa

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 2 tbsp jerk seasoning
- 1 tbsp olive oil
- 1 mango, diced
- ½ red bell pepper, diced
- ¼ cup diced red onion
- 2 tbsp lime juice, ¼ cup chopped fresh cilantro

**Instructions:**
1. Toss the chicken with the jerk seasoning and olive oil.
2. Mix the mango, bell pepper, onion, lime juice, and cilantro for the salsa.
3. Heat a grill pan or skillet over medium-high heat.
4. Cook the chicken for 7 minutes on each side, until it reaches 165°F (74°C).
5. Rest the chicken for 3 minutes. Serve with the mango salsa and rice.

### 491. Hoisin Pork Stir-Fry with Snap Peas

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free

**Ingredients:**
- 1 lb pork loin, sliced thin
- 3 cups sugar snap peas
- 1 red bell pepper, sliced
- 3 tbsp hoisin sauce
- 1 tbsp low-sodium soy sauce
- 1 tbsp grated fresh ginger
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet over high heat.
2. Cook the pork for 4 minutes, until it reaches 145°F (63°C). Remove it from the pan.
3. Add the snap peas, bell pepper, ginger, and 2 cloves minced garlic. Cook for 4 minutes.
4. Return the pork. Add the hoisin and soy sauce. Toss for 2 minutes.
5. Serve over rice.

### 492. Butternut Squash & Sage Gnocchi

**Total Time:** 25 mins

**Dietary:** Vegetarian, Pork-free

**Ingredients:**
- 1 lb shelf-stable potato gnocchi
- 3 cups cubed butternut squash, fresh or frozen
- 3 tbsp butter
- 10 fresh sage leaves
- ¼ cup grated parmesan cheese
- 2 tbsp chopped walnuts

**Instructions:**
1. Put the squash in a microwave-safe bowl with 2 tbsp water. Cover and microwave for 6 minutes until tender.
2. Cook the gnocchi as the package says, usually 2 to 3 minutes. Drain them.
3. Melt the butter in a large skillet over medium heat. Add the sage leaves. Cook for 2 minutes until the butter smells nutty and the sage crisps.
4. Add the gnocchi and squash. Cook for 4 minutes until the gnocchi browns at the edges.
5. Add the parmesan, walnuts, salt, and pepper. Serve.

### 493. Sheet Pan Salmon with Broccoli & Potatoes

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 1 lb baby potatoes, halved
- 4 cups broccoli florets
- 3 tbsp olive oil
- 1 tbsp lemon juice
- 1 tsp garlic powder

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the potatoes with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet. Roast for 12 minutes.
3. Add the broccoli with 1 tbsp of the oil. Push everything to the sides and add the salmon in the middle.
4. Brush the salmon with the rest of the oil, the lemon juice, and the garlic powder.
5. Roast for 12 minutes more, until the salmon reaches 145°F (63°C). Serve.

### 494. Chicken Shawarma Bowls

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs, sliced
- 2 tbsp olive oil
- 1 tbsp cumin, 2 tsp paprika, 1 tsp turmeric, ½ tsp cinnamon
- 2 tbsp lemon juice
- 3 cups cooked brown rice
- 1 cup diced cucumber, 1 cup diced tomato
- 3 tbsp tahini, 1 tbsp lemon juice, 2 tbsp water

**Instructions:**
1. Toss the chicken with the olive oil, spices, 2 tbsp lemon juice, salt, and pepper.
2. Heat a large skillet over medium-high heat. Cook the chicken for 10 minutes and stir sometimes, until it reaches 165°F (74°C) and the edges char.
3. Whisk the tahini, 1 tbsp lemon juice, and water to make a sauce.
4. Divide the rice among 4 bowls. Add the chicken, cucumber, and tomato.
5. Drizzle with the tahini sauce. Serve.

### 495. Spicy Peanut Noodles with Chicken

**Total Time:** 25 mins

**Dietary:** Dairy-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, sliced
- 8 oz whole wheat spaghetti
- 2 cups shredded carrots
- 1 red bell pepper, sliced
- ¼ cup peanut butter, 3 tbsp low-sodium soy sauce, 2 tbsp rice vinegar, 1 tbsp honey, 1 tsp red pepper flakes
- 1 tbsp olive oil
- 3 green onions, sliced

**Instructions:**
1. Cook the spaghetti as the package says. Reserve ½ cup of the pasta water, then drain.
2. Whisk the peanut butter, soy sauce, rice vinegar, honey, red pepper flakes, and ¼ cup of the pasta water.
3. Heat the olive oil in a large skillet over high heat. Cook the chicken for 6 minutes, until it reaches 165°F (74°C).
4. Add the carrots and bell pepper. Cook for 3 minutes.
5. Add the pasta and sauce. Toss and add pasta water until the sauce coats everything.
6. Add the green onions. Serve.

### 496. Baked Ziti with Turkey

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 10 oz whole wheat ziti
- 3 cups marinara sauce
- 1 cup part-skim ricotta cheese
- 1 cup shredded mozzarella cheese
- ¼ cup grated parmesan cheese
- 1 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Cook the ziti as the package says, but 2 minutes less than the package time. Drain it.
3. Heat the olive oil in an oven-safe skillet over medium-high heat. Cook the turkey for 7 minutes and break it up, until it reaches 165°F (74°C).
4. Add the marinara and 1 tsp Italian seasoning. Simmer for 3 minutes.
5. Stir in the ziti and ricotta. Add the mozzarella and parmesan on top.
6. Bake for 12 minutes until the cheese melts and browns. Serve.

### 497. Roasted Red Pepper & White Bean Pasta

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat penne
- 1 can (15 oz) cannellini beans, rinsed and drained
- 1 jar (12 oz) roasted red peppers, drained
- ½ cup light cream
- ¼ cup grated parmesan cheese
- 1 tbsp olive oil
- 3 cups baby spinach

**Instructions:**
1. Cook the penne as the package says. Reserve ½ cup of the pasta water, then drain.
2. Blend the roasted red peppers until smooth.
3. Heat the olive oil in a large skillet. Cook 3 cloves minced garlic for 30 seconds.
4. Add the pepper purée, cream, and beans. Simmer for 5 minutes.
5. Add the spinach. Stir until it wilts.
6. Add the pasta, parmesan, and pasta water as needed. Toss and serve.

### 498. Chicken Enchilada Skillet

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 3 cups shredded rotisserie chicken breast
- 2 cups red enchilada sauce
- 6 corn tortillas, cut into strips
- 1 can (15 oz) black beans, rinsed and drained
- 1 cup shredded Mexican cheese blend
- ¼ cup chopped fresh cilantro
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large oven-safe skillet over medium heat.
2. Add the chicken, beans, enchilada sauce, tortilla strips, and 1 tsp cumin. Stir well.
3. Simmer for 8 minutes until the tortilla strips soften and the sauce thickens.
4. Add the cheese on top. Cover and cook for 4 minutes until melted.
5. Add the cilantro. Serve from the skillet.

### 499. Garlic Ginger Bok Choy & Tofu

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, pressed and cubed
- 6 heads baby bok choy, halved
- 2 tbsp cornstarch
- 3 tbsp low-sodium soy sauce
- 1 tbsp grated fresh ginger
- 1 tbsp rice vinegar
- 2 tbsp olive oil

**Instructions:**
1. Toss the tofu with the cornstarch.
2. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the tofu for 8 minutes and turn it, until golden. Remove it.
3. Add the rest of the oil, the bok choy, the ginger, and 3 cloves minced garlic. Cook for 4 minutes.
4. Add the soy sauce, rice vinegar, and 2 tbsp water. Cover and cook for 2 minutes.
5. Return the tofu and toss. Serve over rice.

### 500. Mediterranean Baked Cod with Olives

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 cod fillets, about 5 oz each
- 2 cups cherry tomatoes
- ⅓ cup pitted Kalamata olives
- ¼ cup capers, drained
- 2 tbsp olive oil
- 1 tsp dried oregano
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat the oven to 400°F (200°C).
2. Put the tomatoes, olives, and capers in a baking dish. Add 1 tbsp of the olive oil and the oregano. Toss them.
3. Roast for 8 minutes.
4. Put the cod on top. Brush it with the rest of the oil. Season it with salt and pepper.
5. Bake for 12 minutes, until the cod reaches 145°F (63°C) and flakes easily.
6. Add the parsley. Serve.

### 501. Pesto Shrimp Zucchini Noodles

**Total Time:** 20 mins

**Dietary:** Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 4 medium zucchini, spiralized
- 3 tbsp basil pesto
- 1 cup cherry tomatoes, halved
- 2 tbsp grated parmesan cheese
- 1 tbsp olive oil
- 1 tbsp lemon juice

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat.
2. Cook the shrimp for 2 minutes on each side, until pink and opaque. Remove them from the pan.
3. Add the zucchini noodles. Cook for 3 minutes. Do not cook them longer, or they will release too much water.
4. Return the shrimp. Add the pesto, tomatoes, and lemon juice. Toss for 1 minute.
5. Add the parmesan. Serve immediately.

### 502. Smoky Black Bean Burgers

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) black beans, rinsed and well drained
- ⅔ cup whole wheat breadcrumbs
- 1 large egg
- ¼ cup diced red onion
- 1 tsp smoked paprika
- 2 tbsp olive oil
- 4 whole wheat buns and your choice of toppings

**Instructions:**
1. Pat the beans very dry with paper towel. Mash them in a bowl, but leave some whole for texture.
2. Add the breadcrumbs, egg, onion, paprika, 1 tsp cumin, salt, and pepper. Mix well.
3. Shape the mixture into 4 patties. Refrigerate them for 5 minutes so that they hold together.
4. Heat the olive oil in a large skillet over medium heat.
5. Cook the patties for 5 minutes on each side, until a firm crust forms.
6. Serve on the buns with your toppings.

### 503. Lemon Garlic Chicken with Orzo

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 1 cup dry orzo
- 2½ cups low-sodium chicken broth
- 3 cups baby spinach
- 2 tbsp lemon juice
- ¼ cup grated parmesan cheese
- 1 tbsp olive oil

**Instructions:**
1. Season the chicken with salt, pepper, and 1 tsp dried oregano.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 5 minutes on each side, until it reaches 165°F (74°C). Remove it from the pan.
3. Add 3 cloves minced garlic and the orzo. Stir for 1 minute.
4. Add the broth. Bring to a boil, then simmer for 9 minutes until the orzo is tender.
5. Add the spinach and lemon juice. Stir until the spinach wilts.
6. Add the parmesan. Return the chicken. Serve.

### 504. Beef Fajita Skillet

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb flank steak, sliced thin against the grain
- 2 bell peppers, sliced
- 1 onion, sliced
- 1 tbsp fajita seasoning
- 2 tbsp lime juice
- 1 tbsp olive oil
- 8 small corn tortillas

**Instructions:**
1. Toss the steak with the fajita seasoning and lime juice.
2. Heat the olive oil in a large skillet over high heat.
3. Sear the steak for 3 minutes. Remove it from the pan.
4. Add the peppers and onion. Cook for 6 minutes until charred at the edges.
5. Return the steak. Toss for 1 minute.
6. Warm the tortillas. Serve the filling in them.

### 505. Cauliflower & Chickpea Curry

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 5 cups cauliflower florets
- 1 can (15 oz) chickpeas, rinsed and drained
- 1 can (14 oz) light coconut milk
- 1 can (14 oz) diced tomatoes
- 1 onion, diced
- 2 tbsp curry powder
- 1 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat the olive oil in a large pot. Cook the onion, 3 cloves minced garlic, and 1 tbsp grated ginger for 5 minutes.
2. Add the curry powder. Stir for 1 minute.
3. Add the tomatoes, coconut milk, cauliflower, and chickpeas. Bring to a simmer.
4. Cover and cook for 18 minutes until the cauliflower is tender.
5. Add salt, pepper, and the cilantro. Serve over rice.

### 506. Turkey & Zucchini Skillet Lasagna

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 2 zucchini, sliced into half-moons
- 8 lasagna noodles, broken into pieces
- 3 cups marinara sauce
- 1 cup water
- 1 cup part-skim ricotta cheese
- ¾ cup shredded mozzarella cheese

**Instructions:**
1. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook the turkey for 7 minutes and break it up, until it reaches 165°F (74°C).
2. Add the zucchini and 1 tsp Italian seasoning. Cook for 3 minutes.
3. Add the marinara, water, and broken noodles. Stir well.
4. Cover and simmer for 14 minutes and stir sometimes, until the noodles are tender.
5. Spoon the ricotta on top. Add the mozzarella.
6. Cover for 3 minutes until the cheese melts. Serve.

### 507. Soy Ginger Glazed Salmon Bowls

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 3 cups cooked brown rice
- 2 cups shelled edamame, thawed
- 1 cucumber, sliced
- 3 tbsp low-sodium soy sauce, 1 tbsp honey, 1 tbsp rice vinegar, 1 tbsp grated fresh ginger
- 1 avocado, sliced
- 1 tbsp sesame seeds

**Instructions:**
1. Heat the oven to 400°F (200°C).
2. Whisk the soy sauce, honey, rice vinegar, and ginger.
3. Put the salmon on a lined baking sheet. Brush it with half the glaze.
4. Bake for 13 minutes, until the salmon reaches 145°F (63°C).
5. Divide the rice among 4 bowls. Add the salmon, edamame, cucumber, and avocado.
6. Drizzle with the rest of the glaze. Add the sesame seeds. Serve.

### 508. Spicy Sausage & Penne

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 12 oz Italian turkey sausage, casings removed
- 10 oz whole wheat penne
- 1 can (28 oz) crushed tomatoes
- 3 cups baby spinach
- ½ cup light cream
- 1 tsp red pepper flakes
- ¼ cup grated parmesan cheese

**Instructions:**
1. Cook the penne as the package says. Drain it.
2. Heat 1 tbsp olive oil in a large skillet over medium-high heat. Cook the sausage for 7 minutes and break it up, until it reaches 165°F (74°C).
3. Add 3 cloves minced garlic and the red pepper flakes. Cook for 30 seconds.
4. Add the tomatoes. Simmer for 8 minutes.
5. Stir in the cream and spinach. Cook for 2 minutes until the spinach wilts.
6. Add the penne and parmesan. Toss and serve.

### 509. Crispy Baked Chicken Tenders with Slaw

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb chicken breast tenders
- 1 cup whole wheat panko breadcrumbs
- 2 large eggs, beaten
- ¼ cup grated parmesan cheese
- 3 cups coleslaw mix
- ¼ cup plain Greek yogurt, 1 tbsp apple cider vinegar, 1 tsp honey
- 2 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C). Put a wire rack on a baking sheet.
2. Mix the panko, parmesan, 1 tsp paprika, salt, and pepper. Add the olive oil and toss, so that the crumbs brown.
3. Dip each tender in the egg, then press it into the crumb mixture. Put them on the rack.
4. Bake for 18 minutes, until golden and the chicken reaches 165°F (74°C).
5. Mix the Greek yogurt, vinegar, and honey. Toss it with the coleslaw mix.
6. Serve the tenders with the slaw.

### 510. Veggie Burrito Bowls with Lime Rice

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) black beans, rinsed and drained
- 3 cups cooked brown rice
- 2 tbsp lime juice
- 1 cup frozen corn, thawed
- 1 red bell pepper, diced
- 1 avocado, diced
- 1 cup salsa
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Toss the warm rice with the lime juice, cilantro, and a pinch of salt.
2. Warm the beans in a small pan with ½ tsp cumin and 2 tbsp water for 4 minutes.
3. Heat 1 tsp olive oil in a skillet. Cook the bell pepper and corn for 4 minutes until charred at the edges.
4. Divide the rice among 4 bowls. Add the beans, vegetables, salsa, and avocado. Serve.

### 511. Balsamic Chicken with Roasted Vegetables

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cut into thin cutlets
- 2 zucchini, sliced into half-moons
- 2 cups cherry tomatoes
- 1 red onion, cut into wedges
- 3 tbsp balsamic vinegar
- 2 tbsp olive oil
- 1 tbsp honey

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the zucchini, tomatoes, and onion with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet. Roast for 10 minutes.
3. Mix the balsamic vinegar, honey, the rest of the oil, and 1 tsp Italian seasoning. Toss the chicken in it.
4. Push the vegetables aside and add the chicken.
5. Roast for 15 minutes more, until the chicken reaches 165°F (74°C). Serve.

### 512. Tofu Tikka Masala

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, pressed and cubed
- 1 can (14 oz) crushed tomatoes
- 1 cup light coconut milk
- 1 onion, diced
- 1 tbsp garam masala
- 2 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the tofu for 8 minutes until golden on all sides. Remove it.
2. Add the rest of the oil, the onion, 3 cloves minced garlic, and 1 tbsp grated ginger. Cook for 5 minutes.
3. Add the garam masala, 1 tsp paprika, and ½ tsp turmeric. Stir for 1 minute.
4. Add the tomatoes. Simmer for 8 minutes.
5. Stir in the coconut milk. Return the tofu. Heat for 3 minutes.
6. Add the cilantro. Serve over rice.

### 513. Sausage, Pepper & Polenta Skillet

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb Italian turkey sausage, sliced
- 1 cup quick-cook polenta
- 4 cups water
- 2 bell peppers, sliced
- 1 onion, sliced
- ⅓ cup grated parmesan cheese
- 1 tbsp olive oil

**Instructions:**
1. Bring the water to a boil with ½ tsp salt. Whisk in the polenta.
2. Reduce the heat. Cook for 6 minutes and whisk often, until thick. Stir in the parmesan. Keep it warm.
3. Heat the olive oil in a large skillet over medium-high heat. Cook the sausage for 6 minutes, until it reaches 165°F (74°C).
4. Add the peppers, onion, and 1 tsp Italian seasoning. Cook for 7 minutes until softened and browned.
5. Serve the sausage and peppers over the polenta.

### 514. Lemon Pepper Chicken with Couscous

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cut into thin cutlets
- 1 cup whole wheat couscous
- 1¼ cups low-sodium chicken broth
- 2 tbsp lemon juice
- 1 tsp lemon zest
- 2 cups baby spinach
- 2 tbsp olive oil

**Instructions:**
1. Season the chicken with salt, plenty of black pepper, and the lemon zest.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 5 minutes on each side, until it reaches 165°F (74°C). Remove it.
3. Bring the broth to a boil in the same pan. Add the couscous and spinach. Remove the pan from the heat.
4. Cover for 5 minutes, then fluff with a fork.
5. Add the lemon juice. Slice the chicken and serve it on the couscous.

### 515. Tuna Puttanesca Pasta

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat spaghetti
- 2 cans (5 oz each) tuna in olive oil, drained
- 1 can (28 oz) crushed tomatoes
- ⅓ cup pitted Kalamata olives, halved
- 3 tbsp capers, drained
- 1 tsp red pepper flakes
- 2 tbsp olive oil
- ¼ cup chopped fresh parsley

**Instructions:**
1. Cook the spaghetti as the package says. Drain it.
2. Heat the olive oil in a large skillet. Cook 4 cloves minced garlic and the red pepper flakes for 30 seconds.
3. Add the tomatoes, olives, and capers. Simmer for 10 minutes.
4. Add the tuna and break it up gently. Heat for 2 minutes.
5. Add the spaghetti and parsley. Toss and serve.

### 516. Chicken Gyros with Tzatziki

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs, sliced
- 4 whole wheat pitas
- ½ cup store-bought tzatziki
- 1 cup diced tomato
- 1 cup shredded lettuce
- ¼ cup thinly sliced red onion
- 2 tbsp olive oil, 2 tbsp lemon juice, 1 tbsp dried oregano

**Instructions:**
1. Toss the chicken with the olive oil, lemon juice, oregano, 2 cloves minced garlic, salt, and pepper.
2. Heat a large skillet over medium-high heat. Cook the chicken for 10 minutes and stir sometimes, until it reaches 165°F (74°C) and the edges char.
3. Warm the pitas in a dry pan for 30 seconds on each side.
4. Fill the pitas with lettuce, chicken, tomato, and onion.
5. Add the tzatziki. Serve.

### 517. Creamy Mushroom & Spinach Pasta

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat pasta
- 1½ lb mushrooms, sliced
- 4 cups baby spinach
- ¾ cup light cream
- ⅓ cup grated parmesan cheese
- 2 tbsp olive oil
- 1 tsp dried thyme

**Instructions:**
1. Cook the pasta as the package says. Reserve ½ cup of the pasta water, then drain.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the mushrooms for 8 minutes until browned and dry.
3. Add 3 cloves minced garlic and the thyme. Cook for 1 minute.
4. Add the cream and parmesan. Simmer for 3 minutes.
5. Add the spinach. Stir until it wilts.
6. Add the pasta and pasta water as needed. Toss and serve.

### 518. Air-Fryer Honey Mustard Salmon

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 3 tbsp Dijon mustard
- 2 tbsp honey
- 1 tbsp lemon juice
- 1 lb asparagus, trimmed
- 1 tbsp olive oil

**Instructions:**
1. Heat the air fryer to 400°F (200°C).
2. Mix the Dijon mustard, honey, and lemon juice.
3. Brush the salmon with the mixture. Season it with salt and pepper.
4. Toss the asparagus with the olive oil, salt, and pepper.
5. Air fry the salmon for 9 minutes, until it reaches 145°F (63°C). Air fry the asparagus for 7 minutes in a second batch.
6. Serve together.

### 519. Black Pepper Beef & Onions

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb flank steak, sliced thin against the grain
- 2 onions, sliced
- 1 green bell pepper, sliced
- 1 tbsp cornstarch
- 3 tbsp low-sodium soy sauce, 1 tbsp oyster sauce, 1 tsp honey
- 1 tbsp coarse black pepper
- 1 tbsp olive oil

**Instructions:**
1. Toss the beef with the cornstarch and the black pepper.
2. Heat the olive oil in a large skillet over high heat. Sear the beef for 2 minutes. Remove it.
3. Add the onions and bell pepper. Cook for 5 minutes until softened and charred at the edges.
4. Return the beef. Add the soy sauce, oyster sauce, honey, and 2 tbsp water. Toss for 2 minutes.
5. Serve over rice.

### 520. Greek Baked Shrimp with Feta

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 1 can (28 oz) crushed tomatoes
- ⅔ cup crumbled feta cheese
- 1 onion, diced
- 2 tbsp olive oil
- 1 tsp dried oregano
- 2 tbsp chopped fresh dill

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Heat the olive oil in an oven-safe skillet. Cook the onion and 3 cloves minced garlic for 5 minutes.
3. Add the tomatoes and oregano. Simmer for 8 minutes.
4. Add the shrimp in one layer. Add the feta on top.
5. Bake for 10 minutes, until the shrimp are pink and opaque and the feta softens.
6. Add the dill. Serve with bread.

### 521. Sweet & Sour Chicken

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cubed
- 2 tbsp cornstarch
- 1 red bell pepper, diced
- 1 green bell pepper, diced
- 1 cup pineapple chunks
- ⅓ cup rice vinegar, 3 tbsp ketchup, 2 tbsp honey, 1 tbsp low-sodium soy sauce
- 2 tbsp olive oil

**Instructions:**
1. Toss the chicken with half the cornstarch, salt, and pepper.
2. Whisk the rice vinegar, ketchup, honey, soy sauce, and the rest of the cornstarch with 2 tbsp water.
3. Heat the olive oil in a large skillet over high heat. Cook the chicken for 8 minutes, until it reaches 165°F (74°C). Remove it.
4. Add the peppers. Cook for 4 minutes.
5. Add the sauce and pineapple. Simmer for 2 minutes until the sauce thickens.
6. Return the chicken and toss. Serve over rice.

### 522. Salmon Cakes with Lemon Yogurt

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 2 cans (6 oz each) boneless salmon, drained
- ⅔ cup whole wheat breadcrumbs
- 2 large eggs
- ¼ cup diced red onion
- 2 tbsp chopped fresh dill
- 2 tbsp olive oil
- ½ cup plain Greek yogurt, 1 tbsp lemon juice

**Instructions:**
1. Flake the salmon into a bowl. Add the breadcrumbs, eggs, onion, dill, salt, and pepper. Mix well.
2. Shape the mixture into 8 patties.
3. Heat the olive oil in a large skillet over medium heat.
4. Cook the patties for 4 minutes on each side, until golden and firm.
5. Mix the Greek yogurt and lemon juice. Serve it with the cakes.

### 523. Spinach & Feta Stuffed Chicken

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 boneless chicken breasts, about 6 oz each
- 3 cups baby spinach, chopped
- ⅔ cup crumbled feta cheese
- 2 tbsp olive oil
- 1 tsp dried oregano
- 1 tbsp lemon juice

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Cut a deep pocket into the side of each chicken breast. Do not cut all the way through.
3. Mix the spinach, feta, lemon juice, and black pepper. Fill each pocket. Close them with toothpicks.
4. Rub the outside with the olive oil, oregano, salt, and pepper.
5. Heat an oven-safe skillet over medium-high heat. Sear the chicken for 3 minutes on each side.
6. Bake for 14 minutes, until the chicken reaches 165°F (74°C). Rest for 3 minutes, remove the toothpicks, and serve.

### 524. Vegetable Lo Mein

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 10 oz lo mein or whole wheat spaghetti noodles
- 3 cups shredded cabbage
- 2 cups shredded carrots
- 1 red bell pepper, sliced
- 3 green onions, sliced
- 4 tbsp low-sodium soy sauce, 1 tbsp oyster sauce, 1 tbsp honey, 1 tsp sesame oil
- 2 tbsp olive oil

**Instructions:**
1. Cook the noodles as the package says. Drain them.
2. Whisk the soy sauce, oyster sauce, honey, and sesame oil.
3. Heat the olive oil in a large skillet over high heat. Cook the cabbage, carrots, and bell pepper for 5 minutes.
4. Add 3 cloves minced garlic and 1 tbsp grated ginger. Cook for 1 minute.
5. Add the noodles and sauce. Toss for 2 minutes.
6. Add the green onions. Serve hot.

### 525. Chipotle Turkey Stuffed Peppers

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 4 large bell peppers, halved and seeded
- 1½ cups cooked brown rice
- 1 cup salsa
- ¾ cup shredded Mexican cheese blend
- 1 tsp chipotle chili powder
- 1 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Put the pepper halves cut-side up in a baking dish. Add ¼ cup water to the dish. Cover with foil and bake for 10 minutes.
3. Heat the olive oil in a skillet over medium-high heat. Cook the turkey for 7 minutes and break it up, until it reaches 165°F (74°C).
4. Add the chipotle powder, 1 tsp cumin, the rice, and the salsa. Stir well.
5. Fill the pepper halves. Add the cheese on top.
6. Bake uncovered for 10 minutes until the cheese melts. Serve.

### 526. Garlic Parmesan Pork Chops with Green Beans

**Total Time:** 25 mins

**Dietary:** Nut-free

**Ingredients:**
- 4 boneless pork chops, about 6 oz each
- 1 lb green beans, trimmed
- ⅓ cup grated parmesan cheese
- 3 cloves garlic, minced
- 2 tbsp olive oil
- 1 tsp dried thyme

**Instructions:**
1. Season the pork chops with salt, pepper, and the thyme.
2. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat.
3. Cook the chops for 5 minutes on each side, until they reach 145°F (63°C). Remove them and rest them for 3 minutes.
4. Add the rest of the oil, the green beans, and 3 tbsp water. Cover and cook for 5 minutes.
5. Add the garlic. Cook for 1 minute.
6. Add the parmesan. Serve with the pork chops.

### 527. Coconut Lime Chicken & Rice

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs, cubed
- 1 cup instant brown rice
- 1 can (14 oz) light coconut milk
- ½ cup low-sodium chicken broth
- 2 tbsp lime juice
- 1 red bell pepper, diced
- ¼ cup chopped fresh cilantro
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat. Cook the chicken for 6 minutes, until it reaches 165°F (74°C). Remove it.
2. Add the bell pepper and 3 cloves minced garlic. Cook for 3 minutes.
3. Add the rice, coconut milk, and broth. Bring to a boil, then cover and reduce the heat.
4. Simmer for 10 minutes until the rice is tender.
5. Return the chicken. Add the lime juice and cilantro. Serve.

### 528. Caprese Stuffed Portobello Mushrooms

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 6 large portobello mushroom caps, stems removed
- 2 cups cherry tomatoes, halved
- 8 oz fresh mozzarella, sliced
- ¼ cup fresh basil, torn
- 2 tbsp olive oil
- 1 tbsp balsamic glaze

**Instructions:**
1. Heat the oven to 400°F (200°C).
2. Brush the mushroom caps with the olive oil. Season them with salt and pepper. Put them gill-side up on a baking sheet.
3. Bake for 10 minutes. Pour off any liquid that collects in the caps.
4. Fill each cap with the tomatoes and mozzarella.
5. Bake for 8 minutes more until the cheese melts.
6. Add the basil and balsamic glaze. Serve.

### 529. Szechuan-Style Green Beans with Ground Pork

**Total Time:** 20 mins

**Dietary:** Dairy-free, Nut-free

**Ingredients:**
- 1 lb ground pork
- 1 lb green beans, trimmed and cut in half
- 3 tbsp low-sodium soy sauce
- 1 tbsp rice vinegar
- 1 tsp red pepper flakes
- 1 tbsp grated fresh ginger
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet over high heat.
2. Add the green beans. Cook for 6 minutes without stirring much, so that they blister.
3. Add the pork. Cook for 6 minutes and break it up, until it reaches 160°F (71°C).
4. Add 3 cloves minced garlic, the ginger, and the red pepper flakes. Cook for 1 minute.
5. Add the soy sauce and rice vinegar. Toss for 1 minute. Serve over rice.

### 530. Mediterranean Quinoa Stuffed Zucchini

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 medium zucchini, halved lengthwise
- 1½ cups cooked quinoa
- 1 can (15 oz) chickpeas, rinsed and drained
- ⅔ cup crumbled feta cheese
- 1 cup cherry tomatoes, halved
- 2 tbsp olive oil
- 1 tsp dried oregano

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Scoop out the center of each zucchini half and leave a ¼-inch shell. Chop the scooped flesh.
3. Heat the olive oil in a skillet. Cook the chopped zucchini and 2 cloves minced garlic for 4 minutes.
4. Add the quinoa, chickpeas, tomatoes, oregano, salt, and pepper. Stir well.
5. Fill the zucchini shells. Add the feta on top.
6. Bake for 18 minutes until the zucchini is tender. Serve.

### 531. Hot Honey Chicken Thighs

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 3 tbsp honey
- 1 tsp red pepper flakes
- 1 tbsp apple cider vinegar
- 1 tbsp olive oil
- 1 tsp smoked paprika
- 4 cups broccoli florets

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Warm the honey, red pepper flakes, and vinegar in a small pan for 2 minutes. Set it aside.
3. Toss the chicken with the olive oil, paprika, salt, and pepper. Put it on a baking sheet with the broccoli.
4. Roast for 18 minutes, until the chicken reaches 165°F (74°C).
5. Brush the chicken with the hot honey. Roast for 3 minutes more. Serve.

### 532. Chicken Caesar Flatbreads

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 whole wheat flatbreads
- 3 cups sliced cooked chicken breast
- 4 cups chopped romaine lettuce
- ⅓ cup light Caesar dressing
- ⅓ cup grated parmesan cheese
- 1 cup cherry tomatoes, halved

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Put the flatbreads on a baking sheet. Add half the parmesan.
3. Bake for 7 minutes until crisp at the edges.
4. Toss the romaine, chicken, and tomatoes with the Caesar dressing.
5. Pile the salad on the warm flatbreads. Add the rest of the parmesan. Serve immediately.

### 533. Red Lentil Dal with Spinach

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ cups dry red lentils, rinsed
- 4 cups low-sodium vegetable broth
- 1 onion, diced
- 1 can (14 oz) diced tomatoes
- 3 cups baby spinach
- 1 tbsp curry powder
- 1 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat the olive oil in a large pot. Cook the onion, 3 cloves minced garlic, and 1 tbsp grated ginger for 5 minutes.
2. Add the curry powder and 1 tsp cumin. Stir for 1 minute.
3. Add the lentils, broth, and tomatoes. Bring to a boil.
4. Reduce the heat. Simmer for 18 minutes until the lentils break down.
5. Add the spinach. Stir until it wilts.
6. Add salt, pepper, and the cilantro. Serve over rice.

### 534. Seared Scallops with Lemon Risotto-Style Orzo

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb sea scallops, patted dry
- 1 cup dry orzo
- 2½ cups low-sodium chicken broth
- ⅓ cup grated parmesan cheese
- 2 tbsp butter
- 2 tbsp lemon juice
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Heat 1 tbsp of the butter in a saucepan. Add the orzo and stir for 1 minute.
2. Add the broth. Simmer for 10 minutes and stir often, until creamy and tender.
3. Stir in the parmesan and lemon juice. Keep it warm.
4. Season the scallops with salt and pepper.
5. Heat the rest of the butter in a skillet over high heat. Sear the scallops for 2 minutes on each side, until a golden crust forms and the centers are opaque.
6. Serve the scallops on the orzo. Add the parsley.

### 535. Teriyaki Turkey Rice Bowls

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb lean ground turkey
- 3 cups cooked brown rice
- 2 cups shredded carrots
- 2 cups sugar snap peas
- 4 tbsp low-sodium soy sauce, 2 tbsp honey, 1 tbsp rice vinegar, 1 tbsp grated fresh ginger
- 1 tbsp olive oil
- 2 green onions, sliced

**Instructions:**
1. Whisk the soy sauce, honey, rice vinegar, and ginger.
2. Heat the olive oil in a large skillet over medium-high heat. Cook the turkey for 7 minutes and break it up, until it reaches 165°F (74°C).
3. Add the carrots and snap peas. Cook for 3 minutes.
4. Add the sauce. Simmer for 2 minutes until it thickens.
5. Serve over the rice. Add the green onions.

### 536. Caprese Chicken Sheet Pan with Potatoes

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 boneless chicken breasts, about 6 oz each
- 1 lb baby potatoes, halved
- 2 cups cherry tomatoes
- 4 oz fresh mozzarella, sliced
- 2 tbsp olive oil
- 1 tbsp balsamic glaze
- ¼ cup fresh basil, torn

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the potatoes with 1 tbsp of the olive oil, salt, and pepper. Spread them on a baking sheet. Roast for 10 minutes.
3. Rub the chicken with the rest of the oil, 1 tsp Italian seasoning, salt, and pepper. Add it to the sheet with the tomatoes.
4. Roast for 16 minutes, until the chicken reaches 165°F (74°C).
5. Add the mozzarella to the chicken. Roast for 3 minutes until it melts.
6. Add the basil and balsamic glaze. Serve.

### 537. Spicy Tofu Lettuce Cups

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, pressed and crumbled
- 1 head butter lettuce, leaves separated
- 1 can (8 oz) water chestnuts, drained and diced
- 3 tbsp hoisin sauce
- 1 tbsp low-sodium soy sauce
- 1 tsp red pepper flakes
- 2 tbsp olive oil
- 2 green onions, sliced

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat.
2. Cook the crumbled tofu for 8 minutes without stirring much, so that it browns.
3. Add the water chestnuts, 3 cloves minced garlic, 1 tbsp grated ginger, and the red pepper flakes. Cook for 2 minutes.
4. Add the hoisin and soy sauce. Toss for 1 minute.
5. Add the green onions. Spoon the filling into the lettuce leaves. Serve.

### 538. Smoked Paprika Chicken & Chickpea Traybake

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 1 can (15 oz) chickpeas, rinsed and drained
- 2 red bell peppers, sliced
- 1 red onion, cut into wedges
- 2 tbsp olive oil
- 1 tbsp smoked paprika
- 2 tbsp lemon juice

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the chicken, chickpeas, peppers, and onion with the olive oil, paprika, 1 tsp cumin, salt, and pepper.
3. Spread everything on a baking sheet in one layer.
4. Roast for 24 minutes, until the chicken reaches 165°F (74°C) and the vegetables char at the edges.
5. Add the lemon juice. Serve.

### 539. Ramen-Style Noodle Soup with Chicken

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb boneless chicken breast, sliced
- 6 oz ramen-style noodles
- 6 cups low-sodium chicken broth
- 2 cups baby spinach
- 2 soft-boiled eggs, halved
- 2 tbsp white miso paste
- 1 tbsp grated fresh ginger
- 2 green onions, sliced

**Instructions:**
1. Bring the broth, ginger, and 2 cloves minced garlic to a simmer.
2. Add the chicken. Simmer for 7 minutes, until it reaches 165°F (74°C).
3. Add the noodles. Cook for 3 minutes.
4. Remove the pot from the heat. Whisk in the miso paste. Do not boil the soup after this step.
5. Add the spinach. Stir until it wilts.
6. Serve in bowls with the egg halves and green onions.

### 540. Baked Falafel Plate with Tahini

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) chickpeas, rinsed and well drained
- ¾ cup fresh parsley
- ⅓ cup whole wheat flour
- 1 small onion, quartered
- 2 tbsp olive oil
- 1 tbsp cumin
- 4 whole wheat pitas, 3 tbsp tahini, 1 tbsp lemon juice, 2 tbsp water

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Put the chickpeas, parsley, onion, 3 cloves garlic, cumin, 1 tsp coriander, salt, and pepper in a food processor. Pulse to a coarse paste. Do not purée it.
3. Add the flour and pulse once more.
4. Shape the mixture into 16 patties. Put them on a lined baking sheet and brush them with the olive oil.
5. Bake for 20 minutes, turning once, until firm and golden.
6. Whisk the tahini, lemon juice, and water. Serve with the pitas.

### 541. Pan-Seared Steak with Chimichurri

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb sirloin steak
- 1 cup fresh parsley, finely chopped
- 3 tbsp red wine vinegar
- ⅓ cup olive oil
- 1 tsp red pepper flakes
- 3 cloves garlic, minced
- 1 tbsp chopped fresh oregano

**Instructions:**
1. Mix the parsley, vinegar, olive oil, garlic, oregano, red pepper flakes, and salt. Set the chimichurri aside.
2. Pat the steak dry. Season it well with salt and pepper.
3. Heat a heavy skillet over high heat with 1 tsp oil.
4. Sear the steak for 4 minutes on each side, until it reaches 145°F (63°C) for medium.
5. Rest the steak for 5 minutes, then slice it against the grain.
6. Spoon the chimichurri over the top. Serve.

### 542. Sheet Pan Gnocchi with Tomatoes & Spinach

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 lb shelf-stable potato gnocchi
- 3 cups cherry tomatoes
- 1 red onion, cut into wedges
- 4 cups baby spinach
- 3 tbsp olive oil
- ⅓ cup grated parmesan cheese
- ¼ cup fresh basil, torn

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the uncooked gnocchi, tomatoes, and onion with the olive oil, 1 tsp Italian seasoning, salt, and pepper.
3. Spread everything on a baking sheet in one layer.
4. Roast for 22 minutes, until the gnocchi are crisp and the tomatoes burst.
5. Add the spinach to the hot pan and toss. The heat wilts it.
6. Add the parmesan and basil. Serve.

### 543. Turkey Burger with Avocado

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1¼ lb lean ground turkey
- ¼ cup whole wheat breadcrumbs
- 1 large egg
- 1 tsp smoked paprika
- 4 whole wheat buns
- 1 avocado, sliced
- 1 tomato, sliced, 4 lettuce leaves

**Instructions:**
1. Mix the turkey, breadcrumbs, egg, paprika, 1 tsp garlic powder, salt, and pepper. Do not overwork it.
2. Shape the mixture into 4 patties. Press a shallow dimple into the center of each, so that they stay flat.
3. Heat 1 tbsp olive oil in a skillet over medium-high heat.
4. Cook the patties for 6 minutes on each side, until they reach 165°F (74°C).
5. Toast the buns. Build the burgers with lettuce, tomato, the patty, and avocado. Serve.

### 544. Cilantro Lime Shrimp Bowls

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 3 cups cooked brown rice
- 1 can (15 oz) black beans, rinsed and drained
- 1 cup frozen corn, thawed
- 1 avocado, diced
- 3 tbsp lime juice, ¼ cup chopped fresh cilantro
- 1 tbsp olive oil

**Instructions:**
1. Toss the warm rice with 1 tbsp of the lime juice, the cilantro, and a pinch of salt.
2. Toss the shrimp with 1 tsp chili powder, salt, and pepper.
3. Heat the olive oil in a skillet over medium-high heat. Cook the shrimp for 2 minutes on each side, until pink and opaque.
4. Warm the beans and corn in the same pan for 2 minutes.
5. Divide the rice among 4 bowls. Add the beans, corn, shrimp, and avocado.
6. Add the rest of the lime juice. Serve.

### 545. Pesto Salmon with Asparagus

**Total Time:** 20 mins

**Dietary:** Pork-free

**Ingredients:**
- 4 salmon fillets, about 5 oz each
- 1 lb asparagus, trimmed
- 3 tbsp basil pesto
- 1 cup cherry tomatoes
- 1 tbsp olive oil
- 1 tbsp lemon juice

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the asparagus and tomatoes with the olive oil, salt, and pepper. Spread them on a baking sheet.
3. Put the salmon on the same sheet. Spread the pesto on each fillet.
4. Bake for 13 minutes, until the salmon reaches 145°F (63°C) and flakes easily.
5. Add the lemon juice. Serve.

### 546. Pork Stir-Fry with Broccoli & Cashews

**Total Time:** 25 mins

**Dietary:** Dairy-free

**Ingredients:**
- 1 lb pork loin, sliced thin
- 4 cups broccoli florets
- ⅓ cup unsalted cashews
- 1 tbsp cornstarch
- 3 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tbsp honey
- 1 tbsp grated fresh ginger
- 1 tbsp olive oil

**Instructions:**
1. Toss the pork with the cornstarch.
2. Heat the olive oil in a large skillet over high heat. Cook the pork for 4 minutes, until it reaches 145°F (63°C). Remove it.
3. Add the broccoli, ginger, 2 cloves minced garlic, and 3 tbsp water. Cover and cook for 5 minutes.
4. Return the pork. Add the soy sauce, rice vinegar, and honey. Toss for 2 minutes.
5. Add the cashews. Serve over rice.

### 547. White Chicken Chili

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 3 cups shredded rotisserie chicken breast
- 2 cans (15 oz each) cannellini beans, rinsed and drained
- 4 cups low-sodium chicken broth
- 1 onion, diced
- 2 cans (4 oz each) diced green chilies
- ½ cup light cream
- 1 tbsp cumin
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat 1 tbsp olive oil in a large pot. Cook the onion and 3 cloves minced garlic for 5 minutes.
2. Add the cumin, 1 tsp oregano, and the green chilies. Stir for 1 minute.
3. Add the broth and beans. Simmer for 10 minutes.
4. Mash some of the beans against the side of the pot, so that the chili thickens.
5. Add the chicken and cream. Heat for 5 minutes.
6. Add salt, pepper, and the cilantro. Serve.

### 548. Crispy Chickpea & Kale Caesar Pasta

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat pasta
- 1 can (15 oz) chickpeas, rinsed and patted dry
- 5 cups chopped kale, stems removed
- ⅓ cup light Caesar dressing
- ⅓ cup grated parmesan cheese
- 2 tbsp olive oil
- 1 tbsp lemon juice

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the chickpeas with 1 tbsp of the olive oil, 1 tsp garlic powder, and salt. Roast for 18 minutes until crisp.
3. Cook the pasta as the package says. Reserve ½ cup of the pasta water, then drain.
4. Heat the rest of the oil in a large skillet. Cook the kale for 4 minutes until it softens.
5. Add the pasta, Caesar dressing, lemon juice, and pasta water as needed. Toss well.
6. Add the parmesan and the crisp chickpeas. Serve immediately.

### 549. Beef & Bean Chili

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb 90% lean ground beef
- 1 can (15 oz) kidney beans, rinsed and drained
- 1 can (28 oz) crushed tomatoes
- 1 onion, diced
- 1 green bell pepper, diced
- 2 tbsp chili powder
- 1 cup low-sodium beef broth

**Instructions:**
1. Heat a large pot over medium-high heat. Cook the beef for 6 minutes and break it up, until it reaches 160°F (71°C). Drain the excess fat.
2. Add the onion, bell pepper, and 3 cloves minced garlic. Cook for 5 minutes.
3. Add the chili powder, 1 tbsp cumin, and 1 tsp smoked paprika. Stir for 1 minute.
4. Add the tomatoes, beans, and broth. Bring to a boil.
5. Reduce the heat. Simmer for 15 minutes and stir sometimes.
6. Add salt and pepper. Serve.

### 550. Lemon Herb Roast Chicken Cutlets with Arugula

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb thin chicken cutlets
- 5 cups baby arugula
- 1 cup cherry tomatoes, halved
- ⅓ cup shaved parmesan cheese
- 3 tbsp olive oil
- 2 tbsp lemon juice
- 1 tsp dried oregano

**Instructions:**
1. Season the cutlets with salt, pepper, and the oregano.
2. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat.
3. Cook the cutlets for 3 minutes on each side, until they reach 165°F (74°C).
4. Toss the arugula and tomatoes with the rest of the oil and the lemon juice.
5. Put the salad on top of the warm cutlets. Add the parmesan. Serve immediately.

### 551. Vegetable Fried Quinoa

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 cups cooked cold quinoa
- 3 large eggs, beaten
- 2 cups frozen peas and carrots
- 1 red bell pepper, diced
- 3 green onions, sliced
- 3 tbsp low-sodium soy sauce, 1 tsp sesame oil
- 1 tbsp olive oil

**Instructions:**
1. Heat the olive oil in a large skillet over high heat.
2. Add the eggs. Scramble for 1 minute until fully set. Remove them.
3. Add the bell pepper and the peas and carrots. Cook for 4 minutes.
4. Add the quinoa. Cook for 4 minutes and press it flat sometimes.
5. Return the eggs. Add the soy sauce and sesame oil. Toss well.
6. Add the green onions. Serve hot.

### 552. Tomato & White Bean Baked Fish

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 4 white fish fillets, about 5 oz each
- 1 can (15 oz) cannellini beans, rinsed and drained
- 2 cups cherry tomatoes
- 3 cups baby spinach
- 2 tbsp olive oil
- 1 tbsp lemon juice
- 1 tsp dried oregano

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the beans, tomatoes, and spinach with 1 tbsp of the olive oil, the oregano, salt, and pepper. Spread them in a baking dish.
3. Bake for 8 minutes.
4. Put the fish on top. Brush it with the rest of the oil and the lemon juice.
5. Bake for 12 minutes, until the fish reaches 145°F (63°C) and flakes easily. Serve.

### 553. Orange Ginger Chicken Stir-Fry

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, sliced
- 3 cups snap peas
- 1 red bell pepper, sliced
- 1 tbsp cornstarch
- ⅓ cup orange juice, 3 tbsp low-sodium soy sauce, 1 tbsp honey, 1 tsp orange zest
- 1 tbsp grated fresh ginger
- 1 tbsp olive oil

**Instructions:**
1. Whisk the orange juice, soy sauce, honey, orange zest, and cornstarch.
2. Heat the olive oil in a large skillet over high heat. Cook the chicken for 7 minutes, until it reaches 165°F (74°C). Remove it.
3. Add the snap peas, bell pepper, ginger, and 2 cloves minced garlic. Cook for 4 minutes.
4. Return the chicken. Add the sauce. Toss for 2 minutes until it thickens. Serve over rice.

### 554. Mushroom & Barley Risotto-Style Skillet

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 1 cup quick-cook pearl barley
- 1 lb mushrooms, sliced
- 4 cups low-sodium vegetable broth
- 1 onion, diced
- ⅓ cup grated parmesan cheese
- 2 tbsp olive oil
- 1 tsp dried thyme

**Instructions:**
1. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the mushrooms for 7 minutes until browned. Remove half of them.
2. Add the rest of the oil, the onion, 3 cloves minced garlic, and the thyme. Cook for 4 minutes.
3. Add the barley. Stir for 1 minute.
4. Add the broth. Simmer for 18 minutes and stir often, until the barley is tender and creamy.
5. Return the mushrooms. Add the parmesan, salt, and pepper. Serve.

### 555. Chili Crisp Noodles with Bok Choy

**Total Time:** 20 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 10 oz whole wheat spaghetti or wheat noodles
- 4 heads baby bok choy, chopped
- 3 tbsp chili crisp
- 3 tbsp low-sodium soy sauce
- 1 tbsp rice vinegar
- 1 tsp sesame oil
- 3 green onions, sliced

**Instructions:**
1. Cook the noodles as the package says. Reserve ½ cup of the cooking water, then drain.
2. Heat 1 tbsp olive oil in a large skillet over high heat. Cook the bok choy and 3 cloves minced garlic for 4 minutes.
3. Add the noodles, chili crisp, soy sauce, rice vinegar, sesame oil, and 3 tbsp of the cooking water.
4. Toss for 2 minutes until the sauce coats the noodles.
5. Add the green onions. Serve hot.

### 556. Sheet Pan Shrimp Boil

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb large shrimp, peeled and deveined
- 1 lb baby potatoes, halved
- 3 ears corn, cut into rounds
- 8 oz smoked turkey sausage, sliced
- 3 tbsp olive oil
- 1 tbsp Old Bay or Cajun seasoning
- 1 lemon, cut into wedges

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the potatoes with 1 tbsp of the olive oil and half the seasoning. Spread them on a baking sheet. Roast for 15 minutes.
3. Add the corn and sausage with another 1 tbsp of oil. Roast for 8 minutes, until the sausage is hot throughout.
4. Toss the shrimp with the rest of the oil and seasoning. Add them to the sheet.
5. Roast for 6 minutes more, until the shrimp are pink and opaque.
6. Serve with the lemon wedges.

### 557. Peanut Tofu Buddha Bowl

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Pork-free

**Ingredients:**
- 1 block (14 oz) extra-firm tofu, pressed and cubed
- 3 cups cooked brown rice
- 3 cups broccoli florets
- 2 cups shredded carrots
- 2 tbsp cornstarch
- ¼ cup peanut butter, 2 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tbsp honey, 3 tbsp warm water
- 2 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the tofu with the cornstarch and 1 tbsp of the olive oil. Toss the broccoli with the rest of the oil.
3. Spread both on a baking sheet. Roast for 20 minutes until the tofu is golden and the broccoli chars at the edges.
4. Whisk the peanut butter, soy sauce, rice vinegar, honey, and warm water until smooth.
5. Divide the rice among 4 bowls. Add the tofu, broccoli, and carrots.
6. Drizzle with the peanut sauce. Serve.

### 558. Chicken Marsala-Style Skillet

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb thin chicken cutlets
- 1 lb mushrooms, sliced
- ¼ cup whole wheat flour
- 1 cup low-sodium chicken broth
- 2 tbsp balsamic vinegar
- 2 tbsp butter, 1 tbsp olive oil
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the cutlets with salt and pepper. Coat them lightly in the flour.
2. Heat the olive oil and 1 tbsp of the butter in a large skillet over medium-high heat.
3. Cook the cutlets for 3 minutes on each side, until they reach 165°F (74°C). Remove them.
4. Add the mushrooms. Cook for 7 minutes until browned.
5. Add the broth and balsamic vinegar. Simmer for 4 minutes until the sauce reduces.
6. Stir in the rest of the butter. Return the chicken and turn it to coat.
7. Add the parsley. Serve.

### 559. Smoky Lentil & Sweet Potato Skillet

**Total Time:** 30 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 2 cans (15 oz each) lentils, rinsed and drained
- 2 medium sweet potatoes, cut into ½-inch cubes
- 1 onion, diced
- 1 can (14 oz) diced tomatoes
- 1 cup low-sodium vegetable broth
- 1 tbsp smoked paprika
- 1 tbsp olive oil
- 3 cups baby spinach

**Instructions:**
1. Heat the olive oil in a large skillet. Cook the onion and 3 cloves minced garlic for 4 minutes.
2. Add the sweet potatoes, paprika, and 1 tsp cumin. Cook for 3 minutes.
3. Add the tomatoes and broth. Cover and simmer for 14 minutes until the sweet potatoes are tender.
4. Add the lentils. Heat for 3 minutes.
5. Add the spinach. Stir until it wilts.
6. Add salt and pepper. Serve.

### 560. Crispy Fish Sandwiches with Slaw

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1¼ lb cod or haddock fillets, cut into 4 pieces
- 1 cup whole wheat panko breadcrumbs
- 2 large eggs, beaten
- 4 whole wheat buns
- 3 cups coleslaw mix
- ¼ cup plain Greek yogurt, 1 tbsp lemon juice, 1 tbsp capers
- 2 tbsp olive oil

**Instructions:**
1. Heat the oven to 425°F (220°C). Put a wire rack on a baking sheet.
2. Mix the panko with the olive oil, 1 tsp paprika, salt, and pepper.
3. Dip each piece of fish in the egg, then press it into the panko. Put them on the rack.
4. Bake for 15 minutes, until golden and the fish reaches 145°F (63°C).
5. Mix the Greek yogurt, lemon juice, and capers. Toss half of it with the coleslaw mix.
6. Build the sandwiches with the rest of the sauce, the fish, and the slaw. Serve.

### 561. Baked Feta & Tomato Pasta

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 8 oz block feta cheese
- 10 oz whole wheat pasta
- 3 cups cherry tomatoes
- 3 tbsp olive oil
- 3 cups baby spinach
- ¼ cup fresh basil, torn
- 1 tsp red pepper flakes

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Put the feta block in the middle of a baking dish. Put the tomatoes around it.
3. Drizzle everything with the olive oil. Add the red pepper flakes and black pepper.
4. Bake for 25 minutes, until the tomatoes burst and the feta softens.
5. Cook the pasta as the package says. Reserve ½ cup of the pasta water, then drain.
6. Mash the feta and tomatoes together with a fork. Add 3 cloves minced garlic and the spinach. Stir until the spinach wilts.
7. Add the pasta and pasta water as needed. Toss. Add the basil and serve.

### 562. Turkey Sloppy Joes

**Total Time:** 25 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1¼ lb lean ground turkey
- 1 onion, diced
- 1 green bell pepper, diced
- 1 cup tomato sauce
- 3 tbsp tomato paste
- 2 tbsp Worcestershire sauce, 1 tbsp brown sugar
- 4 whole wheat buns

**Instructions:**
1. Heat 1 tbsp olive oil in a large skillet over medium-high heat.
2. Cook the turkey for 7 minutes and break it up, until it reaches 165°F (74°C).
3. Add the onion, bell pepper, and 2 cloves minced garlic. Cook for 5 minutes.
4. Add the tomato sauce, tomato paste, Worcestershire sauce, brown sugar, and 1 tsp chili powder.
5. Simmer for 8 minutes until thick.
6. Toast the buns. Spoon the filling into them. Serve.

### 563. Lemon Garlic Butter Tilapia

**Total Time:** 20 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 4 tilapia fillets, about 5 oz each
- 3 tbsp butter
- 4 cloves garlic, minced
- 3 tbsp lemon juice
- 1 lb asparagus, trimmed
- 2 tbsp chopped fresh parsley

**Instructions:**
1. Season the fillets with salt and pepper.
2. Heat 1 tbsp of the butter in a large skillet over medium-high heat. Cook the asparagus for 5 minutes. Remove it.
3. Add another 1 tbsp of butter. Cook the fillets for 3 minutes on each side, until they reach 145°F (63°C) and flake easily. Remove them.
4. Add the rest of the butter and the garlic. Cook for 30 seconds.
5. Add the lemon juice. Pour the sauce over the fish and asparagus.
6. Add the parsley. Serve.

### 564. Chickpea & Spinach Shakshuka Dinner

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 can (15 oz) chickpeas, rinsed and drained
- 6 large eggs
- 1 can (28 oz) crushed tomatoes
- 3 cups baby spinach
- 1 onion, diced
- 1 tbsp smoked paprika
- 1 tbsp olive oil
- ¼ cup chopped fresh parsley

**Instructions:**
1. Heat the olive oil in a large skillet. Cook the onion and 3 cloves minced garlic for 5 minutes.
2. Add the paprika and 1 tsp cumin. Stir for 1 minute.
3. Add the tomatoes and chickpeas. Simmer for 8 minutes.
4. Add the spinach. Stir until it wilts.
5. Make 6 wells. Break 1 egg into each well.
6. Cover the skillet. Cook for 6 minutes until the whites are fully set.
7. Add the parsley. Serve with bread.

### 565. Steak & Roasted Broccoli Bowls

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1¼ lb sirloin steak
- 5 cups broccoli florets
- 3 cups cooked brown rice
- 3 tbsp low-sodium soy sauce, 1 tbsp honey, 1 tbsp rice vinegar
- 2 tbsp olive oil
- 1 tbsp sesame seeds

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the broccoli with 1 tbsp of the olive oil, salt, and pepper. Roast for 18 minutes until charred at the edges.
3. Pat the steak dry. Season it with salt and pepper.
4. Heat the rest of the oil in a heavy skillet over high heat. Sear the steak for 4 minutes on each side, until it reaches 145°F (63°C). Rest it for 5 minutes, then slice it against the grain.
5. Whisk the soy sauce, honey, and rice vinegar.
6. Divide the rice among 4 bowls. Add the steak and broccoli. Drizzle with the sauce and add the sesame seeds.

### 566. Roasted Vegetable & Halloumi Traybake

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 8 oz halloumi cheese, cut into ½-inch slices
- 2 zucchini, sliced into half-moons
- 2 red bell peppers, sliced
- 1 red onion, cut into wedges
- 1 can (15 oz) chickpeas, rinsed and drained
- 3 tbsp olive oil
- 1 tbsp lemon juice, 1 tsp dried oregano

**Instructions:**
1. Heat the oven to 425°F (220°C).
2. Toss the zucchini, peppers, onion, and chickpeas with 2 tbsp of the olive oil, the oregano, salt, and pepper.
3. Spread them on a baking sheet. Roast for 18 minutes.
4. Brush the halloumi with the rest of the oil. Add it to the pan.
5. Roast for 8 minutes more, until the halloumi browns.
6. Add the lemon juice. Serve.

### 567. Zucchini Noodle Pad Thai

**Total Time:** 25 mins

**Dietary:** Dairy-free, Pork-free

**Ingredients:**
- 4 medium zucchini, spiralized
- 3 large eggs, beaten
- 8 oz peeled shrimp
- 2 cups bean sprouts
- ¼ cup chopped roasted peanuts
- 3 tbsp low-sodium soy sauce, 2 tbsp lime juice, 1 tbsp brown sugar
- 1 tbsp olive oil
- 3 green onions, sliced

**Instructions:**
1. Whisk the soy sauce, lime juice, and brown sugar.
2. Heat the olive oil in a large skillet over high heat. Cook the shrimp for 2 minutes on each side, until pink and opaque. Remove them.
3. Add the eggs. Scramble for 1 minute until fully set.
4. Add the zucchini noodles. Cook for 3 minutes only, so that they stay firm.
5. Return the shrimp. Add the sauce and bean sprouts. Toss for 1 minute.
6. Add the peanuts and green onions. Serve immediately.

### 568. Smothered Chicken with Onions & Gravy

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless skinless chicken thighs
- 2 onions, thinly sliced
- 2 tbsp whole wheat flour
- 1½ cups low-sodium chicken broth
- 1 tbsp Worcestershire sauce
- 2 tbsp olive oil
- 1 tsp dried thyme

**Instructions:**
1. Season the chicken with salt, pepper, and the thyme.
2. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the chicken for 5 minutes on each side. Remove it.
3. Add the rest of the oil and the onions. Cook for 8 minutes until soft and browned.
4. Sprinkle on the flour. Stir for 1 minute.
5. Add the broth and Worcestershire sauce. Whisk until smooth.
6. Return the chicken. Cover and simmer for 8 minutes, until it reaches 165°F (74°C). Serve.

### 569. Mexican Street Corn Chicken Bowls

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cubed
- 3 cups frozen corn
- 3 cups cooked brown rice
- ⅓ cup crumbled cotija or feta cheese
- 3 tbsp plain Greek yogurt, 2 tbsp lime juice
- 1 tbsp chili powder
- 2 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Toss the chicken with the chili powder, 1 tsp cumin, salt, and pepper.
2. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the chicken for 8 minutes, until it reaches 165°F (74°C). Remove it.
3. Add the rest of the oil and the corn. Cook for 6 minutes without stirring much, so that it chars.
4. Mix the Greek yogurt and lime juice.
5. Divide the rice among 4 bowls. Add the chicken and corn.
6. Drizzle with the yogurt sauce. Add the cheese and cilantro. Serve.

### 570. Margherita Flatbread Pizzas

**Total Time:** 20 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 whole wheat flatbreads
- 1 cup pizza or marinara sauce
- 8 oz fresh mozzarella, sliced
- 2 cups cherry tomatoes, halved
- 1/2 cup fresh basil leaves
- 2 tbsp olive oil

**Instructions:**
1. Heat the oven to 450°F (230°C). Put a baking sheet in the oven to heat.
2. Brush each flatbread with the olive oil.
3. Spread the sauce to within 1/2 inch of the edges. Add the mozzarella and tomatoes.
4. Put the flatbreads on the hot baking sheet. Bake for 9 minutes, until the cheese melts and the edges crisp.
5. Add the basil and black pepper. Cut and serve immediately.

### 571. Curried Cauliflower Rice Bowls with Egg

**Total Time:** 25 mins

**Dietary:** Vegetarian, Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 6 cups riced cauliflower, fresh or frozen
- 4 large eggs
- 1 can (15 oz) chickpeas, rinsed and drained
- 1 red bell pepper, diced
- 1 tbsp curry powder
- 2 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the bell pepper for 3 minutes.
2. Add the chickpeas and curry powder. Cook for 4 minutes.
3. Add the riced cauliflower. Cook for 7 minutes and stir sometimes, until tender and dry.
4. Heat the rest of the oil in a second pan. Fry the eggs until the whites are fully set, about 3 minutes.
5. Divide the cauliflower rice among 4 bowls. Add 1 egg to each.
6. Add the cilantro, salt, and pepper. Serve.

### 572. Broccoli Cheddar Stuffed Baked Potatoes

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 large russet potatoes
- 4 cups broccoli florets
- 1 cup shredded sharp cheddar cheese
- ½ cup plain Greek yogurt
- 2 tbsp butter
- 2 green onions, sliced

**Instructions:**
1. Pierce each potato several times with a fork. Microwave them on high for 10 to 12 minutes, turning once, until soft.
2. Steam the broccoli for 4 minutes until bright green and tender.
3. Cut the potatoes open. Fluff the insides with a fork.
4. Add the butter, Greek yogurt, salt, and pepper to each potato. Mix it into the flesh.
5. Add the broccoli and cheddar. Microwave for 1 minute until the cheese melts.
6. Add the green onions. Serve.

### 573. Garlic Shrimp & Asparagus Risotto-Style Orzo

**Total Time:** 30 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb large shrimp, peeled and deveined
- 1 cup dry orzo
- 1 lb asparagus, cut into 1-inch pieces
- 2½ cups low-sodium chicken broth
- ⅓ cup grated parmesan cheese
- 2 tbsp butter, 1 tbsp olive oil
- 2 tbsp lemon juice

**Instructions:**
1. Heat the olive oil in a large skillet over medium-high heat. Cook the shrimp for 2 minutes on each side, until pink and opaque. Remove them.
2. Add 1 tbsp of the butter and the orzo. Stir for 1 minute.
3. Add the broth. Simmer for 8 minutes and stir often.
4. Add the asparagus. Simmer for 4 minutes more until the orzo is creamy and tender.
5. Stir in the rest of the butter, the parmesan, and the lemon juice.
6. Return the shrimp. Add salt and pepper. Serve.

### 574. Hoisin Glazed Meatballs with Rice

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1¼ lb lean ground turkey
- ⅓ cup whole wheat breadcrumbs
- 1 large egg
- 3 green onions, sliced
- ¼ cup hoisin sauce, 2 tbsp low-sodium soy sauce, 1 tbsp rice vinegar, 1 tsp honey
- 3 cups cooked brown rice
- 1 tbsp olive oil

**Instructions:**
1. Mix the turkey, breadcrumbs, egg, half the green onions, 1 tbsp grated ginger, salt, and pepper.
2. Shape the mixture into 20 meatballs.
3. Heat the olive oil in a large skillet over medium-high heat. Brown the meatballs for 6 minutes and turn them.
4. Whisk the hoisin, soy sauce, rice vinegar, honey, and ¼ cup water. Add it to the pan.
5. Cover and simmer for 8 minutes, until the meatballs reach 165°F (74°C) and the sauce thickens.
6. Serve over the rice. Add the rest of the green onions.

### 575. Zucchini Fritter Dinner Plate with Yogurt Sauce

**Total Time:** 30 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 4 medium zucchini, grated
- 3 large eggs
- ⅔ cup whole wheat flour
- ⅔ cup crumbled feta cheese
- 3 green onions, sliced
- 3 tbsp olive oil
- ¾ cup plain Greek yogurt, 1 tbsp lemon juice, 2 tbsp chopped fresh dill

**Instructions:**
1. Put the grated zucchini in a clean towel. Squeeze out as much water as you can. This step decides whether the fritters hold together.
2. Mix the zucchini, eggs, flour, feta, green onions, salt, and pepper.
3. Heat the olive oil in a large skillet over medium heat.
4. Cook ¼-cup portions for 4 minutes on each side, until golden and firm in the center. Work in batches.
5. Mix the Greek yogurt, lemon juice, and dill. Serve it with the fritters and a green salad.

### 576. Chicken & Vegetable Skewers with Couscous

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1½ lb boneless chicken breast, cut into 1-inch cubes
- 1 zucchini, cut into rounds
- 1 red bell pepper, cut into squares
- 1 red onion, cut into wedges
- 1 cup whole wheat couscous
- 3 tbsp olive oil, 2 tbsp lemon juice, 1 tbsp dried oregano

**Instructions:**
1. Toss the chicken and vegetables with 2 tbsp of the olive oil, the lemon juice, oregano, salt, and pepper.
2. Thread them onto 8 skewers.
3. Heat a grill pan or broiler to high. Cook for 6 minutes on each side, until the chicken reaches 165°F (74°C).
4. Put the couscous in a bowl. Add 1¼ cups boiling water and the rest of the oil. Cover for 5 minutes, then fluff with a fork.
5. Serve the skewers on the couscous.

### 577. Spiced Beef & Rice Stuffed Cabbage Skillet

**Total Time:** 30 mins

**Dietary:** Dairy-free, Nut-free, Pork-free

**Ingredients:**
- 1 lb 90% lean ground beef
- 6 cups shredded green cabbage
- 1½ cups cooked brown rice
- 1 can (14 oz) diced tomatoes
- 1 onion, diced
- 1 cup low-sodium beef broth
- 1 tsp smoked paprika

**Instructions:**
1. Heat a large skillet over medium-high heat. Cook the beef for 6 minutes and break it up, until it reaches 160°F (71°C). Drain the excess fat.
2. Add the onion and 3 cloves minced garlic. Cook for 4 minutes.
3. Add the paprika and 1 tsp dried thyme. Stir for 1 minute.
4. Add the cabbage, tomatoes, and broth. Cover and simmer for 12 minutes until the cabbage is tender.
5. Add the rice. Heat for 3 minutes.
6. Add salt and pepper. Serve.

### 578. Crispy Gnocchi with Sausage & Broccolini

**Total Time:** 25 mins

**Dietary:** Nut-free, Pork-free

**Ingredients:**
- 1 lb shelf-stable potato gnocchi
- 12 oz Italian turkey sausage, casings removed
- 1 bunch broccolini, cut into 2-inch pieces
- ⅓ cup grated parmesan cheese
- 2 tbsp olive oil
- 1 tsp red pepper flakes
- 1 tbsp lemon juice

**Instructions:**
1. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the sausage for 7 minutes and break it up, until it reaches 165°F (74°C). Remove it.
2. Add the rest of the oil and the gnocchi. Cook for 6 minutes without stirring much, so that they crisp and brown.
3. Add the broccolini, 2 cloves minced garlic, the red pepper flakes, and 3 tbsp water. Cover and cook for 4 minutes.
4. Return the sausage. Add the lemon juice and parmesan. Toss and serve.

### 579. Paneer & Pea Curry

**Total Time:** 25 mins

**Dietary:** Vegetarian, Nut-free, Pork-free

**Ingredients:**
- 12 oz paneer, cubed
- 2 cups frozen peas
- 1 can (14 oz) crushed tomatoes
- 1 cup light coconut milk
- 1 onion, diced
- 1 tbsp garam masala
- 2 tbsp olive oil
- ¼ cup chopped fresh cilantro

**Instructions:**
1. Heat 1 tbsp of the olive oil in a large skillet over medium-high heat. Cook the paneer for 5 minutes until golden on several sides. Remove it.
2. Add the rest of the oil, the onion, 3 cloves minced garlic, and 1 tbsp grated ginger. Cook for 5 minutes.
3. Add the garam masala, 1 tsp cumin, and ½ tsp turmeric. Stir for 1 minute.
4. Add the tomatoes. Simmer for 8 minutes.
5. Stir in the coconut milk and peas. Simmer for 3 minutes.
6. Return the paneer. Add the cilantro. Serve over rice.

## Storage and Meal Prep Notes

**General principles:**

- Label everything with the date it was made. Most prepped items keep 3 to 5 days refrigerated.
- Let hot items cool to room temperature before sealing and refrigerating, to prevent condensation.
- Cooked grains (rice, quinoa, farro, barley) keep 5 days refrigerated and freeze for 2 months.

**Egg muffin cups (#5):** Refrigerate up to 4 days. Reheat in the microwave for 30 to 45 seconds. Freeze up to 2 months and thaw in the fridge overnight.

**Overnight oats (#1, #14):** Prepare up to 5 jars at once. They keep 4 days. Add crunchy toppings the morning you eat them.

**Pancakes and waffles (#9, #16, #18):** Cool completely, stack with parchment between them, and freeze up to 1 month. Reheat in a toaster.

**Smoothie prep bags (#10, #11, #38):** Portion dry and frozen ingredients into freezer bags. Add liquid and blend in the morning. Bags keep 3 months.

**Soups and stews (#77 to #102, #244, #245):** Most keep 4 days refrigerated and freeze for 3 months. Soups thickened with cream or cheese separate on freezing, so freeze the base and add dairy on reheating.

**Braises and roasts (#165, #245, #249, #282, #283):** These improve overnight. Cook a day ahead, cool, refrigerate, and reheat gently.

**Pre-chopped vegetables:** Dice peppers, tomatoes, mushrooms, scallions and cucumbers up to 2 days ahead. Store each in a sealed container with a paper towel.

**Soft-boiled eggs (#8, #15):** Keep peeled in a sealed container up to 2 days. Reheat in warm water for 2 minutes rather than the microwave.

## Provenance

| Source | Recipes | Numbers in this file |
|---|---|---|
| `Quick_Healthy_30-Minute_Recipes.md` | 28 | 1 to 3, 42 to 50, 129 to 144 |
| `Expanded_Breakfast_Recipes.md` | 12 | 4 to 15 |
| New for this database | 260 | 16 to 41, 51 to 128, 145 to 300 |

Changes made when merging:

- All recipes were renumbered into one sequence, 1 to 300. The originals kept their text.
- The 12 expanded breakfast recipes were reformatted to the `Quick_Healthy_30-Minute_Recipes.md` scheme. Their per-recipe `Serves`, `Nutrition highlights` and `Meal-prep tip` lines were removed for scheme consistency; the storage guidance they carried is kept in the Storage and Meal Prep Notes above.
- A `**Dietary:**` line was added to every recipe, including the original 40.
- The two pantry staple lists were merged into one.
