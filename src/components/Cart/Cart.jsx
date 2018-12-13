import React from "react";
import PropTypes from "prop-types";
import styles from "./Cart.module.scss";

const Cart = ({ items = [] }) => {
  return (
    <div className={styles.cart}>
      <h1>Your Shopping Cart</h1>
      {items.map(cartItem => (
        <div>{cartItem.id}</div>
      ))}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
