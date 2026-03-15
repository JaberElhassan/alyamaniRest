const express = require('express');
const { categories, getMenuItems, getMenuItemById } = require('../data/store');

const router = express.Router();
router.get('/menu', (req, res, next) => {
  try {
    const items = getMenuItems();
    const beverageCategoryNames = new Set(['Juice', 'Drink']);
    let beverageSectionAdded = false;

    const grouped = categories.map((category) => {
      if (beverageCategoryNames.has(category.name)) {
        if (beverageSectionAdded) {
          return null;
        }

        beverageSectionAdded = true;
        return {
          id: 'juice-drink',
          name: 'Juice & Drink',
          items: items.filter((item) => beverageCategoryNames.has(item.category_name))
        };
      }

      return {
        id: category.id,
        name: category.name,
        items: items.filter((item) => item.category_name === category.name)
      };
    }).filter(Boolean);
    const priorityOrder = ['Sides', 'Sandwiches'];
    const prioritizedSections = priorityOrder
      .map((name) => grouped.find((category) => category.name === name))
      .filter(Boolean);
    const orderedGrouped = [
      ...prioritizedSections,
      ...grouped.filter((category) => !priorityOrder.includes(category.name))
    ];

    res.render('menu', {
      title: 'Menu',
      bodyClass: 'menu-page',
      categories: orderedGrouped
    });
  } catch (error) {
    next(error);
  }
});

router.get('/menu/item/:id', async (req, res, next) => {
  try {
    const item = getMenuItemById(req.params.id);
    if (!item) {
      return res.status(404).send('Menu item not found.');
    }

    res.render('menu-detail', {
      title: item.name,
      item
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
