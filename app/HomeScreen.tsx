// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Dashboard */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Dashboard</Text>
        <View style={styles.row}>
          <View style={styles.card}><Text>Tables Available:(data)</Text></View>
          <View style={styles.card}><Text>Restaurant Capacity:(data%)</Text></View>
          <View style={styles.card}><Text>Vibe Check: Lively</Text></View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}><Text>Happy Hour Status: Cheap drinks</Text></View>
          <View style={styles.card}><Text>Events of the Day: Band Playing</Text></View>
        </View>
      </View>

      {/* Friends Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Friends Center</Text>
        <Text style={styles.sectionText}>Data of friends Display</Text>
      </View>

      {/* Simplified Book Now Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    height: 80,
    backgroundColor: '#C87A44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  sectionText: {
    fontSize: 16,
    color: '#444444',
  },
  bookButton: {
    backgroundColor: '#C87A44',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
