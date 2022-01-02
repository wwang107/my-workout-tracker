import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type ControlBarProps = {
  addHandler: () => void
  playHandler: () => void
};

const ControlBar = ({ addHandler, playHandler }: ControlBarProps) => (
  <Grid
    container
    sx={{
      width: 200, position: 'fixed', bottom: 80, borderStyle: 'solid', borderRadius: 30, alignItems: 'center',
    }}
  >
    <Grid item xs={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton
          color="inherit"
          aria-label="add-workout"
          onClick={addHandler}
        >
          <AddSharpIcon />
        </IconButton>
      </Box>
    </Grid>
    <Grid item xs={6}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton
          color="inherit"
          aria-label="start-workout"
          onClick={playHandler}
        >
          <PlayArrowIcon />
        </IconButton>
      </Box>
    </Grid>
  </Grid>
);

export default ControlBar;
