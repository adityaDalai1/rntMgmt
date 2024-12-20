import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button, Snackbar, Alert, Switch, FormControlLabel } from '@mui/material';
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
    amenities: true, // Boolean field for availability
    roomIssuedDate: new Date().toISOString().split('T')[0], // Date field for roomIssuedDate
  });

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    // Update state for availability (boolean)
    if (name === 'availability') {
      setRoom({ ...room, availability: checked });
      return;
    }

    // Handle input for numeric values
    if (name === 'phonenumber' && value !== '' && !/^\d*$/.test(value)) return;
    if ((name === 'maxcount' || name === 'rentperday') && value !== '' && !/^\d*$/.test(value)) return;

    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Parse room data before submitting
    const parsedRoom = {
      ...room,
      maxcount: Number(room.maxcount),
      rentperday: Number(room.rentperday),
      features: room.features.split(',').map((item) => item.trim()), // Handle comma-separated features
    };

    try {
      await axios.post('https://3000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms',parsedRoom)
      setNotification({
        open: true,
        message: 'Room created successfully!',
        severity: 'success',
      });

      // Reset the form
      setRoom({
        name: '',
        maxcount: '',
        phonenumber: '',
        rentperday: '',
        type: '',
        description: '',
        location: '',
        features: '',
        amenities: true,
        roomIssuedDate: new Date().toISOString().split('T')[0],
      });

      setTimeout(() => navigate('/'), 1500); // Redirect to the home page after a successful submission
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create room. Please try again.';
      setNotification({
        open: true,
        message: errorMessage,
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
        backgroundColor: '#1c1c1c',
      }}
    >
      <Typography variant="h4" component="h1" textAlign="center" mb={3} color="primary" fontWeight={700}>
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
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
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
          InputProps={{
            inputProps: { min: 1 },
            style: { color: '#fdf6e3' },
          }}
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phonenumber"
          variant="outlined"
          value={room.phonenumber}
          onChange={handleChange}
          required
          type="tel"
          InputProps={{
            inputProps: { maxLength: 10, pattern: '[0-9]{10}' },
            style: { color: '#fdf6e3' },
          }}
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          sx={{ mb: 2 }}
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
          InputProps={{
            inputProps: { min: 0 },
            style: { color: '#fdf6e3' },
          }}
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Type"
          name="type"
          variant="outlined"
          value={room.type}
          onChange={handleChange}
          required
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          variant="outlined"
          value={room.description}
          onChange={handleChange}
          required
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          variant="outlined"
          value={room.location}
          onChange={handleChange}
          required
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Features (comma-separated)"
          name="features"
          variant="outlined"
          value={room.features}
          onChange={handleChange}
          required
          InputLabelProps={{ style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
          sx={{ mb: 2 }}
        />

        {/* Availability Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={room.availability}
              onChange={handleChange}
              name="availability"
              color="primary"
            />
          }
          label="Availability"
          sx={{ mb: 2 }}
        />

        {/* Room Issued Date */}
        <TextField
          fullWidth
          label="Room Issued Date"
          name="roomIssuedDate"
          type="date"
          variant="outlined"
          value={room.roomIssuedDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true, style: { color: '#93a1a1' } }}
          InputProps={{ style: { color: '#fdf6e3' } }}
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: '48%',
              fontWeight: 'bold',
              borderRadius: '12px',
            }}
          >
            Submit
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

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
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