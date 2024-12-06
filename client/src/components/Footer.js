import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'; 

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'primary.main', 
      color: 'text.primary', 
      py: 4,
      px: 2,
      textAlign: 'center',
      borderTop: `2px solid ${theme => theme.palette.secondary.main}`, 
    }}
  >
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontFamily: '"Fira Sans", sans-serif', 
        fontWeight: 700, 
        fontSize: '1.5rem',
      }}
    >
      Built with ❤️ by Aditya
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
      © {new Date().getFullYear()} Bsc Cohort | All Rights Reserved
    </Typography>

    <Box sx={{ mt: 2 }}>
      <IconButton
        href="https://github.com/adityaDalai1"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/aditya-dalai-a515b6326/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <Twitter />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;