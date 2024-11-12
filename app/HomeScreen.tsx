// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Events from './Events';
import Specials from './Specials';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default function HomeScreen() {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();
  const [specialsModalVisible, setSpecialsModalVisible] = React.useState(false);
  const [eventsModalVisible, setEventsModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Dashboard */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Dashboard</Text>
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Availability</Text>
              <Text style={styles.cardDescription}>5 Tables</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>Capacity</Text>
              <Text style={styles.cardDescription}>60%</Text>
            </View>
            
          </View>
          
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Happy Hour</Text>
              <Text style={styles.cardDescription}>6-7PM</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardText}>Current Events</Text>
              <Text style={styles.cardDescription}>No Ongoing Events</Text>
            </View>
          </View>
        </View>

        {/* Friends Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Friends Center</Text>
          <Text style={styles.sectionText}>Data of friends Display</Text>
        </View>

        {/* Specials Section - Updated */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Specials of the Days</Text>
            <TouchableOpacity onPress={() => setSpecialsModalVisible(true)}>
              <Text style={styles.viewMoreText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Specials Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={specialsModalVisible}
          onRequestClose={() => setSpecialsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Specials of the Days</Text>
                <TouchableOpacity onPress={() => setSpecialsModalVisible(false)}>
                  <Text style={styles.closeButton}>✕</Text>
                </TouchableOpacity>
              </View>
              <Specials preview={false} />
            </View>
          </View>
        </Modal>

        {/* Events Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity onPress={() => setEventsModalVisible(true)}>
              <Text style={styles.viewMoreText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Events Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={eventsModalVisible}
          onRequestClose={() => setEventsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Upcoming Events</Text>
                <TouchableOpacity onPress={() => setEventsModalVisible(false)}>
                  <Text style={styles.closeButton}>✕</Text>
                </TouchableOpacity>
              </View>
              <Events preview={false} />
            </View>
          </View>
        </Modal>
                {/* Seating Plan Section  */}
                <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Seating Plan</Text>
          <Text style={styles.sectionText}>To be announced soon.</Text>
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
    minHeight: 150,
    backgroundColor: '#C87A44',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 20,
  },
  cardText: {
    fontSize: 15, 
    fontWeight: '700',
    color: '#000',
    textAlign: 'center', 
    padding: 10,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center', 

  },
  sectionText: {
    fontSize: 16,
    color: '#444444',
    lineHeight: 24,
  },
  bookButton: {
    backgroundColor: '#C87A44',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    marginLeft: '27%',
    width: '50%',
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewMoreText: {
    color: '#C87A44',
    fontSize: 16,
    fontWeight: '600',
  },
  specialsPreview: {
    maxHeight: 150,
    overflow: 'hidden',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    height: '80%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333333',
  },
  closeButton: {
    fontSize: 24,
    color: '#666666',
    padding: 5,
  },
  eventsPreview: {
    maxHeight: 150,
    overflow: 'hidden',
  },
});
