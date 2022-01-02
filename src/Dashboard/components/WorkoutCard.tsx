import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Checkbox,
  Collapse,
} from '@mui/material';
import { WorkoutItem } from '../types/Workout';

type WorkoutCardProps = WorkoutItem & { hasReorderIcon?: boolean, showCheckList?: boolean };

const WorkoutCard = ({
  planName, planId, workoutName, workoutId, sets, hasReorderIcon, showCheckList,
}: WorkoutCardProps) => (
  <Card sx={{
    width: '90%', minHeight: '100px', padding: '10px', borderRadius: 2,
  }}
  >
    <Box sx={{ display: 'flex' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="subtitle2" component="div">
          {planName}
        </Typography>
        <Typography component="div" variant="h5">
          {workoutName}
        </Typography>
        <Grid container justifyContent="flex-start">
          {
            sets.map(set => (
              <Grid
                item
                key={`chip-${planId}-${workoutId}`}
                sx={{ marginRight: '2px', marginTop: '2px' }}
              >
                <Chip
                  label={`${set.name} \u22C6 ${set.weight} kg \u22C6 ${set.reps} reps`}
                  size="small"
                  variant="outlined"
                />
              </Grid>
            ))
          }
        </Grid>
      </CardContent>
      {hasReorderIcon && <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}><ReorderIcon /></Box>}
    </Box>
    <Collapse in={showCheckList}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {sets.map((set) => (
              <TableRow key={set.name}>
                <TableCell component="th" scope="row">
                  {set.name}
                </TableCell>
                <TableCell align="right">
                  {set.weight}
                  {' '}
                  kg
                </TableCell>
                <TableCell align="right">
                  {set.reps}
                  {' '}
                  reps
                </TableCell>
                <TableCell align="right"><Checkbox /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Collapse>
  </Card>
);

export default WorkoutCard;
