CREATE TABLE IF NOT EXISTS reviews (
	username text,
	review text,
	rating int,
    item int,
	id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS items (
	name text,
	description text,
	id SERIAL PRIMARY KEY
);
