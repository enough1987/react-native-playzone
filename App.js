/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from "./containers/HomeScreen";
import CreateScreen from "./containers/CreateScreen";
import MapScrean from "./containers/MapScrean";
import AuthScreen from "./containers/AuthScreen";
import appReducer from "./store_reducers/index";

const store = createStore(
  appReducer
);

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Create: CreateScreen,
    Map: MapScrean,
    Auth: AuthScreen
  },
  {
    initialRouteName: "Auth"
  }
);
const AppContainer = createAppContainer(Navigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  map: {
    width: "100%",
    height: "50%"
  },
  textInput: {
    height: 40,
    padding: 6,
    marginBottom: 6,
    borderColor: 'blue',
    borderWidth: 1
  },
  searchInput: {
    borderColor: '#bbb',
    borderWidth: 1,
    marginBottom: 10
  },
  topContainer: {
    //paddingTop: 50
  },
  topContainerItem: {
    flexDirection: 'row',
  },
  topContainerItemIcon: {
    width: 50
  },
  topContainerItemText: {
  }
});
export {
  styles
};
