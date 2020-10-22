-- Select all the products that have orders and their orders
SELECT products.name, products.price, orders.id, line_items.price AS product_total, line_items.quantity 
  FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON orders.id = line_items.order_id
  ORDER BY products.name DESC;

-- Select all the products and their orders
SELECT products.name, orders.id
  FROM products
  LEFT JOIN line_items ON products.id = line_items.product_id
  LEFT JOIN orders ON orders.id = line_items.order_id
  ORDER BY products.name DESC;