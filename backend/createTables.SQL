DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS items;

CREATE TABLE IF NOT EXISTS items (
	name text,
	description text,
	imagename text,
	id SERIAL PRIMARY KEY 
);

CREATE TABLE IF NOT EXISTS reviews (
	username text,
	review text,
	rating int,
    item int REFERENCES items(id),
	id SERIAL PRIMARY KEY
);