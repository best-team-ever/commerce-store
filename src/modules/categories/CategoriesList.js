import React, { Component } from "react";
import { fetchCategories } from "../../store/actions/categoriesAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Banner.css';

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
        <div key={category.id} className="col-md-4">
          {/*<Link to={`/categories/${category.id}/products`}>{category.label}</Link>*/}
          <div className="banner_item align-items-center">
            <div className="banner_category">
              {/*<Route path={`${match.url}/:id`} render={({match}) => (*/}
                {/*<ProductsList categoryId={match.params.id} />*/}
              {/*)}>{category.label}</Route>*/}
              <Link to={`/categories/${category.id}/products`}>{category.label}</Link>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div className="banner">
        <div className="container">
          <div className="row">
            {list}

            {/*<ProductsList/>*/}
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

