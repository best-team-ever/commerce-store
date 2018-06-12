import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store/reducers/stores";
import { Provider } from "react-redux";
import Cart from "./modules/cart/cart";
import ShippingForm from "./modules/shipping/shipping";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsList from "./modules/products/ProductsList";
import ProductDetail from "./modules/products/ProductDetail";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/categories/:id/products" component={ProductsList}></Route>
        <Route path="/products/:id" component={ProductDetail}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/shipform" componant={ShippingForm}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
