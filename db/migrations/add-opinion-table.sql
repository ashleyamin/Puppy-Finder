\c puppy_dev

DROP TABLE IF EXISTS opinions;

CREATE TABLE IF NOT EXISTS opinons (
  id SERIAL PRIMARY KEY,
  opinion VARCHAR
)
