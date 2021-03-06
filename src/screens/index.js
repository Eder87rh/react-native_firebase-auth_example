import { Navigation } from 'react-native-navigation';

import Login from '../pages/Login.js';
import Main from '../pages/Main.js';
import Signup from '../pages/Signup.js';
import todo from '../pages/todo.js'
import AuthMenu from '../pages/AuthMenu.js';
import PhoneAuth from '../pages/PhoneAuth.js';
import FacebookAuth from '../pages/FacebookAuth.js';
import SendRestorePass from '../pages/SendRestorePass.js';
import App from '../../components/App.js';


export default function(){
	Navigation.registerComponent('pages.Login', () => Login);
	Navigation.registerComponent('pages.Main',() => Main);
	Navigation.registerComponent('pages.Signup', () => Signup);
	Navigation.registerComponent('pages.todo',() => todo);
	Navigation.registerComponent('pages.AuthMenu',() => AuthMenu);
	Navigation.registerComponent('pages.PhoneAuth',() => PhoneAuth);
	Navigation.registerComponent('pages.SendRestorePass',() => SendRestorePass);
	Navigation.registerComponent('pages.FacebookAuth',() => FacebookAuth);
	Navigation.registerComponent('components.App',() => App);
	
}