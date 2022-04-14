import * as actionTypes from "../../../../core/constant/actionTypes";
export function requestList(payload) {
  return {
    type: actionTypes.LIST_REQUEST,
    payload,
  };
}

export function requestListbyId(payload) {
  return {
    type: actionTypes.LIST_GET_DETAILS_REQUEST,
    payload,
  };
}
