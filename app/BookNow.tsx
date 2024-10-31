import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Index from './Booking/index_calander';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
      <Index />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Home;
