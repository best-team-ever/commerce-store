import React, { Component } from 'react';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/main_styles.css';
import './css/responsive.css';

import './App.css';

import TopNav from './modules/header/TopNav';
import MainNav from './modules/header/MainNav';
import HamburgerMenu from './modules/header/HamburgerMenu';
import Footer from './modules/footer/Footer';

import CategoriesList from "./modules/categories/CategoriesList";

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
            <Route path="/products/:id" component={ProductDetail}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/shipform" componant={ShippingForm}/>
          </Switch>
        </Router>

        <CategoriesList/>

        <Footer/>
      </div>
    );
  }
}

export default App;
