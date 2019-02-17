import React from 'react';
import {Text, View} from 'react-native';

import {Header, styles } from "../App";

export default class DetailsScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Header navigation={this.props.navigation} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
          </View>
        </View>
      );
    }
  }