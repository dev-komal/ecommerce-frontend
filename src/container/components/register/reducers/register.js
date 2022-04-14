import * as actionTypes from "../../../../core/constant/actionTypes";
import { updateObject } from "../../../../store/utility";
const initialState = {
  status: null,
  errors: {},
  loading: false,
  message: "",
  pagination: null,
  registerData: [],
  registerDetails: {},
  updateStatus: false,
  userError: {},

};
const registerStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    registerData: [],
  });
};

const registerUserSuccess = (state, action) => {
  let newData = [...state.registerData];
  return updateObject(state, {
    loading: false,
    registerData: newData,
    updateStatus: true,
  });
};
const registerFail = (state, action) => {
  let newData = [...state.registerData];
  return updateObject(state, {
    loading: false,
    errors: _.get(newData, "errors", {}),
  });
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER_FAIL:
    case actionTypes.REGISTER_USER_START:
    case actionTypes.REGISTER_USER_REQUEST:
    case actionTypes.ADD_USER_REQUEST:
      return registerStart(state, action);

    case actionTypes.REGISTER_USER_FAIL:
      return registerFail(state, action);

    case actionTypes.ADD_USER_SUCCESS:
      return registerUserSuccess(state, action);

    default:
      return state;
  }
};
