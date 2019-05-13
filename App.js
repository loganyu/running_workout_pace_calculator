import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import PacesScreen from './components/PacesScreen';
import SettingsScreen from './components/SettingsScreen'; 

const TabNavigator = createBottomTabNavigator({
  Paces: PacesScreen,
  Settings: SettingsScreen,
});

const App = createAppContainer(TabNavigator);

export default App;
