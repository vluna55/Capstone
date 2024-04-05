import React from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";

const Cart = ({ cart, products, setCart }) => {
  console.log("cart", cart);

  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: </p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <CartItemCard
            key={productItem?.id}
            cartItem={productItem}
            quanity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
