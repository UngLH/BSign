import {color} from 'native-base/lib/typescript/theme/styled-system';
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {Appbar, Searchbar} from 'react-native-paper';
import ArrowDownButton from '../components/ArrowDownButton';
import ArrowUpButton from '../components/ArrowUpButton';
import FileItem from './FileItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '..//constants//colors';
import {getFile as getFile} from '../APIs';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function ListFileScreen({route, props}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Toàn bộ tài liệu', value: 'Toàn bộ tài liệu', key: 'PENDING'},
    {label: 'Đang chờ ký', value: 'Đang chờ ký', key: 'PENDING'},
    {label: 'Đã hết hạn', value: 'Đã hết hạn', key: 'EXPIRED'},
    {label: 'Đã ký', value: 'Đã ký', key: 'SIGNED'},
  ]);
  // Dropdown Placeholder
  const {selectFileType, selectFileFromHomeStatus} = route.params;

  const [selectItems, setSelectItems] = useState([]);
  const navigation = useNavigation();

  //press to Open PDF File - long press to select file
  const handleOnPress = ({item, itemRequestID}) => {
    if (selectItems.length) {
      return selectFiles(item);
    }
    navigation.navigate('PDFView', {
      requestID: itemRequestID,
      fileIndex: '0',
    });
  };
  // select item(long press)
  const selectFiles = file => {
    if (selectItems.includes(file)) {
      const newListItem = selectItems.filter(fileName => fileName != file);
      return setSelectItems(newListItem);
    }
    setSelectItems([...selectItems, file]);
  };

  const getSelected = file => selectItems.includes(file);

  // delete files were selected
  const deleteFiles = () => {
    if (!selectItems.length) return;
    files.filter(f => selectItems.includes(f.name));
  };

  //search Filter
  const searchFilter = text => {
    if (text) {
      const newData = apiFiles.filter(item => {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterdFiles(newData);
      setSearch(text);
    } else {
      setFilterdFiles(apiFiles);
      setSearch(text);
    }
  };
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  // API
  const [statusFile, setStatusFile] = useState('');
  const [apiFiles, setApiFiles] = useState([]);
  const [filterdFiles, setFilterdFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const renderItem = ({item}) => {
    return (
      <FileItem
        file={item}
        onLongPress={() => selectFiles(item)}
        // onPress={handleOnPress}
        onPress={() => {
          if (item.status == 'EXPIRED') {
            Alert.alert(
              'Thông báo',
              'Văn bản đã hết hạn, không thể mở văn bản',
              [
                {
                  text: 'Đóng',
                  onPress: () => {},
                  style: 'cancel',
                },
              ],
            );
          } else {
            navigation.navigate('PDFView', {
              requestID: item.requestID,
              fileIndex: item.index,
              fileName: item.name,
              fileStatus: item.status,
            });
          }
        }}
        selected={getSelected(item)}
      />
    );
  };
  useEffect(() => {
    getFile
      .getFile(statusFile === '' ? selectFileFromHomeStatus : statusFile)
      .then(result => {
        if (result.length == 0) {
          setApiFiles([]);
        } else {
          setApiFiles(result);
        }
      });
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Appbar.Header style={styles.appbarColor}>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          <Appbar.Content
            //   onPress={() =>
            // //     props.goback ? navigation.goBack() : navigation.navigate('Profile')
            //   }
            title={
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                // onChangeValue ={(){
                onSelectItem={select => {
                  setStatusFile(select.key);
                }}
                // }}

                modalContentContainerStyle={{
                  backgroundColor: Colors.mainColor,
                  fontWeight: 'bold',
                }}
                dropDownContainerStyle={{
                  backgroundColor: Colors.mainColor,
                  width: 250,
                  borderColor: Colors.mainColor,
                  borderRadius: 10,
                  elevation: 100,
                }}
                labelStyle={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textTransform: 'uppercase',
                }}
                style={{
                  backgroundColor: Colors.mainColor,
                  borderWidth: 0,
                }}
                textStyle={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
                placeholder={selectFileType}
                placeholderStyle={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  textTransform: 'uppercase',
                }}
                showTickIcon={false}
                ArrowUpIconComponent={({style}) => (
                  <ArrowUpButton style={style} />
                )}
                ArrowDownIconComponent={({style}) => (
                  <ArrowDownButton style={style} />
                )}
              />
            }
          />
          {selectItems.length ? (
            <Appbar.Action
              icon="trash-can"
              color="#ffffff"
              onPress={() => {}}
            />
          ) : (
            <Appbar.Action
              icon="magnify"
              color="#ffffff"
              onPress={() => {
                setIsSearching(!isSearching);
              }}
            />
          )}
        </Appbar.Header>
        {isSearching ? (
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        ) : null}
        {apiFiles.length ? (
          <FlatList
            contentContainerStyle={{paddingBottom: 60}}
            data={apiFiles}
            scrollEnabled={true}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              index.toString();
              // console.log(apiFiles.fileOriginalName[index])
            }}
            // keyExtractor={item => item.name}
          />
        ) : (
          <View
            style={{
              position: 'absolute',
              top: heightScreen / 2 - 20,
              left: widthScreen / 2 - widthScreen / 4.5,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              Không có tài liệu nào
            </Text>
          </View>
        )}
        
      </View>
    </SafeAreaView>
  );
}

export default ListFileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  appbarColor: {
    backgroundColor: Colors.mainColor,
    zIndex: 10,
  },
  appbarText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  itemImage: {
    width: 30,
    height: 30,
  },
  searchBar: {
    elevation: 5,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
});
