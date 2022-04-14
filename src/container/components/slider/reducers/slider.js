// import get from 'lodash/get';
// import remove from 'lodash/remove';
import * as actionTypes from '../../../../core/constant/actionTypes';
import { updateObject } from '../../../../store/utility';
// const _ = {get, remove};
const initialState = {
  status: null,
  error: {},
  loading: false,
  message: '',
  pagination: null,
  sliderData: [],
  sliderDetails: {},
};
const sliderStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    listData: [],
  });
};
const sliderSuccess = (state, action) => {
  return updateObject(state, {
    sliderData: action.payload,
    loading: false,
  });
};

export const slider = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SLIDER_START:
    case actionTypes.SLIDER_REQUEST:
      return sliderStart(state, action);

    case actionTypes.SLIDER_SUCCESS:
      return sliderSuccess(state, action);

    default:
      return state;
  }
};
