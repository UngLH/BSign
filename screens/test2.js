import React from 'react';
import {StyleSheet, Dimensions, View, Text, TouchableHighlight, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import TouchID from 'react-native-touch-id'
export default function Test2(props) {

  // const BiometryTypes = {
  //   TouchID: 'TouchID',
  //   FaceID:'FaceID',
  //   Fingerprint: 'Fingerprint',
  // };
  // Keychain.getSupportedBiometryType().then(biometryType => {
  //   switch(biometryType){
  //     case BiometryTypes.TouchID:
  //       console.log("TouchID support");
  //       biometryType
  //     case BiometryTypes.FaceID:
  //       console.log("FaceID support");
  //     case BiometryTypes.Fingerprint:
  //         console.log("Fingerprint support");
  //   }
  // })
  // async () => {
  //   const username = 'zuck';
  //   const password = 'poniesRgr8';
  
  //   // Store the credentials
  //   await Keychain.setGenericPassword(username, password);
  
  //   try {
  //     // Retrieve the credentials
  //     const credentials = await Keychain.getGenericPassword();
  //     if (credentials) {
  //       console.log(
  //         'Credentials successfully loaded for user ' + credentials.username
  //       );
  //     } else {
  //       console.log('No credentials stored');
  //     }
  //   } catch (error) {
  //     console.log("Keychain couldn't be accessed!", error);
  //   }
  //   await Keychain.resetGenericPassword();
  // };


  const optionalConfigObject = {
    title: "Authentication Required", // Android
    color: "#e00606", // Android,
    fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
  }
  const pressHandler = () =>  {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then( success => {
        Alert.alert('Authenticated Successfully',  'Authenticated Successfully'
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);
      })
      .catch(error => {
        Alert.alert('Authentication Failed', 'Authentication Failed'
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]);
      });
  }
  return (
    <View>
    <TouchableHighlight onPress={pressHandler}>
      <Text>
        Authenticate with Touch ID
      </Text>
    </TouchableHighlight>
  </View>
  );
}