import React, { useEffect, useState } from 'react'
import { fetchedData } from '../utils'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Copyright from '../components/copyright'
import useStyles from '../styles/SignInAndSignUp.style'

const SignUp = (props) => {
  const classes = useStyles(props)
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submited, setSubmitted] = useState(false)

  useEffect(async () => {
    try {
      const signUp = await fetchedData('POST', 'signUp', {
        userName,
        password,
        email,
      })
      if (signUp.message.includes('successfully')) console.log({ signUp })
    } catch (err) {
      console.log(err)
    }
  }, [submited])

  return (
    <Container component="main" maxWidth="xs">
      <Box
        border={1}
        borderColor="secondary.main"
        borderRadius="5%"
        p={5}
        className={classes.root}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  autoComplete="fname"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  autoComplete="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp
