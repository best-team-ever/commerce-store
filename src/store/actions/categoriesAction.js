import { FETCH_CATEGORIES_BEGIN, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from "./ActionTypes";

const urlApi = "https://decath-product-api.herokuapp.com/";
const urlImage = "https://www.decathlon.fr/media/";

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
      // .then(value => {
      //   value = value.map(category => {
      //     fetchCategoryProducts(category.id)
      //     .then(products => {
      //       if (products.length > 0) {
      //         category.image = `${urlImage}${products[0].image_path}`;
      //       } else {
      //         category.image = "null.jpg";
      //       }
      //     });
      //     return category;
      //   });
      //   return value;
      // })
      .then(json => {
        return dispatch(fetchCategoriesSuccess(json));
        // return json.categories;
      })
      .catch(error => dispatch(fetchCategoriesError(error)));
  };
}

export function fetchCategoryProducts(id) {
  return fetch(`${urlApi}categories/${id}/products`)
  .then(handleErrors)
  .then(res => res.json());
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
