import React, { Component } from 'react';
import './shipping.css';



class Title extends Component {
  render() {
    return (
      <div className='title'>
      <h1>Validate your shipping information</h1>
      </div>
    )
  }
}


class ShippingForm extends Component {
  render() {
    return (
      <div className='shippingForm'>

        <form className="form">

    <label>
      <div>
        Name:
        <input type="text" name="name" />
      </div>
      <div>
      LastName:
      <input type="text" name="lastName" />
    </div>
    <div>
      Address:
      <input type="text" name="Adress" />
    </div>
    <div>
      Post-Code:
      <input type="text" name="PostCode" />
    </div>
    <div>
      Town:
      <input type="text" name="Town" />
    </div>
    </label>
    <div>
    <input type="submit" value="Submit" />
  </div>
  </form>
</div>

    )
  }
}





export default ShippingForm;
