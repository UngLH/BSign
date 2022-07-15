import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {Appbar} from 'react-native-paper';
import {Colors} from '../constants/colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function HomeScreen(props) {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
      {/* App bar */}
      <Appbar.Header style={styles.appbarColor}>
        <Appbar.Action
          icon="menu"
          color="#ffffff"
          onPress={() => {
            navigation.openDrawer();
          }}
        />

        <Appbar.Content />
        <Appbar.Action
          icon="bell"
          color="#ffffff"
          onPress={() => {
            console.log('alert screen');
          }}
        />
      </Appbar.Header>

      <View
        style={styles.header}
        onStartShouldSetResponder={() => {
          navigate('ListFileScreen', {
            selectFileType: 'Đang chờ ký',
            selectFileFromHomeStatus: 'PENDING',
          });
        }}>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          5
        </Text>
        <Text style={styles.text_header}>Tài liệu đang chờ ký</Text>
      </View>

      <View style={styles.footer}>

        <TouchableOpacity
        style ={styles.itemStyle}
        onPress={() => {
            navigate('ListFileScreen', {selectFileType: 'Đã ký', selectFileFromHomeStatus: "SIGNED"});
        }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/images/agreement.png')}
                style={styles.itemImage}
              />
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.itemText}>Tài liệu đã ký</Text>
              </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemStyle}
        onPress={() => {
            navigate('ListFileScreen', {selectFileType: 'Đã hết hạn', selectFileFromHomeStatus: "EXPIRED"});
        }}
        >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/time-out.png')}
              style={styles.itemImage}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.itemText}>Tài liệu đã hết hạn</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemStyle}
        onPress ={() => {
            navigate('ListFileScreen', {selectFileType: 'Toàn bộ tài liệu', selectFileFromHomeStatus: "PENDING"});
        }}
        >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/documents.png')}
              style={styles.itemImage}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.itemText}>Toàn bộ tài liệu</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemStyle}
        onPress ={() => {
          console.log("hello")
            navigate('SignatureScreen');
        }}
        >
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/sign.png')}
              style={styles.itemImage}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.itemText}>Chữ ký của tôi</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
  appbarColor: {
    backgroundColor: Colors.mainColor,
    elevation: 0,
  },
  appbarItemColor: {
    color: Colors.mainColor,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text_header: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  footer: {
    flex: 4,
    backgroundColor: '#E1EDF9',
    paddingVertical: heightScreen / 200,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  row: {
    flexDirection: 'row',
  },
  itemStyle: {
    width: widthScreen - 50,
    height: heightScreen / 7.5,
    borderColor: '#F8FAFE',
    borderWidth: 1,
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#E7EFF8',
    justifyContent: 'center',
    elevation: 5,
  },
  itemImage: {
    marginLeft: 10,
    marginRight: 5,
    width: 75,
    height: 75,
  },
  itemText: {
    fontSize: 20,
    color: '#5F5353',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
