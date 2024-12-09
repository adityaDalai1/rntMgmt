import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Typography, 
  Button, 
  Snackbar, 
  Alert 
} from '@mui/material';
import axios from 'axios';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    features: '',
  });

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/rooms', {
        ...room,
        features: room.features.split(',').map((item) => item.trim()),
      });

      setNotification({
        open: true,
        message: 'Congratulation and Celebration',
        severity: 'success',
      });

      setRoom({
        name: '',
        maxcount: '',
        phonenumber: '',
        rentperday: '',
        type: '',
        description: '',
        location: '',
        features: '',
      });
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Error creating room:', error);

      setNotification({
        open: true,
        message: 'Bhariye na room bhariye',
        severity: 'error',
      });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#1c1c1c', // Dark background for the form
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        textAlign="center" 
        mb={3}
        color="primary"
        fontWeight={700}
      >
        Create a New Room
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Room Name"
          name="name"
          variant="outlined"
          value={room.name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' }, // Lighter label color for readability
          }}
          InputProps={{
            style: { color: '#fdf6e3' }, // Light text color
          }}
        />
        <TextField
          fullWidth
          label="Max Count"
          name="maxcount"
          variant="outlined"
          value={room.maxcount}
          onChange={handleChange}
          required
          type="number"
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phonenumber"
          variant="outlined"
          value={room.phonenumber}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Rent per Day"
          name="rentperday"
          variant="outlined"
          value={room.rentperday}
          onChange={handleChange}
          required
          type="number"
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Type (e.g., Single, Double)"
          name="type"
          variant="outlined"
          value={room.type}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          variant="outlined"
          value={room.description}
          onChange={handleChange}
          required
          multiline
          rows={3}
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          variant="outlined"
          value={room.location}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Features (comma-separated)"
          name="features"
          variant="outlined"
          value={room.features}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            style: { color: '#93a1a1' },
          }}
          InputProps={{
            style: { color: '#fdf6e3' },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: '48%',
              fontWeight: 'bold',
              borderRadius: '12px', // Rounded button
            }}
          >
            Create Room
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            sx={{
              width: '48%',
              fontWeight: 'bold',
              borderRadius: '12px',
            }}
          >
            Cancel
          </Button>
        </Box>
      </form>

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateRoom;