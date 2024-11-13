import { FC, useState } from 'react';
import { Button, View, ScrollView, Text, TouchableOpacity, Alert, StyleSheet, TextInput } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { add, format } from 'date-fns'
import { sendBookingConfirmation } from '../services/emailService';

interface IndexProps {}
interface DateType {
    justDate: Date | null;
    dateTime: Date | null;
    seating: string | null;
    partySize: number | null;
}

const Index: FC<IndexProps> = () => {
    const [date, setDate] = useState<DateType>({
        justDate: null,
        dateTime: null,
        seating: null,
        partySize: null,
    });

    const seatingOptions = ['inside', 'outside', 'stage', 'bar'];

    const getTime = () => {
        if(!date.justDate) return [];
        const {justDate} = date;
        const beginning = add(justDate, {hours: 11});
        const end = add(justDate, {hours: 23});
        const intervals = 30;

        const times = [];
        for (let i = beginning; i <= end; i = add(i, { minutes: intervals})) {
            times.push(i);
        }
        return times;
    }

    const times = getTime();

    const [email, setEmail] = useState('');
    const [isSendingEmail, setIsSendingEmail] = useState(false);

    const handleSendEmail = async () => {
        if (!date.justDate || !date.dateTime || !date.seating || !date.partySize) {
            Alert.alert('Error', 'Booking details are missing');
            return;
        }

        if (!email) {
            Alert.alert('Error', 'Please enter an email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        setIsSendingEmail(true);
        try {
            await sendBookingConfirmation({
                email,
                bookingDetails: {
                    date: format(date.justDate, 'PPP'),
                    time: format(new Date(date.dateTime), 'kk:mm'),
                    partySize: date.partySize,
                    seating: date.seating
                }
            });
            Alert.alert('Success', 'Booking confirmation sent to your email!');
            setEmail('');
        } catch (error) {
            console.error('Email error:', error);
            Alert.alert('Error', 'Failed to send booking confirmation');
        } finally {
            setIsSendingEmail(false);
        }
    };

    const handleConfirmBooking = () => {
        console.log('Booking confirmed:', {
            date: format(date.justDate!, 'PPP'),
            time: format(date.dateTime!, 'kk:mm'),
            seating: date.seating,
            partySize: date.partySize
        });
        setShowSuccess(true);
    };

    const [showSuccess, setShowSuccess] = useState(false);

    const handleCancel = () => {
        console.log('Booking cancelled');
        setDate({ justDate: null, dateTime: null, seating: null, partySize: null });
        setShowSuccess(false);
    };

    const handleDateSelect = (day: DateData) => {
        const selectedDate = new Date(day.timestamp);
        console.log('Date selected:', format(selectedDate, 'PPP'));
        setDate(prev => ({...prev, justDate: selectedDate}));
    };

    const handleTimeSelect = (time: Date) => {
        console.log('Time selected:', format(time, 'kk:mm'));
        setDate(prev => ({...prev, dateTime: time}));
    };

    const handleSeatingSelect = (seating: string) => {
        console.log('Seating selected:', seating);
        setDate(prev => ({...prev, seating}));
    };

    const handlePartySizeSelect = (size: number) => {
        console.log('Party size selected:', size);
        setDate(prev => ({...prev, partySize: size}));
    };

    return (
        <View style={{ flex: 1, height: '100%' }}>
            {showSuccess ? (
                <View style={styles.successContainer}>
                    <Text style={styles.successTitle}>
                        Booking Successful!
                    </Text>
                    <View style={styles.bookingDetails}>
                        <Text style={styles.detailText}>
                            Date: {date.justDate ? format(date.justDate, 'PPP') : ''}
                        </Text>
                        <Text style={styles.detailText}>
                            Time: {date.dateTime ? format(new Date(date.dateTime), 'kk:mm') : ''}
                        </Text>
                        <Text style={styles.detailText}>
                            Seating: {date.seating || ''}
                        </Text>
                        <Text style={styles.detailText}>
                            Party Size: {date.partySize} {date.partySize === 1 ? 'person' : 'people'}
                        </Text>
                    </View>

                    <View style={styles.emailSection}>
                        <Text style={styles.emailLabel}>
                            Want a confirmation email?
                        </Text>
                        <TextInput
                            style={styles.emailInput}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity
                            style={[
                                styles.emailButton,
                                isSendingEmail && styles.buttonDisabled
                            ]}
                            onPress={handleSendEmail}
                            disabled={isSendingEmail}
                        >
                            <Text style={styles.buttonText}>
                                {isSendingEmail ? 'Sending...' : 'Send Confirmation'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.newBookingButton}
                        onPress={() => {
                            setDate({ justDate: null, dateTime: null, seating: null, partySize: null });
                            setShowSuccess(false);
                            setEmail('');
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Make Another Booking
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : date.dateTime && date.seating && date.partySize ? (
                <View style={{
                    flex: 1,
                    padding: 20,
                    alignItems: 'center',
                    gap: 10
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#10b981',
                            padding: 16,
                            borderRadius: 8,
                            width: '100%',
                            alignItems: 'center'
                        }}
                        onPress={handleConfirmBooking}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            Confirm Booking
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#ef4444',
                            padding: 16,
                            borderRadius: 8,
                            width: '100%',
                            alignItems: 'center'
                        }}
                        onPress={handleCancel}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : date.dateTime && date.partySize ? (
                <View>
                    <ScrollView 
                        contentContainerStyle={{ 
                            padding: 20,
                            alignItems: 'center'
                        }}
                        style={{
                            flex: 1,
                            width: '100%'
                        }}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>
                            Select Seating Area
                        </Text>
                        <View style={{ gap: 10, width: '100%' }}>
                            {seatingOptions.map((option) => (
                                <TouchableOpacity
                                    key={option}
                                    style={{
                                        backgroundColor: date.seating === option ? '#4b5563' : '#f3f4f6',
                                        padding: 16,
                                        borderRadius: 8,
                                        alignItems: 'center'
                                    }}
                                    onPress={() => handleSeatingSelect(option)}
                                >
                                    <Text style={{ 
                                        color: date.seating === option ? 'white' : 'black',
                                        textTransform: 'capitalize'
                                    }}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ef4444',
                                padding: 16,
                                borderRadius: 8,
                                width: '100%',
                                alignItems: 'center'
                            }}
                            onPress={handleCancel}
                        >
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : date.justDate && date.partySize ? (
                <View>
                    <ScrollView 
                        contentContainerStyle={{ 
                            padding: 20,
                            alignItems: 'center'
                        }}
                        style={{
                            flex: 1,
                            width: '100%'
                        }}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>
                            Select Time
                        </Text>
                        <View style={{ gap: 4, width: '100%' }}>
                            {times.map((time, i) => (
                                <TouchableOpacity
                                    key={i}
                                    style={{
                                        backgroundColor: date.dateTime === time ? '#4b5563' : '#f3f4f6',
                                        padding: 16,
                                        borderRadius: 8,
                                        marginBottom: 8,
                                        alignItems: 'center'
                                    }}
                                    onPress={() => handleTimeSelect(time)}
                                >
                                    <Text style={{ 
                                        color: date.dateTime === time ? 'white' : 'black',
                                        fontSize: 16 
                                    }}>
                                        {format(time, 'kk:mm')}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ef4444',
                                padding: 16,
                                borderRadius: 8,
                                width: '100%',
                                alignItems: 'center'
                            }}
                            onPress={handleCancel}
                        >
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : date.justDate ? (
                <View>
                    <ScrollView 
                        contentContainerStyle={{ 
                            padding: 20,
                            alignItems: 'center'
                        }}
                        style={{
                            flex: 1,
                            width: '100%'
                        }}
                    >
                        <Text style={{ fontSize: 18, marginBottom: 20, fontWeight: 'bold' }}>
                            Select Party Size
                        </Text>
                        <View style={{ gap: 10, width: '100%' }}>
                            {[...Array(15)].map((_, i) => (
                                <TouchableOpacity
                                    key={i + 1}
                                    style={{
                                        backgroundColor: date.partySize === i + 1 ? '#4b5563' : '#f3f4f6',
                                        padding: 16,
                                        borderRadius: 8,
                                        alignItems: 'center'
                                    }}
                                    onPress={() => handlePartySizeSelect(i + 1)}
                                >
                                    <Text style={{ 
                                        color: date.partySize === i + 1 ? 'white' : 'black',
                                        fontSize: 16
                                    }}>
                                        {i + 1} {i === 0 ? 'person' : 'people'}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#ef4444',
                                padding: 16,
                                borderRadius: 8,
                                width: '100%',
                                alignItems: 'center'
                            }}
                            onPress={handleCancel}
                        >
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <Calendar
                    minDate={new Date().toDateString()}
                    onDayPress={handleDateSelect}
                    markedDates={{}}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    successContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    successTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#10b981',
        marginBottom: 20,
    },
    bookingDetails: {
        backgroundColor: '#f3f4f6',
        padding: 20,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    emailSection: {
        width: '100%',
        backgroundColor: '#f3f4f6',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    emailLabel: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: '500',
    },
    emailInput: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        width: '100%',
    },
    emailButton: {
        backgroundColor: '#10b981',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    newBookingButton: {
        backgroundColor: '#4b5563',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Index;