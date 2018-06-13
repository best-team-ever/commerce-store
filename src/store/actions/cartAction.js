import {ADD_TO_CART, CREATE_ORDER, CREATE_PAYMENT, CREATE_SHIPPING, DELETE_FROM_CART} from "./ActionTypes";

export const addToCart = (productsOfCart) => ({
  type: ADD_TO_CART,
  payload: { productsOfCart }
});

export const deleteFromCart = (id) => ({
  type: DELETE_FROM_CART,
  payload: { id }
});

export const createShipping = (shipping) => ({
  type: CREATE_SHIPPING,
  payload: { shipping }
});

export const createPayment = (payment) => ({
  type: CREATE_PAYMENT,
  payload: { payment }
})

export const createOrder = (order) => ({
  type: CREATE_ORDER,
  payload: { order }
});