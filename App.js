import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, StatusBar, Platform, ViewPagerAndroid } from 'react-native';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ToolbarAndroid style={styles.statusBar}>
          <StatusBar translucent={true}></StatusBar>
        </ToolbarAndroid>
        <ToolbarAndroid style={styles.toolbar} title="React Native">
        </ToolbarAndroid>
        <ViewPagerAndroid>

        </ViewPagerAndroid>
      </View>
    );
  }
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  toolbar: {
    backgroundColor: 'powderblue',
    height: 80
  },
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: 'skyblue'
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});
