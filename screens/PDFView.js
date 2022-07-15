import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Animated,
} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';

import Pdf from 'react-native-pdf';
import {Colors} from '../constants/colors';
import {API_URL} from '@env';

function PDFView({navigation, route}) {
  const [sourceBase64, setSourceBase64] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //Sign request ID
  const {requestID, fileIndex, fileName, teacherId} = route.params;

  // file base64 from API
  const source = {uri: sourceBase64};

  var getFileBase64 = async result =>
    setSourceBase64('data:application/pdf;base64,' + result.file);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVySWQiOiJsaW5oIiwiaWF0IjoxNjUwNDQ0NzM0fQ.cAGqw-NDkSe7Xd5iyHXhRQhAY5_Bh10q6FMX0qRYfXc");
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    status: '',
    teacherId: teacherId,
    skipIndex: 0,
    limitIndex: 90,
    sortByCreated: -1,
    signRequestId: requestID,
    fileIndex: fileIndex,
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  useEffect(() => {
    fetch('http://192.168.1.4:5000/api/sign-request/fetch-data', requestOptions)
      .then(response => response.json())
      .then(result => {
        getFileBase64(result);
        setIsLoading(true);
        console.log(fileIndex);
      })
      .catch(error => console.log('error', error));
  });
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{flex: 1}}>
          <Appbar.Header style={styles.appbarColor}>
            <Appbar.Action
              icon="close"
              color="#ffffff"
              onPress={() => navigation.goBack()}
            />
            <Appbar.Content title={fileName} />
            <Appbar.Action
              icon="fountain-pen-tip"
              color="#ffffff"
              onPress={() => {
                console.log('alert screen');
              }}
            />
          </Appbar.Header>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={e => {
              console.log(e);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            onLoadProgress={false}
            style={styles.pdf}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.mainColor} />
        </View>
      )}
    </View>
  );
}
export default PDFView;
const styles = StyleSheet.create({
  appbarColor: {
    backgroundColor: Colors.mainColor,
    elevation: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
});
