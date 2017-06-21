import { Navigation } from 'react-native-navigation';

import Login from '../pages/Login.js';
import Main from '../pages/Main.js';
import Signup from '../pages/Signup.js';
import todo from '../pages/todo.js'
import App from '../../components/App.js';
//import AppFirebase from '../../components/AppFirebase.js';

export default function(){
	Navigation.registerComponent('pages.Login', () => Login);
	Navigation.registerComponent('pages.Main',() => Main);
	Navigation.registerComponent('pages.Signup', () => Signup);
	Navigation.registerComponent('pages.todo',() => todo);
	Navigation.registerComponent('components.App',() => App);
	//Navigation.registerComponent('components.AppFirebase',() => AppFirebase);
}