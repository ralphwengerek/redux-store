import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListing from "../components/ProductListing/ProductListing";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";

import Loader from "../components/Loader/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor...");
    this.state = {
      products: [],
      cart: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.showLoader(true);

    setTimeout(() => {
      fetch("/mockdata.json")
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          this.setState({ products: data });
        })
        .finally(() => {
          this.showLoader(false);
        });
    }, 1000);
  };

  showLoader = toggle => {
    this.setState({ isLoading: toggle });
  };

  addToBasket = product => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromBasket = product => {
    this.setState((prevState, props) => {
      return { cart: [...prevState.cart.filter(c => c.id !== product.id)] };
    });
  };

  render() {
    const { products, isLoading, cart } = this.state;
    return (
      <Router>
        <div>
          <Header cartCount={cart.length} />
          <div className="container">
            {isLoading ? <Loader /> : null}
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <ProductListing
                    products={products}
                    addToBasket={this.addToBasket}
                  />
                )}
              />
              <Route exact path="/product/:productId" component={Product} />
              <Route
                exact
                path="/cart"
                render={() => (
                  <Cart items={cart} removeFromBasket={this.removeFromBasket} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
