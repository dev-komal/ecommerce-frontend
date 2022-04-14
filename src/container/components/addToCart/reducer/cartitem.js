import * as actionTypes from "../../../../core/constant/actionTypes";
import { updateObject } from "../../../../store/utility";

const initialState = {
  status: null,
  listCart: [],
};

const listCartStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    listCart: [],
  });
};

const listCartSuccess = (state, action) => {
  console.log("get cart data", action.payload);
  return updateObject(state, {
    listCart: action.payload,
    loading: false,
  });
};

export const cartList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_IN_CART_REQUEST:
      return listCartStart(state, action);

    case actionTypes.GET_IN_CART_SUCCESS:
      return listCartSuccess(state, action);

    default:
      return state;
  }
};
