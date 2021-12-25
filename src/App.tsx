import React from 'react';
import Header from './components/Header/Header';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '812px', margin: '0 auto' }}>
    <Header userName='Wei' info='Dashboard' />
    <div style={{
      flex: 1,  /* 1 and it will fill whole space left if no flex value are set to other children*/
      background: 'gold',
      overflow: 'auto'
    }}>
      main content
    </div>
    <BottomNavbar />
  </div>
);

export default App;
