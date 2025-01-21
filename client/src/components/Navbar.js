// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #1e3c72, #2a5298)',
        color: 'white',
        padding: '10px 0',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar>
        {/* Brand Section */}
        <Typography
          variant="h4"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'white',
            '&:hover': {
              textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          Rental Management
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 3,
          }}
        >
          <Button
            component={Link}
            to="/rooms"
            sx={{
              color: 'white',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Rooms
          </Button>
          <Button
            component={Link}
            to="/create-room"
            sx={{
              color: 'white',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '6px 16px',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.4)',
              },
            }}
          >
            Add Room
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: 'white',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            About
          </Button>
        </Box>

        {/* Mobile Navigation */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: '#2a5298',
                color: 'white',
              },
            }}
          >
            <MenuItem component={Link} to="/rooms" onClick={handleMenuClose}>
              Rooms
            </MenuItem>
            <MenuItem
              component={Link}
              to="/create-room"
              onClick={handleMenuClose}
            >
              Add Room
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
