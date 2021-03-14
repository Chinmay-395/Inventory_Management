The to-&-from location can be checked in the API controller
if the to & from location is same then respond an error.

## Database Tables/Collections:

• Product (product_id)
• Location (location_id)
• ProductMovement (movement_id, timestamp, from_location, to_location, product_id, qty)

## Notes

PRODUCT TABLE

|----\_ID----||----name----||----details----||----company----|

LOCATION TABLE

|----\_ID----||----name----|

MOVEMENT TABLE

|----\_ID----||----product_id----||------\_to_location_id----|
|----\_from_location_id---||--quantity---|
