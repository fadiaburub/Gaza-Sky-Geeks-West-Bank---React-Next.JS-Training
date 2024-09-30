// App.tsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import Button from './Button'; // Importing the Button component
import './App.css'

// Define the Product type
interface Product {
  name: string;
  category: string;
  price: number;
}

const App: React.FC = () => {
  // Initial array of products
  const products: Product[] = [
    { name: "iPhone", category: "Electronics", price: 999 },
    { name: "T-Shirt", category: "Clothing", price: 19 },
    { name: "Laptop", category: "Electronics", price: 1299 },
    { name: "Shoes", category: "Clothing", price: 79 },
  ];

  // State for the current filter
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filtered products based on the active filter
  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(product => product.category === activeFilter);

  // Handler for changing the filter
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="filter-section">
        <Button color="primary" onClick={() => handleFilterChange("All")}>All</Button>
        <Button color="secondary" onClick={() => handleFilterChange("Electronics")}>Electronics</Button>
        <Button color="success" onClick={() => handleFilterChange("Clothing")}>Clothing</Button>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;