import React from 'react';
import {Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { styles } from "../App";
import Header from "../components/Header";

export default class CreateScreen extends React.Component {

    constructor(props) {
      super(props);
      console.log(window.STORE.items.length);
      this.state = {
        text: ""
      };
    }

    create = () => {
      console.log(' state: ', this.state);
      if (this.state.text) {
        window.STORE.items.push({ text: this.state.text });
        this.setState({ text: '' })
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Header navigation={this.props.navigation} />
          <View style={{ flex: 1 }}>
           
            <Input
              placeholder='text'
              value={this.state.text}
              onChangeText={ (text) => this.setState({text}) }
            />
            <Button
              title="Create"
              type="outline"
              onPress={this.create}
            />


          </View>
        </View>
      );
    }

}
  