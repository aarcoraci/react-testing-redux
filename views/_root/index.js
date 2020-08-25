/**
 * root view for keeping navigation
 */
import React from 'react';

import {useSelector} from 'react-redux';

import HomeView from '../home';
import SettingsView from '../settings';
import LoginView from '../login';

//#region navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
//#endregion

const RootView = () => {
  const auth = useSelector((state) => state.auth);
  return auth.loggedIn ? <LoggedView /> : <LoginView />;
};

const LoggedView = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeView} />
      <Drawer.Screen name="Settings" component={SettingsView} />
    </Drawer.Navigator>
  );
};

export default RootView;
