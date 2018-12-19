/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

 class WelcomeScreen extends Component {

     goToScreen = (screenName) => {

         Navigation.push(this.props.componentId, {
             component : {
                 name : screenName
             }
         })
     }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>


                <Button title ='Sign In' onPress={ ()=>this.goToScreen('SignIn') }   />

                <Button title ='Sign In' onPress={ ()=>this.goToScreen('SignUp') }
                  />

            </View>
        );
    }
}

export default WelcomeScreen;

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
