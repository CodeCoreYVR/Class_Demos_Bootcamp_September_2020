-- Select all the products that have been purchased in the last 24 months.

SELECT
  products.id,
  products.name
  FROM products
  INNER JOIN line_items ON line_items.product_id = products.id
  INNER JOIN orders ON line_items.order_id = orders.id
  WHERE orders.completed_on > '2016-01-01' AND orders.completed_on < '2017-01-31'
  GROUP BY products.id
  ORDER BY products.id;

-- Select the top 10 products in terms of last year's gross sales.

SELECT
  products.name,
  products.id,
  SUM(line_items.price * line_items.quantity) AS gross_sales
  FROM products
  INNER JOIN line_items ON products.id = line_items.product_id
  INNER JOIN orders ON orders.id = line_items.order_id
  WHERE orders.completed_on > '2016-01-01' AND orders.completed_on < '2016-12-31'
  GROUP BY products.id
  ORDER BY gross_sales DESC
  LIMIT 10;

-- Select all the products that weren't purchased during the last 24 months.

-- Grab all products that were not purchased within the year of 2016
SELECT * FROM
  products
  WHERE products.id NOT IN (
    SELECT
      products.id
      FROM products
      INNER JOIN line_items ON line_items.product_id = products.id
      INNER JOIN orders ON line_items.order_id = orders.id
      WHERE orders.completed_on < '2016-01-01' AND orders.completed_on > '2016-12-31'
  )
ORDER BY products.id;