import React, { Component } from 'react';
import './css/main_styles.css';
import './css/responsive.css';
import './App.css';

import TopNav from './modules/header/TopNav';
import MainNav from './modules/header/MainNav';
import HamburgerMenu from './modules/header/HamburgerMenu';
import Footer from './modules/footer/Footer';
import Cart from './modules/cart/cart.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsList from "./modules/products/ProductsList";

import CategoriesList from "./modules/categories/CategoriesList";
import ShippingForm from './modules/shipping/shipping.js';
import Title from './modules/shipping/title.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "",
    };
    this.return = this.return.bind (this);
    this.validCart = this.validCart.bind (this);
  }

  return = () => {
    console.log("return...");
  };

  validCart = () => {
    console.log("valid cart");
  };

  increment = () => {
    console.log("plus +");
  };

  decrement = () => {
    console.log("moins -");
  };

  deleteItem = () => {
    console.log("deleteItem");
  };

  render() {
    return (
      <div className="App">
      	<header class="header">
          <TopNav />
          <MainNav />
        </header>

        <div class="fs_menu_overlay"></div>
        <HamburgerMenu />
        <div class="main_slider" />
        <Cart
          return={this.return}
          validCart={this.validCart}
          increment={this.increment}
          decrement={this.decrement}
          deleteItem={this.deleteItem}
        />

        <Router>
          <Switch>
            <Route exact path="/" component={CategoriesList}/>
            <Route path="/categories/:id/products" component={ProductsList}></Route>
          </Switch>
        </Router>

        <Footer/>

        <Title />
        <ShippingForm />

      </div>
    );
  }
}

export default App;
