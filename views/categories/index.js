import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import * as userActions from '../../state/auth/actions';

//#region navigation
import {useNavigation} from '@react-navigation/native';
//#endregion

const CategoriesView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const attemptLogout = () => {
    dispatch(userActions.logout());
  };

  const goToCategory = () => {
    navigation.navigate('Category', {categoryId: 100});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the categories page</Text>
      <Button title="logout" onPress={attemptLogout} />
      <Button title="go to category" onPress={goToCategory} />
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

export default CategoriesView;
