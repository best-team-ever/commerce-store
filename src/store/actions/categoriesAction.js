import { FETCH_CATEGORIES_BEGIN, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from "./ActionTypes";

const urlApi = "https://decath-product-api.herokuapp.com/";

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
    return fetch(`${urlApi}categories`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const sorted = json.sort( (a, b) => (a.label.localeCompare(b.label)));
        return dispatch(fetchCategoriesSuccess(sorted));
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
