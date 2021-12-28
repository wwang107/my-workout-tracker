import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

type WorkoutCardProps = {
    planName: string,
    workoutName: string,
    sets: { name: string, reps: number, weight: number }[]
}

const WorkoutCard = ({ planName, workoutName, sets }: WorkoutCardProps) => {
    return (
        <Card sx={{ display: 'flex', width: '90%', minHeight: '150px', borderRadius: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <CardContent>
                    <Typography variant="subtitle2" component="div">
                        {planName}
                    </Typography>
                    <Typography component="div" variant="h5" >
                        {workoutName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {sets.length} sets
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default WorkoutCard