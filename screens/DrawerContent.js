import React from 'react';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from 'react-native-paper';

import {View, StyleSheet,  Button, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { startOfQuarter } from 'date-fns';



export function DrawerContent(props) {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
      <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/images/avatar.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column', flex: 0.9}}>
                                <Title style={styles.title}>Lê Hồng Ưng</Title>
                                <Caption numberOfLines={1} style={styles.caption}>ung.lh194211@sis.hust.edu.vn</Caption>
                            </View>
                        </View>
                    </View>
    

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Trang chủ"
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="file-document-multiple-outline" color={color} size={size} />
            )}
            label="Tài liệu"
            onPress={() => {
              navigation.navigate('ListFileScreen', {selectFileType: "Toàn bộ tài liệu"});
            }}
          />
          {/* <DrawerItem
            icon={({color, size}) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {
              props.navigation.navigate('BookmarkScreen');
            }}
          /> */}
          <DrawerItem
            icon={({color, size}) => (
                <Feather name="settings" color={color} size={size} />
            )}
            label="Cài đặt"
            onPress={() => {
             navigation.navigate('SettingsScreen');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Hỗ trợ"
            onPress={() => {
              navigation.navigate('SupportScreen');
            }}
          />
        </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="logout" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            Alert.alert(
              "Thông báo",
              "Bạn có chắc chắn muốn đăng xuất không?",
              [
                {
                  text: "Không",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Đồng ý", onPress: () => {
                  navigation.navigate("LoginScreen");
                },}
              ], 
            );
          }}
          // onPress={() => {signOut()}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dialog: {
    borderColor: "#ccc"

  },
  dialogCancel: {
    backgroundColor: "#D61C4E"
    

  }
});
