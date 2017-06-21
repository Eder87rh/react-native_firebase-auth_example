import * as firebase from 'firebase';  
import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';  
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Input } from 'native-base';    
import ListComponent from './ListComponent';

class AppFirebase extends Component {  
    constructor(){
        super();

        this.state = {
            nuevo: '',
            lista: [
                        {
                            id: 1,
                            name: 'pollo',
                            done: false
                        },
                        {
                            id: 2,
                            name: 'sopa',
                            done: false
                        },
                        {
                            id: 3,
                            name: 'ropa',
                            done: false
                        }
                    ]
        }

    }

    changeDone = (item) => {
        console.log(item);
        this.state.lista = this.state.lista.filter(i => i !== item);
        this.state.lista.push(item);
        this.setState({lista: this.state.lista});
    }

    agregarItem = () => {
        let nuevo = this.state.nuevo

        // Get a key for a new Post.
        let newPostKey = firebase.database().ref().child('items').push().key;

        nuevo = {
                    id:newPostKey,
                    name:nuevo,
                    done:false
                };

        // Write the new post's data simultaneously in the posts list and the user's post list.
        let updates = {};
        updates['/items/' + newPostKey] = nuevo;
        return firebase.database().ref().update(updates);
        
        this.state.lista.push(nuevo);
        this.setState({lista: this.state.lista});
        console.log(nuevo);
    }

    listenForItems = (itemsRef) => {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var lista = [];
            snap.forEach((child) => {
                lista.push({
                      name: child.val().name,
                      done: child.val().done,  
                      id: child.key
                });
            });

            this.setState({
                lista: lista
            });

        });
    }

    borrar = (item) => {
        let updates = {};
        updates['/items/' + item.id] = null;
        firebase.database().ref().update(updates);

    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        this.listenForItems(itemsRef);
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Input  value={this.state.nuevo}
                            placeholder='Que otra cosa necesitas?'
                            onChangeText={ nuevo => this.setState({nuevo}) }
                            />
                    <View style={styles.container}>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                            borrar={this.borrar}
                            />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full onPress={this.agregarItem} >
                        <Text>Agregar</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

export default AppFirebase;



  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBqg0M28yKqgeTDl1vHILw8tOJpTz81-Ls",
    authDomain: "reactfirebase-94e5b.firebaseapp.com",
    databaseURL: "https://reactfirebase-94e5b.firebaseio.com",
    projectId: "reactfirebase-94e5b",
    storageBucket: "reactfirebase-94e5b.appspot.com",
    messagingSenderId: "304181383641"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);