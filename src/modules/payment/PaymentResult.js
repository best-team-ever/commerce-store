import React, { Component } from "react";

class PaymentResult extends Component{
  render(){
    console.log("paymentSuccess props: ", this.props);
    return (
      <div className="PaymentResult">
        <h1>Success!</h1>
      </div>
    )
  }
}

export default PaymentResult;
