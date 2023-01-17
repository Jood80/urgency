import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyrights = () => (
  <div
    style={{
      position: 'fixed',
      left: '0',
      bottom: '5%',
      width: '100%',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Urgency.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <br />
    </Typography>
  </div>
)

export default Copyrights
