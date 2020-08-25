import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

//#region navigation
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//#endregion

const SettingsView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the settings page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const settingsWrapper = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsView} />
    </Stack.Navigator>
  );
};

export default settingsWrapper;
