import React from 'react';
import { Button, View } from 'react-native';

export default class Header extends React.Component {

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
            title="Create"
            onPress={() => this.props.navigation.navigate('Create')}
          />
        </View>
      );
    }

}
