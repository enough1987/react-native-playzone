import React from 'react';
import {View, Button, Text , TextInput, AsyncStorage} from 'react-native';
import { connect } from 'react-redux';

import { styles } from "../App";

class AuthScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        loading: true,
        form: 'login',
        signup: {
            login : {
                value: "",
                dirty: false,
                valid: false
            }, 
            email : {
                value: "",
                dirty: false,
                valid: false
            },
            password : {
                value: "",
                dirty: false,
                valid: false
            },
            copyPassword : {
                value: "",
                dirty: false,
                valid: false
            }
        },
        login: {
            login : {
                value: "",
                dirty: false,
                valid: false
            }, 
            password : {
                value: "",
                dirty: false,
                valid: false
            }         
        }
    };

    this.chachTocken();
  }

  chachTocken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
        console.log('TOCKEN');
        this.props.navigation.replace('Home');
    }
    this.setState({
        loading: true
    });
  }

  switchForm = () => {
    const form = this.state.form === 'signup' 
        ? 'login' 
        : 'signup';
    this.setState({
        form
    });
  }


  submit = async () => {
    await AsyncStorage.setItem('userToken', 'true');
    this.props.navigation.replace('Home');
  }

  change = (name , value) => {
    this.setState({
        [ this.state.form ] : {
            ... this.state[this.state.form],
            [ name ] : {
                ...this.state[this.state.form][name],
                value
            }
        }
    });
  }

  render() {
    if( this.state.loading ) {
       return <View style={styles.container} >
        <Text> Loading ... </Text>
       </View> 
    }
 
    return (
      <View style={styles.container} >

            <Button
              title={ "Switch to " + ( this.state.form === 'signup' ? 'login' : 'signup' ) }
              type="outline"
              onPress={this.switchForm}
            />

                <TextInput ref="login" 
                    placeholder="login"
                    autoCapitalize = "none"
                    style={styles.textInput} 
                    onChangeText={ (value) => this.change("login", value) } 
                    value={ (value) => this.change("login", value) }  />
                {
                this.state.form === 'signup' ?
                <TextInput ref="email" 
                    placeholder="email"
                    autoCapitalize = "none"
                    style={styles.textInput} 
                    onChangeText={ (value) => this.change("email", value) } 
                    value={this.state[this.state.form].email.value} /> : null
                }
                <TextInput ref="password" 
                    placeholder="password"
                    autoCapitalize = "none"
                    style={styles.textInput} 
                    onChangeText={ (value) => this.change("password", value) } 
                    value={this.state[this.state.form].password.value} />
                {
                this.state.form === 'signup' ?
                <TextInput ref="copyPassword" 
                    placeholder="copyPassword"
                    autoCapitalize = "none"
                    style={styles.textInput} 
                    onChangeText={ (value) => this.change("copyPassword", value) } 
                    value={this.state[this.state.form].copyPassword.value} /> : null
                }

        <Button
              title="Submit"
              type="outline"
              onPress={this.submit}
            />
      </View>
    );
  }

}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

