import * as actionTypes from './actionTypes';

export function login(userName) {
  return {
    type: actionTypes.USER_LOGGED_IN,
    payload: {
      authToken: 'test token',
      userName: userName,
    },
  };
}

export function logout() {
  return {
    type: actionTypes.USER_LOGGED_OUT,
  };
}
