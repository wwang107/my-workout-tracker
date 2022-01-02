import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import WorkoutCard from './WorkoutCard';
import { WorkoutItem } from '../types/Workout';

type WorkoutListProps = {
  workouts: WorkoutItem[],
  isDroppable?: boolean,
  showWorkoutCheckList?: boolean
};

const renderListItems = (workouts: WorkoutItem[], isDraggable?: boolean, showWorkoutCheckList?: boolean) => (isDraggable
  ? (
    <>
      {
        workouts.map((item, index) => (
          <Draggable
            key={`${item.planId}-${item.workoutId}`}
            draggableId={`${item.planId}-${item.workoutId}`}
            index={index}
          >
            {(provided) => (
              <ListItem
                sx={{ width: '100%', justifyContent: 'center' }}
                ref={provided.innerRef}
                /* eslint-disable react/jsx-props-no-spreading */
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              /* eslint-disable react/jsx-props-no-spreading */
              >
                <WorkoutCard
                  planName={item.planName}
                  planId={item.planId}
                  workoutName={item.workoutName}
                  workoutId={item.workoutId}
                  sets={item.sets}
                  hasReorderIcon={isDraggable}
                  showCheckList={showWorkoutCheckList}
                />
              </ListItem>
            )}
          </Draggable>
        ))
      }
    </>
  )
  : (
    <>
      {
        workouts.map((item) => (
          <ListItem key={`${item.planId}-${item.workoutId}`} sx={{ width: '100%', justifyContent: 'center' }}>
            <WorkoutCard
              planName={item.planName}
              workoutName={item.workoutName}
              sets={item.sets}
              planId={item.planId}
              workoutId={item.workoutId}
            />
          </ListItem>
        ))
      }
    </>
  ));

const WorkoutList = ({ workouts, isDroppable = false, showWorkoutCheckList = false }: WorkoutListProps) => {
  if (!isDroppable) {
    return (
      <List sx={{ width: '100%' }}>
        {renderListItems(workouts)}
      </List>
    );
  }
  return (
    <Droppable droppableId="droppable-workout-list">
      {(provided) => (
        <List sx={{ width: '100%' }} ref={provided.innerRef}>
          {renderListItems(workouts, isDroppable, showWorkoutCheckList)}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
};

export default WorkoutList;
