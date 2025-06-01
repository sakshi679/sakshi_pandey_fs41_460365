// dashboard.js
const productsDiv = document.getElementById('products');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user is logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
  alert('Please log in first.');
  window.location.href = 'login.html';
}

// Logout function
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
});

// Fetch products from FakeStore API and display
async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    productsDiv.innerHTML = ''; // Clear existing

    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';

      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h4>${product.title}</h4>
        <p>Price: $${product.price}</p>
      `;

      productsDiv.appendChild(div);
    });
  } catch (error) {
    productsDiv.innerHTML = 'Failed to load products.';
  }
}

fetchProducts();
