import React from "react";
import ProductCard from "./ProductCard";
const Products = ()=>{
const products = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 20.99,
      image: 'tshirt.jpg',
    },
    {
      id: 2,
      name: 'Jeans',
      price: 49.99,
      image: 'jeans.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Products;
