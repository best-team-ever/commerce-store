import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getCounter } from "../../store/counter/selectors";
// import { incrementDecrement } from "../../store/counter/handlers";
import './cart.css';

class Cart extends Component {
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

  componentDidMount() {
    console.log("didMount");
  }

  render(){
    return (

      <div >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="cardCoteACote">
          <button onClick={this.return}>Return</button>
          <span>Panier</span>
          <button onClick={this.validCart}>Valid</button>
        </div>
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Delete</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>photo</td>
                <td>desciption1</td>
                <td>10,00 €</td>
                <td className="qty">
                  <div className="signs">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                  </div>
                    <input type="text" value="2" onChange={console.log("on Change2")}>
                  </input>
                </td>
                <td>
                  <i className="fas fa-trash-alt" onClick={this.deleteItem}></i>
                </td>
                <td>20,00 €</td>
              </tr>
              <tr>
                <td>photo</td>
                <td>desciption2</td>
                <td>15,00 €</td>
                <td className="qty">
                  <div className="signs">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                  </div>
                    <input type="text" value="3" onChange={console.log("on Change3")}>
                  </input>
                </td>
                <td>
                  <i className="fas fa-trash-alt" onClick={this.deleteItem}></i>
                </td>
                <td>45,00 €</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total">
          Total 65,00 €
        </div>
        <div className="cardCoteACote">
          <button onClick={this.return}>Return</button>

          <button onClick={this.validCart}>Valid</button>
        </div>
      </div>
    )
  }
}
// function Cart(props) {
//
// }

{/* <span>
  <Cart
    return={this.return}
    validCart={this.validCart}
    increment={this.increment}
    decrement={this.decrement}
    deleteItem={this.deleteItem}
  />
</span> */}

// export default connect(mapStateToProps)(Cart);
export default (Cart);
