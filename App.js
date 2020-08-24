/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from './state/counter/actions';
import * as userActions from './state/users/actions';
import * as authActions from './state/auth/actions';

import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const App = function () {
  const count = useSelector((state) => state.countReducer);
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const getMeUsers = () => {
    dispatch(userActions.fetchUsers(100));
  };

  const increase = () => {
    dispatch(actions.increasedCounter());
  };

  const reduce = () => {
    dispatch(actions.decreasedCounter());
  };

  const login = () => {
    dispatch(authActions.login('angel'));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi</Text>
      <Text>counter is {count}</Text>
      <Button onPress={increase} title="Add Some" />
      <Button onPress={reduce} title="Remove Some" />
      <Text>There are {users.users.length} users</Text>
      <Button onPress={getMeUsers} title="Get Users" />
      <Text style={{marginTop: 20}}>User logged is {auth.userName}</Text>
      <Button onPress={login} title="login" />
      <Button onPress={logout} title="logout" />
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

export default App;
