import React from 'react';

import SettingsView from 'views/categories';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

import {optionsWithDrawerToggle} from 'navigation/options';

const HomeView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsView}
        options={optionsWithDrawerToggle}
      />
    </Stack.Navigator>
  );
};

export default HomeView;
