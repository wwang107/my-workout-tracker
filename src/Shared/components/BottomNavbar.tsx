import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

type BottomNavbarProps = { routes: { label: string, to: string, icon: React.ReactNode }[] };

const BottomNavbar = ({ routes }: BottomNavbarProps) => {
  const location = useLocation();

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      sx={{
        borderStyle: 'solid',
        borderColor: 'black',
      }}
    >
      {
                routes.map((r) => (
                  <BottomNavigationAction
                    key={r.to}
                    label={r.label}
                    value={r.to}
                    icon={r.icon}
                    component={Link}
                    to={r.to}
                    state={{ from: r.label }}
                  />
                ))
            }
    </BottomNavigation>
  );
};

export default BottomNavbar;
