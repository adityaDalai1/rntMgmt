import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
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
    amenities: '',
    roomissueddate: '',
    availability: true,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms', room)
      .then(() => {
        setRoom({
          name: '',
          maxcount: '',
          phonenumber: '',
          rentperday: '',
          type: '',
          description: '',
          location: '',
          amenities: '',
          roomissueddate: '',
          availability: true,
        });

        toast.success('Room added successfully!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in CreateRoom:', err);
        toast.error('Something went wrong, try again!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <Container maxWidth="sm">
      <ToastContainer />
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Add New Room
        </Typography>
        <Typography variant="subtitle1" textAlign="center" gutterBottom>
          Create a new room entry by filling in the details below.
        </Typography>
        <Box component="form" noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Room Name"
                name="name"
                value={room.name}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Max Count"
                name="maxcount"
                type="number"
                value={room.maxcount}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phonenumber"
                value={room.phonenumber}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rent Per Day"
                name="rentperday"
                type="number"
                value={room.rentperday}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Room Type"
                name="type"
                value={room.type}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={room.description}
                onChange={onChange}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                name="location"
                value={room.location}
                onChange={onChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amenities (comma-separated)"
                name="amenities"
                value={room.amenities}
                onChange={onChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Room Issued Date"
                name="roomissueddate"
                type="date"
                value={room.roomissueddate}
                onChange={onChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" marginTop={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginRight: 1 }}
            >
              Add Room
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              component={Link}
              to="/"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateRoom;
