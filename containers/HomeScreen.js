import React from 'react';
import {Text, View, FlatList, 
  TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { SearchBar } from 'react-native-elements';

import { styles } from "../App";
import Header from "../components/Header";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log(window.STORE.items.length);
    this.state = {
      listData: window.STORE.items,
      search: ''
    };
  }

  onPressItem = (text) => {
    alert(text);
  }

  onPressSearch = (search) => {
    const listData = search 
        ? window.STORE.items.filter((item) => item.text.includes(search))
        : window.STORE.items;
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
