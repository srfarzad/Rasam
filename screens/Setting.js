/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Navigation } from 'react-native-navigation'


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
            <View style={styles.container}>

                <View style={{height: 50}}>

                    <Text>وب سایت ما</Text>
                    <Button title="باز کردن"  onPress={ ()=>{

                        this.goToScreen('Webview')

                    } } />


                </View>



            </View>
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
