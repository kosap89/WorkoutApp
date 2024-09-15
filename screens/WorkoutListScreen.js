import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WorkoutContext } from '../contexts/WorkoutContext';
import WorkoutItem from '../components/WorkoutItem';
import styles from '../styles/styles';

const WorkoutListScreen = () => {
  const { workouts, unit } = useContext(WorkoutContext);

  const sumDistances = workouts.reduce((sums, workout) => {
    const distance =
      unit === 'Miles' ? workout.distance / 1.60934 : workout.distance;

    if (!sums[workout.type]) {
      sums[workout.type] = 0;
    }
    sums[workout.type] += distance;
    return sums;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Workout List</Text>

      <View style={styles.sumContainer}>
        {Object.keys(sumDistances).map((type) => (
          <Text key={type} style={styles.sumText}>
            {type}: {sumDistances[type].toFixed(2)} {unit === 'Kilometers' ? 'km' : 'miles'}
          </Text>
        ))}
      </View>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <WorkoutItem workout={item} />}
      />
    </View>
  );
};

export default WorkoutListScreen;