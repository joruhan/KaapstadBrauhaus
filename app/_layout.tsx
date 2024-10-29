import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen'; // Ensure this path is correct
import MyBookings from './MyBookings'; // Ensure this path is correct
import Specials from './Specials'; // New import
import Events from './Events'; // New import
import SeatingPlan from './SeatingPlan'; // New import
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator initialRouteName="HomeScreen">
          {/* Drawer Screen for Home */}
          <Drawer.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ header: (props) => <Header {...props} /> }} 
          />
          {/* Drawer Screen for My Bookings */}
          <Drawer.Screen 
            name="MyBookings" 
            component={MyBookings} 
            options={{ header: (props) => <Header {...props} /> }} 
          />
          {/* Drawer Screen for Specials */}
          <Drawer.Screen 
            name="Specials" 
            component={Specials} 
            options={{ header: (props) => <Header {...props} /> }} 
          />
          {/* Drawer Screen for Events */}
          <Drawer.Screen 
            name="Events" 
            component={Events} 
            options={{ header: (props) => <Header {...props} /> }} 
          />
          {/* Drawer Screen for Seating Plan */}
          <Drawer.Screen 
            name="SeatingPlan" 
            component={SeatingPlan} 
            options={{ header: (props) => <Header {...props} /> }} 
          />
        </Drawer.Navigator>
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
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
});
