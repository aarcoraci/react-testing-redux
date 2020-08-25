import React from 'react';
import CategoriesView from 'views/categories';
import CategoryView from 'views/category';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

import {defaultScreenOptions} from '../options';

const HomeView = () => {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Categories"
        options={{headerTitle: 'Home'}}
        component={CategoriesView}
      />
      <Stack.Screen name="Category" component={CategoryView} />
    </Stack.Navigator>
  );
};

export default HomeView;
