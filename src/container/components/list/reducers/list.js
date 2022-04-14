import * as actionTypes from "../../../../core/constant/actionTypes";
import { updateObject } from "../../../../store/utility";

const initialState = {
  status: null,
  error: {},
  loading: false,
  message: "",
  pagination: null,
  listData: [],
  listDetails: {},
};
const listStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    listData: [],
  });
};
const listSuccess = (state, action) => {
  return updateObject(state, {
    listData: action.payload,
    loading: false,
  });
};

const getListData = (state, action) => {
  return updateObject(state, {
    listDetails: action.payload.data,
    loading: false,
  });
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIST_START:
    case actionTypes.LIST_REQUEST:
      return listStart(state, action);

    case actionTypes.LIST_SUCCESS:
      return listSuccess(state, action);

    case actionTypes.LIST_GET_DETAILS_SUCCESS:
      return getListData(state, action);

    default:
      return state;
  }
};
