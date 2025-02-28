select "line1" as "street address",
       "cities"."name" as "city", -- because we have two names in country and cities we use (.) operator
       "district",
       "countries"."name" as "country name"
from   "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId"); -- because we want to use countries name we join the table countries
