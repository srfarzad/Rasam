/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { WebView } from "react-native-webview";


class Webview extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: "https://google.com" }}
                    style={{ marginTop: 20 }}
                    onLoadProgress={e => console.log(e.nativeEvent.progress)}
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
