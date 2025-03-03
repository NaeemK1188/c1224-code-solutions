select "firstName" || ' ' || "lastName" as "customer name",
       sum("amount") as "total-amount-of-rentals"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "total-amount-of-rentals" desc;
