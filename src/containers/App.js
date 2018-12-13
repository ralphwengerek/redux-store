import React, { Component } from "react";
import logo from "../logo.svg";
import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import ProductListing from "../components/ProductListing/ProductListing";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor...");
    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.showLoader(true);
    fetch("/mockdata.json")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ products: data });
      })
      .finally(() => {
        this.showLoader(false);
      });
  };

  showLoader = toggle => {
    this.setState({ isLoading: toggle });
  };

  render() {
    const { products } = this.state;

    return (
      <Router>
        <div>
          <header className={styles.AppHeader}>
            <img src={logo} className={styles.AppLogo} alt="logo" />
            <NavLink to="/" className={styles.NavLink}>
              Home
            </NavLink>
            <NavLink to="/cart" className={styles.NavLink}>
              Cart
            </NavLink>
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ProductListing products={products} />}
            />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
