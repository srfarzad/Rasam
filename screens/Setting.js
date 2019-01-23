/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation'
import call from 'react-native-phone-call'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card,CardItem} from 'native-base';


const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

class Setting extends Component {


    goToScreen = (screenName) => {

        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: screenName,
                        passProps: {
                            text: 'stack with one child',
                        },
                        options: {
                            topBar: {
                                title: {
                                    text: 'Google',
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
        return (
            <Container>

                <Header>


                </Header>

                <Content>


                    <View style={{height: 50}}>

                        <Text>وب سایت ما</Text>
                        <Button title="باز کردن" onPress={() => {

                            this.goToScreen('Webview')

                        }}/>

                    </View>


                    <Card>

                        <CardItem>

                            <Button  full primary onPress={()=>{
                                call(args).catch(console.error)

                            }} >

                                <Text> Call me </Text>


                            </Button>

                        </CardItem>

                    </Card>


                </Content>


            </Container>
        );
    }
}

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
