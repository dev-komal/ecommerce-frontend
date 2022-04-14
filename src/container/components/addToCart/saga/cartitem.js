import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import { getCartData } from "../services/cartitem";
import get from "lodash/get";
import isNull from "lodash/isNull";

const _ = { get, isNull };

function* watchGetCartData() {
  yield takeLatest(actionTypes.GET_IN_CART_REQUEST, workerGetCartData);
}
//get project worker

function* workerGetCartData(action) {
  // code for handling get User.
  try {
    const response = yield call(getCartData, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.GET_IN_CART_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.GET_IN_CART_FAILED,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.GET_IN_CART_FAILED });
  }
}
export default [fork(watchGetCartData)];
