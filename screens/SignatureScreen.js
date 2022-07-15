import SignatureScreen from 'react-native-signature-canvas';
import React, {useState, useRef} from 'react';
import {Colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Dimensions, View, Button, Text, TouchableOpacity} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';

const Sign = ({props}) => {
  const navigation = useNavigation();
  const {navigate, goBack} = navigation;
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = signature => {
    console.log(signature);
    //onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    ref.current.clearSignature();
    console.log('clear success!');
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = data => {
    console.log(data);
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current.readSignature();
  };
  const imgWidth = Dimensions.get('window').width - 20;
  const imgHeight = 300;
  const style = `.m-signature-pad {box-shadow: none; borderWidth: 3px,  borderColor:  'red'} 
              .m-signature-pad--body {border: 3px;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;

  return (
    <View>
      <Appbar.Header style={styles.appbarColor}>
        <Appbar.Action
          icon="arrow-left"
          color="#ffffff"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title="Chữ ký" />
        <Appbar.Action
          icon="fountain-pen-tip"
          color="#ffffff"
          onPress={() => {
            console.log('alert screen');
          }}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <View style={{width: imgWidth, height: imgHeight}}>
          <SignatureScreen
            ref={ref}
            // onEnd={handleEnd}
            onOK={handleOK}
            onEmpty={handleEmpty}
            onGetData={handleData}
            // onClear={handleClear}
            scrollable={false}
            backgroundColor="rgba(232, 249, 253)"
            descriptionText={'Vui lòng nhập vào chữ ký của bạn'}
          />
          <View style={styles.row}>
            <TouchableOpacity
           onPress={handleClear}
              style={{
                width: 100,
                backgroundColor: '#EC255A',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
            
              }}>
              <Text
                style={[
                  {
                    color: '#F9F9F9',
                  },
                ]}>
                Xóa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
          
            onPress={handleConfirm}
             
            
              style={{
                width: 100,
                backgroundColor: '#47B5FF',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <Text
                style={[
                  {
                    color: '#F9F9F9',
                  },
                ]}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  appbarColor: {
    backgroundColor: Colors.mainColor,
    elevation: 0,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
  },
  pdf: {
    flex: 1,
    padding: 10,
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  row: {
    // display: "flex",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF1818',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
