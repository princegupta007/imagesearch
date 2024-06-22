import { createTheme } from '@mui/material/styles';

const commonTheme = {
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#fff',
    },
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
});
