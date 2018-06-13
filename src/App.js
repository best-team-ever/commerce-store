import React, { Component, Route, Switch, Router } from 'react';
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
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>

        <CategoriesList/>

        <Footer/>
      </div>
    );
  }
}

export default App;
