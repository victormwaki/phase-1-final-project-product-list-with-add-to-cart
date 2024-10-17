// Fetch products from a JSON file and render them in the gallery
fetch('data.json')
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    const gallery = document.getElementById('gallery');
    const cartItems = []; // Array to store items added to cart
    let cartCount = 0;    // Variable to track number of items in cart
    let totalPrice = 0;   // Variable to track total price of items in the cart

    // Loop through the fetched data and create cards for each product
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Create image element
      const img = document.createElement('img');
      img.src = product.image.desktop;
      img.alt = product.name;
      
      // Create button to add to cart
      const button = document.createElement('button');
      button.classList.add('btn');
      button.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to cart`;
      
      // When the button is clicked, add the product to the cart
      button.addEventListener('click', () => {
        addToCart(product);
      });
      
      // Create article for product details
      const article = document.createElement('article');
      article.classList.add('item');
      article.innerHTML = `
        <p class="food">${product.category}</p>
        <strong>${product.name}</strong>
        <p class="price">$${product.price.toFixed(2)}</p>
      `;
      
      // Append elements to the card
      card.appendChild(img);
      card.appendChild(button);
      card.appendChild(article);
      
      // Append card to the gallery
      gallery.appendChild(card);
    });

    // Function to add an item to the cart
    function addToCart(product) {
      cartItems.push(product); // Add product to the cart array
      cartCount++; // Increase the count of items in the cart
      totalPrice += product.price; // Add the product price to the total
      updateCartDisplay(); // Update the cart UI
    }

    // Function to update the cart display
    function updateCartDisplay() {
      const cartItemsDiv = document.getElementById('cart-items');
      const cartCountSpan = document.getElementById('cart-count');
      const cartTotalDiv = document.getElementById('cart-total');

      // Clear previous cart display
      cartItemsDiv.innerHTML = '';

      // Update the cart count
      cartCountSpan.textContent = `(${cartCount})`;

      // Loop through cart items and display them
      cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Display product name and price
        cartItemDiv.innerHTML = `
          <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;

        // Add the cart item to the cart-items div
        cartItemsDiv.appendChild(cartItemDiv);
      });

      // Display the total price of items in the cart
      cartTotalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;

      // If cart is empty, show a message
      if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your added items will appear here</p>';
        cartTotalDiv.textContent = 'Total: $0.00';
      }
    }
  })
  .catch(error => console.error('Error fetching products:', error));
