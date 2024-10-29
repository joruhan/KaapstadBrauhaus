import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Events = () => {
  const events = [
    {
      bandName: "Millennium",
      genre: "Afrikaans Rock Band",
      date: "29 November 2024",
      time: "20:00 till Late!",
    },
    // More events can be added here in the same format
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events</Text>
      
      {events.map((event, index) => (
        <View key={index} style={styles.eventCard}>
          <Text style={styles.bandName}>{event.bandName}</Text>
          <Text style={styles.genre}>{event.genre}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.time}>{event.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bandName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  date: {
    fontSize: 16,
    color: '#444',
  },
  time: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
});

export default Events;
