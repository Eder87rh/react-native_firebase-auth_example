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


export default class SendRestorePass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: ''
    }

    this.sendEmail = this.sendEmail.bind(this);

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
        </List>
        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.sendEmail}>
          <Text>Send me restauration email </Text>
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

async sendEmail() {
    DismissKeyboard();

    this.setState({
        loading: true
    });

    try {

        let auth = firebase.auth();

        await firebase.auth().sendPasswordResetEmail(this.state.email).then(() => {
            this.goToLogin();
        }, (error) => {
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

 goToLogin = () => {
    this.props.navigator.resetTo({
      screen: 'pages.Login',
      title: 'Login',
      navigatorStyle: styles.navigatorStyle
    });
  }

}
