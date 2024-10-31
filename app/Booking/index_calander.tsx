import { FC, useState } from 'react';
import { Button, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { add, format } from 'date-fns'

interface IndexProps {}
interface DateType {
    justDate: Date | null;
    dateTime: Date | null;
    seating: string | null;
}

const Index: FC<IndexProps> = () => {
    const [date, setDate] = useState<DateType>({
        justDate: null,
        dateTime: null,
        seating: null,
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

    const handleConfirmBooking = () => {
        console.log('Booking confirmed:', {
            date: format(date.justDate!, 'PPP'),
            time: format(date.dateTime!, 'kk:mm'),
            seating: date.seating
        });
        setShowSuccess(true);
    };

    const [showSuccess, setShowSuccess] = useState(false);

    const handleCancel = () => {
        console.log('Booking cancelled');
        setDate({ justDate: null, dateTime: null, seating: null });
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

    return (
        <View style={{ 
            flex: 1,
            height: '100%'
        }}>
            {showSuccess ? (
                <View style={{
                    flex: 1,
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#10b981',
                        marginBottom: 20
                    }}>
                        Booking Successful!
                    </Text>
                    <View style={{
                        backgroundColor: '#f3f4f6',
                        padding: 20,
                        borderRadius: 8,
                        width: '100%'
                    }}>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>
                            Date: {format(date.justDate!, 'PPP')}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 10 }}>
                            Time: {format(date.dateTime!, 'kk:mm')}
                        </Text>
                        <Text style={{ fontSize: 16, marginBottom: 20, textTransform: 'capitalize' }}>
                            Seating: {date.seating}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#4b5563',
                            padding: 16,
                            borderRadius: 8,
                            marginTop: 20,
                            width: '100%',
                            alignItems: 'center'
                        }}
                        onPress={() => {
                            setDate({ justDate: null, dateTime: null, seating: null });
                            setShowSuccess(false);
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                            Make Another Booking
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : date.dateTime && date.seating ? (
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
            ) : date.dateTime ? (
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
                        <View style={{ gap: 4, width: '100%' }}>
                            {times.map((time, i) => (
                                <View 
                                    key={i} 
                                    style={{ 
                                        backgroundColor: '#f3f4f6', 
                                        padding: 8, 
                                        borderRadius: 4,
                                        marginBottom: 8 
                                    }}
                                >
                                    <Button
                                        onPress={() => handleTimeSelect(time)}
                                        title={format(time, 'kk:mm')}
                                    />
                                </View>
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

export default Index;
