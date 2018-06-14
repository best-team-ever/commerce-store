import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import "./plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "./plugins/jquery-ui-1.12.1.custom/jquery-ui.css";
//import './css/main_styles.css';
import './css/responsive.css';
import './index.css';
import './App.css';

import TopNav from './modules/header/TopNav';
import MainNav from './modules/header/MainNav';
import HamburgerMenu from './modules/header/HamburgerMenu';
import Footer from './modules/footer/Footer';

import Cart from "./modules/cart/cart";
import ProductsList from "./modules/products/ProductsList";
import ProductDetail from "./modules/products/ProductDetail";
import Shipping from "./modules/shipping/Shipping";
import Payment from "./modules/payment/Payment";
import Confirmation from "./modules/payment/Confirmation";
import PaymentResult from "./modules/payment/PaymentResult";
import CategoriesList from "./modules/categories/CategoriesList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>

        <Switch>
          <Route exact path="/" component={CategoriesList}/>
          <Route path="/categories/:id/products" component={ProductsList}></Route>
          <Route path="/products/:id" component={ProductDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/shipping" component={Shipping}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/confirmation" component={Confirmation}/>
          <Route path="/paymentResult" component={PaymentResult}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default App;
