import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import categoriesReducer from "./CategoriesReducer";

let rootReducers = combineReducers({ categories: categoriesReducer });

let store;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  store = createStore(rootReducers, applyMiddleware(thunk));
} else {
  store = createStore(rootReducers);
}

export default store;