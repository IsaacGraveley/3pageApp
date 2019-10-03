import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Home';
import AboutScreen from './About';
import SettingsScreen from './Settings';

export default createBottomTabNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingsScreen
  })