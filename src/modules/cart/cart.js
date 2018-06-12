import React, { Component } from "react";
import { connect } from "react-redux";
// import { getCounter } from "../../store/counter/selectors";
// import { incrementDecrement } from "../../store/counter/handlers";
import './cart.css';
import TopNav from "../header/TopNav";
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';


const urlImage = "https://www.decathlon.fr/media/";
let total = 0;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toto: "",
      productOfCart: [
        {
        "decathlon_id": 8354464,
        "title": "Basic L print Long Gold Fusion",
        "min_price": 9.99,
        "image_path": "835/8354464/zoom_726db88653a94070ab9e6eef0bd48218.jpg",
        "qty": 0,
        },
        {
        "decathlon_id": 8339112,
        "title": "GILET TAIGA 300 VERT",
        "min_price": 34.99,
        "image_path": "833/8339112/zoom_b3c967f1315d4f6a9fbbf74c38cf3593.jpg",
        "qty": 3,
        }
      ],
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

  updateQty = (event, index) => {
    const newArray = this.state.productOfCart.map((value, indexMap) => {
      if (index === indexMap) {
        return {...value, qty: event}
      } else {
        return value;
      }
    })
    this.setState({productOfCart: newArray});
  }

  total = (value) => {
    total = total + value
  }

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


        <div >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="cardCoteACote">
            <button type="button" className="btn btn-primary" onClick={this.return}>Return</button>
            <h3>My cart</h3>
            <button type="button" className="btn btn-primary" onClick={this.validCart}>Valid</button>
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
              {
                this.state.productOfCart.map((cartItem, index) => {
                  return (
                    <tr key={index}>
                      <td><img src={`${urlImage}${cartItem.image_path}`} className="img-thumbnail" width="20%"/></td>
                      <td>{cartItem.title}</td>
                      <td>{cartItem.min_price} €</td>
                      <td className="qty">
                        <div className="signs">
                          {/* <img src="https://www.decathlon.fr/skins/images/decat/p.gif"/> */}
                          <button type="button" className="btn btn-secondary" onClick={this.increment}>+</button>
                          <button type="button" className="btn btn-secondary" onClick={this.decrement}>-</button>
                        </div>
                        <input type="text" className="qty2" value={cartItem.qty} onChange={(event) => this.updateQty(event.target.value,index)}>
                        </input>
                      </td>
                      <td>
                        <i className="fas fa-trash-alt" onClick={this.deleteItem}></i>
                      </td>
                      <td>{cartItem.min_price*cartItem.qty} €</td>
                      {this.total(cartItem.min_price*cartItem.qty)}
                    </tr>
                  )
                })
                // <tr><th colSpan="2">{total} €</th></tr>
              }


              </tbody>
            </table>
          </div>
          <div className="total">
            {total} €
          </div>
          <div className="cardCoteACote">
            <button type="button" className="btn btn-primary" onClick={this.return}>Return</button>
            <button type="button" className="btn btn-primary" onClick={this.validCart}>Valid</button>
          </div>


          <Footer/>
        </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => (
  {productsOfCart: state.cartReducer.productsOfCart}
)
export default connect(mapStateToProps)(Cart);

// export default (Cart);
