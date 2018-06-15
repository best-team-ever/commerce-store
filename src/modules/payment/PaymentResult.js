import React, { Component } from "react";

class PaymentResult extends Component{
  render(){
    return (
      <div className="PaymentResult">
        <div className="container">
          <div className="alert alert-success h3" role="alert">
            Thank you for your payment.
          </div>
          <p>We make every effort to deliver as soon as possible... see you soon !</p>
        </div>
      </div>
    )
  }
}

export default PaymentResult;
