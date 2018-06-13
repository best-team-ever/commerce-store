import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import './MainNav.css';

class MainNav extends Component {
  getProductOfCart(){
    let { productsOfCart } = this.props;
    return {
      productsOfCart: productsOfCart
    }
  }

  render() {
    let numberProductsOfCart = this.getProductOfCart().productsOfCart.length? this.getProductOfCart().productsOfCart.length : 0;

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
  								<li><a href="/">home</a></li>
  								{/* <li><a href="/">categories</a></li> */}
  								<li><a href="./contact">contact</a></li>
  							</ul>
  							<ul className="navbar_user">
  								<li><a href="./"><i className="fa fa-search" aria-hidden="true"></i></a></li>
  								<li><a href="./"><i className="fa fa-user" aria-hidden="true"></i></a></li>
  								<li className="checkout">
  									<a href="./">
											<Link to="/cart">
												<i className="fa fa-shopping-cart" aria-hidden="true"></i>
												<span id="checkout_items" className="checkout_items">{numberProductsOfCart}</span>
											</Link>
  									</a>
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
  productsOfCart: state.cartReducer.productsOfCart
})
export default connect(mapStateToProps)(MainNav);
