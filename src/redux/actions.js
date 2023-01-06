export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT";
export const POST_NEW_PRODUCT_SUCCESS = "POST_NEW_PRODUCT_SUCCESS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});

export const postNewProduct = (value) => {
  return {
    type: POST_NEW_PRODUCT,
    payload: value,
  };
};
export const editProduct = (value) => {
  return {
    type: EDIT_PRODUCT,
    payload: value,
  };
};
export const deleteProduct = (value) => {
  return {
    type: DELETE_PRODUCT,
    payload: value,
  };
};

export const addProductInCart = (value) => {
  return {
    type: "Add",
    payload: value,
  };
};
