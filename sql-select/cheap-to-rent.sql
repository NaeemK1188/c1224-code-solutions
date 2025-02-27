-- it has to be in order
-- after from -> where, order by, and finally limit
select "filmId", "title", "rentalRate"
from "films"
where "rentalRate" < 1
order by "rentalRate"
limit 50;
