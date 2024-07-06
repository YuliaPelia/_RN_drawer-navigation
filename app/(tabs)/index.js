
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../../screens/WelcomeScreen';
import UserScreen from '../../screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
export default function App() {
  return <NavigationContainer independent={true}>
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3c0a6b' },
      headerTintColor: '#fff',
      drawerActiveBackgroundColor: '#f0e1ff',
      drawerActiveTintColor: '#3c0a6b',
      drawerStyle: {
        // backgroundColor: '#ccc',
      }
    }} >
      <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{

        drawerLabel: 'Welcome Screen',
        drawerIcon: ({ color, size }) => {
         return <Ionicons name="home" size={size} color={color} />
        }

      }} />
      <Drawer.Screen name="User" component={UserScreen} options={{

        drawerLabel: 'User Screen',
        drawerIcon: ({ color, size }) => {
         return <Ionicons name="person" size={size} color={color} />
        }
      }} />
    </Drawer.Navigator>
  </NavigationContainer>;
}