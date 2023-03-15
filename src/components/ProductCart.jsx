import React from 'react';

const Cart = ({ product }) => {
  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>

      <span className="category-tag">{product.category}</span>
      <h3 className="title">{product.name}</h3>
      <p className="details">{product.description}</p>
      <div>
        <span className="price">${product.price}</span>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Cart;
