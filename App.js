/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./containers/HomeScreen";
import DetailsScreen from "./containers/DetailsScreen";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
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
  styles,
  Header
};
