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
    this.props.navigator.push({
      screen: 'pages.Login',
      title: 'Login'
    });
  };

  MainScreen = () => {
    this.props.navigator.push({
      screen: 'pages.Main',
      title: 'Account'
    });
  };

  render() {
          return ( 
              // Our default loading view while waiting to hear back from firebase
              <View style={styles.container}>
                <ToolbarAndroid title="Login" />
                <View style={styles.body}>
                  <ActivityIndicator size="large" />
                </View>
              </View>
          );
  }

}