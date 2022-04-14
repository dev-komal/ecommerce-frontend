import * as actionTypes from "../../../../core/constant/actionTypes";

export function loginRequest(payload) {
  return {
    type: actionTypes.LOGIN_USER_REQUEST,
    payload,
  };
}

export function loginSucceeded(token) {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    token,
  };
}

export function loginFailed(error) {
  console.log("ERROR");
  return {
    type: actionTypes.ERROR_LOGIN,
    error,
  };
}
