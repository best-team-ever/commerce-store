import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productsAction";


import TopNav from '../header/TopNav';
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';

import './ProductsList.css';

const urlImage = "https://www.decathlon.fr/media/";

class ProductsList extends Component{

  getProducts(){
    let { error, loading, products } = this.props;
    return {
      products: products,
      error: error,
      loading: loading
    }
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
          <div key={product.id} className="product-item col-sm-3">
            <div className="product discount product_filter">
              <div className="product_image">
                <img src={`${urlImage}${product.image_path}`} alt={product.title} />
              </div>
              <div className="favorite favorite_left"></div>
              {productBubble}
              <div className="product_info">
                <h6 className="product_name">
                  <Link to={`/products/${product.id}`}>{product.title}</Link>
                </h6>
                <div className="product_price">${product.min_price} €{crossedPrice}</div>
              </div>
            </div>
            <div className="red_button add_to_cart_button"><a href={`/addCart/${product.id}`}>add to cart</a></div>
          </div>
        )
      });
    }

    return(
      <div className="App">
        <header className="header">
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>

        <div className="container">
          <div className="product-grid">
            <div className="row">
              {list}
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductsList);
