/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./containers/HomeScreen";
import CreateScreen from "./containers/CreateScreen";
import createStore from "./store";

createStore();

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
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
