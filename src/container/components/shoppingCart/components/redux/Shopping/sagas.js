import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../redux/Shopping/shopping-types";
import {
  getCartData,
  addInCart,
  getInCart,
  getInCartByID,
  updateInCart,
  deleteInCartByID,
  orderForm,
  paymentBillForm,
  getOrderData,
} from "../Shopping/services";
import get from "lodash/get";
import isNull from "lodash/isNull";

const _ = { get, isNull };

// watch for User action.

//get project worker

function* workerGetCartList(action) {
  // code for handling get User.
  try {
    const response = yield call(getCartData, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.ADD_TO_CART_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.ADD_TO_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.ADD_TO_CART_FAILED });
  }
}

function* watchGetCartList() {
  yield takeLatest(actionTypes.ADD_TO_CART_REQUEST, workerGetCartList);
}

//ADD IN CART

function* workerGetAddInCart(action) {
  // code for handling get User.
  try {
    const response = yield call(addInCart, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.ADD_IN_CART_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.ADD_IN_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.ADD_IN_CART_FAILED });
  }
}

function* watchGetAddInCart() {
  yield takeLatest(actionTypes.ADD_IN_CART_REQUEST, workerGetAddInCart);
}

//get project worker

function* workerGetInCart(action) {
  // code for handling get User.
  try {
    const response = yield call(getInCart, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.GET_TO_CART_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.GET_TO_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.GET_TO_CART_FAILED });
  }
}

function* watchGetInCart() {
  yield takeLatest(actionTypes.GET_TO_CART_REQUEST, workerGetInCart);
}

//********************** GET CART DETAIL BY ID ACTION ******************************************************** */
function* workerGetInCartById(action) {
  try {
    const response = yield call(getInCartByID, action.payload);
    const res_body = _.get(response, "data", {});
    const res_status = _.get(response, "data.status", 200);

    if (res_status === 200) {
      yield put({
        type: actionTypes.GET_IN_CART_SUCCESS_BY_ID,
        payload: res_body,
      });
    } else {
      yield put({
        type: actionTypes.GET_IN_CART_FAILED_BY_ID,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.GET_IN_CART_FAILED_BY_ID });
  }
}

function* watchGetInCartById() {
  yield takeLatest(actionTypes.GET_IN_CART_REQUEST_BY_ID, workerGetInCartById);
}

//********************** UPDATE CART DETAIL BY ID ACTION ******************************************************** */
function* workerUpdateInCart(action) {
  try {
    const response = yield call(updateInCart, action.payload);
    const res_body = _.get(response, "data", {});
    const res_status = _.get(response, "data.status", 200);

    if (res_status === 200) {
      yield put({
        type: actionTypes.UPDATE_IN_CART_SUCCESS,
        payload: res_body,
      });
      yield put({
        type: actionTypes.RESET_STATUS,
      });
    } else {
      yield put({
        type: actionTypes.UPDATE_IN_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    yield put({ type: actionTypes.UPDATE_IN_CART_FAILED });
  }
}

function* watchUpdateInCart() {
  yield takeLatest(actionTypes.UPDATE_IN_CART_REQUEST, workerUpdateInCart);
}

/********************** DELETE CART DETAIL BY ID ACTION ******************************************************** */
function* workerDeleteInCartById(action) {
  try {
    const response = yield call(deleteInCartByID, action.payload);
    const res_body = _.get(response, "data", {});
    const res_status = _.get(response, "data.status", 200);

    if (res_status === 200) {
      yield put({
        type: actionTypes.DELETE_IN_CART_SUCCESS,
        payload: res_body,
      });
    } else {
      yield put({
        type: actionTypes.DELETE_IN_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.DELETE_IN_CART_FAILED });
  }
}

function* watchDeleteInCartById() {
  yield takeLatest(actionTypes.DELETE_IN_CART_REQUEST, workerDeleteInCartById);
}

/********************ORDER FORM REQUEST*************************/

function* workerAddOrderForm(action) {
  // code for handling get User.
  try {
    const response = yield call(orderForm, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.ORDER_FORM_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.ORDER_FORM_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.ORDER_FORM_FAILED });
  }
}

function* watchAddOrderForm() {
  yield takeLatest(actionTypes.ORDER_FORM_REQUEST, workerAddOrderForm);
}

/********************ORDER FORM REQUEST*************************/

function* workerAddPaymentBill(action) {
  // code for handling get User.
  try {
    const response = yield call(paymentBillForm, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.PAYMENT_BILL_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.PAYMENT_BILL_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    yield put({ type: actionTypes.PAYMENT_BILL_FAILED });
  }
}

function* watchAddPaymentBill() {
  yield takeLatest(actionTypes.PAYMENT_BILL_REQUEST, workerAddPaymentBill);
}

/********************ORDER GET REQUEST*************************/

function* workerOrderGetData(action) {
  // code for handling get User.
  try {
    const response = yield call(getOrderData, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.ORDER_GET_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.ORDER_GET_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    console.log("ERROR", err);
    yield put({ type: actionTypes.ORDER_GET_FAILED });
  }
}

function* watchOrderGetData() {
  yield takeLatest(actionTypes.ORDER_GET_REQUEST, workerOrderGetData);
}

export default [
  fork(watchGetCartList),
  fork(watchGetAddInCart),
  fork(watchGetInCart),
  fork(watchGetInCartById),
  fork(watchUpdateInCart),
  fork(watchDeleteInCartById),
  fork(watchAddOrderForm),
  fork(watchAddPaymentBill),
  fork(watchOrderGetData),
];
