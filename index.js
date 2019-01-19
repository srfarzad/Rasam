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
import LeftMenu from './screens/LeftMenu'
import Product from './screens/Product'
import Webview from './screens/Webview'




Navigation.registerComponent('Welcome',()=>Welcome)
Navigation.registerComponent('SignIn',()=>SignIn)
Navigation.registerComponent('SignUp',()=>SignUp)


Navigation.registerComponent('Home',()=>Home)
Navigation.registerComponent('Category',()=>Category)
Navigation.registerComponent('Setting',()=>Setting)
Navigation.registerComponent('Profile',()=>Profile)
Navigation.registerComponent('LeftMenu',()=>LeftMenu)
Navigation.registerComponent('Product',()=>Product)
Navigation.registerComponent('Webview',()=>Webview)


Navigation.setRoot({
    root: {




        sideMenu: {
            left: {
                component: {
                    name: 'LeftMenu',
                    passProps: {
                        text: 'This is a left side menu screen'
                    }
                }
            },

            center  : {

                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                        {
                            component: {
                                name: 'Home',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'Home',
                                        icon : require('./src/assets/images/login.png'),
                                        forceTitlesDisplay: true,

                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'Category',
                                options: {
                                    bottomTab: {
                                        text: 'Category',
                                        fontSize: 12,
                                        icon : require('./src/assets/images/login.png'),
                                        forceTitlesDisplay: true,
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'Setting',
                                options: {
                                    bottomTab: {
                                        text: 'Setting',
                                        fontSize: 12,
                                        icon : require('./src/assets/images/login.png'),
                                        forceTitlesDisplay: true,
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'Profile',
                                options: {
                                    bottomTab: {
                                        text: 'Profile',
                                        fontSize: 12,

                                        icon : require('./src/assets/images/login.png'),
                                        forceTitlesDisplay: true,
                                    }
                                }
                            },
                        },
                    ],
                }

            },
            right :{
                component: {
                    name: 'LeftMenu',
                    passProps: {
                        text: 'This is a left side menu screen'
                    }
                }
            }
        }





    }
});
