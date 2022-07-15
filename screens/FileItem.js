import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function FileItem({file, onPress, onLongPress, selected}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      // onPress={() => {
      //   navigation.navigate('PDFView', {
      //     downloadLink: file.downloadLink,
      //   });
      //   console.log(file.downloadLink);
      // }}
      onPress={onPress}
      style={{
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        borderColor: '#F0F0F0',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}>
      <View style={{height: 75, flexDirection: 'row'}}>
        <Image
          source={
            file.status == 'PENDING'
              ? require('../assets/images/pen-tool.png')
              : file.status == 'EXPIRED'
              ? require('../assets/images/expired.png')
              : file.status == 'SIGNED'
              ? require('../assets/images/complete.png')
              : require('../assets/images/signature.png')
          }
          style={{
            height: 40,
            width: 40,
            marginTop: 18,
            marginLeft: 15,
            tintColor: '#858C9B',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                paddingTop: 10,
                paddingLeft: 15,
                color: '#1B1B1C',
                flex: 0.9,
              }}>
              {file.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{paddingLeft: 15, paddingTop: 10, color: '#858C9B'}}>
              Tạo bởi: {file.teacherName}
            </Text>
            <Text style={{paddingLeft: 150, paddingTop: 10, color: '#858C9B'}}>
              {file.createAt}
            </Text>
          </View>
        </View>
      </View>
      {selected && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
}
export default FileItem;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(199,235,255,0.4)',
  },
});
