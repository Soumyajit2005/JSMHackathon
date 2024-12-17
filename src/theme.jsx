// src/theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1d1d1d', // Dark paper color
    },
    text: {
      primary: '#ffffff', // White text color
    },
  },
})

export default theme