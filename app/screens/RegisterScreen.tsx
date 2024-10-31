// RegisterScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

interface RegisterScreenProps {
  onClose?: () => void;
}

export default function RegisterScreen({ onClose }: RegisterScreenProps) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Basic validation
    if (!first_name || !last_name || !email || !phone || !date_of_birth || !password) {
      alert('Please fill in all fields');
      return;
    }

    axios.post('http://localhost:8081/register', {
      first_name,
      last_name,
      email,
      phone,
      date_of_birth,
      password,
    })
    .then(response => {
      console.log(response.data);
      alert('Registration successful!');
      if (onClose) {
        onClose();
      }
    })
    .catch(error => {
      console.error(error);
      alert("Registration failed. Please try again.");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="First Name"
        value={first_name}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={last_name}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={date_of_birth}
        onChangeText={setDateOfBirth}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
    borderRadius: 8,
  },
});