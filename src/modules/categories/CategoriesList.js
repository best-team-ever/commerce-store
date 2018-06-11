import React, { Component } from "react";
import { fetchCategories } from "../../store/actions/categoriesAction";
import { connect } from "react-redux";
import './Banner.css';

class CategoriesList extends Component{
  getCategories(){
    let { error, loading, categories } = this.props;
    return {categories: categories, error: error, loading: loading};
  }


  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render(){
    let list = "No categories";
    const result = this.getCategories();
    if (result.categories) {
      console.log(result.categories);
      list = result.categories.map(category => (
        <div key={category.id} class="col-md-4">
          <div class="banner_item align-items-center">
            <div class="banner_category">
              <a href={"categories/" + category.id + "/products"}>{category.label}</a>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div class="banner">
        <div class="container">
          <div class="row">
            {list}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items,
  loading: state.categories.loading,
  error: state.categories.error
});

export default connect(mapStateToProps)(CategoriesList);
