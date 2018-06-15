import React, { Component } from "react";
import { fetchCategories } from "../../store/actions/categoriesAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './categories.css';
import {images} from './categories_images';
const urlImage = "https://www.decathlon.fr/media/";

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

class CategoriesList extends Component{
  getCategories(startId, numItem){
    let { error, loading, categories } = this.props;
    const filtered = categories.filter((category, id) => (id >= startId && id < startId+numItem));
    return {
      categories: filtered,
      numPages: Math.ceil(categories.length / numItem),
      error: error,
      loading: loading
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render(){
    const nbByPage = 12;
    let first = 1;
    const query = getQueryVariable("range");
    if (query) {
      first = Number.parseInt(query.split("-")[0], 10);
    }

    const result = this.getCategories(first, nbByPage);

    let list = (<div>No categories</div>);
    if (result.categories) {
      list = result.categories.map(category => (
        <div key={category.id} className="col-md-3">
          <div className="banner_item align-items-center" style = {{backgroundImage: `url(${urlImage}${images[category.id]})`}}>
            <div className="banner_category">
              <Link to={`/categories/${category.id}/products`}>{category.label}</Link>
            </div>
          </div>
        </div>
      ));
    }
    let pages = [];
    for(let i = 0; i < result.numPages; i++) {
      pages.push(
        <li key={i}>
          <Link to={`./categories?range=${1+i*nbByPage}-${(i+1)*nbByPage}`}>{i+1}</Link>
        </li>
      );
    }

    return (
      <div className="Categories">
        <div className="container">
  				<div className="products_iso">
  					<div className="row">
  						<div className="col">
                <div className="product_sorting_container product_sorting_container_top">
                  <div className="pages d-flex flex-row align-items-center">
                    <div className="page_current">
                      <span>{(first-1)/nbByPage+1}</span>
                      <ul className="page_selection">{pages}</ul>
                    </div>
                    <div className="page_total"><span>of</span> {result.numPages}</div>
                    {/* <div id="next_page" className="page_next">
                      <Link to={`./categories?range=${(first+1)*nbByPage}-${(first+2)*nbByPage-1}`}>
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>

                <div className="product-grid">
                  <div className="row">
                    {list}
                  </div>
                </div>

                <div className="product_sorting_container product_sorting_container_bottom clearfix">
  							</div>
              </div>
            </div>
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
