'use strict';
import {
    AppRegistry,
    View,
    ToolbarAndroid,
    ActivityIndicator,
    dismissKeyboard
} from 'react-native';
import { Spinner, Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
import React, { Component } from 'react';
import styles from '../styles/mainstyle.js';
import * as firebase from 'firebase';  // Initialize Firebase
import DismissKeyboard from "dismissKeyboard";



export default class PhoneAuth extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        <Container >
            <Content contentContainerStyle={styles.container}>
                <View style={styles.body}>
              
                </View>
            </Content>
        </Container>
    }

}