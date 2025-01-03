// src/components/ShowRoomDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowRoomDetails = () => {
  const [room, setRoom] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/rooms/${id}`) // Adjust endpoint for rooms
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowRoomDetails');
      });
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`/api/rooms/${id}`) // Adjust endpoint for rooms
      .then(() => {
        navigate('/room-list');
      })
      .catch((err) => {
        console.log('Error from ShowRoomDetails_deleteClick');
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1613682854954-7a5c7c3c78c6" // Update with a relevant room image
                alt={room.name}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {room.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Capacity: {room.capacity}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>
                {room.description}
              </Typography>
              <Typography variant="body1">Room Number: {room.roomNumber}</Typography>
              <Typography variant="body1">Availability: {room.availability ? 'Available' : 'Not Available'}</Typography>
              <Typography variant="body1">Price per Hour: ${room.pricePerHour}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/room-list"
            variant="outlined"
          >
            Back to Room List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-room/${room._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
            >
              Edit Room
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={onDeleteClick}
              variant="contained"
              color="error"
            >
              Delete Room
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this room? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowRoomDetails;
