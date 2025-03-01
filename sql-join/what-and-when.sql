select "releaseYear",
       "name" as "genre",
       "title"
from "films" -- because we want releaseYear and title, we add films table
join "filmGenre" using ("filmId") -- because we don't have connection between genre abd films we use filmGenre table
-- so the filmGenre is the connection between genre and films so it has to be in the middle
join "genres" using ("genreId") -- finally because we want name, we use genres table
where "title" = 'Boogie Amelie';
