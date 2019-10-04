import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Home';
import UpdateScreen from './UpdateScreen';
import TeamsScreen from './TeamsScreen';

//name our screen names and which component theyre being used with
export default createBottomTabNavigator({
    Home: HomeScreen,
    Updates: UpdateScreen,
    Teams: TeamsScreen
  })