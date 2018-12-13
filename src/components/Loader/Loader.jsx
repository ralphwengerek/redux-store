import React from "react";
import styles from "./Loader.module.scss";

const Loader = isLoading => {
  return (
    <div className={styles.loader}>
      <div className={styles.ldsripple}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
