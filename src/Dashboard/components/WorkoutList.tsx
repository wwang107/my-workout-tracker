import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import WorkoutCard from './WorkoutCard';
import { WorkoutItem } from '../types/Workout';

type WorkoutListProps = {
  workouts: WorkoutItem[],
  dragEndHandler?: (result: DropResult) => void,
  isDroppable?: boolean,
  showWorkoutCheckList?: boolean
};

const renderListItems = (workouts: WorkoutItem[], isDraggable?: boolean, showWorkoutCheckList?: boolean) => (
  <>
    {
      workouts.map((item, index) => (
        <Draggable
          isDragDisabled={!isDraggable}
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
);

const WorkoutList = ({
  workouts,
  dragEndHandler,
  isDroppable = false,
  showWorkoutCheckList = false,
}: WorkoutListProps) => (
  <DragDropContext onDragEnd={dragEndHandler}>
    <Droppable isDropDisabled={!isDroppable} droppableId="droppable-workout-list">
      {(provided) => (
        <List sx={{ width: '100%' }} ref={provided.innerRef}>
          {renderListItems(workouts, isDroppable, showWorkoutCheckList)}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  </DragDropContext>
);

export default WorkoutList;
