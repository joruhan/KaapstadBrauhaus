import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const BookTable = () => {
  const [username, setUsername] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [location, setLocation] = useState('');

  const handleBookTable = () => {
    axios.post('http://localhost:3000/book-table', {
      username,
      telephone_number: telephoneNumber,
      booking_date: bookingDate,
      booking_time: bookingTime,
      location,
    })
    .then(response => {
      console.log(response.data);
      alert('Booking confirmed!');
      // Optionally, reset the form fields
      setUsername('');
      setTelephoneNumber('');
      setBookingDate('');
      setBookingTime('');
      setLocation('');
    })
    .catch(error => {
      console.error(error);
      alert('Failed to book table. Please try again.');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Table</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Telephone Number"
        value={telephoneNumber}
        onChangeText={setTelephoneNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Booking Date (YYYY-MM-DD)"
        value={bookingDate}
        onChangeText={setBookingDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Booking Time (HH:MM)"
        value={bookingTime}
        onChangeText={setBookingTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Confirm Booking" onPress={handleBookTable} />
    </View>
  );
};

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

export default BookTable;