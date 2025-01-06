// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      width: '100%',
      textAlign: 'center',
      borderTop: `1px solid ${theme => theme.palette.primary.main}`, // Optional: add a top border
    }}
  >
    <Typography variant="h6" gutterBottom>
             Rental Management System
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Room Rental Co. | All Rights Reserved
    </Typography>
  </Box>
);

export default Footer;
