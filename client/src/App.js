import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateRoom from './components/CreateRoom';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails';
import UpdateRoomInfo from './components/UpdateRoomInfo';

// Placeholder components for routing
const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar /> {/* Navbar at the top of the page */}

      <Box
        sx={{
          flex: 1, // Ensures content area grows to take up available space
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes>
          {/* Routes for different pages */}
          <Route path="/rooms" element={<ShowRoomList />} /> {/* List of all rooms */}
          <Route path="/create-room" element={<CreateRoom />} /> {/* Page to create a room */}
          <Route path="/show-room/:id" element={<ShowRoomDetails />} /> {/* Show details of a room */}
          <Route path="/edit-room/:id" element={<UpdateRoomInfo />} /> {/* Edit room details */}
          <Route path="/" element={<HomePage />} /> {/* Homepage route */}
        </Routes>
      </Box>

      <Footer /> {/* Footer at the bottom of the page */}
    </Box>
  );
};

export default App;
