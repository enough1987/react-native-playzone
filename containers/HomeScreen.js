import React from 'react';
import {Text, View, FlatList, 
  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from "react-native-vector-icons/Ionicons";
import { SearchBar } from 'react-native-elements';

import { styles } from "../App";
import Header from "../components/Header";

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      listData: this.props.items,
      search: ''
    };
  }

  onPressItem = (text) => {
    alert(text);
  }

  onPressSearch = (search) => {
    const listData = search 
        ? this.props.items.filter((item) => item.text.includes(search))
        : this.props.items;
    this.setState({
        listData: listData,
        search
    });
  }

  render() { 

    return (
      <View style={styles.container}>

        <Header navigation={this.props.navigation}/>

        <View style={styles.topContainer}>
        
            <SearchBar
                containerStyle={{backgroundColor: 'white', borderWidth: 1, marginBottom: 10 }}
                inputContainerStyle={{backgroundColor: 'white', borderWidth: 1, }}
                placeholder="Type Here..."
                onChangeText={this.onPressSearch}
                value={this.state.search}
            />

            <FlatList
                data={this.state.listData}
                renderItem={({item}) => {
                return <TouchableOpacity 
                  style={styles.topContainerItem}
                  onPress={() => this.onPressItem(item.text)}>
                  <Icon style={styles.topContainerItemIcon}
                      name="ios-bug"
                      color="#ccc"
                      size={25}
                      />
                  <Text style={styles.topContainerItemText}>{item.text}</Text>
                </TouchableOpacity>
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

      </View>
    );

  }

}
  
const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(mapStateToProps, null)(HomeScreen);