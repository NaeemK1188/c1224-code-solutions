select "firstName",
       "lastName"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "title" = 'Jersey Sassy'; -- to use where we need to join the films with connection table castMembers
