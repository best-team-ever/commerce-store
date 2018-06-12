import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import logger from "redux-logger";
import categoriesReducer from "./CategoriesReducer";
import productsReducer from "./ProductsReducer";
import productDetailReducer from "./ProductDetailReducer";

let rootReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productDetailReducer
});

let store;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  store = createStore(rootReducers, applyMiddleware(thunk, logger));
} else {
  store = createStore(rootReducers, applyMiddleware(thunk, logger));
}

export default store;