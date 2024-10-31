// app/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:3000/login', {
      username,
      password,
    })
    .then(response => {
      console.log(response.data); 
      alert(`Logged in as ${username}`);
      // Optionally, navigate to a different screen after successful login
      // navigation.navigate('HomeScreen'); // or any other screen
    })
    .catch(error => {
      console.error(error);
      alert("Login failed. Please check your credentials.");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Back to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});