// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Fade,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HotelIcon from '@mui/icons-material/Hotel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalRooms: 0,
    availableRooms: 0,
    mostRecentRoom: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms')
      .then((res) => {
        const rooms = res.data;
        const availableRooms = rooms.filter((room) => room.availability).length;
        const mostRecentRoom = rooms.sort(
          (a, b) => new Date(b.roomissueddate) - new Date(a.roomissueddate)
        )[0];

        setStats({
          totalRooms: rooms.length,
          availableRooms,
          mostRecentRoom,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Welcome Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Welcome to Room Management System
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Manage and organize your rooms efficiently
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <HotelIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalRooms}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Rooms
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <CheckCircleIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.availableRooms}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Available Rooms
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PeopleIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Most Recent Room
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.mostRecentRoom?.name || 'No rooms yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Available Features
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              size="large"
              startIcon={<HotelIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              View Rooms
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/create-room"
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Add New Room
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/room-locations"
              variant="contained"
              size="large"
              startIcon={<LocationOnIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Room Locations
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default HomePage;
