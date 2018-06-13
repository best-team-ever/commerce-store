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
      <div className="Shipping">
        <div>
          <div className='title'>
            <h1>Validate your shipping information</h1>
          </div>
          <div className='shippingForm'>
            <form className="form" onSubmit={this.onSubmit.bind(this)}>
              <label>
                <div>
                  First name:
                  <input type="text" placeholder="Input your first name" value={this.state.firstName} onChange={this.onFirstnameInputChange.bind(this)}/>
                </div>
                <div>
                  Last name:
                  <input type="text" placeholder="Input your last name" value={this.state.lastName} onChange={this.onLastnameInputChange.bind(this)}/>
                </div>
                <div>
                  Address:
                  <input type="text" placeholder="Input your address" value={this.state.address} onChange={this.onAddressInputChange.bind(this)}/>
                </div>
                <div>
                  Post-Code:
                  <input type="text" placeholder="Input your post code" value={this.state.postCode} onChange={this.onPostcodeInputChange.bind(this)} />
                </div>
                <div>
                  City:
                  <input type="text" placeholder="Input your city" value={this.state.city} onChange={this.onCityInputChange.bind(this)} />
                </div>
              </label>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
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
