import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './MainNav.css';

class MainNav extends Component {
  getProductOfCart(){
    let { productsOfCart, loggedIn } = this.props;
    return {
      productsOfCart: productsOfCart,
      loggedIn: loggedIn
    }
  }

  render() {
    let numberProductsOfCart = this.getProductOfCart().productsOfCart.length? this.getProductOfCart().productsOfCart.length : 0;
    const propsss = this.props

    return (
      <div className="main_nav_container">
  			<div className="container">
  				<div className="row">
  					<div className="col-lg-12 text-right">
  						<div className="logo_container">
								<Link to="/">commerce-<span>store</span></Link>
  						</div>
  						<nav className="navbar">
  							<ul className="navbar_menu">
  								<li><Link to="/">home</Link></li>
  								<li><Link to="./contact">contact</Link></li>
  							</ul>
  							<ul className="navbar_user">
  								<li><Link to="/"><i className="fa fa-search" aria-hidden="true"></i></Link></li>
  								<li><Link to="/"><i className="fa fa-user" aria-hidden="true"></i></Link></li>
  								<li className="checkout">
										<Link to="/cart">
											<i className="fa fa-shopping-cart" aria-hidden="true"></i>
											<span id="checkout_items" className="checkout_items">{numberProductsOfCart}</span>
										</Link>
  								</li>
  							</ul>
  							<div className="hamburger_container">
  								<i className="fa fa-bars" aria-hidden="true"></i>
  							</div>
  						</nav>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }
}

const mapStateToProps = (state) => ({
  productsOfCart: state.cartReducer.productsOfCart,
  loggedIn: state.cartReducer.loggedIn
})


export default connect(mapStateToProps)(MainNav);
