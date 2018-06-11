import { FETCH_CATEGORIES_PRODUCTS_BEGIN, FETCH_CATEGORIES_PRODUCTS_SUCCESS, FETCH_CATEGORIES_PRODUCTS_FAILURE } from "./ActionTypes";

export const fetchCategoriesProductsBegin = () => ({
  type: FETCH_CATEGORIES_PRODUCTS_BEGIN
});

export const fetchCategoriesProductsSuccess = (products) => ({
  type: FETCH_CATEGORIES_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchCategoriesProductsFailure = (error) => ({
  type: FETCH_CATEGORIES_PRODUCTS_FAILURE,
  payload: { error }
})

export function productsAction(categoryId) {
  return dispatch => {
    dispatch(fetchCategoriesProductsBegin());
    return fetch(`https://decath-product-api.herokuapp.com/categories/${categoryId}/products`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCategoriesProductsSuccess(json));
        return json.products;
      })
      .catch(error => dispatch(fetchCategoriesProductsFailure(error)));
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}