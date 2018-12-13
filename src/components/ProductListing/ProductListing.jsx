import React from "react";
import Product from "../Product/Product";
import styles from "./ProductListing.module.scss";

const ProductListing = ({ products = [] }) => {
  return (
    <div className={styles.productListing}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Products</h1>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
