import React, { Component } from "react";
import { connect } from "react-redux";
// import { getCounter } from "../../store/counter/selectors";
// import { incrementDecrement } from "../../store/counter/handlers";
import './cart.css';
import TopNav from "../header/TopNav";
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "",
    };
    this.return = this.return.bind (this);
    this.validCart = this.validCart.bind (this);
  }

  getProductOfCart(){
    let { productsOfCart } = this.props;
    console.log("addToCart: ", this.props.productsOfCart);
    return {
      productsOfCart: productsOfCart
    }
  }

  return = () => {
    console.log("return...");
  };

  validCart = () => {
    console.log("valid cart");
  };

  increment = () => {
    console.log("plus +");
  };

  decrement = () => {
    console.log("moins -");
  };

  deleteItem = () => {
    console.log("deleteItem");
  };

  componentDidMount() {
    console.log("didMount");
  }

  render(){
    let productsOfCart = this.getProductOfCart().productsOfCart;
    let productsList = [];
    if(productsOfCart){
      productsList = productsOfCart.map((product) => (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.min_price}</td>
          <td className="qty">
            <div className="signs">
              <button onClick={this.increment}>+</button>
              <button onClick={this.decrement}>-</button>
            </div>
            <input type="text" value="2" onChange={console.log("on Change2")}>
            </input>
          </td>
          <td>
            <i className="fas fa-trash-alt" onClick={this.deleteItem}></i>
          </td>
          <td>20,00 €</td>
        </tr>
      ));
    }


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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="cardCoteACote">
            <button onClick={this.return}>Return</button>
            <span>Panier</span>
            <button onClick={this.validCart}>Valid</button>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Delete</th>
                <th>Total price</th>
              </tr>
              </thead>
              <tbody>
              {productsList}
              </tbody>
            </table>
          </div>
          <div className="total">
            Total 65,00 €
          </div>
          <div className="cardCoteACote">
            <button onClick={this.return}>Return</button>

            <button onClick={this.validCart}>Valid</button>
          </div>
        </div>


        <Footer/>
      </div>

    )
  }
}
// function Cart(props) {
//
// }

{/* <span>
  <Cart
    return={this.return}
    validCart={this.validCart}
    increment={this.increment}
    decrement={this.decrement}
    deleteItem={this.deleteItem}
  />
</span> */}


const mapStateToProps = (state) => (
  {productsOfCart: state.cartReducer.productsOfCart}
)
export default connect(mapStateToProps)(Cart);

// export default (Cart);
