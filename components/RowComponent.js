import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';
import { TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import styles from '../src/styles/mainstyle.js';



class RowComponent extends Component {


    pressIn = () => {
        switch (this.props.id) {
            case 1: { //Mail & password
               this.goToLoginPassword();
                break;
            }
            case 2: { //Facebook
                this.goToFacebookAuth();
                break;
            }
            default: {
                //statements; 
                break;
            }
        }
    }

    goToLoginPassword = () => {
        this.props.navigator.push({
            screen: 'pages.Login',
            title: 'Login',
            navigatorStyle: styles.navigatorStyle
        });
    }

    goToFacebookAuth = () => {
        this.props.navigator.push({
            screen: 'pages.FacebookAuth',
            title: 'Facebook',
            navigatorStyle: styles.navigatorStyle
        });
    }

    goToPhoneAuth = () => {
        this.props.navigator.push({
            screen: 'pages.PhoneAuth',
            title: 'Phone Login',
            navigatorStyle: styles.navigatorStyle
        });
    }


    render() {
        return (
            <ListItem icon onPress={this.pressIn}>
                <Left>
                    <Icon ios={this.props.icon_ios} android={this.props.icon_android} style={{ alignSelf: 'center' }} />
                </Left>
                <Body>
                    <Text>{this.props.text}</Text>
                </Body>
            </ListItem>
        );
    }

}

export default RowComponent; 