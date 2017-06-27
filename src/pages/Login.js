'use strict';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  dismissKeyboard
} from 'react-native';
import { Spinner,Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import * as firebase from 'firebase';  // Initialize Firebase
import DismissKeyboard from "dismissKeyboard";


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }

    this.goToSignup = this.goToSignup.bind(this);
    this.login = this.login.bind(this);
  }

  render() {
    const content = this.state.loading ?

      <Content contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <Spinner color='blue' />
        </View>
      </Content>

      :

      <Content contentContainerStyle={styles.container}>
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
      <Container >
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

  goToSignup() {
    this.props.navigator.push({
      screen: 'pages.Signup',
      title: 'Sign Up',
      navigatorStyle:styles.navigatorStyle
    });
  }
}
