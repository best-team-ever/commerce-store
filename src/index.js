import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./modules/cart/cart";
import ProductsList from "./modules/products/ProductsList";
import ProductDetail from "./modules/products/ProductDetail";
import Shipping from "./modules/shipping/Shipping";
import store from "./store/reducers/stores";
import Payment from "./modules/payment/Payment";
import Confirmation from "./modules/payment/Confirmation";
import PaymentSuccess from "./modules/payment/PaymentSuccess";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/categories/:id/products" component={ProductsList}></Route>
        <Route path="/products/:id" component={ProductDetail}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/shipping" component={Shipping}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/confirmation" component={Confirmation}/>
        <Route path="/paymentSuccess" component={PaymentSuccess}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
