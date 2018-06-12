import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getCounter } from "../../store/counter/selectors";
// import { incrementDecrement } from "../../store/counter/handlers";
import './cart.css';


function Cart(props) {
  return (
    <div >
      <div class="cardCoteACote">
        <button onClick={props.return}>Return</button>
        <span>Panier</span>
        <button onClick={props.validCart}>Valid</button>
      </div>
      <div>
        <table>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Unit price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Total price</th>
          </tr>
          <tr>
            <td>photo</td>
            <td>desciption1</td>
            <td>10,00 €</td>
            <td class="qty">
              <div class="signs">
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
              </div>
                <input type="text" value="2">
              </input>
            </td>
            <td>
              <i class="fas fa-trash-alt" onClick={props.deleteItem}></i>
            </td>
            <td>20,00 €</td>
          </tr>
          <tr>
            <td>photo</td>
            <td>desciption2</td>
            <td>15,00 €</td>
            <td class="qty">
              <div class="signs">
                <button onClick={props.increment}>+</button>
                <button onClick={props.decrement}>-</button>
              </div>
                <input type="text" value="3">
              </input>
            </td>
            <td>
              <i class="fas fa-trash-alt" onClick={props.deleteItem}></i>
            </td>
            <td>45,00 €</td>
          </tr>
        </table>
      </div>
      <div class="total">
        Total 65,00 €
      </div>
      <div class="cardCoteACote">
        <button onClick={props.return}>Return</button>
        <span>Panier</span>
        <button onClick={props.validCart}>Valid</button>
      </div>
    </div>
  )
}


export default (Cart);
