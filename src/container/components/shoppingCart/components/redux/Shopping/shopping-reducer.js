import * as actionTypes from "./shopping-types";
import { isUndefined } from "lodash";
import { updateObject } from "../../../../../../store/utility";
import get from "lodash/get";
const _ = { get };

const INITIAL_STATE = {
  cart: [],
  currentItem: null,
  addInCart: [],
  cartData: [],
  cartdataByID: {},
  orderForm: [],
  updateStatus: false,
  cartCount: 0,
  updateCart: false,
  deleteFlag: false,
  billData: [],
  orderData: [],
};

const addInCart = (state, action) => {
  return updateObject(state, {
    loading: false,
    addInCart: [],
    updateCart: true,
  });
};

const paymentBillRequest = (state, action) => {
  return updateObject(state, {
    loading: false,
    billData: [],
  });
};

const getInCartByID = (state, action) => {
  console.log("BY ID", action.payload.data);
  return updateObject(state, {
    loading: false,
    cartdataByID: action.payload.data,
  });
};

const updateIncart = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateStatus: true,
    updateCart: [],
  });
};

const deleteIncart = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateCart: [],
    deleteFlag: true,
  });
};

const getInCartData = (state, action) => {
  return updateObject(state, {
    cartData: action.payload,
    loading: false,
  });
};

const orderFormSuccess = (state, action) => {
  return updateObject(state, {
    orderForm: action.payload,
    loading: false,
  });
};

const getOrderData = (state, action) => {
  return updateObject(state, {
    orderData: action.payload,
    loading: false,
  });
};

const resetStatus = (state, action) => {
  return updateObject(state, {
    updateStatus: false,
    deleteFlag: false,
  });
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_SUCCESS:
      // Great Item data from products array
      const dataData = action.payload;

      const inCart = state.cart.find((item) => item.id === dataData.id);

      // const item = dataData.find((product) => product.id === action.payload.id);

      const updatedCart = inCart
        ? { ...inCart, qty: inCart.qty + 1 }
        : { ...dataData, qty: 1 };

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...updatedCart }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.ADD_IN_CART_REQUEST:

    case actionTypes.GET_TO_CART_REQUEST:

    case actionTypes.UPDATE_IN_CART_REQUEST:

    case actionTypes.GET_IN_CART_REQUEST_BY_ID:

    case actionTypes.DELETE_IN_CART_REQUEST:

    case actionTypes.ORDER_FORM_REQUEST:

    case actionTypes.ORDER_GET_REQUEST:

    case actionTypes.PAYMENT_BILL_REQUEST:

    case actionTypes.ADD_IN_CART_SUCCESS:
      return addInCart(state, action);

    case actionTypes.UPDATE_IN_CART_SUCCESS:
      return updateIncart(state, action);

    case actionTypes.GET_TO_CART_SUCCESS:
      return getInCartData(state, action);

    case actionTypes.DELETE_IN_CART_SUCCESS:
      return deleteIncart(state, action);

    case actionTypes.GET_IN_CART_SUCCESS_BY_ID:
      return getInCartByID(state, action);

    case actionTypes.ORDER_FORM_SUCCESS:
      return orderFormSuccess(state, action);

    case actionTypes.PAYMENT_BILL_SUCCESS:
      return paymentBillRequest(state, action);

    case actionTypes.ORDER_GET_SUCCESS:
      return getOrderData(state, action);

    case actionTypes.UPDATE_IN_CART_FAILED:

    case actionTypes.GET_IN_CART_FAILED_BY_ID:

    case actionTypes.DELETE_IN_CART_FAILED:

    case actionTypes.ORDER_FORM_FAILED:

    case actionTypes.ORDER_GET_FAILED:

    case actionTypes.RESET_STATUS:
      return resetStatus(state, action);

    default:
      return state;
  }
};

export default shopReducer;
