/*import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Add interface for table structure
interface Table {
  id: number;
  seats: number;
  location: string;
  tableNumber: string;
}

// Add type for navigation
type RootStackParamList = {
  Home: undefined;
  NewBooking: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'NewBooking'>;
};

// Temporary mock data for tables
const MOCK_TABLES: Table[] = [
  { id: 1, seats: 2, location: 'Window', tableNumber: 'T1' },
  { id: 2, seats: 4, location: 'Indoor', tableNumber: 'T2' },
  { id: 3, seats: 6, location: 'Outdoor', tableNumber: 'T3' },
  { id: 4, seats: 2, location: 'Bar', tableNumber: 'T4' },
];

export default function NewBooking({ navigation }: Props) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);

  // Generate array of next 7 days
  const getNextSevenDays = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Generate time slots from 12:00 to 21:00
  const timeSlots = Array.from({ length: 19 }, (_, i) => {
    const hour = Math.floor(i / 2) + 12;
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const renderDateSelection = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select Date</Text>
      <Picker
        selectedValue={selectedDate.toDateString()}
        onValueChange={(itemValue) => setSelectedDate(new Date(itemValue))}
        style={styles.picker}
      >
        {getNextSevenDays().map((date) => (
          <Picker.Item 
            key={date.toDateString()} 
            label={date.toLocaleDateString()} 
            value={date.toDateString()} 
          />
        ))}
      </Picker>
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => setStep(2)}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTimeSelection = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select Time</Text>
      <Picker
        selectedValue={selectedTime}
        onValueChange={(itemValue) => setSelectedTime(itemValue)}
        style={styles.picker}
      >
        {timeSlots.map((time) => (
          <Picker.Item key={time} label={time} value={time} />
        ))}
      </Picker>
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => setStep(3)}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTableSelection = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select Table</Text>
      <ScrollView style={styles.tableList}>
        {MOCK_TABLES.map((table) => (
          <TouchableOpacity
            key={table.id}
            style={[
              styles.tableItem,
              selectedTable?.id === table.id && styles.selectedTable
            ]}
            onPress={() => setSelectedTable(table)}
          >
            <Text style={styles.tableText}>
              Table {table.tableNumber} - {table.seats} seats
            </Text>
            <Text style={styles.tableLocation}>Location: {table.location}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity 
        style={[styles.nextButton, !selectedTable && styles.disabledButton]}
        disabled={!selectedTable}
        onPress={() => {
          // TODO: Implement booking logic
          alert('Booking confirmed!');
        }}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <View style={[styles.stepDot, step >= 1 && styles.activeStepDot]} />
        <View style={[styles.stepDot, step >= 2 && styles.activeStepDot]} />
        <View style={[styles.stepDot, step >= 3 && styles.activeStepDot]} />
      </View>
      
      {step === 1 && renderDateSelection()}
      {step === 2 && renderTimeSelection()}
      {step === 3 && renderTableSelection()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeStepDot: {
    backgroundColor: '#007AFF',
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableList: {
    flex: 1,
  },
  tableItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedTable: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  tableText: {
    fontSize: 16,
    fontWeight: '500',
  },
  tableLocation: {
    color: '#666',
    marginTop: 5,
  },
  picker: {
    height: 150,
    width: '100%',
    marginBottom: 20,
  },
});
*/