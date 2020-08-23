import * as actionTypes from './actionTypes';

export function requestUsers(amount) {
  return {
    type: actionTypes.REQUEST_USERS,
    payload: {
      amount,
    },
  };
}

export function receiveUsers(users) {
  return {
    type: actionTypes.RECEIVE_USERS,
    payload: {
      users: users,
    },
  };
}

// async

export function fetchUsers(amount) {
  return function (dispatch) {
    // dispatch the initial state
    dispatch(requestUsers(amount));

    // fetch and dispatch action when received from server
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(receiveUsers(json)));
  };
}
