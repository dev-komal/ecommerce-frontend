import { isEmpty, get } from 'lodash';

const jwt = require('jsonwebtoken');
const _ = { isEmpty, get };

/**
 * Get user token from local storage
 *
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Set user access token
 * @param token JWT string
 */
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Remove user token from local storage
 *
 */
export const removeToken = () => {
  localStorage.removeItem('token');
};

/**
 * Verify the User token
 * @param token Pass the token if needs to be verify explicitly
 */
export const verifyToken = (token) => {
  // Set the token from localStorage
  if (!token) {
    token = localStorage.getItem('token');
  }

  const userData = jwt.decode(token);

  // Check if has valid key
  if (!_.isEmpty(userData) && typeof userData === 'object') {
    // check if token is expired or not
    const expTime = userData.exp * 1000;
    if (Date.now() < expTime) {
      return { valid: true, message: 'Token is valid' };
    } else {
      return { valid: false, message: 'Token is expired' };
    }
  } else {
    return { valid: false, message: 'Invalid access token' };
  }
};

/**
 * Get the token user details
 * @param token Pass the token if needs to be verify explicitly
 */
export const getTokenUser = (token) => {
  // Set the token from localStorage
  if (!token) {
    token = localStorage.getItem('token');
  }

  const userData = jwt.decode(token);

  // Check if has valid key
  if (!_.isEmpty(userData)) {
    return userData;
  } else {
    return {};
  }
};

/**
 * Logout user from session
 *
 */
export const userLogout = () => {
  localStorage.removeItem('token');
};
