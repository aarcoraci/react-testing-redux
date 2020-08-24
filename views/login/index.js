import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import * as userActions from '../../state/auth/actions';

const LoginView = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const attemptLogin = () => {
    dispatch(userActions.login('angel'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the login page</Text>
      <TextInput
        value={username}
        placeholder="username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        value={password}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="login" onPress={attemptLogin} />
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

export default LoginView;
