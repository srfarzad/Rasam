import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'Home',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'خانه',
                                icon : require('../src/assets/images/icon.png'),
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
                                text: 'دسته بندی ها',
                                fontSize: 12,
                                icon : require('../src/assets/images/cart.png'),
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
                                text: 'تنظیمات',
                                fontSize: 12,
                                icon : require('../src/assets/images/setting.png'),
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
                                text: 'پروفایل',
                                fontSize: 12,
                                icon : require('../src/assets/images/profile.png'),
                                forceTitlesDisplay: true,
                            }
                        }
                    },
                },
            ],
        }
    }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Welcome',
                    }
                }
            ],
        }
    }
})