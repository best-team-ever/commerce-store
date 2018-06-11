import { FETCH_CATEGORIES_BEGIN, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from "./ActionTypes";

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesError = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});


export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesBegin);
    return fetch("https://decath-product-api.herokuapp.com/categories")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCategoriesSuccess(json));
        return json.categories;
      })
      .catch(error => dispatch(fetchCategoriesError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}