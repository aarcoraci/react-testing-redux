import * as actionTypes from '../constants';

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
