import React from 'react'
import Layout from '../src/Layout'
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
  const news = await fetchedData('news')
  return {
    props: {
      news: news.response.sources,
      seo: news.seo,
    },
  }
}
