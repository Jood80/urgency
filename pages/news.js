import React from 'react'
import Layout from '../src/Layout'
import PropTypes from 'prop-types'
import { fetchedData } from '../utils'

const News = ({ news, seo }) => (
  <Layout description={seo.description} keywards={seo.keywards}>
    <section>
      {news.map((newsData) => (
        <>
          <ul>
            <li key={newsData.id}>{newsData.description}</li>
          </ul>
        </>
      ))}
    </section>
  </Layout>
)
export default News

export async function getServerSideProps() {
  const news = await fetchedData('GET', 'news')
  return {
    props: {
      news: news.response.sources,
      seo: news.seo,
    },
  }
}

News.propTypes = {
  news: PropTypes.object.isRequired,
  seo: PropTypes.object.isRequired,
}
