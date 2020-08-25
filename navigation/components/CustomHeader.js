// https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/
import React from 'react';
import {Appbar} from 'react-native-paper';

export function CustomHeader({scene, previous, navigation}) {
  const {options} = scene.descriptor;

  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.routeName;

  const goBack = () => {
    navigation.goBack();
  };

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Appbar.Header>
      {previous !== undefined ? (
        <Appbar.BackAction onPress={goBack} />
      ) : (
        <Appbar.Action icon="menu" onPress={toggleDrawer} />
      )}

      <Appbar.Content title={title} />
      {/* <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" /> */}
    </Appbar.Header>
  );
}

export default CustomHeader;
