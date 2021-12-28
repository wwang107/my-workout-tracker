import React from 'react';
import Header from './Shared/Header/Header';
import BottomNavbar from './Shared/BottomNavbar/BottomNavbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Schedule from './Schedule/Schedule';
import MyBody from './MyBody/MyBody';
import OverflowContent from './Shared/OverflowContent/OverflowContent';

type LocationState = {
  from: string
}

const App = () => {
  const routes = [
    {
      label: "My Workout", to: "/dashboard", icon: <DashboardIcon />, component: <Dashboard />
    },
    {
      label: "Stats", to: "/statistic", icon: <BarChartIcon />, component: <Schedule />
    },
    {
      label: "Profile", to: "/profile", icon: <AccountCircleIcon />, component: <MyBody />
    }
  ]

  const location = useLocation();
  const from = (location.state as LocationState)?.from || routes[0].label

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '812px', margin: '0 auto' }}>
      <Header userName='Wei' info={from} />
      <Routes>
        {
          routes.map(r => <Route
            path={r.to}
            element={<OverflowContent children={r.component} />}
            key={r.to}
          />)
        }
        <Route path='/' element={<Navigate to={routes[0].to} />} />
      </Routes>
      <BottomNavbar routes={routes} />
    </div>
  )
};

export default App;
