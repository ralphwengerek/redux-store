import React from "react";
import Product from "../Product/Product";
import styles from "./ProductListing.module.scss";

const ProductListing = ({ products = [], addToBasket }) => {
  return (
    <div className={styles.productListing}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Products</h1>
          </div>
          <div className={styles.productContainer}>
            {products.map(product => (
              <Product
                key={product.id}
                product={product}
                addToBasket={addToBasket}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
