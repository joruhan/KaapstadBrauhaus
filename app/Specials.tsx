import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Specials = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Specials</Text>
      <Text style={styles.content}>Check out our latest specials and promotions!</Text>
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

export default Specials;
