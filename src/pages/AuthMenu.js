import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Body, Icon } from 'native-base';
import ListComponent from '../../components/ListComponent';

export default class AuthMenu extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <ListComponent navigator={this.props.navigator} />
                </Content>
            </Container>
        );
    }



}