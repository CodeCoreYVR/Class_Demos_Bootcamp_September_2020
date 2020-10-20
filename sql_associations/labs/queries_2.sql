-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.

-- Formula for getting total stock: the remaining stock + all of the stock ever sold

SELECT 
  products.id, 
  products.name, 
  (SUM(line_items.quantity) + products.remaining_quantity) AS total_quantity
  FROM line_items
  INNER JOIN products ON line_items.product_id = products.id
  INNER JOIN orders ON line_items.order_id = orders.id
  WHERE orders.completed_on IS NOT NULL
  GROUP BY products.id
  ORDER BY total_quantity DESC;

-- Find the average order total price for all the orders in the system

-- average total price of all orders ever made
-- Only 1 value should be returned

SELECT AVG(total_price) AS average_order_total
  FROM (
    SELECT order_id, SUM(price * quantity) AS total_price
    FROM line_items
    GROUP BY order_id
  ) AS average;