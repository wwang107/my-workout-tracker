import React, { useState } from 'react';
import { Container } from '@mui/material';
import { WorkoutItem } from '../types/Workout'
import WorkoutList from './WorkoutList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

type PlaylistProps = { workouts: WorkoutItem[] }

const Playlist = ({ workouts }: PlaylistProps) => {
    const [sortableWorkouts, setSortableWork] = useState(workouts)

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source } = result
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index == source.index
        ) {
            return;
        }

        const items = Array.from(sortableWorkouts);
        const [reorderedItem] = items.splice(source.index, 1);
        items.splice(destination.index, 0, reorderedItem);
        setSortableWork(items);
    }

    return <DragDropContext onDragEnd={handleOnDragEnd}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <WorkoutList workouts={sortableWorkouts} isDroppable />
        </Container>
    </DragDropContext>
}

export default Playlist;