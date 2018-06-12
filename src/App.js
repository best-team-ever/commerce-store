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

import CategoriesList from "./modules/categories/CategoriesList";
import ProductsList from "./modules/products/ProductsList";
import ProductDetail from "./modules/products/ProductDetail";

import ShippingForm from './modules/shipping/shipping.js';


class App extends Component {

  render() {
    return (
      <div className="App">
      	<header class="header">
          <TopNav />
          <MainNav />
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu />
        <div className="main_slider" />

      <Router>
          <Switch>
            <Route exact path="/" component={CategoriesList}/>
            <Route path="/categories/:id/products" component={ProductsList}></Route>
            <Route path="/products/:id" component={ProductDetail}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/shipform" componant={ShippingForm}/>
          </Switch>
        </Router>

        <Footer/>

      </div>
    );
  }
}

export default App;
