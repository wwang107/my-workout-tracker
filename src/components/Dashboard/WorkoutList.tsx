import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import WorkoutCard from './WorkoutCard';
import workoutData from '../../tests/mock/workoutData.json'
import { ListSubheader } from '@mui/material';

type workoutItem = {
    planName: string
    workoutName: string
    sets: { name: string, reps: number, weight: number }[]
};

type WorkoutListProps = {
    workouts: workoutItem[]
}

const WorkoutList = ({ workouts }: WorkoutListProps) => {

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                workouts.map((item, id) =>
                    <ListItem key={id} sx={{ width: '100%', justifyContent: 'center' }}>
                        <WorkoutCard
                            planName={item.planName}
                            workoutName={item.workoutName}
                            sets={item.sets}
                        />
                    </ListItem>
                )
            }
        </List>
    )
}

export default WorkoutList;