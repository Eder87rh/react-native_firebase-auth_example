import { Platform, AppRegistry } from 'react-native';  
import { Navigation } from 'react-native-navigation';
import registerScreens from '../src/screens';

registerScreens();

Navigation.startSingleScreenApp({
        screen: {
            screen: 'pages.todo', 
            navigatorStyle: {navBarHidden: true}
        }
    });
    







