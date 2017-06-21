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
import styles from '../styles/mainstyle.js'
import * as firebase from 'firebase';  // Initialize Firebase

  // //Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqg0M28yKqgeTDl1vHILw8tOJpTz81-Ls",
    authDomain: "reactfirebase-94e5b.firebaseapp.com",
    databaseURL: "https://reactfirebase-94e5b.firebaseio.com",
    projectId: "reactfirebase-94e5b",
     storageBucket: "reactfirebase-94e5b.appspot.com",
     messagingSenderId: "304181383641"
 };

if (!firebase.apps.length) { 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
}


export default class todo extends Component {

  componentWillMount(){
    //Check if userData is stored on device else open Login
    AsyncStorage.getItem('userData').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let openingPage = {openingPage: Login};
      if(user_data != null){
        this.setState({openingPage:Account});
        this.MainScreen();
      }else{
        this.setState(openingPage);
        this.LoginScreen();
      }
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