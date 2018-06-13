import {
  ADD_TO_CART,
  CREATE_ORDER,
  CREATE_PAYMENT,
  CREATE_SHIPPING,
  DELETE_FROM_CART,
  ADD_REPEAT_PRODUCT
} from "../actions/ActionTypes";

const initialState = {
  productsOfCart: ""
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      return {
        ...state,
        productsOfCart: [...state.productsOfCart, action.payload.productsOfCart]
      }
    case DELETE_FROM_CART:
      return {
        ...state,
        productsOfCart: state.productsOfCart.filter(({id}) => action.payload.id !== id)
      }
    case ADD_REPEAT_PRODUCT:
      incrementQtyRepeatProducts(state.productsOfCart, action.payload.id);
      return {
        ...state,
        productsOfCart: [...state.productsOfCart]
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
    default:
      return state;
  }
}


function incrementQtyRepeatProducts(list, repeatId){
  let newList = list.forEach((element) => {
    if(element.id === repeatId){
      element.qty = element.qty+1;
      console.log("element.qty: ", element.qty);
    }
  })

  return newList;
}

