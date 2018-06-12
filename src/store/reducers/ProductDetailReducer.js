import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_BEGIN } from "../actions/ActionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.product
      }
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state;
  }
}