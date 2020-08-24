import * as actionsTypes from './actionTypes';

const initialState = {
  loggedIn: false,
  authToken: '',
  userName: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.USER_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        authToken: action.payload.authToken,
        userName: action.payload.userName,
      };
    case actionsTypes.USER_LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
        authToken: '',
        userName: '',
      };
    default:
      return state;
  }
}
