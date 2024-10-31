// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Events from './Events';
import Specials from './Specials';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
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

        {/* Specials Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Specials of the Days</Text>
          <Specials />
        </View>

        {/* Events Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <Events />
        </View>
      </ScrollView>

      {/* Updated Book Now Button */}
      <TouchableOpacity 
        style={styles.bookButton}
        onPress={() => navigation.navigate('BookNow')}
      >
        <Text style={styles.bookButtonText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    gap: 20,
    paddingBottom: 90,
  },
  sectionContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  card: {
    flex: 1,
    minHeight: 100,
    backgroundColor: '#C87A44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
  },
  sectionText: {
    fontSize: 16,
    color: '#444444',
    lineHeight: 24,
  },
  bookButton: {
    backgroundColor: '#C87A44',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
