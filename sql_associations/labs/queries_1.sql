-- Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.

SELECT 
  line_items.order_id,
  ROUND(AVG(line_items.quantity * line_items.price)) AS total_avg_price
  FROM orders
  INNER JOIN line_items ON orders.id = line_items.order_id
  WHERE orders.completed_on > '2016-01-01' AND orders.completed_on < '2016-01-31'
  GROUP BY line_items.order_id
  ORDER BY line_items.order_id;


-- Select product names, product prices and the lowest price they were sold at during the month of January 2016;

SELECT
  products.name,
  products.price,
  MIN(line_items.price) AS lowest_price
  FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON orders.id = line_items.order_id
  WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on <= '2016-01-31'
  GROUP BY products.id;