import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// data structure and add more below
const specialsList = [
  {
    id: 1,
    title: "Happy Hour",
    description: "Half-price cocktails and Hard Liquor",
    time: "Monday-Friday, 4-7pm",
    type: "drinks",
    price: "R25-R50",
  },
  {
    id: 2,
    title: "Saturday Special",
    description: "Special Price Burger and a Drink",
    time: "Sat-Sun, 10am-2pm",
    type: "food and drinks",
    price: "R100",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free Beers",
    description: "Only on Wednesdays and Fridays",
    time: "Every Wednesday, 5pm-10pm",
    type: "drinks",
    price: "R40",
  },
];

interface SpecialsProps {
  preview?: boolean;
}

const Specials = ({ preview }: SpecialsProps) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Daily Specials</Text>
      
      {specialsList.map((special) => (
        <View key={special.id} style={styles.specialCard}>
          <View style={styles.textContainer}>
            <Text style={styles.specialTitle}>{special.title}</Text>
            <Text style={styles.description}>{special.description}</Text>
            <Text style={styles.time}>{special.time}</Text>
            <Text style={styles.price}>{special.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  specialCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textContainer: {
    padding: 16,
  },
  specialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});

export default Specials;
