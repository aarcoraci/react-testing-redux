import React from 'react';
import {Button} from 'react-native';

const optionsWithDrawerToggle = ({navigation}) => {
  return {
    headerLeft: () => (
      <Button title="press" onPress={() => navigation.toggleDrawer()} />
    ),
  };
};

export {optionsWithDrawerToggle};
