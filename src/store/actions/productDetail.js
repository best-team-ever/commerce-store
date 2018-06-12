import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_SUCCESS } from "ActionTypes";

export const fetchProductDetailBegin = () => ({
  type: FETCH_PRODUCT_BEGIN
});

export const fetchProductDetailSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { product }
})