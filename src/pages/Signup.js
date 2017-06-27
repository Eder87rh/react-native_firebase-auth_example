'use strict';
import {
  AppRegistry,
  View,
  ToolbarAndroid,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';  // Initialize Firebase
import { Spinner,Header, Title, Container, Content, List, ListItem, InputGroup, Input, Icon, 
         Text, Picker, Button } from 'native-base';
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
export default class Signup extends Component {

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

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({
          loading: false
        });
        alert("Account creation failed: " + error.message);
      });
  }

  goToLogin = () => {
    this.props.navigator.push({
      screen: 'pages.Login',
      title: 'Login',
      navigatorStyle: styles.navigatorStyle
    });
  }

  render() {
    const content = this.state.loading
      ?
      <Content contentContainerStyle={styles.container}>
        <View style={styles.body}>
          <Spinner style={{ alignSelf: 'center' }} color='blue' />
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
        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.signup}>
          <Text>Signup</Text>
        </Button>
        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.goToLogin} >
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

  
}