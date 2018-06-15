import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createOrder } from "../../store/actions/cartAction";
import { deleteFromCartHandler, deleteCartHandler, updateQtyHandlers } from "../../store/handlers/cartHandlers";

import './cart.css';

const urlImage = "https://www.decathlon.fr/media/";
let total = 0;

class Cart extends Component {

  getProductsOfCart(){
    let { productsOfCart } = this.props;
    return {
      productsOfCart: productsOfCart
    }
  }

  return = () => {
    window.history.back();
  };

  validCart = (amountTotal) => {
    this.props.createOrder({
      amountTotal: amountTotal
    });
    this.props.history.push("/shipping");
  };

  increment = (qty, index) => {
    const qtyInt = parseInt(qty, 10);
    this.props.updateQty(qtyInt + 1, index)
   };

  decrement = (qty, productId, index) => {
    if (qty === 1) {
      this.deleteItem(productId)
    } else {
      const qtyInt = parseInt(qty, 10);
      this.props.updateQty(qtyInt - 1, index)
    }
  };

  deleteItem = (productId) => {
    console.log("deleteItem");
    this.props.deleteFromCart(productId);
  };

  deleteCart = () => {
    this.props.deleteCart();
  };

  updateQty2 = (event, index) => {
    this.props.updateQty(event, index);
  }

  total = (value) => {
    total = total + value;
  }

  componentDidMount() {
    console.log("");
  }

  handleProduct(productId){
    this.props.history.push(`/products/${productId}`);
  }

  render(){
    let productsOfCart = this.getProductsOfCart().productsOfCart;
    let numberProducts = this.getProductsOfCart().productsOfCart.length? this.getProductsOfCart().productsOfCart.length:0;

    let productsList = [];
    let total;
    if(productsOfCart.length !== 0){
      productsList = productsOfCart.map((product, index) => (
        <tr key={index}>
          <td><img src={`${urlImage}${product.image_path}`} className="img-thumbnail" alt={`${product.title}`}/></td>
          <td><a onClick={this.handleProduct.bind(this, `${product.id}`)}>{product.title}</a></td>
          <td>{product.description}</td>
          <td className="text-right">{(product.min_price).toFixed(2)}</td>
          <td className="qty">
            <div className="signs">
              <button onClick={() => this.increment(product.qty, index)}>+</button>
              <button onClick={() => this.decrement(product.qty, product.id, index)}>-</button>
            </div>
            <input type="text" className="qty2" value={product.qty} onChange={(event) => this.updateQty2(event.target.value, index)}>
            </input>
          </td>
          <td className="text-center">
            <i className="fas fa-trash-alt" onClick={this.deleteItem.bind(this, `${product.id}`)}></i>
          </td>
          <td className="text-right">
            {(Math.round(product.min_price*100 * product.qty)/100).toFixed(2)}&nbsp;€
          </td>
        </tr>
      ));
      total = productsOfCart
        .map(product => (Math.round(product.min_price*100 * product.qty)/100))
        .reduce((total, value) => (total + value));
      productsList.push(
        <tr key={productsList.length}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="qty"></td>
          <td></td>
          <td className="text-right" on>{total.toFixed(2)}&nbsp;€</td>
        </tr>
      );
    }

    return (
      <div className="card_container">
        <div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Unit price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>
                {productsList}
              </tbody>
            </table>
          </div>
          <div className="cardCoteACote">
            <button type="button" className="btn btn-secondary" onClick={this.return}>Return</button>
            <button type="button" className="btn btn-light" onClick={this.deleteCart}>Clear cart</button>
            {numberProducts
              ? (
                  <button type="button" className="btn btn-primary" onClick={this.validCart.bind(this, `${total}`)}>Valid</button>
              )
              : null
            }
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  productsOfCart: state.cartReducer.productsOfCart
})

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({ createOrder }, dispatch);
  return {
    deleteFromCart: (id) => deleteFromCartHandler(id, dispatch),
    deleteCart: () => deleteCartHandler(dispatch),
    updateQty: (qty, index) => updateQtyHandlers(qty, index, dispatch),
    ...actions,
    dispatch
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
