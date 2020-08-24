/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as ReduxProvider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './state';

export default function Main() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
