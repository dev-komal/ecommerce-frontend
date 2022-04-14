import * as actionTypes from "../../../../core/constant/actionTypes";

export function requestCartList(payload) {
  return {
    type: actionTypes.GET_IN_CART_REQUEST,
    payload,
  };
}
