import { ADD_TO_CART } from "./ActionTypes";

export const addToCart = (productsOfCart) => ({
  type: ADD_TO_CART,
  payload: { productsOfCart }
});
