The to-&-from location can be checked in the API controller
if the to & from location is same then respond an error.

## Database Tables/Collections:

• Product (product_id)
• Location (location_id)
• ProductMovement (movement_id, timestamp, from_location, to_location, product_id, qty)

## Notes

• **_Primary keys can be text / varchar_**
• The to & from location
• both of from_location and to_location can be filled.
◘ \_If you want to move things into a location*
==> from*location will be blank
solution: create a different API endpoint wherein the from_location is the one that will be constant(default or previously filled) & to_location will change
◘ \_if you want to move things out\*
==> to_location will be blank
solution: create a different API endpoint wherein the to_location is the one that will be constant(default or previously filled) & from_location will change

{
"movement_id":"mov_id_1",
"product":"604d055a2fae5b2b58cbc25f",
"from_location":{
"\_id" : "604d04472fae5b2b58cbc25b",
"location_id":"loc_id_2",
"name":"New-York"
},
"to_location":{
"\_id":"604d043b2fae5b2b58cbc25a",
"location_id":"loc_id_1",
"name":"London"
}

}
