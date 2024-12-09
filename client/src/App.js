import React from 'react';
import { Box } from '@mui/material'; 
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import CreateRoom from './components/CreateRoom';

// Placeholder components for routing

const AboutUs = () => <h1>About Us Page</h1>;
const ShowRooms = () => <h1>Show All Rooms Page</h1>;

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1, 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes>
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/show-rooms" element={<ShowRooms />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;