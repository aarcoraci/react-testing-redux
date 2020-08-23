import * as actionTypes from './actionTypes';

const initialReceiveUsersState = {
  isFetching: false,
  users: [],
};

export default function (state = initialReceiveUsersState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_USERS:
      return {...state, isFetching: true};
    case actionTypes.RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        users: action.payload.users,
      };
    default:
      return state;
  }
}
