import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
// import { StripeProvider, Elements, injectStripe } from 'react-stripe-elements';
import StripeCheckout from "react-stripe-checkout";

// import { createPayment, getToken } from "../../store/actions/cartAction";
import { createPayment } from "../../store/actions/cartAction";

import './payment.css';
// import CheckoutForm from "./CheckoutForm";

// const _CheckoutForm = injectStripe(CheckoutForm);

class Payment extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardType: "",
      cardNumber: "",
      expirationDate: "",
      cvc: "",
      cardHolderName: ""
    }
  }

  onCardtypeInputChange(e){
    this.setState({
      cardType: e.target.value
    });
  }

  onCardnumberInputChange(e){
    this.setState({
      cardNumber: e.target.value
    });
  }

  onExpirationdateInputChange(e){
    this.setState({
      expirationDate: e.target.value
    });
  }

  onCvcInputChange(e){
    this.setState({
      cvc: e.target.value
    });
  }

  onCardholdernameInputChange(e){
    this.setState({
      cardHolderName: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.createPayment({
      cardType: this.state.cardType,
      cardNumber: this.state.cardNumber,
      expirationDate: this.state.expirationDate,
      cvc: this.state.cvc,
      cardHolderName: this.state.cardHolderName
    });
    this.props.history.push("/confirmation");
    this.setState({
      cardType: "",
      cardNumber: "",
      expirationDate: "",
      cvc: "",
      cardHolderName: ""
    })
  }

  getProductsOfCart(){
    let { productsOfCart } = this.props;
    return {
      productsOfCart: productsOfCart
    }
  }

  getAmountTotal = () => {
    let { amountTotal } = this.props;
    return {
      amountTotal: amountTotal
    }
  }

  onToken = token => {
    // fetch("/paymentResult", {
    console.log("this.getAmountTotal().amountTotal: ", this.getAmountTotal().amountTotal);
    fetch("/charge", {
    // fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: this.getProductsOfCart().productsOfCart,
        amount: this.getAmountTotal().amountTotal
      }),
      headers:  { "Accept": "application/json", "Content-Type": "application/json" },
      // mode: 'no-cors'
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {
          console.log(data);
          this.props.history.push("/paymentResult");
        } else {
          console.warn(data);
          this.props.history.push("/paymentFailed");
        }
      });
  };

  render(){
    return (
      <div className="Payment">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="paiement_contents col-sm-6">
            <h1>Validate your payment informations</h1>
            {/*<form onSubmit={this.onSubmit.bind(this)}>*/}
              {/*<div>*/}
                {/*<div className="input-group mb-3">*/}
                  {/*<div className="input-group-prepend">*/}
                    {/*<span className="input-group-text" id="cardNumber">Card number</span>*/}
                  {/*</div>*/}
                  {/*<input type="text"*/}
                    {/*placeholder="1234 1234 1234 1234"*/}
                    {/*className="form-control"*/}
                    {/*value={this.state.cardNumber}*/}
                    {/*onChange={this.onCardnumberInputChange.bind(this)}*/}
                    {/*required="required"*/}
                    {/*data-error="Card number is required."*/}
                  {/*/>*/}
                {/*</div>*/}
                {/*<div className="input-group mb-3">*/}
                  {/*<div className="input-group-prepend">*/}
                    {/*<span className="input-group-text" id="expirationDate">Expiration date</span>*/}
                  {/*</div>*/}
                  {/*<input type="text"*/}
                    {/*placeholder="MM/YY"*/}
                    {/*value={this.state.expirationDate}*/}
                    {/*className="form-control"*/}
                    {/*onChange={this.onExpirationdateInputChange.bind(this)}*/}
                    {/*required="required"*/}
                    {/*data-error="Expiration date is required."*/}
                  {/*/>*/}
                {/*</div>*/}
                {/*<div className="input-group mb-3">*/}
                  {/*<div className="input-group-prepend">*/}
                    {/*<span className="input-group-text" id="CVC">CVC</span>*/}
                  {/*</div>*/}
                  {/*<input type="text"*/}
                    {/*placeholder="CVC"*/}
                    {/*value={this.state.cvc}*/}
                    {/*className="form-control"*/}
                    {/*onChange={this.onCvcInputChange.bind(this)}*/}
                    {/*required="required"*/}
                    {/*data-error="CVC is required."*/}
                  {/*/>*/}
                {/*</div>*/}
                {/*<div className="input-group mb-3">*/}
                  {/*<div className="input-group-prepend">*/}
                    {/*<span className="input-group-text" id="CVC">Card holder name</span>*/}
                  {/*</div>*/}
                  {/*<input type="text"*/}
                    {/*placeholder="your Name"*/}
                    {/*value={this.state.cardHolderName}*/}
                    {/*className="form-control"*/}
                    {/*onChange={this.onCardholdernameInputChange.bind(this)}*/}
                    {/*required="required"*/}
                    {/*data-error="Card holder name is required."*/}
                  {/*/>*/}
                {/*</div>*/}
              {/*</div>*/}
              <div>
                {/*<StripeProvider*/}
                  {/*token={this.props.dispatch(getToken)}*/}
                  {/*amount={parseInt(this.getAmountTotal().amountTotal)}*/}
                  {/*currency="EUR"*/}
                  {/*stripeKey="pk_test_EiYAByQZ4UB8TSQcF2QqI2tN"*/}
                {/*>*/}
                  {/*<div className="Checkout">*/}
                    {/*<Elements>*/}
                      {/*<_CheckoutForm />*/}
                    {/*</Elements>*/}
                  {/*</div>*/}
                {/*</StripeProvider>*/}
                <StripeCheckout
                  token={this.onToken}
                  amount={parseInt(this.getAmountTotal().amountTotal)}
                  currency="EUR"
                  stripeKey="pk_test_EiYAByQZ4UB8TSQcF2QqI2tN"
                />
              </div>
            {/*</form>*/}
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productsOfCart: state.cartReducer.productsOfCart,
  amountTotal: state.cartReducer.amountTotal
});

function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({createPayment}, dispatch);
  return {
    ...actions,
    dispatch
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Payment));
// export default withRouter(connect(null, mapDispatchToProps)(Payment));

