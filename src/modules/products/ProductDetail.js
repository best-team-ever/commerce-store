import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductDetail } from "../../store/actions/productDetailAction";

class ProductDetail extends Component{

  getProductDetail(){
    let { error, loading, product } = this.props;
    return {
      product: product,
      error: error,
      loading: loading
    }
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
          <li><button>Add to Cart</button></li>
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

export default connect(mapStateToProps)(ProductDetail);