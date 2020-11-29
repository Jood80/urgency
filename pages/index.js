import React, { Fragment } from 'react'
import Particles from 'react-particles-js'
import Typed from 'react-typed'
import Layout from '../src/Layout'
import { NavBar, Copyrights } from '../components'
import { useStyles } from '../styles/landingPage'

import { Container, Box, Typography, Button, Grid } from '@material-ui/core'

const quotes = [
  'Where is the trust',
  'Where is the truth',
  'Where is the transparency',
  'Where is the <b>Urgency</b>',
]

export default function Home(props) {
  const classes = useStyles(props)

  return (
    <Fragment>
      <Layout description={'news landing page'} keywords={'news'}>
        <NavBar />
        <main>
          <Particles
            style={{
              opacity: '0.1',
              position: 'absolute',
            }}
            params={{
              particles: {
                number: {
                  value: 200,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
              },
            }}
          />
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Urgency
              </Typography>
              <Box className={classes.typed}>
                <Typed
                  style={{
                    color: '#b71c1c',
                    fontSize: '200%',
                    alignSelf: 'center',
                  }}
                  shuffle
                  typeSpeed={50}
                  backSpeed={20}
                  strings={quotes}
                  smartBackspace
                  loop
                />
              </Box>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <footer className={classes.footer} style={{ paddingTop: '8rem' }}>
            <Copyrights color="secondary" />
          </footer>
        </main>
      </Layout>
    </Fragment>
  )
}
