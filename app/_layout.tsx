import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
//imported screens and new screens should be added aswell
import HomeScreen from './HomeScreen'; 
import BookNow from './BookNow';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

// Define type for Header props
type HeaderProps = {
  navigation: any; // Use 'any' for simplicity; can be updated with a specific type later
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Header Component
  const Header = ({ navigation }: HeaderProps) => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.headerText}>Kaapstad Brauhaus</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={styles.container}>
        <Tab.Navigator 
          initialRouteName="HomeScreen"
          screenOptions={{
            tabBarActiveTintColor: '#C87A44',
            tabBarInactiveTintColor: 'gray',
          }}>
          <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ 
              header: (props) => <Header {...props} />,
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }} 
          />
          <Tab.Screen 
            name="BookNow" 
            component={BookNow} 
            options={{ 
              header: (props) => <Header {...props} />,
              tabBarLabel: 'Book',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" size={size} color={color} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{ 
              header: (props) => <Header {...props} />,
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }} 
          />
        </Tab.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}

// Add your styles for the layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#C87A44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
});
