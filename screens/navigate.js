import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation'



  goToScreen = (screenName, item) => {

    Navigation.showModal({
        stack: {
            children: [{
                component: {
                    name: screenName,
                    passProps: {
                        text: 'stack with one child',
                        item : item
                    },
                    options: {
                        topBar: {
                            title: {
                                text: 'App',
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


