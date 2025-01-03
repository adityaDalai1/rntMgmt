// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1, 
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              opacity: 0.8,
              cursor: 'pointer'
            }
          }}
        >
          Room Management System
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/room-list"
            color="primary"
            variant="outlined"
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white',
              },
            }}
          >
            View Rooms
          </Button>
          <Button
            component={Link}
            to="/create-room"
            color="primary"
            variant="contained"
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Add Room
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
