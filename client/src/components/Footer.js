// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e3c72',
        color: 'white',
        padding: '20px 0',
        mt: 4,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Brand and Description */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Rental Management
          </Typography>
          <Typography variant="body1">
            Simplifying room rentals with efficiency and trust.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Typography
              component={Link}
              to="/rooms"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Rooms
            </Typography>
          </Box>
          <Box>
            <Typography
              component={Link}
              to="/create-room"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Add Room
            </Typography>
          </Box>
          <Box>
            <Typography
              component={Link}
              to="/about"
              sx={{
                color: 'white',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              About Us
            </Typography>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.twitter.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              target="_blank"
              sx={{ color: 'white' }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          textAlign: 'center',
          paddingTop: '10px',
          mt: 4,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Rental Management. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
