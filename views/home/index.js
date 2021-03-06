import React from 'react';

import CategoriesView from '../categories';
import CategoryView from '../category';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

const HomeView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesView} />
      <Stack.Screen name="Category" component={CategoryView} />
    </Stack.Navigator>
  );
};

export default HomeView;
