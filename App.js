import React from 'react';
import LoginScreen from './screens/Login.js'
import ListFileScreen from './screens/ListFile.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PDFView from './screens/PDFView';
import FileItem from './screens/FileItem.js';
import RegisterScreen from './screens/Register.js';
import Test from './screens/test.js';
import MainDrawer from './screens/DrawerNavigator.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent.js';
import Sign from './screens/SignatureScreen.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function StackRoutes(){
  return (
    <Stack.Navigator> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SignatureScreen" component={Sign}options={{headerShown: false}}/>
      <Stack.Screen name="ListFileScreen" component={ListFileScreen} options={{headerShown: false}}/>
      <Stack.Screen name="PDFView" component={PDFView} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent /> }> 
        <Drawer.Screen name = 'HomeScreen' component ={StackRoutes} options={{headerShown: false}}/>
        <Drawer.Screen name = "ListFileScreen" component={ListFileScreen} options={{headerShown: false}}/>
      </Drawer.Navigator>

    </NavigationContainer>
  
  );

};
export default App;
