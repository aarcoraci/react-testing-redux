import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import countReducer from './counter/reducers';
import userReducers from './users/reducers';

const rootReducer = combineReducers({countReducer, users: userReducers});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
