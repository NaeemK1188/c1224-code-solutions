select "countries"."name" as "country",
       count(*) as "number-of-cities"
from "countries" join "cities"
using ("countryId")
group by "countries"."name";
