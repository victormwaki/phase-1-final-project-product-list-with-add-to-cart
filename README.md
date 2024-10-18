# phase-1-final-project-product-list-with-add-to-cart

Dessert Ordering Web Application

This project is a dessert ordering web application where users can browse a list of dessert products, add them to their cart, and proceed to confirm their order. The application is built using HTML, CSS, and JavaScript, with product data fetched from a data.json file.

Features

1. Product Gallery Display
Products are dynamically fetched from a local data.json file using JavaScript's fetch() function.
Each product is rendered in a card format displaying an image, category, name, and price.
Users can click on the "Add to Cart" button to add products to their shopping cart.
2. Shopping Cart Functionality
The shopping cart displays added items and dynamically updates when items are added or removed.
The total number of items in the cart is displayed next to the cart icon.
The total price of the items in the cart is also calculated and updated in real-time.
3. Removing Items from Cart
Users can remove items from the cart by clicking on the "X" button next to each item.
The total price and cart count are updated accordingly when items are removed.
4. Order Confirmation Modal
When the user clicks on the "Confirm Order" button, a modal popup appears displaying a summary of the order, including the items added and the total price.
The popup has a "Order Confirmed" message, indicating the completion of the order.
After confirming the order, the cart is cleared and reset for a new order.
5. Responsive Cart Height
The cart adjusts its height based on the number of items added. When there are no items, the cart has a fixed minimum height. As more items are added, the cart height dynamically increases.

Technologies Used
- HTML: To structure the content and layout of the web page.
- CSS: For styling the product gallery, shopping cart, and modal popup. Includes responsiveness to handle different screen sizes.
- JavaScript: To handle dynamic behavior like fetching product data, adding/removing items to/from the cart, updating the cart display, calculating totals, and showing the order confirmation popup.

JavaScript Highlights:
- Fetching Product Data: Product data is retrieved from a local data.json file and rendered on the page.
- Cart Management: JavaScript arrays and functions manage the cart items, updating the DOM in real-time to reflect the current cart state.
- Event Listeners: Used to handle clicks on the "Add to Cart", "Remove Item", and "Confirm Order" buttons.
- Order Confirmation Modal: JavaScript dynamically generates and displays a modal with the order summary.

How to Run the Project
- Clone the repository.
- Ensure you have the data.json file containing the product data.
- Open the index.html file in a browser.
- Browse through the available desserts, add items to the cart, and proceed to confirm your order.
