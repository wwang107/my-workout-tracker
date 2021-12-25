import React from 'react';
import Grid from '@mui/material/Grid';

const App = () => (
  <main style={{ display: 'flex', height: '100vh', maxWidth: '812px', margin: '0 auto' }}>
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{ bgcolor: 'primary.main' }}
    >
      <Grid item >
        {/* Header */}
      </Grid>
      <Grid item>
        {/* Content */}
      </Grid>
      <Grid item>
        {/* Navbar */}
      </Grid>
    </Grid>
  </main>
);

export default App;
