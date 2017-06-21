/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Platform, AppRegistry } from 'react-native';  
import { Navigation } from 'react-native-navigation';
import registerScreens from '../src/screens';

registerScreens();


const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#3F51B5',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white',
    topBarElevationShadowEnabled: false,
    navBarHideOnScroll: true,
    tabBarHidden: true,
    drawUnderTabBar: true
};


Navigation.startSingleScreenApp({
        screen: {
            screen: 'pages.todo', // unique ID registered with Navigation.registerScreen
            title: 'Welcome',
            navigatorStyle
        }
    });
    







