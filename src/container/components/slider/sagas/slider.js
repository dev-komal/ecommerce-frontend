import { takeLatest, fork, call, put } from 'redux-saga/effects';
import * as actionTypes from '../../../../core/constant/actionTypes';
import { getSlider } from '../services/slider.service';
import get from 'lodash/get';
import isNull from 'lodash/isNull';

const _ = { get, isNull };

function* workerGetSlider(action) {
  try {

    const response = yield call(getSlider, action.payload);

    const res_body = _.get(response, 'data', {});
    const res_status = true;

    if (res_status) {

      yield put({
        type: actionTypes.SLIDER_SUCCESS,
        payload: _.get(response, 'data', []),
      });
    } else {
      ;
      yield put({
        type: actionTypes.SLIDER_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: actionTypes.SLIDER_FAIL });
  }
}
function* watchGetSlider() {
  yield takeLatest(actionTypes.LIST_REQUEST, workerGetSlider);
}

export default [fork(watchGetSlider)];
