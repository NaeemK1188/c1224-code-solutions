-- selecting all columns from both tables
-- select * from "customers"
-- join "payments" using ("customerId");

select "amount" as "payment",
       "firstName",
       "lastName"
from "payments" join "customers"
using ("customerId")
order by "payment" desc
limit 10;
