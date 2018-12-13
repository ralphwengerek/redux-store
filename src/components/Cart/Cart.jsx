import React from "react";
import PropTypes from "prop-types";
import styles from "./Cart.module.scss";
import Product from "../Product/Product";

const Cart = ({ items = [], removeFromBasket }) => {
  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      {items.map(cartItem => (
        <Product product={cartItem} removeFromBasket={removeFromBasket} />
      ))}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
