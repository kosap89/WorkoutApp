import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      type: 'Run',
      distance: 5, // in kilometers
      duration: 30,
      date: new Date(),
    },
    {
      id: 2,
      type: 'Swim',
      distance: 2,
      duration: 15,
      date: new Date(),
    },
  ]);

  const [unit, setUnit] = useState('Kilometers'); 

  return (
    <WorkoutContext.Provider
      value={{ workouts, setWorkouts, unit, setUnit }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
