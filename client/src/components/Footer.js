// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'background.paper',
      color: 'text.secondary',
      py: 4,
      textAlign: 'center',
      borderTop: theme => `1px solid ${theme.palette.primary.main}`, // Top border for styling
    }}
  >
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontFamily: '"Fira Sans", sans-serif',
        fontWeight: 700,
        fontSize: '1.5rem',
        color: 'primary.main',
      }}
    >
      Built with ❤️ by [Your Name]
    </Typography>
    <Typography
      variant="body2"
      sx={{
        mt: 1,
        fontFamily: '"Roboto", sans-serif',
        fontSize: '0.9rem',
        color: 'text.secondary',
      }}
    >
      © {new Date().getFullYear()} Room Management System | All Rights Reserved
    </Typography>

    <Box sx={{ mt: 2 }}>
      <IconButton
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'primary.main' }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/your-linkedin-profile/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'primary.main' }}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://twitter.com/your-twitter-profile"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'primary.main' }}
      >
        <Twitter />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
