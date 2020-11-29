import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { fetchedData } from '../utils'
import Layout from '../src/Layout'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const signUp = await fetchedData('POST', 'signUp', {
        userName,
        password,
        email,
      })
      if (signUp.message.includes('successfully')) {
        console.log(signUp.message)
        Router.push('/news')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout description={'signUp page'} keywords={'register'}>
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
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    color="secondary"
                    autoComplete="fullname"
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
                    autoFocus
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
                <Grid item color="secondary">
                  <Link href="/signIn" variant="body2">
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
    </Layout>
  )
}

export default SignUp
