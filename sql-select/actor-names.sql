-- we can embed the actors table directly from pagila directly
-- into our newly created files because of the psql command
-- -d pagila
-- select * from actors; gets all the fields in the actors table from pagila
select "actorId", "firstName", "lastName"
from actors;
