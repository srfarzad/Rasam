/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,WebView} from 'react-native';
//import { WebView } from "react-native-webview";


class Webview extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Webview
                    source={{ uri: "http://p30droid.com" }}
                    style={{ marginTop: 20 , height:'100%' , width:'320' }}
                    onLoadingError={(e)=>{console.log(e)}}
                    scalesPageToFit={true}
                    javaScriptEnabled={true}
                    bounces={false}
                />


            </View>
        );
    }
}

export default Webview;

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
