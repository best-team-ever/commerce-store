import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createOrder } from "../../store/actions/cartAction";
import { withRouter } from "react-router-dom";

class Confirmation extends Component{
  getProductsOfCart(){
    let { productsOfCart } = this.props;
    return {
      productsOfCart: productsOfCart
    }
  }

  getShipping(){
    let { shipping } = this.props;
    return {
      shipping: shipping
    }
  }

  getPayment(){
    let { payment } = this.props;
    return {
      payment: payment
    }
  }

  confirmPayment(){
    this.props.history.push("/paymentSuccess");
    this.props.createOrder({
      productsOfCart: this.getProductsOfCart().productsOfCart,
      shipping: this.getShipping(),
      payment: this.getPayment()
    })
  }

  render(){
    let productsOfCart = this.getProductsOfCart().productsOfCart;
    let productsList = [];
    let shipping = this.getShipping();
    let payment = this.getPayment();

    console.log("this.getProductsOfCart(): ", this.getProductsOfCart());
    console.log("this.getPayment(): ", this.getPayment());

    if(productsOfCart){
      productsList = productsOfCart.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))
    }

    return (
      <div>
        <ul>
          {productsList}
        </ul>

        <ul>
          <li>{shipping.address}</li>
        </ul>

        <ul>
          <li>{payment.cardNumber}</li>
        </ul>

        <button onClick={this.confirmPayment}>Confirm</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productsOfCart: state.cartReducer.productsOfCart,
  shipping: state.cartReducer.shipping,
  payment: state.cartReducer.payment
})

function mapDispatchToProps (dispatch) {
  let actions = bindActionCreators({createOrder}, dispatch);
  return {...actions, dispatch};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Confirmation));
