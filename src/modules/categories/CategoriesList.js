import React, { Component } from "react";
import { fetchCategories } from "../../store/actions/categoriesAction";
import { connect } from "react-redux";

class CategoriesList extends Component{
  getCategories(){
    let { error, loading, categories } = this.props;
    if (error){
      return (
        <div>Error! {error.message}</div>
      );
    }else if (loading){
      return (
        <div>Loading...</div>
      )
    }else{
      return (
        console.log("categories", categories),
        <ul>
          {categories.map(category =>
            <li key={category.id}>{category.label}</li>
          )}
        </ul>
      );
    }
  }


  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render(){
    return (
      <div>{this.getCategories()}</div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  loading: state.categories.loading,
  error: state.categories.error
});

export default connect(mapStateToProps)(CategoriesList);