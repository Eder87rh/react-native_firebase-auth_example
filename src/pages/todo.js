import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Navigator,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
import {Container,Content,Spinner} from 'native-base';
//Pages
import Signup from './Signup';
import Login from './Login';
import Account from './Main';
import styles from '../styles/mainstyle.js';
import * as firebase from 'firebase';  // Initialize Firebase
import Firebase from '../firebase/firebase.js';


export default class todo extends Component {

  componentWillMount(){
    Firebase.initialise();
    this.getInitialView();
  }

  getInitialView = () => {
      firebase.auth().onAuthStateChanged((user) => {
           user ? this.MainScreen() : this.LoginScreen();
      });
  }

  LoginScreen = () => {
    this.props.navigator.resetTo({
      screen: 'pages.Login',
      title: 'Login'
    });
  };

  MainScreen = () => {
    this.props.navigator.resetTo({
      screen: 'pages.Main',
      title: 'Account'
    });
  };

  render() {
          return ( 
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.body}>
                        <Spinner style={{alignSelf: 'center'}}  color='blue' />
                    </View>
                </Content>
            </Container>
          );
  }

}