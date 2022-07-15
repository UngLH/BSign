import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListFileScreen from './ListFile';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}}  />
      <Drawer.Screen name="ListFile" component={ListFileScreen} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
}

export default MainDrawer;