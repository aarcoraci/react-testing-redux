/**
 *  logged in navigator
 */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//#region views
import SettingsView from '../views/settings';
//#endregion

//#region navigators
import HomeNavigator from './home';
//#endregion

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Settings" component={SettingsView} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
