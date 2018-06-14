import {ADD_TO_CART, CREATE_ORDER, CREATE_PAYMENT, CREATE_SHIPPING, DELETE_FROM_CART, ADD_REPEAT_PRODUCT, UPDATE_QTY} from "./ActionTypes";

export const addToCart = (newProduct) => ({
  type: ADD_TO_CART,
  payload: { newProduct }
});

export const deleteFromCartAction = (id) => ({
  type: DELETE_FROM_CART,
  payload: { id }
});

export const addRepeatProduct = (id) => ({
  type: ADD_REPEAT_PRODUCT,
  payload: { id }
})

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

export const updateQtyAction = (qty, index) => ({
  type: UPDATE_QTY,
  payload: { qty, index }
})
