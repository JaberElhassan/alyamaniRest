# AL YAMANI RESTAURANT Website

Node.js + Express + Handlebars (`.hbs`) + MySQL website with:
- Navbar pages: Home, Contact, Menu, About, Services, Gallery, Others
- Menu grouped by category cards (Salad, Sandwiches, Juice, Drink, Sides, Others)
- Item detail page with ingredients, size (small/large), image, and Add to Cart button
- Cart page with name, price, quantity, subtotal, total, and `+` / `-` quantity actions

## 1) Setup

1. Copy `.env.example` to `.env` and fill database credentials.
2. Create DB schema and seed data:

```sql
SOURCE database/schema.sql;
```

## 2) Install & run

```bash
npm install
npm run dev
```

Server: `http://localhost:3000`

## 3) Notes

- Cart is stored in `cart_items` table.
- `+` and `-` buttons update quantity directly in MySQL.
