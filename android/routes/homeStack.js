import {createStackNavigator} from 'react-native-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../screens/Home'
import ListFileScreen from '../../screens/ListFile';
const screens ={
    Home: {
        screen: HomeScreen
    },
    ListFile: {
        screen: ListFileScreen
    }
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);