import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import { addUserData } from "../services/register.service";
import get from "lodash/get";
import isNull from "lodash/isNull";

const _ = { get, isNull };

function* workerGetRegister(action) {
  // code for handling get User.
  try {
    const response = yield call(addUserData, action.payload);

    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.REGISTER_USER_SUCCESS,
        payload: _.get(response, "data", []),
      });
    } else {
      yield put({
        type: actionTypes.REGISTER_USER_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.REGISTER_USER_FAIL });
  }
}

function* watchGetList() {
  yield takeLatest(actionTypes.REGISTER_USER_REQUEST, workerGetRegister);
}

function* workerUserAdd(action) {
  try {
    const response = yield call(addUserData, action.payload);

    const res_body = _.get(response, "data", {});
    const res_status = _.get(res_body, "status", true);
    if (res_status) {
      yield put({
        type: actionTypes.ADD_USER_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: actionTypes.ADD_USER_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.ADD_USER_FAIL });
  }
}
// watch for User action.
function* watchUserAdd() {
  yield takeLatest(actionTypes.ADD_USER_REQUEST, workerUserAdd);
}

export default [fork(watchUserAdd)];
