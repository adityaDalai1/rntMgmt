// src/theme/sereneMorn.js
import { createTheme } from '@mui/material/styles';

const sereneMornColors = {
  base: '#f0f4f8',
  surface: '#ffffff',
  overlay: '#e2e8f0',
  muted: '#b0b9c1',
  subtle: '#6c757d',
  text: '#212529',
  love: '#ff6f61',
  gold: '#ffd700',
  teal: '#20c997',
  sky: '#3498db',
  dusk: '#9b59b6',
  highlightLow: '#f7fafc',
  highlightMed: '#f1f5f9',
  highlightHigh: '#dcdfe6',
};

const sereneMornTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: sereneMornColors.base,
      paper: sereneMornColors.surface,
    },
    primary: {
      main: sereneMornColors.teal,
    },
    secondary: {
      main: sereneMornColors.sky,
    },
    error: {
      main: sereneMornColors.love,
    },
    warning: {
      main: sereneMornColors.gold,
    },
    info: {
      main: sereneMornColors.dusk,
    },
    success: {
      main: sereneMornColors.teal,
    },
    text: {
      primary: sereneMornColors.text,
      secondary: sereneMornColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Merriweather", serif',
    },
    h2: {
      fontFamily: '"Merriweather", serif',
    },
    h3: {
      fontFamily: '"Merriweather", serif',
    },
    h4: {
      fontFamily: '"Merriweather", serif',
    },
    h5: {
      fontFamily: '"Merriweather", serif',
    },
    h6: {
      fontFamily: '"Merriweather", serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: sereneMornColors.overlay,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `  
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Merriweather:wght@400;700&display=swap');
      `,
    },
  },
});

export default sereneMornTheme;
