import { ADD_TO_CART } from "../actions/ActionTypes";

const initialState = {
  productsOfCart: ""
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      // return {
      //   ...state,
      //   productsOfCart: [...state, action.payload.productsOfCart]
      // }
      // return [...state, action.payload.productsOfCart]
      return {
        productsOfCart: action.payload.productsOfCart
      }
    default:
      return state;
  }
}
