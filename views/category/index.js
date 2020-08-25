import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import * as userActions from '../../state/auth/actions';

const CategoryView = ({route, navigation}) => {
  const {categoryId} = route.params;

  useEffect(() => {
    navigation.setOptions({title: `category: ${categoryId}`});
  });

  const dispatch = useDispatch();
  const attemptLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This a category page ({categoryId})</Text>
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
