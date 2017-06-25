'use strict';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  dismissKeyboard
} from 'react-native';
import { Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React, { Component } from 'react';
import Signup from './Signup';
import Account from './Main'
import styles from '../styles/mainstyle.js';
import * as firebase from 'firebase';  // Initialize Firebase
import DismissKeyboard from "dismissKeyboard";

export default class Login extends Component {

  static navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#3F51B5',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white',
    topBarElevationShadowEnabled: false,
    navBarHideOnScroll: true,
    tabBarHidden: true,
    drawUnderTabBar: true
  };

  constructor(props) {
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }

    this.goToSignup = this.goToSignup.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    // The content of the screen should be inputs for a username, password and submit button.
    // If we are loading then we display an ActivityIndicator.
    const content = this.state.loading ?

      <View style={styles.body}>
        <ActivityIndicator size="large" />
      </View>

      :

      <Content>
        <List>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => this.setState({ email: text })}
                value={this.state.email}
                placeholder={"Email Address"} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
                secureTextEntry={true}
                placeholder={"Password"} />
            </InputGroup>
          </ListItem>
        </List>
        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.login}>
          <Text>Login </Text>
        </Button>

        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.goToSignup} >
          <Text>Are you new here? </Text>
        </Button>
      </Content>
      ;

    // A simple UI with a toolbar, and content below it.
    return (
      <Container>
        {content}
      </Container>
    );
  }

  async login() {

    DismissKeyboard();

    this.setState({
      loading: true
    });

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
          this.showError(error);
        });
    }
    catch (error) {
      this.showError(error);
    }
  }

  showError = (error) => {
    this.setState({
      loading: false
    });

    alert('Login Failed. Please try again' + error);
  }


  // Go to the signup page
  goToSignup() {
    this.props.navigator.push({
      screen: 'pages.Signup',
      title: 'Sign Up'
    });
  }
}
