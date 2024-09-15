import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { WorkoutProvider } from './contexts/WorkoutContext';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import SettingsScreen from './screens/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Add Workout') {
                iconName = 'add-circle-outline';
              } else if (route.name === 'Workout List') {
                iconName = 'list-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Add Workout" component={AddWorkoutScreen} />
          <Tab.Screen name="Workout List" component={WorkoutListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;