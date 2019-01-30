/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Alert, Button, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

class Welcome extends Component {


    /* async componentDidMount() {
         try {


               //  goToAuth()

         } catch (err) {
             console.log('error: ', err)
             goToAuth()
         }
     }*/


    goToScreen = (screenName) => {


        console.log(screenName)


        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: screenName,
                    }
                }]
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>


                <Button title ="Sign In" onPress={ ()=>this.goToScreen('SignIn') }   />

                <Button title ="Sign In" onPress={ ()=>this.goToScreen('SignUp') }
                />



            </View>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
