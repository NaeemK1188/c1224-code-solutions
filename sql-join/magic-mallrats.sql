select "firstName",
       "lastName"
from "customers"
join "rentals" using ("customerId") -- how customer are connected with rentals ? through customer ID
join "inventory" using ("inventoryId") -- how rentals are connected with inventory ? through inventory ID
join "films" using ("filmId") -- how inventory is connected with films ? through filmId
-- now we can use any column from the film
where "title" = 'Magic Mallrats';
