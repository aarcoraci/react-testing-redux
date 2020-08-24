import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';

//#region persistence
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
//#endregion

//#region root reducer creation
import countReducer from './counter/reducers';
import userReducers from './users/reducers';
import authReducers from './auth/reducers';
const rootReducer = combineReducers({
  countReducer,
  users: userReducers,
  auth: authReducers,
});
//#endregion

//#region persistence configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//#endregion

// output
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
let persistor = persistStore(store);

export {store, persistor};
