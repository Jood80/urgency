import React from 'react'
import Layout from '../src/Layout'
import PropTypes from 'prop-types'
import { fetchedData } from '../utils'
import { NavBar, Copyrights } from '../components'
import { useStyles } from '../styles/landingPage'

import {
  Container,
  Link,
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  CardContent,
} from '@material-ui/core'

const News = ({ news, seo }) => {
  const classes = useStyles({ news, seo })

  return (
    <Layout description={seo.description} keywords={seo.keywords}>
      <NavBar />
      <main>
        <Box pt={4}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {news.map((newData) => (
                <Grid item key={newData.publishedAt} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={newData.urlToImage}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="body1" component="h6">
                        {newData.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        {newData.author}
                      </Typography>
                      <Typography gutterBottom variant="inherit" component="h6">
                        {newData.publishedAt}
                      </Typography>
                    </CardContent>
                    <Box pb={1}>
                      <CardActions>
                        <Link href={newData.url} color="inherit">
                          <Button variant="outlined" color="secondary">
                            read more
                          </Button>
                        </Link>
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <footer className={classes.buttonWidth}>
          <Copyrights color="secondary" />
        </footer>
      </main>
    </Layout>
  )
}
export default News

export async function getServerSideProps() {
  const news = await fetchedData('GET', 'news')
  return {
    props: {
      news: news.response.articles,
      seo: news.seo,
    },
  }
}

News.propTypes = {
  news: PropTypes.array.isRequired,
  seo: PropTypes.object.isRequired,
}
