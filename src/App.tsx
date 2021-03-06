import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
  Route, Routes, Navigate, useLocation,
} from 'react-router-dom';
import BottomNavbar from './Shared/components/BottomNavbar';
import Header from './Shared/components/Header';
import Dashboard from './Dashboard/components/Dashboard';
import OverflowContent from './Shared/components/OverflowContent';

type LocationState = {
  from: string
};

const App = () => {
  const routes = [
    {
      label: 'Workout', path: '/dashboard/*', to: '/dashboard', icon: <DashboardIcon />, component: <Dashboard />,
    },
  ];

  const location = useLocation();
  const from = (location.state as LocationState)?.from || routes[0].label;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '812px', margin: '0 auto',
    }}
    >
      <Header userName="Wei" info={from} />
      <OverflowContent>
        <Routes>
          {
            routes.map((r) => (
              <Route
                path={r.path}
                element={r.component}
                key={r.path}
              />
            ))
          }
          <Route path="/" element={<Navigate to={routes[0].to} />} />
        </Routes>
      </OverflowContent>
      <BottomNavbar routes={routes} />
    </div>
  );
};

export default App;
