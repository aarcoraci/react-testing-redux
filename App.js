/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "./state/counter/actions";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button
} from 'react-native';

const App = function () {

  const count = useSelector(state => state.countReducer);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(actions.increasedCounter());
  };

  const reduce = () =>{
    dispatch(actions.decreasedCounter());
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi</Text>
      <Text>counter is {count}</Text>
      <Button onPress={increase} title="Add Some"></Button>
      <Button onPress={reduce} title="Remove Some"></Button>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
