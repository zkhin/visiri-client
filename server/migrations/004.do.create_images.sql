CREATE TABLE images (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  image_url TEXT,
  image_width INTEGER,
  image_height INTEGER,
  experiment_id INTEGER REFERENCES experiments(id) ON DELETE CASCADE NOT NULL
);