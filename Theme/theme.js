import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#00000',
    },
    primary: {
      // textPrimary:'EEF0F2',
      main: '#E2E2E2',
    },
    secondary: {
      main: '#CD3B3B',
    },
    action: {
      main: '#b00002',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#252627',
    },
  },
})

export default theme

// Darker red #b00002
// Red #b71c1c
// Lighter red #CD3B3B
// around white #EEF0F2,
// Dark black #141414,
