import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// import { bindActionCreators } from "redux";
// import { deleteFromCart, updateQty } from "../../store/actions/cartAction";
import { deleteFromCartHandler, updateQtyHandlers } from "../../store/handlers/cartHandlers";


import './cart.css';

const urlImage = "https://www.decathlon.fr/media/";
let total = 0;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.return = this.return.bind (this);
    this.validCart = this.validCart.bind (this);
  }

  getProductsOfCart(){
    let { productsOfCart } = this.props;
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

  deleteItem = (productId) => {
    console.log("deleteItem");
    // console.log("thisprops",this.props);
    this.props.deleteFromCart(productId)
  };

  updateQty2 = (event, index) => {
    console.log("updateQty2");
    this.props.updateQty(event, index);
  }

  total = (value) => {
    total = total + value
  }

  componentDidMount() {
    console.log("didMount");
  }

  handleProduct(productId){
    this.props.history.push(`/products/${productId}`);
  }

  render(){
    let productsOfCart = this.getProductsOfCart().productsOfCart;
    let numberProducts = this.getProductsOfCart().productsOfCart.length? this.getProductsOfCart().productsOfCart.length:0;

    let productsList = [];
    if(productsOfCart.length > 0){
     productsList = productsOfCart.map((product, index) => (
        <tr key={index}>
          <td><img src={`${urlImage}${product.image_path}`} className="img-thumbnail" width="20%" alt={`${product.title}`}/></td>
          <td><a onClick={this.handleProduct.bind(this, `${product.id}`)}>{product.title}</a></td>
          <td>{product.description}</td>
          <td>{product.min_price}</td>
          <td className="qty">
            <div className="signs">
              <button onClick={this.increment}>+</button>
              <button onClick={this.decrement}>-</button>
            </div>
            <input type="text" className="qty2" value={product.qty} onChange={(event) => this.updateQty2(event.target.value, index)}>
            </input>
          </td>
          <td>
            <i className="fas fa-trash-alt" onClick={this.deleteItem.bind(this, `${product.id}`)}></i>
          </td>
          <td>
            {Math.round(product.min_price*100 * product.qty)/100}&nbsp;€
          </td>
        </tr>
      ));
      const total = productsOfCart
        .map(product => (Math.round(product.min_price*100 * product.qty)/100))
        .reduce((total, value) => (total + value));
      productsList.push(
        <tr key={productsList.length}>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="qty"></td>
          <td></td>
          <td>{total}&nbsp;€</td>
        </tr>
      );
    }


    return (
      <div className="card_container">
        <div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Product name</th>
                  <th>Description</th>
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
          <div className="cardCoteACote">
            <Link to="/">
              <button type="button" className="btn btn-primary">Return</button>
            </Link>
            {
              numberProducts?
                (
                  <Link to="/shipping">
                    <button type="button" className="btn btn-primary" onClick={this.validCart}>Valid</button>
                  </Link>
                ):null
            }
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  productsOfCart: state.cartReducer.productsOfCart
})

// const mapDispatchToProps = (dispatch) => {
//   bindActionCreators({ deleteFromCart, updateQty }, dispatch)
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id) => deleteFromCartHandler(id, dispatch),
    updateQty: (qty, index) => updateQtyHandlers(qty, index, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));

// export default (Cart);
