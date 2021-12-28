import React from 'react'
import { Container } from '@mui/material';
import ControlBar from './ControlBar';
import WorkoutList from './WorkoutList';
import workoutData from '../../tests/mock/workoutData.json'
import { Route, Routes } from 'react-router-dom';

type workoutItem = {
    planName: string
    workoutName: string
    sets: { name: string, reps: number, weight: number }[]
};

const Dashboard = () => {
    const workouts = workoutData.reduce((previousValue, currentValue) => {
        currentValue.planItems.forEach(item => {
            previousValue.push({
                "planName": currentValue.planName,
                "workoutName": item.name,
                "sets": item.sets
            })
        })
        return previousValue
    }, [] as workoutItem[])

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Routes>
                <Route
                    path='/'
                    element={<>
                        <WorkoutList workouts={workouts} />
                        <ControlBar addHandler={() => { console.log("add") }} playHandler={() => { console.log("play") }} />
                    </>}
                />
            </Routes>
        </Container >
    )
};

export default Dashboard;