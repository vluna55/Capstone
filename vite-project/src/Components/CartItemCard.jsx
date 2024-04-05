import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({ cartItem, quantity }) => {
  return (
    <div className="cart-item-card">
      <div className="cart-image-container">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-details">
        <h3>{cartItem?.title}</h3>
        <p>Price: ${cartItem?.price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="quanity-buttons">
        <button className="quantity-buttons">+</button>
        <button className="quantity-buttons">-</button>
      </div>
    </div>
  );
};

export default CartItemCard;
