import * as actionTypes from "../../../../core/constant/actionTypes";
export function requestRegister(payload) {
  return {
    type: actionTypes.REGISTER_USER_REQUEST,
    payload: { ...payload },
  };
}
export function addRegister(payload) {
  return {
    type: actionTypes.ADD_USER_REQUEST,
    payload: { ...payload },
  };
}
