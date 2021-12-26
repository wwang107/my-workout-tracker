import React from 'react';
import Header from './components/Header/Header';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

type LocationState = {
  from: string
}

const App = () => {
  const routes = [
    {
      label: "Dashboard", to: "/dashboard", icon: <DashboardIcon />, component: <div style={{
        flex: 1,  /* 1 and it will fill whole space left if no flex value are set to other children*/
        background: 'gold',
        overflow: 'auto'
      }}>
        dashboard
      </div>
    },
    {
      label: "Schedule", to: "/schedule", icon: <CalendarTodayIcon />, component: <div style={{
        flex: 1,  /* 1 and it will fill whole space left if no flex value are set to other children*/
        background: 'gold',
        overflow: 'auto'
      }}>
        schedule
      </div>
    },
    {
      label: "My Body", to: "/mybody", icon: <AccessibilityNewIcon />, component: <div style={{
        flex: 1,  /* 1 and it will fill whole space left if no flex value are set to other children*/
        background: 'gold',
        overflow: 'auto'
      }}>
        my body
      </div>
    }
  ]

  const location = useLocation();
  const from = (location.state as LocationState)?.from || routes[0].label

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '812px', margin: '0 auto' }}>
      <Header userName='Wei' info={from} />
      <Routes>
        {routes.map(r => <Route path={r.to} element={r.component} key={r.to} />)}
        <Route path='/' element={<Navigate to={routes[0].to} />} />
      </Routes>
      <BottomNavbar routes={routes} />
    </div>
  )
};

export default App;
