import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

const BottomNavbar = () => (
    <BottomNavigation
        showLabels
        sx={{ bgcolor: 'green' }}
    >
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
        <BottomNavigationAction label="Schedule" icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="My Body" icon={<AccessibilityNewIcon />} />
    </BottomNavigation >
);

export default BottomNavbar;