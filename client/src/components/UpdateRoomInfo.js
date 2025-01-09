import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Grid,
  Container,
} from '@mui/material';
import axios from 'axios';

function UpdateRoomInfo() {
  const [room, setRoom] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    amenities: [],
    roomissueddate: '',
    availability: true,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms/${id}`)
      .then((res) => {
        setRoom({
          name: res.data.name,
          maxcount: res.data.maxcount,
          phonenumber: res.data.phonenumber,
          rentperday: res.data.rentperday,
          type: res.data.type,
          description: res.data.description,
          location: res.data.location,
          amenities: res.data.amenities,
          roomissueddate: res.data.roomissueddate,
          availability: res.data.availability,
        });
      })
      .catch((err) => {
        console.error('Error fetching room details:', err);
      });
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'amenities') {
      setRoom({ ...room, amenities: value.split(',') });
    } else {
      setRoom({ ...room, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...room,
    };

    axios
      .put(`https://5000-adityadalai1-rntmgmtadi-ckl562dv9tf.ws-us117.gitpod.io/api/rooms/${id}`, data)
      .then(() => {
        navigate(`/show-room/${id}`);
      })
      .catch((err) => {
        console.error('Error updating room info:', err);
      });
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginY: 4 }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          Edit Room Information
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
                value={room.amenities.join(',')}
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
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="availability"
                    checked={room.availability}
                    onChange={(e) =>
                      setRoom({ ...room, availability: e.target.checked })
                    }
                  />
                }
                label="Available"
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" marginTop={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '48%' }}
            >
              Update Room
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/"
              sx={{ width: '48%' }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default UpdateRoomInfo;
