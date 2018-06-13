import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { createShipping } from "../../store/actions/cartAction";
import { withRouter } from "react-router-dom";

import './shipping.css';

class Shipping extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      postCode: "",
      city: ""
    }
  }

  onFirstnameInputChange(e){
    this.setState({
      firstName: e.target.value
    });
  }

  onLastnameInputChange(e){
    this.setState({
      lastName: e.target.value
    });
  }

  onAddressInputChange(e){
    this.setState({
      address: e.target.value
    });
  }

  onPostcodeInputChange(e){
    this.setState({
      postCode: e.target.value
    });
  }

  onCityInputChange(e){
    this.setState({
      city: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.createShipping({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      postCode: this.state.postCode,
      city: this.state.city
    });
    this.props.history.push("/payment");
    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      postCode: "",
      city: ""
    });
  }

  render(){
    return (
      <div className="ShippingForm">
        <div className="row">
          <div className="shipping_contents col-sm-3"></div>
          <div className="shipping_contents col-sm-6">
            <h1>Validate your shipping information</h1>
            <p>Fill out the form below with your delivery coordinates.</p>
            <form className="shippingForm" onSubmit={this.onSubmit.bind(this)}>
              <div>
                <input type="text"
                  placeholder="Your first name"
                  value={this.state.firstName}
                  onChange={this.onFirstnameInputChange.bind(this)}
                  className="form_input input_name input_ph"
                  required="required"
                  data-error="First Name is required."/>
                <input type="text"
                  placeholder="Your last name"
                  value={this.state.lastName}
                  onChange={this.onLastnameInputChange.bind(this)}
                  className="form_input input_name input_ph"
                  required="required"
                  data-error="Last Name is required."/>
                <input type="text"
                  placeholder="Your address"
                  value={this.state.address}
                  onChange={this.onAddressInputChange.bind(this)}
                  className="form_input input_name input_ph"
                  required="required"
                  data-error="Address is required."/>
                <input type="text"
                  placeholder="Your post code"
                  value={this.state.postCode}
                  onChange={this.onPostcodeInputChange.bind(this)}
                  className="form_input input_name input_ph" />
                <input type="text"
                  placeholder="Your city"
                  value={this.state.city}
                  onChange={this.onCityInputChange.bind(this)}
                  className="form_input input_name input_ph"
                  required="required"
                  data-error="City is required."/>
              </div>
              <div>
                <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="shipping_contents col-sm-3"></div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({createShipping}, dispatch);
  return {...actions, dispatch};
}

export default withRouter(connect(null, mapDispatchToProps)(Shipping));
