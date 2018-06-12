import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProductDetail } from "../../store/actions/productDetailAction";
import { addToCart } from "../../store/actions/cartAction";
import { Link } from 'react-router-dom';

class ProductDetail extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
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
      rating: product.rating
    });

    console.log("addToCart: ", this.props.productsOfCart);

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

  render(){
    let product = this.getProductDetail().product;
    return(
      <div>
        <ul>
          <li>{product.title}</li>
          <li>{product.description}</li>
          <li>
            <Link to="/cart">
              <button onClick={this.handleClick}>Add to Cart</button>
            </Link>
          </li>
        </ul>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  product: state.product.items,
  loading: state.product.loading,
  error: state.product.error
})

function mapDispatchToProps  (dispatch) {
  let actions = bindActionCreators({addToCart}, dispatch);
  return {...actions, dispatch};
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);