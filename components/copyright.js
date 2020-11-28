import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyright = () => (
  <Typography variant="body2" color="secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      Urgency.com
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    <br />
  </Typography>
)

export default Copyright
