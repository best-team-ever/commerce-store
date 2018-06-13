import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { createPayment } from "../../store/actions/cartAction";

import './payment.css';

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

  render(){
    return (
      <div className="Payment">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="paiement_contents col-sm-6">
            <h1>Validate your payment informations</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="cardNumber">Card number</span>
                  </div>
                  <input type="text"
                    placeholder="1234 1234 1234 1234"
                    className="form-control"
                    value={this.state.cardNumber}
                    onChange={this.onCardnumberInputChange.bind(this)}
                    required="required"
                    data-error="Card number is required."
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="expirationDate">Expiration date</span>
                  </div>
                  <input type="text"
                    placeholder="MM/YY"
                    value={this.state.expirationDate}
                    className="form-control"
                    onChange={this.onExpirationdateInputChange.bind(this)}
                    required="required"
                    data-error="Expiration date is required."
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="CVC">CVC</span>
                  </div>
                  <input type="text"
                    placeholder="CVC"
                    value={this.state.cvc}
                    className="form-control"
                    onChange={this.onCvcInputChange.bind(this)}
                    required="required"
                    data-error="CVC is required."
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="CVC">Card holder name</span>
                  </div>
                  <input type="text"
                    placeholder="your Name"
                    value={this.state.cardHolderName}
                    className="form-control"
                    onChange={this.onCardholdernameInputChange.bind(this)}
                    required="required"
                    data-error="Card holder name is required."
                  />
                </div>
              </div>
              <div>
                <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({createPayment}, dispatch);
  return {...actions, dispatch};
}

export default withRouter(connect(null, mapDispatchToProps)(Payment));
