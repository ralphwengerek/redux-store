import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

const Header = ({ cartCount = 0 }) => (
  <header className={`${styles.AppHeader} shadowed`}>
    <img src={logo} className={styles.AppLogo} alt="logo" />
    <NavLink to="/" className={styles.NavLink}>
      <span className="icon-home inverse" />
    </NavLink>
    <NavLink to="/cart" className={styles.NavLink}>
      <span className="icon-cart inverse" /> ({cartCount})
    </NavLink>
  </header>
);

export default Header;
