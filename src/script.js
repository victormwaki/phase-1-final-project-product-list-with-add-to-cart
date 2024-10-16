// function showsidebar(){
//     const sidebar=document.querySelector('.sidebar')
//     sidebar.style.display='flex'
//   }
//   function hidesidebar(){
//     const sidebar=document.querySelector('.sidebar')
//     sidebar.style.display='none'
//   }

// // fetching jason file
// const dataUrl = 'http://localhost:3000';

// // Function to fetch products and display them
// function fetchProducts() {
//   fetch(dataUrl)
//     .then(function(response) {
//       // Convert response to JSON
//       return response.json();
//     })
//     .then(function(products) {
//       // Once we have the products, display them
//       const gallery = document.getElementById('gallery');
      
//       products.forEach(function(product) {
//         // Create a new div for each product card
//         const card = document.createElement('div');
//         card.classList.add('card');
        
//         // Add the content to the card
//         card.innerHTML = `
//           <img src="${product.image}" alt="${product.name}">
//           <button class="btn"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
//           <article class="item">
//             <p class="food">${product.category}</p>
//             <strong>${product.name}</strong>
//             <p class="price">${product.price}</p>
//           </article>
//         `;
        
//         // Append the card to the gallery
//         gallery.appendChild(card);
//       });
//     })
//     .catch(function(error) {
//       // Handle errors
//       console.error('Error fetching products:', error);
//     });
// }

// // Call the function when the DOM is loaded
// document.addEventListener('DOMContentLoaded', fetchProducts);

// Fetch products from a JSON file and render them in the gallery
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    
    // Loop through the fetched data and create cards for each product
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Create image element
      const img = document.createElement('img');
      img.src = product.image.desktop;
      img.alt = product.name;
      
      // Create button
      const button = document.createElement('button');
      button.classList.add('btn');
      button.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Add to cart`;
      
      // Create article
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
  })
  .catch(error => console.error('Error fetching products:', error));