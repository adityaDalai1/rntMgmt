// src/theme/forestDusk.js
import { createTheme } from '@mui/material/styles';

const forestDuskColors = {
  base: '#0f1115',
  surface: '#1b1d23',
  overlay: '#242730',
  muted: '#5f6368',
  subtle: '#889096',
  text: '#d4d7dd',
  love: '#ff5e78',
  gold: '#e8b249',
  forest: '#4caf50',
  sky: '#64b5f6',
  twilight: '#b39ddb',
  highlightLow: '#16181e',
  highlightMed: '#32353d',
  highlightHigh: '#454850',
};

const forestDuskTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: forestDuskColors.base,
      paper: forestDuskColors.surface,
    },
    primary: {
      main: forestDuskColors.forest,
    },
    secondary: {
      main: forestDuskColors.sky,
    },
    error: {
      main: forestDuskColors.love,
    },
    warning: {
      main: forestDuskColors.gold,
    },
    info: {
      main: forestDuskColors.twilight,
    },
    success: {
      main: forestDuskColors.forest,
    },
    text: {
      primary: forestDuskColors.text,
      secondary: forestDuskColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto Mono", monospace',
    },
    h2: {
      fontFamily: '"Roboto Mono", monospace',
    },
    h3: {
      fontFamily: '"Roboto Mono", monospace',
    },
    h4: {
      fontFamily: '"Roboto Mono", monospace',
    },
    h5: {
      fontFamily: '"Roboto Mono", monospace',
    },
    h6: {
      fontFamily: '"Roboto Mono", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: forestDuskColors.overlay,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Roboto+Mono:wght@400;700&display=swap');
      `,
    },
  },
});

export default forestDuskTheme;
