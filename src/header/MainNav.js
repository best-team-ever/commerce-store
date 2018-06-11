import React, { Component } from 'react';
import './MainNav.css';

export default class MainNav extends Component {
  render() {
    return (
      <div class="main_nav_container">
  			<div class="container">
  				<div class="row">
  					<div class="col-lg-12 text-right">
  						<div class="logo_container">
  							<a href="#">commerce-<span>store</span></a>
  						</div>
  						<nav class="navbar">
  							<ul class="navbar_menu">
  								<li><a href="./">home</a></li>
  								<li><a href="./">shop</a></li>
  								<li><a href="./contact">contact</a></li>
  							</ul>
  							<ul class="navbar_user">
  								<li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
  								<li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
  								<li class="checkout">
  									<a href="#">
  										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
  										<span id="checkout_items" class="checkout_items">2</span>
  									</a>
  								</li>
  							</ul>
  							<div class="hamburger_container">
  								<i class="fa fa-bars" aria-hidden="true"></i>
  							</div>
  						</nav>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }
}
