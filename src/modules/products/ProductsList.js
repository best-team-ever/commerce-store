import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/productsAction";

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
    console.log("xxxxxxxxxxxxxvvr: ", this.props.match);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  componentDidUpdate (prevProps) {
    let oldId = prevProps.match.params.id
    let newId = this.props.match.params.id
    if (newId !== oldId)
      this.props.dispatch(fetchProducts(this.props.match.params.id));
  }


  render(){
    return(
      this.getProducts().products.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductsList);