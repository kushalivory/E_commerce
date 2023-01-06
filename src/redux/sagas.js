import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  POST_NEW_PRODUCT,
  POST_NEW_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
} from "./actions";
import axios from "axios";

function usersFetch() {
  return fetch(`https://fakestoreapi.com/products`).then((resp) => resp.json());
}
function postProductAPI(newProduct) {
  axios.post(`https://fakestoreapi.com/products`, { ...newProduct })
  .then((response) => {
      console.log(response.data, "Post API");
    });
}
function editProductAPI(newProduct) {
  // console.log({...newProduct},"edit");
  axios.put(`https://fakestoreapi.com/products/${newProduct?.id}`, { ...newProduct })
  .then((response) => {
      console.log(response.data, "Edit API");
    });
}
function deleteProductAPI(newProduct) {
  // console.log(newProduct,"delete");
  axios.delete(`https://fakestoreapi.com/products/${newProduct}`)
  .then((response) => {
      console.log(response.data, "Delete API");
    });
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}
function* postNewProduct(action) {
  let { payload } = action;
  const postedProduct = yield call(postProductAPI, payload);
}
function* editProductFunc(action) {
  let { payload } = action;
  const editedProduct = yield call(editProductAPI, payload);
}
function* deleteProductFunc(action) {
  let { payload } = action;
  const deletedProduct = yield call(deleteProductAPI, payload.id);
}

function* mySaga() {
  yield all([
    takeEvery(GET_USERS_FETCH, workGetUsersFetch),
    takeEvery(POST_NEW_PRODUCT, postNewProduct),
    takeEvery(EDIT_PRODUCT, editProductFunc),
    takeEvery(DELETE_PRODUCT, deleteProductFunc),
  ]);
}

export default mySaga;
