import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import Home from './HomeScreen';
import Events from './Events';
import Specials from './Specials';
import BookTable from './screens/BookTable';
import Profile from './Profile';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#C87A44',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Events" 
        component={Events}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Specials" 
        component={Specials}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Book Table" 
        component={BookTable}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 