import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import RoomCard from './RoomCard';

function ShowRoomList() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get("https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms")
      .then((res) => {
        setRooms(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowRoomList ->', err);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Rooms List
      </Typography>

      <Button
        component={Link}
        to="/create-room"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add New Room
      </Button>

      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {rooms.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No rooms found!
              </Typography>
            </Grid>
          ) : (
            rooms.map((room, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <RoomCard room={room} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default ShowRoomList;
