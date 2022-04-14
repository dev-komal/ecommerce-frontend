import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import { getList, getListById } from "../services/list.service";
import get from "lodash/get";
import isNull from "lodash/isNull";

const _ = { get, isNull };

function* watchGetList() {
  yield takeLatest(actionTypes.LIST_REQUEST, workerGetList);
}
//get project worker

function* workerGetList(action) {
  // code for handling get User.
  try {
    const response = yield call(getList, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.LIST_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.LIST_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.LIST_FAIL });
  }
}

function* workerGetListById(action) {
  // code for handling get User.
  try {
    const response = yield call(getListById, action.payload);
    // console.log("message from saga from get list by adADFAS inner id", response)
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.LIST_GET_DETAILS_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.LIST_GET_DETAILS_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    console.log("ERROR ", err);
    yield put({ type: actionTypes.LIST_GET_DETAILS_FAIL });
  }
}
function* watchGetListById() {
  yield takeLatest(actionTypes.LIST_GET_DETAILS_REQUEST, workerGetListById);
}

export default [fork(watchGetList), fork(watchGetListById)];
