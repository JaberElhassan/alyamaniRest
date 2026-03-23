const fs = require('fs');
const path = require('path');

const ADMIN_ORDERS_FILE = path.join(__dirname, 'admin-orders.json');

const categories = [
  { id: 1, name: 'Sides' },
  { id: 2, name: 'Sandwiches' },
  { id: 3, name: 'Salad' },
  { id: 4, name: 'Beverage' },
  { id: 5, name: 'Others' }
];

const menuItems = [
  {
    id: 1,
    category_id: 1,
    name: 'French Fries',
    ingredients: 'Potatoes, salt, oil',
    price_small: 4.00,
    price_large: 4.00,
    image_url: '/images/frenchFries.jpg'
  },
  {
    id: 2,
    category_id: 1,
    name: 'Onion Rings',
    ingredients: 'Onions, flour, batter, oil',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/onion_rings.jpg'
  },
  {
    id: 3,
    category_id: 1,
    name: 'Curly Fries',
    ingredients: 'Seasoned curly potatoes, salt',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/potatoes_curly.jpg'
  },
  {
    id: 4,
    category_id: 1,
    name: 'Chicken Nuggets',
    ingredients: 'Crispy chicken nuggets, ketchup',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/side_nuggets_kids.jpg'
  },
  {
    id: 5,
    category_id: 1,
    name: 'Shrimps Dynamite',
    ingredients: '8 Jumbo Crispy Pcs served with Dynamite Sauce',
    price_small: 8.00,
    price_large: 8.00,
    image_url: '/images/shrimps_dynamite.jpg'
  },
// deleted  id: 41
  {
    id: 42,
    category_id: 1,
    name: 'Wedges Fries',
    ingredients: 'Potato wedges, herbs, salt',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/potatoes_wedges.jpg'
  },
  {
    id: 43,
    category_id: 1,
    name: 'Mozzarella Rolls',
    ingredients: 'Mozzarella sticks, crispy coating',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  // deleted id 44

  // deleted id 45

  {
    id: 46,
    category_id: 1,
    name: 'Charcoal Grilled Whole Chicken Meal',
    ingredients: 'Grilled chicken bites, garlic dip',
    price_small: 4.49,
    price_large: 6.29,
    image_url: '/images/side_chicken_1.jpg'
  },
  {
    id: 47,
    category_id: 1,
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
 // deleted id 51
  
  // deleted id 52

  // deleted id 53
  
   // deleted id 54
  
   // deleted id 55
 
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


  // Sandwishes Menu
  {
    id: 203,
    category_id: 2,
    name: 'Club Sandwich',
    ingredients: 'Chicken, lettuce, tomato, mayo, bread',
    price_small: 4.99,
    price_large: 7.49,
    image_url: '/images/shawarma-1.jpeg'
  },
  {
    id: 204,
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
    id: 221,
    category_id: 2,
    name: 'Mexican Chicken Sandwich',
    ingredients: 'Grilled chicken, jalapeno, lettuce, chipotle mayo',
    price_small: 6.49,
    price_large: 8.99,
    image_url: '/images/burger_mexican_spicy.jpg'
  },
  {
    id: 222,
    category_id: 2,
    name: 'Yamani Burger Sandwich',
    ingredients: 'Beef patty, cheese, onion, house sauce',
    price_small: 6.99,
    price_large: 9.49,
    image_url: '/images/burger_alyamani.jpg'
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
    id: 238,
    category_id: 2,
    name: 'Alyamani Special Sandwich',
    ingredients: 'Mixed meat, cheese, signature sauce',
    price_small: 7.49,
    price_large: 10.29,
    image_url: '/images/burger_alyamani.jpg'
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



  // Salad Menu
  {
    id: 301,
    category_id: 3,
    name: 'Greek Salad',
    ingredients: 'Lettuce, tomato, cucumber, olives, feta',
    price_small: 4.00,
    price_large: 4.00,
    image_url: '/images/salad_greek_caesar.jpg'
  },
  {
    id: 302,
    category_id: 3,
    name: 'Chicken Pasta Salad',
    ingredients: 'Chicken, romaine, parmesan, croutons, Caesar dressing',
    price_small: 6.99,
    price_large: 9.99,
    image_url: '/images/salad_chicken_pasta.jpg'
  },
  {
    id: 313,
    category_id: 3,
    name: 'Shrimps & Crab Salad',
    ingredients: 'Crab Dressing , Lettuce , Carrots , Cherry Tomatoes & Crunchy Crotons',
    price_small: 10.00,
    price_large: 10.00,
    image_url: '/images/salad_shrimps_crab.jpg'
  },
  {
    id: 400,
    category_id: 3,
    name: 'Shrimps Salad',
    ingredients: 'Crab Dressing , Lettuce , Carrots , Cherry Tomatoes & Crunchy Crotons',
    price_small: 8.00,
    price_large: 8.00,
    image_url: '/images/salad_shrimps.jpg'
  },
  {
    id: 401,
    category_id: 3,
    name: 'Crab Salad',
    ingredients: 'Crab Dressing , Lettuce , Corn , Cherry Tomatoes, Carrot & Crunchy Crotons',
    price_small: 8.00,
    price_large: 8.00,
    image_url: '/images/salad_crab.jpg'
  },
  {
    id: 402,
    category_id: 3,
    name: 'Fatoush Salad',
    ingredients: 'mixed greens, cucumbers, tomatoes, radishes, and herbs tossed with crispy fried or toasted pita',
    price_small: 6.00,
    price_large: 6.00,
    image_url: '/images/salad_fatoush.jpg'
  },

  {
    id: 73,
    category_id: 1,
    name: 'Wings Honey Mustard',
    ingredients: '8 wings pcs dipped In Honey Mustard Sauce',
    price_small: 7.49,
    price_large: 10.49,
    image_url: '/images/side_wings_honey_mustard.jpg'
  },
  {
    id: 405,
    category_id: 4,
    name: 'Orange Juice',
    ingredients: 'Fresh orange extract, ice',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/drink_juice.jpg'
  },
  {
    id: 406,
    category_id: 4,
    name: 'Mixed Berry Juice',
    ingredients: 'Strawberry, blueberry, raspberry, mint',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/drink_maccaw.jpg'
  },
  {
    id: 407,
    category_id: 4,
    name: 'Cola',
    ingredients: 'Carbonated water, flavor syrup',
    price_small: 1.99,
    price_large: 2.99,
    image_url: '/images/drink_soft.jpg'
  },
  {
    id: 408,
    category_id: 4,
    name: 'Iced Tea',
    ingredients: 'Tea extract, lemon, ice',
    price_small: 2.49,
    price_large: 3.49,
    image_url: '/images/drink_lipton.jpg'
  },
  {
    id: 416,
    category_id: 4,
    name: 'Fresh Laban',
    ingredients: 'Cold laban, mint',
    price_small: 2.49,
    price_large: 3.49,
    image_url: '/images/drink_laban.jpg'
  },
  {
    id: 417,
    category_id: 4,
    name: 'Mineral Water',
    ingredients: 'Chilled bottled water',
    price_small: 0.99,
    price_large: 1.49,
    image_url: '/images/drink_water.jpg'
  },
  {
    id: 511,
    category_id: 5,
    name: 'Chocolate Brownie',
    ingredients: 'Cocoa, flour, butter, sugar',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/home17.jpg'
  },
  {
    id: 512,
    category_id: 5,
    name: 'Mozzarella Sticks',
    ingredients: 'Cheddar cheese, cream, spices',
    price_small: 5.00,
    price_large: 5.00,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  {
    id: 561,
    category_id: 5,
    name: 'Brownie Bites',
    ingredients: 'Chocolate brownie cubes, syrup',
    price_small: 3.29,
    price_large: 4.79,
    image_url: '/images/home11.jpg'
  },
  {
    id: 562,
    category_id: 5,
    name: 'Sweet Cheese Dip',
    ingredients: 'Cream cheese, honey drizzle',
    price_small: 2.99,
    price_large: 4.29,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  {
    id: 563,
    category_id: 5,
    name: 'Mini Pizza Bites',
    ingredients: 'Mini pizza squares, cheese, oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_pepperoni.jpg'
  },
  {
    id: 564,
    category_id: 5,
    name: 'Yamani Pizza Slice',
    ingredients: 'Yamani sauce, cheese, toppings',
    price_small: 4.79,
    price_large: 6.79,
    image_url: '/images/pizza_alyamani.jpg'
  },
  {
    id: 565,
    category_id: 5,
    name: 'Veggie Pizza Slice',
    ingredients: 'Veggies, mozzarella, olive oil',
    price_small: 4.39,
    price_large: 6.29,
    image_url: '/images/home14.jpg'
  },
  {
    id: 566,
    category_id: 5,
    name: 'Pepperoni Pizza Slice',
    ingredients: 'Pepperoni, cheese, pizza sauce',
    price_small: 4.99,
    price_large: 6.99,
    image_url: '/images/home62.jpg'
  },
  {
    id: 567,
    category_id: 5,
    name: 'Sweet Sour Pizza Slice',
    ingredients: 'Sweet sour sauce, chicken, cheese',
    price_small: 4.89,
    price_large: 6.89,
    image_url: '/images/pizza_sweet_sour.jpg'
  },
  {
    id: 568,
    category_id: 5,
    name: 'Mexican Pizza Slice',
    ingredients: 'Mexican chicken, jalapeno, cheese',
    price_small: 4.99,
    price_large: 6.99,
    image_url: '/images/pizza_chicken_mexican.jpg'
  },
  {
    id: 569,
    category_id: 5,
    name: 'Shrimp Special Plate',
    ingredients: 'Shrimps, creamy sauce, herbs',
    price_small: 6.49,
    price_large: 8.99,
    image_url: '/images/shrimps_dynamite.jpg'
  },
  {
    id: 570,
    category_id: 5,
    name: 'Chef Surprise Dish',
    ingredients: 'Daily chef selection with house sauce',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/home12.jpg'
  },
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
        name: menuItem.name
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

  const normalizedSize = size === 'large' ? 'large' : 'small';
  const unitPrice =
    normalizedSize === 'large' ? Number(menuItem.price_large) : Number(menuItem.price_small);

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
