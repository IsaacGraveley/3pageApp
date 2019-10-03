
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import HomeScreen from './Home';
// import AboutScreen from './About';
// import SettingsScreen from './Settings';
import Tabs from './tabs';
import LoginScreen from './loginScreen';

const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Tabs: Tabs
})


export default createAppContainer(stackNavigator)
