import React from 'react';
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
import {Colors} from '..//constants//colors';
import * as Animatable from 'react-native-animatable';

function RegisterScreen(props) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    secureTextEntryConfirm:true,
    isValidUser: true,
    isValidPassword: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,

    });
  };
  const updateSecureTextEntryConfirm = () => {
    setData({
      ...data,
      secureTextEntryConfirm: !data.secureTextEntryConfirm,
      
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Đăng ký</Text>
      </View>
      <Animatable.View style={styles.footer}
      animation ="fadeInUpBig">
        <Text style={styles.text_footer}>Tên đăng nhập</Text>
        <View style={styles.action}>
          <FontAwesome5 name="user" color="#9F9999" size={20} />
          <TextInput placeholder="Tên đăng nhập" style={styles.textInput} />
        </View>
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
            placeholder="Mật khẩu của bạn"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#9F9999" size={20} />
            ) : (
              <Feather name="eye" color="#9F9999" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 25,
            },
          ]}>
          Xác nhận mật khẩu
        </Text>

        <View style={styles.action}>
          <Feather name="lock" color={'#9F9999'} size={20} />

          <TextInput
            placeholder="Xác nhận mật khẩu"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntryConfirm ? true : false}
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={updateSecureTextEntryConfirm}>
            {data.secureTextEntryConfirm ? (
              <Feather name="eye-off" color="#9F9999" size={20} />
            ) : (
              <Feather name="eye" color="#9F9999" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
            <LinearGradient
              colors={['#4CB6F5', Colors.mainColor]}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#ffffff'}]}>
                Đăng ký
              </Text>
            </LinearGradient>
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
});

export default RegisterScreen;
