// RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface RegisterScreenProps {
  onClose?: () => void;
}

export default function RegisterScreen({ onClose }: RegisterScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Handle registration functionality here
    alert(`Registered as ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Username"
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
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={onClose} />
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