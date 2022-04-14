import * as actionTypes from "../../../../core/constant/actionTypes";
export function requestSlider(payload) {
  return {
    type: actionTypes.SLIDER_REQUEST,
    payload,
  };
}
