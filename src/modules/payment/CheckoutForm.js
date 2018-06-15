import React, { Component } from "react";
import { CardElement } from 'react-stripe-elements';

class CheckoutForm extends Component{

  render() {
    return (
      <form onSubmit={() => this.props.stripe.createToken().then(payload => console.log(payload))}>
        <CardElement />
        <button>Pay</button>
      </form>
    )
  }
}

export default CheckoutForm;