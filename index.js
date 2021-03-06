/**
 * @format
 */
import 'react-native-gesture-handler';

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//#region redux and storage
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './state';
//#endregion

//#region navigation
import RootNavigator from 'navigation';
import {NavigationContainer} from '@react-navigation/native';
//#endregion

export default function Main() {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </ReduxProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
