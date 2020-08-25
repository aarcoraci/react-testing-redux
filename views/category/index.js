import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import * as userActions from '../../state/auth/actions';

const CategoryView = ({route}) => {
  const {categoryId} = route.params;
  console.log(categoryId);

  const dispatch = useDispatch();

  const attemptLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the home page</Text>
      <Button title="logout" onPress={attemptLogout} />
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

export default CategoryView;
