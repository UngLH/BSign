import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
let loginStatus = null;
async function LoginAPI(username, password, navigation) {
  var myHeaders = new Headers();
  //var SharedPreferences = require('react-native-shared-preferences');
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    username: username,
    password: password,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const value = {
    name: "Chimezie",
    job: "Software Developer"
  };
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('TASKS', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };
  fetch("http://10.13.193.17:5000/api/authenticate/login", requestOptions)
    .then(response => 
      response.json()).then(result => {
      loginStatus = result.success;
      if (result.success == true) {
        console.log('Login Success!');

        
      //  AsyncStorage.clear();
      //  const savedUser = AsyncStorage.getItem("access_token");
      //  console.log(savedUser);
      //  console.log("Load Token success")
        // const currentUser = JSON.parse(savedUser);
        // console.log(currentUser);
       // navigation.navigate('HomeScreen');
      } else {
        console.log('Login False');
      } 
    })
    .catch(error => {
      console.log('error', error);
    });
    // console.log(loginStatus);
    return loginStatus;
}

export default {
  LoginAPI,
};
