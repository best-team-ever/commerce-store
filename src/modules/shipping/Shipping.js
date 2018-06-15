import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './shipping.css';
import { createShipping, getToken } from "../../store/actions/cartAction";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { signedHandler } from "../../store/handlers/signedHandlers";
import StripeCheckout from "react-stripe-checkout";

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

  responseGoogle = (response) => {
    console.log("sur le point de mettre logué dans le state");
    this.props.signed(true);
  }

  render(){
    return (this.props.loggedIn
           ? (<div className="ShippingForm">
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
                <StripeCheckout
                  token={this.props.dispatch(getToken)}
                  currency="EUR"
                  stripeKey={ process.env.REACT_APP_PUBLISHABLE_KEY }
                >
                  <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">Go to pay</button>
                </StripeCheckout>
              </div>
              </form>
              </div>
                    {/* <div> */}
                     {/* <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300" value="Submit">Submit</button>
                  </div>
                 </form>
               </div>
               <div className="shipping_contents col-sm-3"></div> */}

              </div>
            </div>
            )
          : (
            <div class="text-center">
              <img src="./images/logoGoogle.png" width="72" height="72"/>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <GoogleLogin
                className="btn btn-primary"
                clientId="522866054012-3rk0smi2ss0fqn3irb0onpjj3to9g0e8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                />

                <p class="mt-5 mb-3 text-muted">© 2018</p>
            </div>
            )

    )
  }
}


const mapStateToProps = (state) => ({
  loggedIn: state.cartReducer.loggedIn,
  // productsOfCart: state.cartReducer.productsOfCart
  paymentStatus: state.cartReducer.paymentStatus
})


function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({createShipping}, dispatch);
  return {
    ...actions,
    dispatch,
    signed: (signedInOut) => signedHandler(signedInOut, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shipping));
