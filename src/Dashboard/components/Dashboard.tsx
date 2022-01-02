import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import ControlBar from './ControlBar';
import WorkoutList from './WorkoutList';
import workoutData from '../../tests/mock/workoutData.json';
import { WorkoutItem } from '../types/Workout';
import Playlist from './Playlist';

const Dashboard = () => {
  const workouts = workoutData.reduce((previousValue, currentValue) => {
    currentValue.planItems.forEach((item) => {
      previousValue.push({
        planName: currentValue.planName,
        planId: currentValue.planId,
        workoutId: item.workoutId,
        workoutName: item.name,
        sets: item.sets,
      });
    });
    return previousValue;
  }, [] as WorkoutItem[]);

  const navigate = useNavigate();
  return (

    <Routes>
      <Route
        index
        element={(
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <WorkoutList workouts={workouts} />
            <ControlBar
              addHandler={() => { console.log('add'); }}
              playHandler={() => { navigate('exercise', { state: { workouts } }); }}
            />
          </Container>
)}
      />
      <Route
        path="exercise"
        element={<Playlist workouts={workouts} />}
      />
    </Routes>

  );
};

export default Dashboard;
