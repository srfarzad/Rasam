/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';

//import Pushe from 'react-native-pushe'
import {I18nManager} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Navigation} from 'react-native-navigation'
//import  {goToScreen} from  'navigate';
//import  styles from '../src/styles/style'
import firebase from 'react-native-firebase';


class Home extends Component {


    registerUser(){

        firebase.auth().createUserWithEmailAndPassword("test@gmail.com", "12saDDD@@")
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log(user)
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(error)
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });

    }



    loginuser(){

        firebase.auth().signInWithEmailAndPassword("test@gmail.com","Asd!2345")
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log(user)
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(error)
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }


    loginuserPhone(){

        firebase.auth().signInWithPhoneNumber("0098912344566")
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log(user)
            })
            .catch((error) => {
                const { code, message } = error;
                console.log(error)
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }


    getBestData() {


        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({application: responseJson})
            })
            .catch((error) => {
                console.log(error)
            })

    }

    getNewData() {


        fetch('http://androidsupport.ir/market/getNewApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({newApplication: responseJson})
            })
            .catch((error) => {
                console.log(error)
            })


    }

    getAllData() {


        fetch('http://androidsupport.ir/market/getAllApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({newApplication: responseJson})
            })
            .catch((error) => {
                console.log(error)
            })


    }


    constructor(props) {
        //    Pushe.initialize(true);
        super(props);

        this.state = {

            application: null,
            newApplication: null,
            allApplication: null,

        }
    }

    componentDidMount() {
        this.getBestData();
        this.getNewData();
        this.getAllData();
        this.registerUser();
    }


    goToScreen = (screenName, item) => {

        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: screenName,
                        passProps: {
                            text: 'stack with one child',
                            item: item
                        },
                        options: {
                            topBar: {
                                title: {
                                    text: item.title,
                                    fontSize: 14,
                                    color: 'red',
                                }
                            }
                        },
                    }
                }]
            }
        });


    }


    render() {

        // console.log(this.state.application)

        return (


            <Container style={styles.container}>


                <Header>

                    <Right>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Right>


                </Header>

                <Content>

                    <View style={{height: 220}}>

                        <ImageSlider loopBothSides
                                     autoPlayWithInterval={3000} images={[
                            'http://androidsupport.ir/picpic/images/react-native.jpg',
                            'http://androidsupport.ir/picpic/images/images2.jpg',
                            'http://androidsupport.ir/picpic/images/farzad.jpg'
                        ]}/>

                    </View>


                    <Text style={styles.welcome}>برترین محصولات</Text>

                    <FlatList
                        style={{flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', height: 144}}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.application}

                        renderItem={({item}) =>

                            <TouchableOpacity
                                onPress={() =>
                                    this.goToScreen('Product', item)
                                }
                            >
                                <View style={styles.card}>

                                    <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                           style={{width: 96, height: 96}}></Image>
                                    <Text style={styles.text}>{item.title}</Text>

                                </View>

                            </TouchableOpacity>

                        }
                    />


                    <Text style={styles.welcome}>جدیدترین محصولات</Text>

                    <FlatList
                        style={{flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', height: 144}}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.newApplication}

                        renderItem={({item}) => <View style={styles.card}>

                            <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                   style={{width: 96, height: 96}}></Image>
                            <Text style={styles.text}>{item.title}</Text>

                        </View>}
                    />


                    <Text style={styles.welcome}>همه محصولات</Text>

                    <FlatList
                        style={{flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', height: 144}}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.application}

                        renderItem={({item}) => <View style={styles.card}>

                            <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                   style={{width: 96, height: 96}}></Image>
                            <Text style={styles.text}>{item.title}</Text>

                        </View>}
                    />


                </Content>


            </Container>


        );
    }
}

export default Home;


const styles = StyleSheet.create({
    container: {},
    welcome: {
        fontFamily: "irsans",
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    text: {
        fontFamily: "irsans",
        textAlign: 'center',
        color: '#333333',
        marginTop: 5,

    },

    card: {
        width: 144,
        height: 144,
        backgroundColor: '#ffffff',
        marginRight: 15,
        marginTop: 15,
        alignItems: 'center',
    },

});