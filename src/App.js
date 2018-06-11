import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './modules/cart/cart.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "",
    };
    this.return = this.return.bind (this);
    this.validCart = this.validCart.bind (this);
  }

  return = () => {
    console.log("return...");
  };

  validCart = () => {
    console.log("valid cart");
  };

  increment = () => {
    console.log("plus +");
  };

  decrement = () => {
    console.log("moins -");
  };

  deleteItem = () => {
    console.log("deleteItem");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <span>
          <Cart
            return={this.return}
            validCart={this.validCart}
            increment={this.increment}
            decrement={this.decrement}
            deleteItem={this.deleteItem}
          />
        </span>
      </div>
    );
  }
}




export default App;
