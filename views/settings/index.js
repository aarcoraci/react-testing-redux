import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

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

export default SettingsView;
