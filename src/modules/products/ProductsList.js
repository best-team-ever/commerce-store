import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../store/actions/productsAction";
import { addToCart, addRepeatProduct } from "../../store/actions/cartAction";

import './ProductsList.css';

const urlImage = "https://www.decathlon.fr/media/";

class ProductsList extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getProducts(){
    let { error, loading, products } = this.props;
    return {
      products: products,
      error: error,
      loading: loading
    }
  }

  getProductsOfCart(){
    let { productsOfCart } = this.props;
    return {
      productsOfCart: productsOfCart
    }
  }

  getOneDetail(productId){
    const productList = this.getProducts().products;
    let product = "";
    productList.forEach((p) => {
      if (p.id === productId){
        product = p;
      }
    })
    return product;
  }

  handleClick (productId){
    let product = this.getOneDetail(productId);
    let productsOfCart = this.getProductsOfCart().productsOfCart;
    let canAddNewProduct = true;
    if(productsOfCart.length !== 0){
      productsOfCart.forEach((p) => {
        if (p.id === product.id){
          canAddNewProduct = false;
        }
      })
    } else {
      canAddNewProduct = true;
    }

    if (canAddNewProduct === true){
      this.props.addToCart({
        id: product.id,
        decathlon_id: product.decathlon_id,
        title: product.title,
        description: product.description,
        brand_id: product.brand_id,
        min_price: product.min_price,
        max_price: product.max_price,
        crossed_price: product.crossed_price,
        percent_reduction: product.percent_reduction,
        image_path: product.image_path,
        rating: product.rating,
        qty: 1
      });
    }else {
      this.props.addRepeatProduct(product.id)
    }

    // this.props.addToCart({
    //   id: product.id,
    //   decathlon_id: product.decathlon_id,
    //   title: product.title,
    //   description: product.description,
    //   brand_id: product.brand_id,
    //   min_price: product.min_price,
    //   max_price: product.max_price,
    //   crossed_price: product.crossed_price,
    //   percent_reduction: product.percent_reduction,
    //   image_path: product.image_path,
    //   rating: product.rating,
    //   qty: 0
    // });

    console.log("handle:: ", this.props);
    this.props.history.push("/cart");
  }

  componentDidMount(){
    this.props.dispatch(fetchProducts(this.props.match.params.id));
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.match.params.id;
    let newId = this.props.match.params.id;
    if (newId !== oldId)
      this.props.dispatch(fetchProducts(this.props.match.params.id));
  }


  render(){
    let list = "No products";
    const result = this.getProducts();
    if (result.products) {
      list = result.products.map(product => {
        let productBubble = "";
        let crossedPrice = "";
        if (product.percent_reduction > 0) {
          productBubble = (
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span>{(product.percent_reduction > 0) ? `-${product.percent_reduction}%` : ""}</span>
            </div>
          );
          crossedPrice = <span>{product.crossed_price} €</span>;
        }

        return (
          <div key={product.id} className="product-item">
            <div className="product discount product_filter">
              <Link to={`/products/${product.id}`}>
                <div className="product_image">
                  <img src={`${urlImage}${product.image_path}`} alt={product.title} />
                </div>
                <div className="favorite favorite_left"></div>
                {productBubble}
                <div className="product_info">
                  <h6 className="product_name">
                    {product.title}
                  </h6>
                  <div className="product_price">{product.min_price} €{crossedPrice}</div>
                </div>
              </Link>
            </div>
            <div className="red_button add_to_cart_button">
              <a onClick={this.handleClick.bind(this, `${product.id}`)}>add to cart</a>
            </div>
          </div>
        )
      });
    }

    return(
      <div className="container">
        <div className="product-grid">
          <div className="row">
            {list}
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  productsOfCart: state.cartReducer.productsOfCart
});

function mapDispatchToProps (dispatch) {
  let actions = bindActionCreators({ addToCart, addRepeatProduct }, dispatch);
  return {...actions, dispatch};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsList));
