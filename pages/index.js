import React, { Fragment } from 'react'
import Head from 'next/head'
import Particles from 'react-particles-js'
import Copyright from '../components/copyright'
import Typed from 'react-typed'
import { useStyles } from '../styles/landingPage'

import {
  Container,
  Box,
  Typography,
  Button,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Toolbar,
  CardContent,
} from '@material-ui/core'
import MenuBook from '@material-ui/icons/MenuBook'

const quotes = [
  'Where is the trust',
  'Where is the truth',
  'Where is the transparency',
  'Where is the <b>Urgency</b>',
]

const cards = [1, 2, 3]

export default function Home(props) {
  const classes = useStyles(props)

  return (
    <Fragment>
      <Head>
        <title>Urgency Site</title>
        <meta name="keywords" content="keywards" />
        <meta name="description" content="description" />
      </Head>

      <AppBar position="relative" color="secondary">
        <Toolbar>
          <MenuBook className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
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
                    value_area: 1000,
                  },
                },
              },
            }}
          />
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
            <Box ml="9rem">
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <footer className={classes.footer}>
          <Copyright color="secondary" />
        </footer>
      </main>
    </Fragment>
  )
}
