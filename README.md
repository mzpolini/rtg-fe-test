## Rooms To Go Engineering: React/Gatsby Sandboxing

#### How to Run
---
- Run `npm ci`
- Run `gatsby develop`
-  Create a .env file at root that looks like below example
- Navigate to http://localhost:8000 in your browser

#### .env file config
CONTENTFUL_ACCESS_TOKEN="muJu7wiDT7BapDXnltXtYalMWSU84hQbHzH7Sx0fHSY"
CONTENTFUL_SPACE_ID="kb9wgir596y6"

#### Problem Statement
---
Create a simple single page shopping cart web app.

Managing the shopping cart requires adding and removing products to the cart, calculating subtotals, shipping, taxes, and applying discounts.

Specifically we would like to see these elements represented in the cart:
- PRODUCT NAME
- PRODUCT PRICE
- PRODUCT QUANTITY
- SUBTOTAL (does not include TAX or SHIPPING COST)
- TAX (@10%)
- SHIPPING COST ($50 + 2%) - ($5 * TOTAL QUANTITY)
- TOTAL COST

We will NOT evaluate UI interface so much as the behavior and state management.  It should be usable, but it does not need to be pretty.  This is to exercise your ability to use and manage React.  However, you should be prepared to discuss the UI and what style changes could improve the interface.

The interface should allow a user to;
- ADD an item to the shopping cart.
- REMOVE items from the shopping cart.
- UPDATE the quantity of items in the cart.
- SHOW the Subtotal.
- SHOW the Tax amount.
- SHOW the Delivery amount.
- SHOW the Total.


#### SUBMISSION
---
- Clone this repository.  Do NOT fork it.
- Create the Cart as assigned/outlined above.
- Gatsby, React, and Foundation Grid have already been included.
- You can assume the cart will not need to handle more than 10 of each product.
- Add documentation needed to install any packages, run the tests and code to this README or replace this README with one of your own with information on how to install and run code and tests.
- Add your code to a personal github repository, share it with us or make it public, AND let us know (inviting someone to join a github project does not send a notification)


#### Good luck!
