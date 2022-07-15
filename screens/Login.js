import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '..//constants//colors';

import * as Animatable from 'react-native-animatable';
// import {API_URL} from '@env';
import {LoginAPI} from '../APIs';

function LoginScreen(props) {
  const [loginStatus, setLoginStatus] = useState(false);
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUsername: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUsername: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUsername: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUsername = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUsername: true,
      });
    } else {
      setData({
        ...data,
        isValidUsername: false,
      });
    }
  };

  // Login
  //   var LoginAPI = async (username, password) => {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Content-Type", "application/json");

  //     var raw = JSON.stringify({
  //       "username": username,
  //       "password": password
  //     });

  //     var requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: 'follow'
  //     };

  // fetch(`${API_URL}/api/authenticate/login`, requestOptions)
  //       .then(response =>
  //         response.json())
  //       .then(result => {
  //         console.log(result);
  //         if(result.success == true){
  //           setLoginStatus(true)
  //           console.log("Login Success!");
  //           navigation.navigate("HomeScreen");
  //         }else{
  //           setLoginStatus(false);
  //           console.log("Login False");
  //         }
  //       })
  //       .catch(error => console.log('error', error));
  //   }

  // snackbar
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [passwordOrUsernameIncorrect, setPasswordOrUsernameIncorrect] =
    React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Xin chào!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Tên đăng nhập</Text>
        <View style={styles.action}>
          <FontAwesome5 name="user" color="#9F9999" size={20} />
          <TextInput
            placeholder="Tên đăng nhập"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => {
              textInputChange(val);
              setPasswordOrUsernameIncorrect(true);
            }}
            onEndEditing={e => handleValidUsername(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color={Colors.mainColor} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUsername ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        {passwordOrUsernameIncorrect ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Tài khoản hoặc mật khẩu không chính xác
            </Text>
          </Animatable.View>
        )}
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 25,
            },
          ]}>
          Mật khẩu
        </Text>

        <View style={styles.action}>
          <Feather name="lock" color={'#9F9999'} size={20} />

          <TextInput
            placeholder="Mật khẩu"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={val => {
              setPasswordOrUsernameIncorrect(true);
              handlePasswordChange(val);
            }}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#9F9999" size={20} />
            ) : (
              <Feather name="eye" color={Colors.mainColor} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
        {passwordOrUsernameIncorrect ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Tài khoản hoặc mật khẩu không chính xác
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text
            style={{color: Colors.mainColor, marginTop: 15}}
            onPress={() => {
              console.log('Forgot the password');
            }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              navigation.navigate('HomeScreen')
              // LoginAPI.LoginAPI(data.username, data.password, navigation).then(
              //   result => {
              //      setLoginStatus(result);
              //   },
              // );
              // LoginAPI(data.username, data.password)
            }}>
            <LinearGradient
              colors={['#4CB6F5', Colors.mainColor]}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#ffffff'}]}>
                Đăng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={[
              styles.signIn,
              {
                borderColor: Colors.mainColor,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: Colors.mainColor,
                },
              ]}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  footer: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#3D92CE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    marginTop: -15,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});

export default LoginScreen;
