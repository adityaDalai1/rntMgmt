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
import DownloadIcon from '@mui/icons-material/Download';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalRooms: 0,
    recentRoom: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms')
      .then((res) => {
        const rooms = res.data;
        const recentRoom = rooms.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )[0];

        setStats({
          totalRooms: rooms.length,
          recentRoom,
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
      <Box
        sx={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVb9pjX4KRQU5GwBY6Xs4N-yFKleKdHlfNQ&s')`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          {/* Welcome Section */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h1" color="primary" gutterBottom>
              Welcome to Rental Management System
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Manage and organize your rentals effectively
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={4} mb={6}>
            <Grid item xs={12} md={6}>
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

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                  <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h4" gutterBottom>
                    Latest Room
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stats.recentRoom?.roomName || 'No rooms available'}
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
                startIcon={<MeetingRoomIcon />}
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
                to="/export"
                variant="contained"
                size="large"
                startIcon={<DownloadIcon />}
                fullWidth
                sx={{ py: 2 }}
              >
                Export Data
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Button
                component={Link}
                to="/qr-codes"
                variant="contained"
                size="large"
                startIcon={<QrCodeIcon />}
                fullWidth
                sx={{ py: 2 }}
              >
                QR Codes
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Button
                component="a"
                href="https://github.com/adityaDalai1/rntMgmt-Adi"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                fullWidth
                sx={{ py: 2 }}
              >
                GitHub
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Button
                component={Link}
                to="/search"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                fullWidth
                sx={{ py: 2 }}
              >
                Search Rooms
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default HomePage;
