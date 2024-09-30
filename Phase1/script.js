// script.js

// Define an array of product objects
const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'Smartphone', category: 'Electronics', price: 800 },
    { name: 'T-Shirt', category: 'Clothing', price: 20 },
    { name: 'Jeans', category: 'Clothing', price: 50 },
    { name: 'Novel', category: 'Books', price: 15 },
    { name: 'Textbook', category: 'Books', price: 60 }
];

// Display all products on page load
window.onload = function() {
    displayProducts(products);
}

// Function to display products
function displayProducts(filteredProducts) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';  // Clear previous products

    // Loop through filteredProducts and create product cards
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">$${product.price}</div>
        `;

        productContainer.appendChild(productCard);
    });
}

// Function to filter products by category
function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}
