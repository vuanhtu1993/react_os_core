import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

/*
* Create theme for project
* Options: palette, type and typography
* */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#73818f',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    // blue: '#20a8d8',
    // indigo: '#6610f2',
    // purple: '#6f42c1',
    // pink: '#e83e8c',
    // red: '#f86c6b',
    // orange: '#f8cb00',
    // yellow: '#ffc107',
    // green: '#4dbd74',
    // teal: '#20c997',
    // cyan: '#17a2b8',
    // white: '#fff',
    // gray: '#73818f',
    // gray_dark: '#2f353a',
    // light_blue: '#63c2de',
    // primary: '#20a8d8',
    // secondary: '#c8ced3',
    // success: '#4dbd74',
    // info: '#63c2de',
    // light: '#f0f3f5',
    // dark: '#2f353a',
  },
  type: 'dark',
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
    // htmlFontSize: 10,
  },
});

export default theme;
