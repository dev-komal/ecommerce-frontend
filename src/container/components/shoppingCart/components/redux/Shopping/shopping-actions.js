import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART_REQUEST,
    payload: {
      id: itemID,
    },
  };
};

export const addInCart = (payload) => {
  return {
    type: actionTypes.ADD_IN_CART_REQUEST,
    payload: payload,
  };
};

export const getInCartByID = (payload) => {
  return {
    type: actionTypes.GET_IN_CART_REQUEST_BY_ID,
    payload: payload,
  };
};
export const updateInCart = (payload) => {
  return {
    type: actionTypes.UPDATE_IN_CART_REQUEST,
    payload: payload,
  };
};

export const deleteInCartByID = (payload) => {
  return {
    type: actionTypes.DELETE_IN_CART_REQUEST,
    payload: payload,
  };
};

export function requestCartList(payload) {
  return {
    type: actionTypes.GET_TO_CART_REQUEST,
    payload: payload,
  };
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export function requestCartData(payload) {
  return {
    type: actionTypes.FETCH_DATA_CART_REQUEST,
    payload,
  };
}

export const orderFormRequest = (payload) => {
  return {
    type: actionTypes.ORDER_FORM_REQUEST,
    payload: payload,
  };
};

export const paymentBillRequest = (payload) => {
  return {
    type: actionTypes.PAYMENT_BILL_REQUEST,
    payload: payload,
  };
};

export const orderGetDetailsRequest = (payload) => {
  return {
    type: actionTypes.ORDER_GET_REQUEST,
    payload: payload,
  };
};

export const resetFieldStatus = () => {
  return {
    type: actionTypes.RESET_STATUS,
  };
};
