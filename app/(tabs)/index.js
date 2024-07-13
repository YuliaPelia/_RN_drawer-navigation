
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../../screens/WelcomeScreen';
import UserScreen from '../../screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  return <NavigationContainer independent={true}>
    <BottomTab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3c0a6b' },
      headerTintColor: '#fff',
      // drawerActiveBackgroundColor: '#f0e1ff',
      // drawerActiveTintColor: '#3c0a6b',
      // drawerStyle: {
      //   // backgroundColor: '#ccc',
      // }

      tabBarActiveTintColor: '#3c0a6b',
      tabBarInactiveTintColor: '#ccc',
    }} >
      <BottomTab.Screen name="Welcome" component={WelcomeScreen} options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="home" size={size} color={color} />
        }

        // drawerLabel: 'Welcome Screen',
        // drawerIcon: ({ color, size }) => {
        //  return <Ionicons name="home" size={size} color={color} />
        // }

      }} />
      <BottomTab.Screen name="User" component={UserScreen} options={{

        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="person" size={size} color={color} />
        }

        // drawerLabel: 'User Screen',
        // drawerIcon: ({ color, size }) => {
        //  return <Ionicons name="person" size={size} color={color} />
        // }
      }} />
    </BottomTab.Navigator>
  </NavigationContainer>;
}