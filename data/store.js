const fs = require('fs');
const path = require('path');

const ADMIN_ORDERS_FILE = path.join(__dirname, 'admin-orders.json');

const categories = [
  { id: 1, name: 'Appetizers' },
  { id: 2, name: 'Shawarma' },
  { id: 3, name: 'Salads' },
  { id: 4, name: 'Drinks' },
  { id: 5, name: 'Sauces' },
  { id: 6, name: 'Burgers'},
  { id: 7, name: 'Pizza & Pasta'},
  { id: 8, name: 'Snack' },
  { id: 9, name: 'Platters' },
  { id: 10, name: 'Chicken' }
];

const menuItems = [

  // Appetizers Menu
  {
    id: 1,
    category_id: 1,
    name: 'French Fries',
    ingredients: 'Served with Cocktail Sauce',
    is_single_price: true,
    price: 4.00,
    image_url: '/images/appetizers_frenchFries.jpg'
  },
  {
    id: 2,
    category_id: 1,
    name: 'Wedges Fries',
    ingredients: 'Served with BBQ Sauce',
    is_single_price: true,
    price: 4.00,
    image_url: '/images/appetizers_wedgesFries.jpg'
  },
  {
    id: 3,
    category_id: 1,
    name: 'Curly Fries',
    ingredients: 'Served with Cocktail Sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_curlyFries.jpg'
  },
  {
    id: 4,
    category_id: 1,
    name: 'Mixed Fries',
    ingredients: 'French Fries, Curly Fries, Wedges Fries Served with Cocktail & BBQ sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_mixedFries.jpg'
  },
  {
    id: 5,
    category_id: 1,
    name: 'Onion Rings',
    ingredients: '10 pcs served with Ranch sauce',
    is_single_price: true,
    price: 5.00,
    image_url: '/images/appetizers_onionRings.jpg'
  },
  {
    id: 6,
    category_id: 1,
    name: 'Rice Mandi',
    ingredients: 'long-grain basmati rice,spiced broth containing cardamom,cloves,cinnamon,and black pepper',
    price_small: 3.00,
    price_medium: 5.00,
    price_large: 7.00,
    image_url: '/images/appetizers_riceMandi.jpg'
  },
  {
    id: 7,
    category_id: 1,
    name: 'Hummus',
    ingredients: 'a smooth blend of chickpeas,tahini,lemon juice,garlic,olive oil, and salt',
    is_single_price: true,
    price: 4.00,
    image_url: '/images/appetizers_hummus.jpg'
  },
  {
    id: 8,
    category_id: 1,
    name: 'Mozzarella Sticks',
    ingredients: '5 Pcs Served with Cocktail Sauce',
    is_single_price: true,
    price: 5.00,
    image_url: '/images/appetizers_mozzarellaSticks.jpg'
  },
   {
    id: 9,
    category_id: 1,
    name: 'Cheddar sticks',
    ingredients: '5 Pcs Served with Cocktail Sauce',
    is_single_price: true,
    price: 5.00,
    image_url: '/images/appetizers_cheddarSticks.jpg'
  },
   {
    id: 10,
    category_id: 1,
    name: 'Jalapeno Bites',
    ingredients: '5 Pcs served with Ranch Sauce',
    is_single_price: true,
    price: 5.00,
    image_url: '/images/appetizers_jalapenoBites.jpg'
  },
   {
    id: 11,
    category_id: 1,
    name: 'Nuggets',
    ingredients: '10 Pcs served with BBQ',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_nuggets.jpg'
  },
   {
    id: 12,
    category_id: 1,
    name: 'Yamani’s Combo',
    ingredients: 'Mixed Fries,3 mozzarella Sticks,3 Cheddar sticks,3 Shrimp Dynamite,3 Jalapeno Bites,3 Onion Rings,served with Cocktail,Ranch,Dynamite & BBQ Sauce',
    is_single_price: true,
    price: 18.00,
    image_url: '/images/appetizers_yamanisCombo.jpg'
  },
  {
    id: 13,
    category_id: 1,
    name: 'Yamani’s Mini Combo',
    ingredients: 'Mixed Fries,3 mozzarella Sticks,2 Cheddar sticks,2 Shrimp Dynamite,2 Jalapeno Bites,2 Onion Rings,served with Cocktail,Ranch,Dynamite & BBQ Sauce',
    is_single_price: true,
    price: 12.00,
    image_url: '/images/appetizers_yamanisMiniCombo.jpg'
  },
  {
    id: 14,
    category_id: 1,
    name: 'Shrimps Dynamite',
    ingredients: '8 Jumbo Pcs served with Dynamite Sauce',
    is_single_price: true,
    price: 8.00,
    image_url: '/images/appetizers_shrimpsDynamite.jpg'
  },
  {
    id: 15,
    category_id: 1,
    name: 'Wings BBQ',
    ingredients: '8 wings Pcs dipped in BBQ Sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_wingsBBQ.jpg'
  },
  {
    id: 16,
    category_id: 1,
    name: 'Wings Dynamite',
    ingredients: '8 Wings Pcs Dipped in Dynamite Sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_wingsDynamite.jpg'
  },
 {
    id: 17,
    category_id: 1,
    name: 'Wings Honey Mustard',
    ingredients: '8 wings pcs dipped In Honey Mustard Sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/appetizers_wingsHoneyMustard.jpg'
  },

// end of appetizers menu


// shawarma menu
{
    id: 201,
    category_id: 2,
    name: 'Large Chicken Shawarma Arabic Bread',
    ingredients: 'Fries, Garlic , Pickles',
    is_single_price: true,
    price: 5.50,
    image_url: '/images/shawarma_largeChickenShawarmaArabicBread.jpg'
  },
  {
    id: 202,
    category_id: 2,
    name: 'Large Chicken Shawarma Markouk Bread',
    ingredients: 'Fries , Garlic , Pickles',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/shawarma_largeChickenShawarmaMarkoukBread.jpg'
  },
  {
    id: 203,
    category_id: 2,
    name: 'Duner Chicken Shawarma',
    ingredients: 'Cocktail Sauce , Ranch Sauce , Tomato , Onion, Red Cabbage, Lettuce',
    is_single_price: true,
    price: 6.50,
    image_url: '/images/shawarma_dunerChickenShawarma.jpg'
  },
  {
    id: 204,
    category_id: 2,
    name: 'Large Beef Shawarma Arabic Bread',
    ingredients: 'Tarator , Boaz Salad , Tomato',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/shawarma_largeBeefShawarmaArabicBread.jpg'
  },
  {
    id: 205,
    category_id: 2,
    name: 'Large Beef Shawarma Markouk Bread',
    ingredients: 'Tarator , Boaz Salad , Tomato',
    is_single_price: true,
    price: 6.50,
    image_url: '/images/shawarma_largeBeefShawarmaMarkoukBread.jpg'
  },
  {
    id: 206,
    category_id: 2,
    name: 'Duner Beef Shawarma',
    ingredients: 'Tomato, Onion, lettuce, Tarator ,Red Cabbage',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/shawarma_dunerBeefShawarma.jpg'
  },
  {
    id: 207,
    category_id: 2,
    name: 'Sliced ​​Chicken Shawarma Markouk Meal',
    ingredients: '2 kinds of garlic regular and spicy , Fries , coleslaw, pickles',
    is_single_price: true,
    price: 11.00,
    image_url: '/images/shawarma_sliced​​ChickenShawarmaMarkoukMeal.jpg'
  },
   {
    id: 208,
    category_id: 2,
    name: 'Sliced ​​Beef Shawarma Markouk Meal',
    ingredients: 'Tarator , Boaz Salad, Fries , Tomato, Pickles',
    is_single_price: true,
    price: 12.00,
    image_url: '/images/shawarma_sliced​​BeefShawarmaMarkoukMeal.jpg'
  },
   {
    id: 209,
    category_id: 2,
    name: 'Lo2met Shawarma mix',
    ingredients: '2 Buns Chicken Shawarma , 2 Buns Beef Shawarma , Garlic Sauce & Fries .',
    is_single_price: true,
    price: 11.00,
    image_url: '/images/shawarma_lo2metShawarmaMix.jpg'
  },
  {
    id: 210,
    category_id: 2,
    name: 'Chicken Shawarma in Weight',
    ingredients: '2 kinds of garlic regular and Spicy , Fries , Pickles , Coleslaw',
    price_small: 16.00,
    price_large: 30.00,
    size_small_label: '1/2 Kg',
    size_large_label: '1 Kg',
    image_url: '/images/shawarma_chickenShawarmaInWeight.jpg'
  },
  {
    id: 211,
    category_id: 2,
    name: 'Beef Shawarma in Weight',
    ingredients: 'Tarator , Boaz Salad , Fries , Tomato',
    price_small: 16.00,
    price_large: 30.00,
    size_small_label: '1/2 Kg',
    size_large_label: '1 Kg',
    image_url: '/images/shawarma_beefShawarmaInWeight.jpg'
  },


// end of shawarma menu


// Salad Menu
  {
    id: 301,
    category_id: 3,
    name: 'Fatoush',
    ingredients: 'mixed greens, cucumbers, tomatoes, radishes, and herbs tossed with crispy fried or toasted pita',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/salads_fatoush.jpg'
  },
  {
    id: 302,
    category_id: 3,
    name: 'Greek Salad',
    ingredients: 'Cesar Dressing , Cherry Tomatoes, Crunchy Crotons & Parmesan Cheese ',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/salads_greekCaesar.jpg'
  },
  {
    id: 303,
    category_id: 3,
    name: 'Chicken Pasta Salad',
    ingredients: 'Cesar Dressing , Lettuce , Olives , Cherry Tomatoes, Green Pepper , Corn , Crunchy Crotons &Oregano',
    is_single_price: true,
    price: 8.00,
    image_url: '/images/salads_chickenPasta.jpg'
  },
  {
    id: 304,
    category_id: 3,
    name: 'Shrimps Salad',
    ingredients: 'Crab Dressing , Lettuce , Carrots , Cherry Tomatoes & Crunchy Crotons',
    is_single_price: true,
    price: 8.00,
    image_url: '/images/salads_shrimps.jpg'
  },
  {
    id: 305,
    category_id: 3,
    name: 'Crab Salad',
    ingredients: 'Crab Dressing , Lettuce , Corn , Cherry Tomatoes, Carrot & Crunchy Crotons',
    is_single_price: true,
    price: 8.00,
    image_url: '/images/salads_crab.jpg'
  },
  {
    id: 306,
    category_id: 3,
    name: 'Shrimps & Crab Salad',
    ingredients: 'Crab Dressing , Lettuce , Carrots , Cherry Tomatoes & Crunchy Crotons',
    is_single_price: true,
    price: 10.00,
    image_url: '/images/salads_shrimpsCrab.jpg'
  },

// end of salad menu


// pizza menu

{
    id: 701,
    category_id: 7,
    name: 'Chicken Fettuccine',
    ingredients: 'Italian pasta, Alfredo Sauce, Chicken, Fresh Mushroom, Mozarella Cheese, Parsley',
    is_single_price: true,
    price: 10.00,
    image_url: '/images/pizza_chickenFettuccine.jpg'
  },
  {
    id: 702,
    category_id: 7,
    name: 'Shrimps Fettuccine',
    ingredients: 'Italian pasta, Alfredo Sauce, Shrimps, Fresh Mushroom, Mozarella Cheese, Parsley',
    is_single_price: true,
    price: 11.00,
    image_url: '/images/pizza_shrimpsFettuccine.jpg'
  },
 {
    id: 703,
    category_id: 7,
    name: 'Margarita',
    ingredients: 'Tomato Sauce , Mozzarella Cheese , Oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_margarita.jpg'
  },
  {
    id: 704,
    category_id: 7,
    name: 'Vegetarian',
    ingredients: 'Tomato Sauce , Mozzarella Cheese , Green Pepper , Onion , Fresh Mushrooms , Tomato, Olives , Corn , Oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_vegetarian.jpg'
  },
  {
    id: 705,
    category_id: 7,
    name: 'Pepperoni',
    ingredients: 'Tomato Sauce , Mozzarella Cheese , Pepproni, Oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_pepperoni.jpg'
  },
  {
    id: 706,
    category_id: 7,
    name: 'Pepperoni Supreme',
    ingredients: 'Tomato Sauce , Mozzarella Cheese , Pepperoni , Green Pepper , Onion , Tomato , Olives , Fresh Mushrooms , Oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_pepperoniSupreme.jpg'
  },
  {
    id: 707,
    category_id: 7,
    name: 'Chicken Bbq',
    ingredients: 'BBQ Sauce , Mozzarella Cheese , Chicken Tenders , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenBbq.jpg'
  },
  {
    id: 708,
    category_id: 7,
    name: 'Chicken Polo',
    ingredients: 'Alfredo Sauce , Mozzarella Cheese, Chicken Tenders , Corn , Onion , Fresh Mushrooms , Cocktail Sauce',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenPolo.jpg'
  },
  {
    id: 709,
    category_id: 7,
    name: 'Chicken Mexican',
    ingredients: 'Mexican Sauce , Mozzarella Cheese, Chicken Tenders, Green Pepper , Onion, Fresh Mushrooms , Tomato , Jalapenos',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenMexican.jpg'
  },
  {
    id: 710,
    category_id: 7,
    name: 'Chicken Pesto',
    ingredients: 'Pesto Sauce , Mozzarella Cheese, Chicken Tenders, Tomatoes, Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenPesto.jpg'
  },
  {
    id: 711,
    category_id: 7,
    name: 'Chicken Turkey',
    ingredients: 'Ranch Sauce , Mozzarella Cheese , Chicken Tenders , Smoked Turkey , Corn , Lettuce',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenTurkey.jpg'
  },
  {
    id: 712,
    category_id: 7,
    name: 'Chicken Dynamite',
    ingredients: 'Dynamite Sauce , Mozzarella Cheese , Chicken Tenders , Tomato, Green Pepper , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenDynamite.jpg'
  },
  {
    id: 7013,
    category_id: 7,
    name: 'Shrimps Dynamite',
    ingredients: 'Dynamite Sauce , Mozzarella Cheese , Shrimps , Tomato, Green Pepper , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_shrimpsDynamite.jpg'
  },
  {
    id: 714,
    category_id: 7,
    name: 'Chicken Sweet & Sour',
    ingredients: 'Sweet & Sour Sauce , Mozzarella Cheese , Chicken Tenders , Tomato, Green Pepper , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenSweetSour.jpg'
  },
  {
    id: 715,
    category_id: 7,
    name: 'Shrimps Sweet & Sour',
    ingredients: 'Sweet & Sour Sauce , Mozzarella Cheese , Shrimps , Tomato, Green Pepper , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_shrimpsSweetSour.jpg'
  },
  {
    id: 716,
    category_id: 7,
    name: 'Chicken Teriyaki',
    ingredients: 'Teriyaki Sauce , Mozzarella Cheese , Chicken Tenders , Onion , Corn, Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenTeriyaki.jpg'
  },
  {
    id: 717,
    category_id: 7,
    name: 'Shrimps Teriyaki',
    ingredients: 'Teriyaki Sauce , Mozzarella Cheese , Shrimps , Onion , Corn , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_shrimpsTeriyaki.jpg'
  },
  {
    id: 718,
    category_id: 7,
    name: 'Chicken Ranch',
    ingredients: 'Ranch Sauce , Mozzarella Cheese , Chicken Tenders , Tomato, Green Pepper , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenRanch.jpg'
  },
  {
    id: 719,
    category_id: 7,
    name: 'Chicken Honey Mustard',
    ingredients: 'Honey Mustard Sauce , Mozzarella Cheese , Chicken Tenders , Tomato, Corn , Onion , Fresh Mushrooms',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_chickenHoneyMustard.jpg'
  },
{
    id: 720,
    category_id: 7,
    name: 'Philly steak',
    ingredients: 'Mushroom Sauce , Mozzarella Cheese , Beef Steak , Onion , Green Pepper , Fresh Mushrooms , Ranch Sauce',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_phillySteak.jpg'
  },
{
    id: 721,
    category_id: 7,
    name: 'Yamani Pizza',
    ingredients: '4 Kinds of your Choice in One Xlarge Pizza',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_yamaniPizza.jpg'
  },


// end pizza menu


// burgers menu

{
    id: 601,
    category_id: 6,
    name: 'Beef Lebanese Burger',
    ingredients: 'Beef Burger , Coleslaw, Fries , Pickles , Ketchup',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/burgers_beefLebaneseBurger.jpg'
  },
  {
    id: 602,
    category_id: 6,
    name: 'Beef Cheese Burger',
    ingredients: 'Beef Burger , Lettuce , Pickles , Onion , Tomato , Cheddar Cheese , AlYamani Special Sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/burgers_beefCheeseBurger.jpg'
  },
  {
    id: 603,
    category_id: 6,
    name: 'Beef Mushroom Burger',
    ingredients: 'Beef Burger , Mushroom Sauce , Emmental Cheese , Onion , Fresh Mushroom',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/burgers_beefMushroomBurger.jpg'
  },
 {
    id: 604,
    category_id: 6,
    name: 'Beef Mexican Burger',
    ingredients: 'Beef Burger , Lettuce , Jalapeños, Tomato, Mozzarella Patty , Cheddar Cheese , Mexican Sauce',
    is_single_price: true,
    price: 7.50,
    image_url: '/images/burgers_beefMexicanBurger.jpg'
  },
  {
    id: 605,
    category_id: 6,
    name: 'Truffle burger',
    ingredients: 'Truffle Sauce , Mushroom , Onion , Emmental Cheese , Rocca',
    is_single_price: true,
    price: 7.50,
    image_url: '/images/burgers_truffleBurger.jpg'
  },
  {
    id: 606,
    category_id: 6,
    name: 'Yamani’s Beef Burger',
    ingredients: 'Beef Burger , Lettuce , Pickles , Chips , Mozzarella Patty , Cheddar Cheese , Yamani’s Special Sauce',
    is_single_price: true,
    price: 7.50,
    image_url: '/images/burgers_yamanisBeefBurger.jpg'
  },
  {
    id: 607,
    category_id: 6,
    name: 'Chicken Cheese Burger',
    ingredients: 'Grilled Chicken , Lettuce , Tomato , Onion , Cheddar Cheese , Yamani’s special sauce',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/burgers_chickenCheeseBurger.jpg'
  },
  {
    id: 608,
    category_id: 6,
    name: 'Chicken Mushroom Burger',
    ingredients: 'Grilled Chicken , Mushroom Sauce , Emmental Cheese , Onion , Fresh Mushrooms',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/burgers_chickenMushroomBurger.jpg'
  },
  {
    id: 609,
    category_id: 6,
    name: 'Chicken Honey Mustard Burger',
    ingredients: 'Fried Chicken , Lettuce , Tomato , Pickles , Corn , Chips',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/burgers_chickenHoneyMustardBurger.jpg'
  },
  {
    id: 610,
    category_id: 6,
    name: 'Zinger Burger',
    ingredients: 'Fried Chicken , Smoked Turkey , Lettuce , Tomato , Jalapenos, Mexican Sauce , Cheddar Cheese',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/burgers_zingerBurger.jpg'
  },
  {
    id: 611,
    category_id: 6,
    name: 'Yamani’s Chicken Burger',
    ingredients: 'Fried Chicken , Lettuce , Pickles , Chips , Mozarella Patty , Cheddar Cheese , Yamani’s Special Sauce',
    is_single_price: true,
    price: 7.50,
    image_url: '/images/burgers_yamanisChickenBurger.jpg'
  },
  

// end burgers menu



// snack menu

  {
    id: 801,
    category_id: 8,
    name: 'Chicken Fajita',
    ingredients: 'Chicken Tenders, Mozzarella cheese , Green Pepper , Onion, Mushroom , avocado Sauce',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/snack_chickenFajita.jpg'
  },
  {
    id: 802,
    category_id: 8,
    name: 'Philadelphia Steak',
    ingredients: 'Steak Tenders, Mozzarella cheese , Green Pepper , Onion, Mushroom , Mayo Sauce',
    is_single_price: true,
    price: 8.00,
    image_url: '/images/snack_philadelphiaSteak.jpg'
  },
  {
    id: 803,
    category_id: 8,
    name: 'Chicken Sap',
    ingredients: 'Chicken Tenders, Mozzarella cheese , Lettuce , Corn , Pickles, Mayo',
    is_single_price: true,
    price: 6.00,
    image_url: '/images/snack_chickenSap.jpg'
  },
  {
    id: 804,
    category_id: 8,
    name: 'Mexicana',
    ingredients: 'Chicken Tenders, Mozzarella Cheese , Green Pepper , Onion , jalapeno , Corn , Mexican Sauce',
    is_single_price: true,
    price: 6.50,
    image_url: '/images/snack_mexicana.jpg'
  },
   {
    id: 805,
      category_id: 8,
      name: 'Chicken Pesto',
      ingredients: 'Chicken Tenders , Mozzarella Cheese , Pesto Sauce , Tomato , Lettuce , Fresh Mushroom',
      is_single_price: true,
      price: 6.50,
      image_url: '/images/snack_chickenPesto.jpg'
    },
   {
    id: 806,
      category_id: 8,
      name: 'Crispy',
      ingredients: 'Fried Chicken , Fries , Garlic , Pickles , Coleslaw, Cocktail Sauce',
      is_single_price: true,
      price: 6.00,
      image_url: '/images/snack_crispy.jpg'
    },
   {
    id: 807,
      category_id: 8,
      name: 'Chicken & Turkey Twister',
      ingredients: 'Chicken Breast , Turkey , mozarella Cheese , Corn , Lettuce , Pickles & Mayo Sauce',
      is_single_price: true,
      price: 7.00,
      image_url: '/images/snack_chickenTurkeyTwister.jpg'
  },
  {
    id: 808,
    category_id: 8,
    name: 'Zinger Twister',
    ingredients: 'Fried Chicken , Smoked Turkey , Lettuce , Tomato , Corn , Jalapeños , Chips , mexican Sauce , Cheddar',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/snack_zingerTwister.jpg'
  },
   {
    id: 809,
    category_id: 8,
    name: 'Shrimps',
    ingredients: 'Fried Shrimps , Lettuce, Corn , Pickles , Tartar Sauce',
    is_single_price: true,
    price: 7.00,
    image_url: '/images/snack_shrimps.jpg'
},
   {
    id: 810,
      category_id: 8,
      name: 'Shrimps & Crab',
      ingredients: 'Fried Shrimps , Crab , Lettuce , Corn , Pickles , Tartar Sauce',
      is_single_price: true,
      price: 8.50,
      image_url: '/images/snack_shrimpsCrab.jpg'
  },
   {
    id: 811,
      category_id: 8,
      name: 'Grilled Tawouk on Charcoal',
      ingredients: 'Fries, Garlic , Coleslaw, Pickles',
      is_single_price: true,
      price: 5.50,
      image_url: '/images/snack_grilledTawoukOnCharcoal.jpg'
  },
   {
    id: 812,
      category_id: 8,
      name: 'Grilled Chicken on Charcoal',
      ingredients: 'Fries , Garlic , Pickles',
      is_single_price: true,
      price: 5.50,
      image_url: '/images/snack_grilledChickenOnCharcoal.jpg'
  },


// end of snack menu


// platters menu
 {
    id: 901,
    category_id: 9,
    name: 'Crispy',
    ingredients: '5 pcs, Fries , Garlic , Cocktail Sauce , Pickles , Coleslaw',
    is_single_price: true,
    price: 11.00,
    image_url: '/images/platters_crispy.jpg'
  },
  {
    id: 902,
    category_id: 9,
    name: 'Crispy Family Meal (1KG)',
    ingredients: 'Fries , Garlic , Cocktail Sauce, Pickles , Coleslaw',
    is_single_price: true,
    price: 30.00,
    image_url: '/images/platters_crispyFamilyMeal.jpg'
  },
  {
    id: 903,
    category_id: 9,
    name: 'Tawook',
    ingredients: '2 shish Tawook , Fries , Coleslaw, Garlic , Spicy Garlic , Pickles',
    is_single_price: true,
    price: 11.00,
    image_url: '/images/platters_tawook.jpg'
  },
  {
    id: 904,
    category_id: 9,
    name: 'Nuggets Kids Meal',
    ingredients: '10 Pcs , Fries , Dip , Maccaw Juice',
    is_single_price: true,
    price: 7.50,
    image_url: '/images/platters_nuggetsKidsMeal.jpg'
  },


// end of platters menu


//chicken menu

  {
  id: 1001,
  category_id: 10,
  name: 'Broasted Chicken 4 Pcs',
  ingredients: 'Fries, Garlic , Spicy Garlic , Coleslaw, pickles',
  is_single_price: true,
  price: 11.00,
  image_url: '/images/chicken_broastedChicken4Pcs.jpg'
  },
  {
  id: 1002,
  category_id: 10,
  name: 'Grilled Chicken On Gaz',
  ingredients: 'Garlic , Spicy Garlic , Pickles',
  is_single_price: true,
  price: 7.50,
  image_url: '/images/chicken_grilledChickenOnGaz.jpg'
  },
  {
  id: 1003,
  category_id: 10,
  name: 'Grilled Chicken On Gaz Combo',
  ingredients: 'Fries, Garlic , Spicy Garlic , Pickles,Coleslaw',
  is_single_price: true,
  price: 7.50,
  image_url: '/images/chicken_grilledChickenOnGazCombo.jpg'
  },
  {
  id: 1004,
  category_id: 10,
  name: 'Grilled Chicken on Charcoal',
  ingredients: 'Fries, Pickles , Garlic , Spicy Garlic , Coleslaw',
  is_single_price: true,
  price: 7.50,
  image_url: '/images/chicken_grilledChickenOnCharcoal.jpg'
  },
  {
  id: 1005,
  category_id: 10,
  name: 'Grilled Chicken No Bones on Charcoal',
  ingredients: 'Fries , Pickles, Garlic, Spicy Garlic, Coleslaw',
  is_single_price: true,
  price: 7.50,
  image_url: '/images/chicken_grilledChickenNoBonesOnCharcoal.jpg'
  },
 

// end of chicken menu


// drinks menu

  {
    id: 401,
    category_id: 4,
    name: 'Fresh Orange',
    ingredients: 'Fresh orange extract, ice',
    is_single_price: true,
    price: 2.00,
    image_url: '/images/drinks_freshOrange.jpg'
  },
  {
    id: 402,
    category_id: 4,
    name: 'Maccaw Juice',
    ingredients: 'Pineapple, Apple , Mango , Exotic',
    is_single_price: true,
    price: 1.00,
    image_url: '/images/drinks_maccawJuice.jpg'
  },
  {
    id: 403,
    category_id: 4,
    name: 'Soft Drinks',
    ingredients: 'Pepsi / Miranda / 7up',
    is_single_price: true,
    price: 1.50,
    image_url: '/images/drinks_softDrinks.jpg'
  },
  {
    id: 404,
    category_id: 4,
    name: 'Lipton Iced Tea',
    ingredients: 'Tea extract, lemon, ice',
    is_single_price: true,
    price: 2.00,
    image_url: '/images/drinks_liptonIcedTea.jpg'
  },
  {
    id: 405,
    category_id: 4,
    name: 'Fresh Laban',
    ingredients: 'Cold laban, mint',
    is_single_price: true,
    price: 1.50,
    image_url: '/images/drinks_laban.jpg'
  },
  {
    id: 406,
    category_id: 4,
    name: 'Mineral Water',
    ingredients: 'Chilled bottled water',
    is_single_price: true,
    price: 0.50,
    image_url: '/images/drinks_water.jpg'
  },

// end of drinks menu

 {
    id: 501,
    category_id: 5,
    name: 'Mayo Sauces',
    ingredients: 'Egg, Mustard, Vinegar, Salt, Lemon juice',
    is_single_price: true,
    price: 1.00,
    image_url: '/images/sauces_mayoSauces.jpg'
  },
 
  {
    id: 502,
    category_id: 5,
    name: 'Garlic / Spicy Garlic',
    ingredients: 'Fresh garlic cloves, Salt, Oil, Mayo, Lemon juice',
    price_small: 1.50,
    price_large: 2.50,
    image_url: '/images/sauces_garlicSpicyGarlic.jpg'
  },
  {
    id: 503,
    category_id: 5,
    name: 'Coleslaw',
    ingredients: 'Shredded Cabbage, grated carrots, mayonnaise, sugar, vinegar ',
    price_small: 2.00,
    price_large: 3.00,
    image_url: '/images/sauces_coleslaw.jpg'
  },
 
  {
    id: 504,
    category_id: 5,
    name: 'Avocado Sauce',
    ingredients: 'Avocado, creamy sauce, herbs',
    price_small: 2.00,
    price_large: 3.00,
    image_url: '/images/sauces_avocadoSauce.jpg'
  },
  {
    id: 505,
    category_id: 5,
    name: 'Cheddar Cheese',
    ingredients: 'Cheddar cheese, creamy sauce, herbs',
    price_small: 2.00,
    price_large: 3.00,
    image_url: '/images/sauces_cheddarCheese.jpg'
  }

// sauce menu



// end of sauce menu



/*

  {
    id: 2033,
    category_id: 2,
    name: 'Club Sandwich',
    ingredients: 'Chicken, lettuce, tomato, mayo, bread',
    price_small: 4.99,
    price_large: 7.49,
    image_url: '/images/shawarma-1.jpeg'
  },
  {
    id: 2044,
    category_id: 2,
    name: 'Veggie Sandwich',
    ingredients: 'Grilled vegetables, cheese, pesto, bread',
    price_small: 4.49,
    price_large: 6.99,
    image_url: '/images/pizza_vegy.jpg'
  },
  {
    id: 214,
    category_id: 2,
    name: 'Chicken Shawarma Wrap',
    ingredients: 'Chicken shawarma, garlic sauce, pickles, saj bread',
    price_small: 5.49,
    price_large: 7.99,
    image_url: '/images/shawarma_chicken_turkish.jpg'
  },
  {
    id: 215,
    category_id: 2,
    name: 'Beef Shawarma Wrap',
    ingredients: 'Beef shawarma, tahini sauce, onions, saj bread',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/shawarma_beef_turkish.jpg'
  },
  {
    id: 223,
    category_id: 2,
    name: 'Chicken Fahita Sandwich',
    ingredients: 'Fahita chicken, peppers, onions, garlic sauce',
    price_small: 6.79,
    price_large: 9.29,
    image_url: '/images/fahita_chicken.jpg'
  },
  {
    id: 224,
    category_id: 2,
    name: 'Fahem Chicken Wrap',
    ingredients: 'Char-grilled chicken, pickles, garlic cream',
    price_small: 6.19,
    price_large: 8.79,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 225,
    category_id: 2,
    name: 'Habaa Chicken Wrap',
    ingredients: 'Marinated chicken, lettuce, spicy mayo',
    price_small: 6.29,
    price_large: 8.89,
    image_url: '/images/chicken_habaa.jpg'
  },
  {
    id: 226,
    category_id: 2,
    name: 'Tawouk Sandwich',
    ingredients: 'Chicken tawouk, garlic sauce, fries inside',
    price_small: 6.59,
    price_large: 9.09,
    image_url: '/images/tawouk_fahem.jpg'
  },
  {
    id: 227,
    category_id: 2,
    name: 'Mixed Shawarma Sandwich',
    ingredients: 'Chicken and beef shawarma, pickles, tahini',
    price_small: 6.99,
    price_large: 9.69,
    image_url: '/images/shawarma_mshakal.jpg'
  },
  {
    id: 228,
    category_id: 2,
    name: 'Chicken Markouk Sandwich',
    ingredients: 'Chicken shawarma, markouk bread, garlic sauce',
    price_small: 6.39,
    price_large: 8.99,
    image_url: '/images/side_chicken_1.jpg'
  },
  {
    id: 229,
    category_id: 2,
    name: 'Chicken Saj Sandwich',
    ingredients: 'Saj chicken, tomatoes, pickles, sauce',
    price_small: 6.29,
    price_large: 8.89,
    image_url: '/images/side_chicken_2.jpg'
  },
  {
    id: 230,
    category_id: 2,
    name: 'Chicken Tawouk Saj',
    ingredients: 'Tawouk strips, lettuce, garlic paste',
    price_small: 6.49,
    price_large: 9.19,
    image_url: '/images/side_chicken_tawouk.jpg'
  },
  {
    id: 231,
    category_id: 2,
    name: 'Beef Falet Sandwich',
    ingredients: 'Beef strips, onion, parsley, tahini',
    price_small: 6.89,
    price_large: 9.59,
    image_url: '/images/side_shawarma_beef_falet.jpg'
  },
  {
    id: 232,
    category_id: 2,
    name: 'Beef Markouk Sandwich',
    ingredients: 'Beef shawarma, markouk bread, tahini sauce',
    price_small: 6.99,
    price_large: 9.79,
    image_url: '/images/side_shawarma_beef_markouk.jpg'
  },
  {
    id: 233,
    category_id: 2,
    name: 'Chicken Turkish Sandwich',
    ingredients: 'Turkish chicken shawarma, pickles, fries',
    price_small: 6.59,
    price_large: 9.29,
    image_url: '/images/shawarma_chicken_turkish.jpg'
  },
  {
    id: 234,
    category_id: 2,
    name: 'Beef Turkish Sandwich',
    ingredients: 'Turkish beef shawarma, onions, tahini',
    price_small: 6.99,
    price_large: 9.89,
    image_url: '/images/shawarma_beef_turkish.jpg'
  },
  {
    id: 235,
    category_id: 2,
    name: 'Classic Shawarma Roll',
    ingredients: 'Chicken shawarma, garlic, pickles',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/shawarma-1.jpeg'
  },
  {
    id: 236,
    category_id: 2,
    name: 'Spicy Shawarma Roll',
    ingredients: 'Spicy chicken shawarma, hot sauce, fries',
    price_small: 6.19,
    price_large: 8.79,
    image_url: '/images/shawarma-2.jpeg'
  },
  {
    id: 237,
    category_id: 2,
    name: 'Garlic Shawarma Roll',
    ingredients: 'Chicken shawarma, extra garlic, pickles',
    price_small: 6.09,
    price_large: 8.69,
    image_url: '/images/shawarma-3.jpeg'
  },
  {
    id: 239,
    category_id: 2,
    name: 'Chicken Melt Sandwich',
    ingredients: 'Chicken strips, melted cheese, mayo',
    price_small: 6.69,
    price_large: 9.39,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 240,
    category_id: 2,
    name: 'Double Chicken Sandwich',
    ingredients: 'Double chicken, lettuce, pickles, sauce',
    price_small: 7.19,
    price_large: 9.99,
    image_url: '/images/chicken_habaa.jpg'
  },


  
  {
    id: 200,
    category_id: 5,
    name: 'Chicken Nuggets',
    ingredients: 'Crispy chicken nuggets, ketchup',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/side_nuggets_kids.jpg'
  },
  

  
  {
    id: 43,
    category_id: 5,
    name: 'Mozzarella Rolls',
    ingredients: 'Mozzarella sticks, crispy coating',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },


  {
    id: 46,
    category_id: 6,
    name: 'Charcoal Grilled Whole Chicken Meal',
    ingredients: 'Grilled chicken bites, garlic dip',
    price_small: 4.49,
    price_large: 6.29,
    image_url: '/images/side_chicken_1.jpg'
  },
  {
    id: 47,
    category_id: 6,
    name: 'Whole Chicken Meal',
    ingredients: 'Chicken strips, fries, sauces',
    price_small: 4.99,
    price_large: 6.79,
    image_url: '/images/side_chicken_2.jpg'
  },
  {
    id: 48,
    category_id: 1,
    name: 'Chicken Tawouk Meal',
    ingredients: 'Tawouk cubes, garlic cream',
    price_small: 4.79,
    price_large: 6.59,
    image_url: '/images/side_chicken_tawouk.jpg'
  },
  {
    id: 49,
    category_id: 1,
    name: 'Beef Falet Meal',
    ingredients: 'Beef falet slices, tahini dip',
    price_small: 5.19,
    price_large: 6.99,
    image_url: '/images/side_shawarma_beef_falet.jpg'
  },
  {
    id: 50,
    category_id: 1,
    name: 'Beef Markouk Meal',
    ingredients: 'Beef markouk pieces, house dip',
    price_small: 5.29,
    price_large: 7.09,
    image_url: '/images/side_shawarma_beef_markouk.jpg'
  },
 
  {
    id: 256,
    category_id: 2,
    name: 'Charcoal Grilled Tawouk',
    ingredients: 'Mini tawouk skewers, garlic dip',
    price_small: 4.59,
    price_large: 6.39,
    image_url: '/images/tawouk_fahem.jpg'
  },
  {
    id: 57,
    category_id: 1,
    name: 'Shawarma Mix Meal',
    ingredients: 'Chicken and beef shawarma bites',
    price_small: 5.49,
    price_large: 7.39,
    image_url: '/images/shawarma_mshakal.jpg'
  },
  {
    id: 258,
    category_id: 2,
    name: 'Charcoal Grilled Chicken',
    ingredients: 'Fahem chicken strips, dip',
    price_small: 4.69,
    price_large: 6.49,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 259,
    category_id: 2,
    name: 'Habaa Chicken',
    ingredients: 'Habaa chicken bites, spicy sauce',
    price_small: 4.69,
    price_large: 6.49,
    image_url: '/images/chicken_habaa.jpg'
  },


  // delete id 60

  {
    id: 71,
    category_id: 1,
    name: 'Winga BBQ',
    ingredients: '8 wings Pcs dipped in BBQ Sauce',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/side_wings_bbq.jpg'
  },
  {
    id: 72,
    category_id: 1,
    name: 'Wings Dynamite',
    ingredients: '8 Wings Pcs Dipped in Dynamite Sauce',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/side_wings_dynamite.jpg'
  },

  */
 

];


const cartItems = [];
let nextCartId = 1;
const loadAdminOrders = () => {
  try {
    if (!fs.existsSync(ADMIN_ORDERS_FILE)) {
      return [];
    }

    const raw = fs.readFileSync(ADMIN_ORDERS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to load admin orders from file:', error);
    return [];
  }
};

const persistAdminOrders = () => {
  try {
    fs.writeFileSync(ADMIN_ORDERS_FILE, JSON.stringify(adminOrders, null, 2), 'utf8');
  } catch (error) {
    console.error('Failed to persist admin orders to file:', error);
  }
};

const adminOrders = loadAdminOrders();

const DRINK_CATEGORIES = new Set(['Drink']);
const DRINK_IMAGE_PATHS = [
  '/images/drink_water.jpg',
  '/images/drink_juice.jpg',
  '/images/drink_kinza.jpeg',
  '/images/drink_laban.jpg',
  '/images/drink_lipton.jpg',
  '/images/drink_maccaw.jpg',
  '/images/drink_soft.jpg'
];

const getCategoryById = (id) => categories.find((category) => category.id === id) || null;

const withCategoryName = (item) => ({
  ...item,
  category_name: getCategoryById(item.category_id)?.name || ''
});

const withDrinkImage = (item) => {
  if (!DRINK_CATEGORIES.has(item.category_name)) {
    return item;
  }

  const fallbackIndex = (item.id - 1) % DRINK_IMAGE_PATHS.length;
  return {
    ...item,
    image_url: item.image_url || DRINK_IMAGE_PATHS[fallbackIndex]
  };
};

const getMenuItems = () => menuItems.map(withCategoryName).map(withDrinkImage);

const getMenuItemById = (id) => getMenuItems().find((item) => item.id === Number(id)) || null;

const getCartItemsDetailed = () =>
  cartItems
    .map((item) => {
      const menuItem = getMenuItemById(item.menu_item_id);
      if (!menuItem) {
        return null;
      }

      return {
        ...item,
        name: menuItem.name,
        size_label:
          item.size === 'small'
            ? menuItem.size_small_label || item.size
            : item.size === 'medium'
              ? menuItem.size_medium_label || item.size
              : item.size === 'large'
                ? menuItem.size_large_label || item.size
                : item.size
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.id - a.id);

const getCartCount = () => cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

const addToCart = (menuItemId, size) => {
  const menuItem = getMenuItemById(menuItemId);
  if (!menuItem) {
    return null;
  }

  let normalizedSize = 'small';
  if (size === 'large') {
    normalizedSize = 'large';
  } else if (size === 'medium' && menuItem.price_medium != null) {
    normalizedSize = 'medium';
  }

  let unitPrice = Number(menuItem.price_small);
  if (normalizedSize === 'large') {
    unitPrice = Number(menuItem.price_large);
  } else if (normalizedSize === 'medium') {
    unitPrice = Number(menuItem.price_medium);
  }

  const existing = cartItems.find(
    (item) => item.menu_item_id === Number(menuItemId) && item.size === normalizedSize
  );

  if (existing) {
    existing.quantity += 1;
    return existing;
  }

  const entry = {
    id: nextCartId++,
    menu_item_id: Number(menuItemId),
    size: normalizedSize,
    quantity: 1,
    unit_price: unitPrice
  };
  cartItems.push(entry);
  return entry;
};

const increaseCartItem = (id) => {
  const item = cartItems.find((entry) => entry.id === Number(id));
  if (item) {
    item.quantity += 1;
  }
};

const decreaseCartItem = (id) => {
  const index = cartItems.findIndex((entry) => entry.id === Number(id));
  if (index < 0) {
    return;
  }

  if (cartItems[index].quantity <= 1) {
    cartItems.splice(index, 1);
    return;
  }

  cartItems[index].quantity -= 1;
};

const deleteCartItem = (id) => {
  const index = cartItems.findIndex((entry) => entry.id === Number(id));
  if (index >= 0) {
    cartItems.splice(index, 1);
  }
};

const clearCart = () => {
  cartItems.length = 0;
};

const addAdminOrder = ({ orderNumber, date, total }) => {
  adminOrders.unshift({
    orderNumber: String(orderNumber),
    date: String(date),
    total: Number(total || 0)
  });
  persistAdminOrders();
};

const getAdminOrders = () => adminOrders.slice();

const clearAdminOrders = () => {
  adminOrders.length = 0;
  persistAdminOrders();
};

module.exports = {
  categories,
  getMenuItems,
  getMenuItemById,
  getCartItemsDetailed,
  getCartCount,
  addToCart,
  increaseCartItem,
  decreaseCartItem,
  deleteCartItem,
  clearCart,
  addAdminOrder,
  getAdminOrders,
  clearAdminOrders
};
