import {
  AppBar, IconButton, Toolbar, Typography, Avatar,
} from '@mui/material';
import React from 'react';

type HeaderProps = {
  userName: string
  info: string
};

const Header = ({ userName, info }: HeaderProps) => (
  <AppBar position="sticky">
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6">
        {info}
      </Typography>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="add-workout"
      >
        <Avatar>
          {userName}
        </Avatar>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
