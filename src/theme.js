import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc2626',
    },
  },
});

export default theme;