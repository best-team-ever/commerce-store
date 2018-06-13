import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProductDetail } from "../../store/actions/productDetailAction";
import { addToCart } from "../../store/actions/cartAction";
import { Link } from 'react-router-dom';

import './ProductDetail.css';

const urlImage = "https://www.decathlon.fr/media/";

class ProductDetail extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getProductDetail(){
    let { error, loading, product } = this.props;
    return {
      product: product,
      error: error,
      loading: loading
    }
  }

  handleClick = () => {
    let product = this.getProductDetail().product;
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
  }

  componentDidMount(){
    this.props.dispatch(fetchProductDetail(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.load !== this.props.load){
      this.load(nextProps)
    }
  }

  componentDidUpdate(prevProps){
    let oldId = prevProps.match.params.id;
    let newId = this.props.match.params.id;
    if (newId !== oldId)
      this.props.dispatch(fetchProductDetail(this.props.match.params.id));
  }

  rating(value) {
    let result = [];
    for(let i = 0; i < 5; i++) {
      result.push(<li key={i}><i className={(i < Math.round(value)) ? "fa fa-star" : "fa fa-star-o"} aria-hidden="true"></i></li>)
    }
    return result;
  }

  render(){
    let product = this.getProductDetail().product;
    return(
      <div className="container single_product_container">
    		<div className="row">
    			<div className="col">
    				<div className="breadcrumbs d-flex flex-row align-items-center">
    					<ul>
    						<li><a href="/">Home</a></li>
    						<li><a href="/"><i className="fa fa-angle-right" aria-hidden="true"></i>%NAME_OF_CATEGORY%</a></li>
    						<li className="active"><a href="./"><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product</a></li>
    					</ul>
    				</div>
    			</div>
    		</div>

    		<div className="row">
    			<div className="col-lg-7">
    				<div className="single_product_pics">
    					<div className="row">
    						<div className="col-lg-3 thumbnails_col order-lg-1 order-2">
    						</div>
    						<div className="col-lg-9 image_col order-lg-2 order-1">
    							<div className="single_product_image">
                    <img src={`${urlImage}${product.image_path}`} alt={product.title} />
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-5">
    				<div className="product_details">
    					<div className="product_details_title">
    						<h2>{product.title}</h2>
    						<p>{product.description}</p>
    					</div>
    					<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
    						<span className="ti-truck"></span><span>free delivery</span>
    					</div>
    					<div className="original_price">{product.crossed_price > 0 ? `${product.crossed_price} €` : ""}</div>
    					<div className="product_price">{`${product.min_price} €`}</div>
    					<ul className="star_rating">{this.rating(product.rating)}</ul> <span>{product.rating}</span>
              <div class="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                <Link to={`/cart/${product.id}`}>
    						  <div className="red_button product_add_to_cart_button">add to cart</div>
                </Link>
              </div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.items,
  loading: state.product.loading,
  error: state.product.error,
})

function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({addToCart}, dispatch);
  return {...actions, dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
