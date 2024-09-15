import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { WorkoutContext } from '../contexts/WorkoutContext';
import styles from '../styles/styles';

const WorkoutItem = ({ workout }) => {
  const { unit } = useContext(WorkoutContext);

  const displayDistance =
    unit === 'Miles'
      ? (workout.distance / 1.60934).toFixed(2)
      : workout.distance.toFixed(2);

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {workout.type} - {displayDistance} {unit === 'Kilometers' ? 'km' : 'miles'} -{' '}
        {workout.duration} min - {new Date(workout.date).toDateString()}
      </Text>
    </View>
  );
};

export default WorkoutItem;