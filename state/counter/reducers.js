import * as actionsTypes from './actionTypes';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case actionsTypes.INCREASED_COUNTER:
      return state + 1;
    case actionsTypes.DECREASED_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
