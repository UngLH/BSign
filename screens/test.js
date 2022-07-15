import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {vi} from 'date-fns/locale/vi';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  storeSecure as Store,
  retrieveSecure as Retrieve
} from '../APIs';
import {API_URL} from '@env';
import {genTokens} from '../until/genToken'
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

let result = [];

// async function LoginAPI(username, password) {

//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
  
//   var raw = JSON.stringify({
//     "username": username,
//     "password": password
//   });
  
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };
  
//   fetch("http://192.168.1.4:5000/api/authenticate/login", requestOptions)
//     .then(response => 
//       response.json())
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log('error', error));
// }    

function Test() {
  // console.log(genTokens())
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('TASKS', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {   
    try {     const value = await AsyncStorage.getItem('TASKS'); 
        if (value !== null) {       
    // We have data!!       console.log(value);    
     }   } 
    catch (error) {   
     } };

  Store.storeUserSession("private_key");
  Retrieve.retrieveUserSession("private_key");
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={
      () => {
        _storeData;
      }}>
        <Text>
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        _retrieveData;
      }}>
        <Text>
         Load
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: '200',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },
});

export default Test;
