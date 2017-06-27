'use strict';
import {
  AppRegistry,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';
import React, { Component } from 'react';
import { Spinner,Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Picker, Button } 
         from 'native-base';
import * as firebase from 'firebase';  // Initialize Firebase
import styles from '../styles/mainstyle.js';

// Styles specific to the account page
const accountStyles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  }
});

export default class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    }
  }

  async componentWillMount() {
    // Get User Credentials
    const userData = await firebase.auth().currentUser;

    this.setState({
      user: userData,
      loading: false
    });

    this.logout = this.logout.bind(this);

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
      this.state.user &&
      <Content contentContainerStyle={styles.container}>
        <View style={accountStyles.email_container}>
          <Text style={accountStyles.email_text}>{this.state.user.email}</Text>
        </View>
        {/*<Image
                      style={styles.image}
                      source={{uri: this.state.user.photoURL}} />*/}
        <Button block style={{ margin: 15, marginTop: 10 }} onPress={this.logout}>
          <Text>Logout</Text>
        </Button>
      </Content>
      ;

    return (
      <Container>
        {content}
      </Container>
    );
  }

  async logout() {
    try {
      await firebase.auth().signOut().then(() => {
        this.props.navigator.push({
          screen: 'pages.Login',
          title: 'Login',
          navigatorStyle:styles.navigatorStyle
        })
      }, (error) =>  {
         alert('Logout Failed. Please try again' + error);
      });


    } catch (error) {
      console.log(error);
    }

  }
}