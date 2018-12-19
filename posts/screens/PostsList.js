import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class PostsList extends Component<Props> {

    render() {
        return (
            <View flex center bg-blue70>
                <Text text40>Posts List Screen</Text>
            </View>
        );
    }
}

export default PostsList;