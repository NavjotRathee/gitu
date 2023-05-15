import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
