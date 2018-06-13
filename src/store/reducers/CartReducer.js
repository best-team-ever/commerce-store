import {ADD_TO_CART, CREATE_ORDER, CREATE_PAYMENT, CREATE_SHIPPING, DELETE_FROM_CART, UPDATE_QTY} from "../actions/ActionTypes";

const initialState = {
  productsOfCart: []
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      return {
        ...state,
        productsOfCart: [...state.productsOfCart, action.payload.productsOfCart]
      }
    case DELETE_FROM_CART:
      console.log("reducer");
      return {
        ...state,
        productsOfCart: state.productsOfCart.filter(({id}) => action.payload.id !== id)
      }
    case CREATE_SHIPPING:
      return {
        ...state,
        shipping: action.payload.shipping
      }
    case CREATE_PAYMENT:
      return {
        ...state,
        payment: action.payload.payment
      }
    case CREATE_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload.order]
      }
    case UPDATE_QTY:
      const newArray = state.productsOfCart.map((value, indexMap) => {
        if (action.payload.index === indexMap) {
          return {...value, qty: action.payload.qty}
        } else {
          return value;
        }
      })
      console.log("newArray : ", newArray);
      return {
        ...state, productsOfCart : newArray
      }
    default:
      return state;
  }
}
