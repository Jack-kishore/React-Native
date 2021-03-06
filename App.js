import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreens'


const navigator = createStackNavigator({
  SearchScreen: SearchScreen
},{
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title:'BusinessSearch'
  }
});

export default createAppContainer(navigator);