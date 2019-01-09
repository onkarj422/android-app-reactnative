import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, StatusBar, Platform, ViewPagerAndroid } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor} from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './src/navigator/AppNavigation';
import { uiTheme } from './customization/theme';
import { ThemeContext, getTheme } from 'react-native-material-ui';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <ThemeContext.Provider value={getTheme(uiTheme)}>
            <AppNavigation>
            </AppNavigation>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}
