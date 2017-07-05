import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';
import RowComponent from './RowComponent';


class ListComponent extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <RowComponent 
                        navigator={this.props.navigator}
                        id={1}
                        text={'Email & Password'}
                        icon_ios = {'ios-mail-outline'} 
                        icon_android = {'md-mail'}/>
                    <RowComponent
                        navigator={this.props.navigator}
                        id={2}
                        text={'Facebook'}
                        icon_ios = {'logo-facebook'} 
                        icon_android = {'logo-facebook'}/>
                </Content>
            </Container>
        );
    }
}

export default ListComponent;  