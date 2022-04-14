import { takeLatest, takeEvery, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import { authentication } from "../services/login.service";
import get from "lodash/get";

const _ = { get };

function* workerLogin(action) {
  const response = yield call(authentication, action.payload);
  console.log("REPONSE ", response);
  const res_body = _.get(response, "data.data");

  const res_status = _.get(res_body, "status", 200);
  try {
    // console.log("RESPONSE :", response);
    //This is to check if error or not

    console.log("RESPONSE STATUS :", res_status);
    if (res_status === 200) {
      console.log("STEP 1:");
      yield put({
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload: response.data,
      });
    } else {
      console.log("STEP 2:");

      yield put({
        type: actionTypes.ERROR_LOGIN,
        payload: response.data,
      });
    }
  } catch (err) {
    console.log("STEP 3:");

    yield put({
      type: actionTypes.ERROR_LOGIN,
      payload: response.data,
    });
  }
}

function* watchLogin() {
  yield takeEvery(actionTypes.LOGIN_USER_REQUEST, workerLogin);
}

export default [fork(watchLogin)];
