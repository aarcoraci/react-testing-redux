import * as actions from '../constants';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case actions.INCREASED_COUNTER:
      return state + 1;
    case actions.DECREASED_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
