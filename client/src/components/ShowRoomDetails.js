import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import axios from 'axios';

const ShowRoomDetails = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/rooms/${roomId}`);
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  if (!room) {
    return <Typography variant="h6" color="text.secondary">Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {room.name}
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Rent per Day: ₹{room.rentperday}
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Description:
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {room.description}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Location: {room.location}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Features: {room.features.join(', ')}
      </Typography>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </Box>
    </Container>
  );
};

export default ShowRoomDetails;