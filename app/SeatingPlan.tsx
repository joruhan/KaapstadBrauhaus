import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeatingPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seating Plan</Text>
      <Text style={styles.content}>View our seating arrangements and plan your visit!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SeatingPlan;
