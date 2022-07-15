/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import LoginScreen from './screens/Login'
import ListFileScreen from './screens/ListFile'

import Test from './screens/test';
import MyDrawer from './screens/DrawerNavigator';
import Test2 from './screens/test2'
import RegisterScreen from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import Sign from './screens/SignatureScreen';
AppRegistry.registerComponent(appName,() => App);
