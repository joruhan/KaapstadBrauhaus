import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import your screens
import Home from './app/HomeScreen';
import Events from './app/Events';
import Specials from './app/Specials';
import BookTable from './app/screens/BookTable';
import Profile from './app/Profile'; 
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="LoginScreen" component={LoginScreen} />
      <ProfileStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#2ecc71',
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
        {/* Add Profile Stack as a tab */}
        <Tab.Screen 
          name="Profile" 
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}