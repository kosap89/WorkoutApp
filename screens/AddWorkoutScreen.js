import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { WorkoutContext } from '../contexts/WorkoutContext';
import styles from '../styles/styles';

const AddWorkoutScreen = () => {
  const { workouts, setWorkouts, unit } = useContext(WorkoutContext);
  const [type, setType] = useState('Run');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const addWorkout = () => {
    const distanceNum = parseFloat(distance);
    const durationNum = parseFloat(duration);

    if (isNaN(distanceNum) || isNaN(durationNum)) {
      Alert.alert('Invalid Input', 'Please enter numeric values for distance and duration.');
      return;
    }

    if (distanceNum < 0 || durationNum < 0) {
      Alert.alert('Invalid Input', 'Distance and duration cannot be negative.');
      return;
    }

    let distanceInKm = distanceNum;
    if (unit === 'Miles') {
      distanceInKm = distanceNum * 1.60934;
    }

    const newWorkout = {
      id: workouts.length + 1,
      type,
      distance: distanceInKm,
      duration: durationNum,
      date,
    };

    setWorkouts([...workouts, newWorkout]);

    // reset fields
    setType('Run');
    setDistance('');
    setDuration('');
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Workout</Text>

      <Text style={styles.label}>Type:</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
        style={{ height: 50, width: '100%' }}
      >
        <Picker.Item label="Run" value="Run" />
        <Picker.Item label="Swim" value="Swim" />
        <Picker.Item label="Cycling" value="Cycling" />
      </Picker>

      <Text style={styles.label}>
        Distance ({unit === 'Kilometers' ? 'km' : 'miles'}):
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
        placeholder={`Enter distance in ${unit === 'Kilometers' ? 'km' : 'miles'}`}
      />

      <Text style={styles.label}>Duration (minutes):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        placeholder="Enter duration in minutes"
      />

      <Text style={styles.label}>Date:</Text>
      <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={date}
        onConfirm={(selectedDate) => {
          setDatePickerVisibility(false);
          setDate(selectedDate);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Add Workout" onPress={addWorkout} />
      </View>
    </View>
  );
};

export default AddWorkoutScreen;