import React, { Component } from 'react';
import './App.css';
import TopNav from './header/TopNav';
import MainNav from './header/MainNav';
import HamburgerMenu from './header/HamburgerMenu';
import Footer from './footer/Footer';
import CategoriesList from "./modules/categories/CategoriesList";

class App extends Component {
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

        <CategoriesList/>

        <Footer/>
      </div>
    );
  }
}

export default App;
