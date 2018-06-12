import { ADD_TO_CART } from "../actions/ActionTypes";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type){
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state, action.payload.items]
      }
    default:
      return state;
  }
}
