import React, { Component } from "react";
import { fetchCategories } from "../../store/actions/categoriesAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Banner.css';

import TopNav from "../header/TopNav";
import MainNav from '../header/MainNav';
import HamburgerMenu from '../header/HamburgerMenu';
import Footer from '../footer/Footer';


class CategoriesList extends Component{
  getCategories(){
    let { error, loading, categories } = this.props;
    return {
      categories: categories,
      error: error,
      loading: loading
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render(){
    let list = "No categories";
    const result = this.getCategories();
    if (result.categories) {
      list = result.categories.map(category => (
        <div key={category.id} className="col-md-4">
          <div className="banner_item align-items-center">
            <div className="banner_category">
              <Link to={`/categories/${category.id}/products`}>{category.label}</Link>
            </div>
          </div>
        </div>
      ));
    }

    return (
      <div className="App">
        <header className="header">
          <TopNav/>
          <MainNav/>
        </header>
        <div className="fs_menu_overlay"></div>
        <HamburgerMenu/>
        <div className="main_slider"/>

        <div className="banner">
          <div className="container">
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
  categories: state.categories.items,
  loading: state.categories.loading,
  error: state.categories.error
});

export default connect(mapStateToProps)(CategoriesList);
