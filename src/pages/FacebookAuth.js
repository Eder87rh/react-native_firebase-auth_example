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



export default class FacebookAuth extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
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
            </Content>
            ;


        return (
            <Container >
                {content}
            </Container>
        );
    }

}