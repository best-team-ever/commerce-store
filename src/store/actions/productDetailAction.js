import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "./ActionTypes";

export const fetchProductDetailBegin = () => ({
  type: FETCH_PRODUCT_BEGIN
});

export const fetchProductDetailSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { product }
});

export const fetchProductDetailFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: {error}
})

export function fetchProductDetail(productId) {
  return dispatch => {
    dispatch(fetchProductDetailBegin());
    return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductDetailSuccess(json));
        return json.product;
      })
      .catch(error => dispatch(fetchProductDetailFailure(error)));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}