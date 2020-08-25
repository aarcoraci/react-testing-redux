import React from 'react';

import CategoriesView from 'views/categories';
import CategoryView from 'views/category';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

import {optionsWithDrawerToggle} from 'navigation/options';

const HomeView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesView}
        options={optionsWithDrawerToggle}
      />
      <Stack.Screen name="Category" component={CategoryView} />
    </Stack.Navigator>
  );
};

export default HomeView;