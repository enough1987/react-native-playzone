import React from 'react';
import {View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { styles } from "../App";
import Header from "../components/Header";
import { addItem } from "../store_actions/index";

class CreateScreen extends React.Component {

    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        text: ""
      };
    }

    create = () => {
      console.log(' state: ', this.state);
      if (this.state.text) {
        this.props.addItem({ text: this.state.text });
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
  
const mapStateToProps = state => ({
  items: state.items.items
})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);