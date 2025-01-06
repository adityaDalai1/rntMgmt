// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import forestDuskTheme from './theme/forestDusk';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateRoom from './components/CreateRoom';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails';
import UpdateRoomInfo from './components/UpdateRoomInfo';
import HomePage from './components/HomePage';
import ExportPage from './components/ExportPage';
import QRCodePage from './components/QRCodePage';
import SearchRoom from './components/SearchRoom';

const App = () => (
  <ThemeProvider theme={forestDuskTheme}>
    <CssBaseline />
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box component="main" flexGrow={1} py={3}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<ShowRoomList />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/edit-room/:id" element={<UpdateRoomInfo />} />
          <Route path="/show-room/:id" element={<ShowRoomDetails />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/qr-codes" element={<QRCodePage />} />
          <Route path="/search" element={<SearchRoom />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  </ThemeProvider>
);

export default App;
