const apiUrl = "https://jsonplaceholder.typicode.com/users";
const productList = document.getElementById("productList");

async function fetchProducts(sortBy) {
  try {
    const response = await fetch(`${apiUrl}?_sort=${sortBy}&_order=asc`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = "<li>Error loading products. Please try again later.</li>";
  }
}

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach(product => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong><br>
      <span>${product.email}</span>
    `;
    productList.appendChild(li);
  });
}

function loadProducts() {
  const sortBy = document.getElementById("sort").value;
  fetchProducts(sortBy);
}

window.onload = () => {
  loadProducts();
};
