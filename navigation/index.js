/**
 * root view for keeping navigation
 */
import React from 'react';
import {useSelector} from 'react-redux';

import LoginView from '../views/login';

import AppNavigator from './AppNavigator';

const RootView = () => {
  const auth = useSelector((state) => state.auth);
  return auth.loggedIn ? <AppNavigator /> : <LoginView />;
};

export default RootView;
