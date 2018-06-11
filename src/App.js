import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import CategoriesList from "./modules/categories/CategoriesList";
=======
import TopNav from './header/TopNav';
import MainNav from './header/MainNav';
import HamburgerMenu from './header/HamburgerMenu';
import Banner from './banner/Banner';
import Footer from './footer/Footer';
>>>>>>> first commit before rebase

class App extends Component {
  render() {
    return (
      <div className="App">
      	<header class="header">
          <TopNav />
          <MainNav />
        </header>
<<<<<<< HEAD
        <CategoriesList/>
=======
        <div class="fs_menu_overlay"></div>
        <HamburgerMenu />
        <div class="main_slider" />

        <Banner />

        <Footer/>
>>>>>>> first commit before rebase
      </div>
    );
  }
}

export default App;
