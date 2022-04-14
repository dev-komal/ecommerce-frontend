import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import { getContact, addData } from "../services/contact.service";
import get from "lodash/get";
import isNull from "lodash/isNull";

const _ = { get, isNull };

function* watchGetContact() {
  yield takeLatest(actionTypes.LIST_REQUEST, workerGetContact);
}

//get project worker

function* workerGetContact(action) {
  try {
    const response = yield call(getContact, action.payload);
    const res_body = _.get(response, "data.data.rows", {});
    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.CONTACT_USER_SUCCESS,
        payload: _.get(response, "data", []),
      });
    } else {
      yield put({
        type: actionTypes.CONTACT_USER_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.CONTACT_USER_FAIL });
  }
}

function* workerAdd(action) {
  try {
    const response = yield call(addData, action.payload);

    const res_body = _.get(response, "data", {});
    const res_status = _.get(res_body, "status", true);
    if (res_status) {
      yield put({
        type: actionTypes.CONTACT_ADD_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: actionTypes.CONTACT_ADD_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.CONTACT_ADD_FAIL });
  }
}
// watch for User action.
function* watchAdd() {
  yield takeLatest(actionTypes.CONTACT_ADD_REQUEST, workerAdd);
}

export default [fork(watchAdd)];
