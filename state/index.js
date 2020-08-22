import {createStore, combineReducers} from 'redux';

import countReducer from './counter/reducers';

const rootReducer = combineReducers({countReducer});

export default createStore(rootReducer);
