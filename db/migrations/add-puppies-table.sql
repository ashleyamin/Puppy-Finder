\c puppy_dev

DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  photourl VARCHAR(255),
  sex VARCHAR(255),
  description VARCHAR(255),
  altered VARCHAR(255),
  housetrained VARCHAR(255),
  shelternumber VARCHAR(255),
  op_ID INTEGER,
  notes VARCHAR(255)
);
