/** @format */

/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => screen);
*/

import {Navigation} from 'react-native-navigation';
import Welcome from './screens/Welcome'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'


import Home from './screens/Home'
import Category from './screens/Category'
import Setting from './screens/Setting'
import Profile from './screens/Profile'




Navigation.registerComponent('Welcome',()=>Welcome)
Navigation.registerComponent('SignIn',()=>SignIn)
Navigation.registerComponent('SignUp',()=>SignUp)


Navigation.registerComponent('Home',()=>Home)
Navigation.registerComponent('Category',()=>Category)
Navigation.registerComponent('Setting',()=>Setting)
Navigation.registerComponent('Profile',()=>Profile)




Navigation.events().registerAppLaunchedListener(()=>{

    Navigation.setRoot({
            root : {

                stack : {
                    id:'AppStack',
                    children : [
                        {
                            component : {
                                name : 'Welcome' ,
                                options : {
                                    topBar : {
                                        title : {
                                            text : 'App'
                                        }, rightButtons : [{
                                            id : 'SaveId',
                                            text : 'Save',


                                        }],

                                    }



                                }
                            },
                        }
                    ]
                }
            }
        }

    )
})



/*

Navigation.events().registerAppLaunchedListener(()=>{

    Navigation.setRoot({
            root : {

                stack : {
                    id:'AppStack',
                    children : [
                        {
                            component : {
                                name : 'Welcome' ,
                                options : {
                                    topBar : {
                                        title : {
                                            text : 'App'
                                        }
                                    }
                                    , bottomTabs: {
                                        translucent: true,
                                        hideShadow: false,
                                        tabColor: 'red',
                                        titleDisplayMode: 'alwaysShow',
                                        selectedTabColor: 'blue',
                                        fontFamily: 'HelveticaNeue-Italic',
                                        fontSize: 13,

                                    }

                                }
                            },
                        }
                    ]
                }
            }
        }

    )
})*/
