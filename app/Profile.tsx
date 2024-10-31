// ProfileScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function ProfileScreen({ navigation }: { navigation: any }) {
  // Log the current navigation state
  console.log(navigation.getState());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Brauhaus App!</Text>
      <Button title="Login" onPress={() => navigation.navigate('LoginScreen')} />
      <Button title="Register" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});