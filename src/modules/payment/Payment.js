import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { createPayment } from "../../store/actions/cartAction";

import TopNav from "../header/TopNav";
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';

import './payment.css';

class Payment extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardType: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
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

  onCvvInputChange(e){
    this.setState({
      cvv: e.target.value
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
      cvv: this.state.cvv,
      cardHolderName: this.state.cardHolderName
    });
    this.props.history.push("/confirmation");
    this.setState({
      cardType: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      cardHolderName: ""
    })
  }

  render(){
    return (
      <div className="App">
        <header className="header">
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>


        <div>
          <div className='title'>
            <h1>Validate your payment information</h1>
          </div>
          <div className='shippingForm'>
            <form className="form" onSubmit={this.onSubmit.bind(this)}>
              <label>
                <div>
                  Card type:
                  <input type="text" value={this.state.cardType} onChange={this.onCardtypeInputChange.bind(this)}/>
                </div>
                <div>
                  Card number:
                  <input type="text" value={this.state.cardNumber} onChange={this.onCardnumberInputChange.bind(this)}/>
                </div>
                <div>
                  Expiration date:
                  <input type="text" value={this.state.expirationDate} onChange={this.onExpirationdateInputChange.bind(this)}/>
                </div>
                <div>
                  CVV:
                  <input type="text" value={this.state.cvv} onChange={this.onCvvInputChange.bind(this)} />
                </div>
                <div>
                  Card holder name:
                  <input type="text" value={this.state.cardHolderName} onChange={this.onCardholdernameInputChange.bind(this)} />
                </div>
              </label>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>



        <Footer/>
      </div>
    )
  }
}


function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({createPayment}, dispatch);
  return {...actions, dispatch};
}

export default withRouter(connect(null, mapDispatchToProps)(Payment));