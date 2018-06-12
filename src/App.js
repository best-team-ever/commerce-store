import React, { Component } from 'react';
import './App.css';

import TopNav from './header/TopNav';
import MainNav from './header/MainNav';
import HamburgerMenu from './header/HamburgerMenu';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CategoriesList from "./modules/categories/CategoriesList";
import ProductsList from "./modules/products/ProductsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
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
          </Switch>
        </Router>

        <Footer/>
      </div>
    );
  }
}

export default App;