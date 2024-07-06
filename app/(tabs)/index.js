
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../../screens/WelcomeScreen';
import UserScreen from '../../screens/UserScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return <NavigationContainer independent={true}>
    <Drawer.Navigator >
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>;
}