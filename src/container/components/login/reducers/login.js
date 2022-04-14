import { updateObject } from "../../../../store/utility";
import * as actionTypes from "../../../../core/constant/actionTypes";
import jwt from "jsonwebtoken";
import { get, isEmpty } from "lodash";
import Storage from "../../../../core/helpers/storage";
const _ = { get, isEmpty };
const initState = {
  token: null,
  status: null,
  id: null,
  name: null,
  errors: "",
  success: "",
  loading: false,
  user: {},
  message: null,
  updateStatus: false,
};
// console.log('hello froom login reducer', this.success)

const storeAuthUser = (data) => {
  Storage.saveToken(data.token);
};

export const getTokenUser = (token) => {
  if (!token) {
    token = localStorage.getItem("token");
  }

  const userData = jwt.decode(token);
  if (!_.isEmpty(userData)) {
    return userData;
  } else {
    return {};
  }
};

const authSuccess = (state, action) => {
  console.log("ACTION SUCCESS", action);
  const data = _.get(action, "payload", {});

  const userDataToken = getTokenUser(data.token);

  if (data.status === 200) {
    storeAuthUser(action.payload.data);
    return updateObject(state, {
      user: { ...userDataToken },
      token: data.token,
      id: _.get(data, "id", ""),
      name: _.get(data, "first_name", ""),
      success: data.message,
      loading: false,
    });
  }
};

const authFail = (state, action) => {
  console.log("FAIL");
  const data = _.get(action, "payload", {});
  const status = _.get(action, "payload.message", "");

  console.log("MESSAGE", data.status);
  if (data.status === 401) {
    return updateObject(state, {
      errors: data.message,
      token: "",
      loading: false,
    });
  }
};

function login(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.ERROR_LOGIN:
      return authFail(state, action);
    default:
      return state;
  }
}

export default login;
