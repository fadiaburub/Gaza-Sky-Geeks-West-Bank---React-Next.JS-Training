// ProductList.tsx
import React from 'react';

// Define the Product type
interface Product {
  name: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-display-area">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="product-card" key={index}>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available for the selected category.</p>
      )}
    </div>
  );
};

export default ProductList;