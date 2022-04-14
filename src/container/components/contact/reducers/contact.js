import * as actionTypes from '../../../../core/constant/actionTypes';
import { updateObject } from '../../../../store/utility';
const initialState = {
  status: null,
  error: {},
  loading: false,
  message: '',
  pagination: null,
  contactData: [],
  contactDetails: {},
};
const contactStart = (state, action) => {
  return updateObject(state, {
    error: {},
    loading: true,
    contactData: [],
  });
};
const contactSuccess = (state, action) => {

  return updateObject(state, {
    contactData: action.payload.data,
    loading: false,
  });
};
const contactCreateSuccess = (state, action) => {
  let newData = [...state.dataData]
  return updateObject(state, {
    loading: false,
    contactData: newData,
  });
}

export const contact = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_USER_START:
    case actionTypes.CONTACT_USER_REQUEST:
    case actionTypes.CONTACT_ADD_REQUEST:
      return contactStart(state, action);

    case actionTypes.CONTACT_USER_SUCCESS:
      return contactSuccess(state, action);

    case actionTypes.CONTACT_ADD_SUCCESS:
      return contactCreateSuccess(state, action)

    default:
      return state;
  }
};
