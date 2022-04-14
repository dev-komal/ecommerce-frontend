import * as actionTypes from '../../../../core/constant/actionTypes';
import { updateObject } from '../../../../store/utility';
const initialState = {
  status: null,
  error: {},
  loading: false,
  message: '',
  pagination: null,
  collectionTypeData: [],
  collectionTypeDetails: {},
};
const collectionTypeStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    collectionTypeData: [],
  });
};
const collectionTypeSuccess = (state, action) => {
  return updateObject(state, {
    collectionTypeData: action.payload,
    loading: false,
  });
};

export const collectionType = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COLLECTION_TYPE_START:
    case actionTypes.COLLECTION_TYPE_REQUEST:
      return collectionTypeStart(state, action);

    case actionTypes.COLLECTION_TYPE_SUCCESS:
      return collectionTypeSuccess(state, action);

    default:
      return state;
  }
};
