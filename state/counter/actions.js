import * as actionTypes from './actionTypes';

export function increasedCounter() {
  return {
    type: actionTypes.INCREASED_COUNTER,
  };
}

export function decreasedCounter() {
  return {
    type: actionTypes.DECREASED_COUNTER,
  };
}
