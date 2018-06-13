import { FETCH_CATEGORIES_PRODUCTS_FAILURE, FETCH_CATEGORIES_PRODUCTS_SUCCESS, FETCH_CATEGORIES_PRODUCTS_BEGIN } from "../actions/ActionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_CATEGORIES_PRODUCTS_BEGIN:
      return{
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CATEGORIES_PRODUCTS_SUCCESS:
      return{
        ...state,
        loading: false,
        items: action.payload.products
      }
    case FETCH_CATEGORIES_PRODUCTS_FAILURE:
      return{
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state;
  }
}