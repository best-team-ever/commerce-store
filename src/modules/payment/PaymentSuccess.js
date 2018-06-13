import React, { Component } from "react";
import { withRouter} from "react-router-dom";

import TopNav from "../header/TopNav";
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';

class PaymentSuccess extends Component{
  render(){
    console.log("paymentSuccess props: ", this.props);
    return (
      <div className="App">
        <header className="header">
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>

        <h1>Success!</h1>

        <Footer/>
      </div>
    )
  }
}

export default PaymentSuccess;