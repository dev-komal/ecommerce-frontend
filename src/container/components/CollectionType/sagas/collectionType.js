import { takeLatest, fork, call, put } from "redux-saga/effects";
import * as actionTypes from "../../../../core/constant/actionTypes";
import get from "lodash/get";
import isNull from "lodash/isNull";
import { getCollectionType } from "../services/collectionType.service";

const _ = { get, isNull };

function* watchGetCollectionType() {
  yield takeLatest(
    actionTypes.COLLECTION_TYPE_REQUEST,
    workerGetCollectionType
  );
}

//get project worker

function* workerGetCollectionType(action) {
  // code for handling get User.
  try {
    const response = yield call(getCollectionType, action.payload);
    const res_body = _.get(response, "data", {});

    const res_status = true;

    if (res_status) {
      yield put({
        type: actionTypes.COLLECTION_TYPE_SUCCESS,
        payload: _.get(response, "data", {}),
      });
    } else {
      yield put({
        type: actionTypes.COLLECTION_TYPE_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.COLLECTION_TYPE_FAIL });
  }
}

export default [fork(watchGetCollectionType)];
