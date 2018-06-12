import React, { Component } from 'react';
import './HamburgerMenu.css';

export default class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburger_menu">
    		<div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
    		<div className="hamburger_menu_content text-right">
    			<ul className="menu_top_nav">
    				<li className="menu_item has-children">
    					<a href="./">
    						usd
    						<i className="fa fa-angle-down"></i>
    					</a>
    					<ul className="menu_selection">
    						<li><a href="./">cad</a></li>
    						<li><a href="./">aud</a></li>
    						<li><a href="./">eur</a></li>
    						<li><a href="./">gbp</a></li>
    					</ul>
    				</li>
    				<li className="menu_item has-children">
    					<a href="./">
    						English
    						<i className="fa fa-angle-down"></i>
    					</a>
    					<ul className="menu_selection">

    						<li><a href="./">French</a></li>
    						<li><a href="./">Italian</a></li>
    						<li><a href="./">German</a></li>
    						<li><a href="./">Spanish</a></li>
    					</ul>
    				</li>
    				<li className="menu_item has-children">
    					<a href="./">
    						My Account
    						<i className="fa fa-angle-down"></i>
    					</a>
    					<ul className="menu_selection">
    						<li><a href="./"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
    						<li><a href="./"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
    					</ul>
    				</li>
    				<li className="menu_item"><a href="./">home</a></li>
    				<li className="menu_item"><a href="./shop">shop</a></li>
    				<li className="menu_item"><a href="./contact">contact</a></li>
    			</ul>
    		</div>
    	</div>
    );
  }
}
