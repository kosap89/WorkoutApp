import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { WorkoutContext } from '../contexts/WorkoutContext';
import styles from '../styles/styles';

const SettingsScreen = () => {
  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <RadioButton.Group
        onValueChange={(newUnit) => setUnit(newUnit)}
        value={unit}
      >
        <View style={styles.radioContainer}>
          <RadioButton value="Kilometers" />
          <Text style={styles.radioLabel}>Kilometers</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="Miles" />
          <Text style={styles.radioLabel}>Miles</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default SettingsScreen;