import React from "react";
import styles from "./Product.module.scss";

const Product = ({ addToBasket, product }) => {
  return (
    <div className="card">
      <div className="section">
        <div className="row">
          <div className="col-md-3">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="col-md-7">{product.name}</div>
          <div className="col-md-2">{product.price}</div>
        </div>
      </div>
      <div className="section">
        <div className="row">
          <div className="col-md-12">{product.description}</div>
        </div>
        <div className="row">
          <div className="col-md-offset-4">
            <button className="primary" onClick={() => addToBasket(product)}>
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
