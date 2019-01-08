import React from "react";
import styles from "./Cart.module.scss";
import Product from "../Product/Product";

const Cart = ({ items = [], removeFromBasket }) => {
  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      {items.map((cartItem, index) => (
        <Product
          key={index}
          product={cartItem}
          removeFromBasket={removeFromBasket}
        />
      ))}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
