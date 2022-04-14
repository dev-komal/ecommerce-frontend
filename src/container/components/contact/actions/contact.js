import * as actionTypes from "../../../../core/constant/actionTypes";
export function requestContact(payload) {
  return {
    type: actionTypes.CONTACT_USER_REQUEST,
    payload: { ...payload },
  };
}
export function addContact(payload) {
  return {
    type: actionTypes.CONTACT_ADD_REQUEST,
    payload: { ...payload },
  };
}
