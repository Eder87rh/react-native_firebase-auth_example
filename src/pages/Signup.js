'use strict';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';  // Initialize Firebase
import { Header,Title,Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import NavStyle from '../styles/navStyle.js';
import React, {Component} from 'react';
import Login from './Login';
export default class Signup extends Component {
  static navigatorStyle = NavStyle.navigatorStyle;
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  
  signup = () => {
      this.setState({
        loading: true
      });

      
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
      .catch((error) => {
        this.setState({
          loading: false
        });
        alert("Account creation failed: " + error.message );
      });
  }

  render() {
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
           <Content>
                <List>
                 <ListItem>
                     <InputGroup>
                     <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                     <Input
                      onChangeText={(text) => this.setState({email: text})}
                      value={this.state.email}
                      placeholder={"Email Address"} />
                      </InputGroup>
                </ListItem>
                <ListItem>
                    <InputGroup>
                      <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                    <Input
                      onChangeText={(text) => this.setState({password: text})}
                      value={this.state.password}
                      secureTextEntry={true}
                      placeholder={"Password"} />
                    </InputGroup>
               </ListItem>
              </List>
              <Button block style={{ margin: 15, marginTop: 10 }}  onPress={this.signup}>
                <Text>Signup</Text>
              </Button>
              <Button block style={{ margin: 15, marginTop: 10 }}  onPress={this.goToLogin} >
                <Text>Go to Login</Text>
              </Button>
      </Content>
    ;
    // A simple UI with a toolbar, and content below it.
        return (
                  <Container>
                    {content}
                  </Container>
                )
  }
  goToLogin = () => {
    this.props.navigator.push({
        screen: 'pages.Login',
        title: 'Login'
    });
  }
}