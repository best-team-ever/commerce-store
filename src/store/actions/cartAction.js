
import {
  ADD_TO_CART,
  CREATE_ORDER,
  CREATE_PAYMENT,
  CREATE_SHIPPING,
  DELETE_FROM_CART,
  ADD_REPEAT_PRODUCT,
  UPDATE_QTY,
  SIGNED,
  DELETE_CART, CHECKOUT_BEGIN, CHECKOUT_SUCCESS, CHECKOUT_FAILURE
} from "./ActionTypes";

export const addToCart = (newProduct) => ({
  type: ADD_TO_CART,
  payload: { newProduct }
});

export const deleteFromCartAction = (id) => ({
  type: DELETE_FROM_CART,
  payload: { id }
});

export const deleteCartAction = () => ({
  type: DELETE_CART,
  payload: {}
})

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
});

export const signedAction = (signedInOut) => ({
  type: SIGNED,
  payload: { signedInOut }
});

/*******************Checkout action begin*********************/
export const getTokenBegin = () => ({
  type: CHECKOUT_BEGIN
});

export const getTokenSuccess = (paymentStatus) => ({
  type: CHECKOUT_SUCCESS,
  payload: { paymentStatus }
});

export const getTokenFailure = (error) => ({
  type: CHECKOUT_FAILURE,
  payload: { error }
})

export const getToken = (token) => {
  return dispatch => {
    dispatch(getTokenBegin());
    return fetch("/charge", {
      method: "POST",
      body: JSON.stringify(token),
      headers: { "Content-Type": "application/json" }
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(getTokenSuccess(json));
        return json.paymentStatus;
      })
      .catch(error => dispatch(getTokenFailure(error)));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
/*******************Checkout action fin*********************/
