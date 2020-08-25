import React from 'react';

import SettingsView from 'views/settings';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

import {defaultScreenOptions} from '../options';

const HomeView = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Settings"
        component={SettingsView}
        options={{headerTitle: 'Setting'}}
      />
    </Stack.Navigator>
  );
};

export default HomeView;
