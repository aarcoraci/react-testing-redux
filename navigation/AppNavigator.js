/**
 *  logged in navigator
 */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//#region navigators
import HomeNavigator from './home';
import SettingsNavigator from './settings';
//#endregion

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
