import React from 'react'
import Layout from '../src/Layout'
import { fetchedData } from '../utils'

const News = ({ news }) => (
  <Layout description="watch your words" keywards="tech">
    <line>{news}</line>
  </Layout>
)
export default News

export async function getServerSideProps() {
  const news = await fetchedData('news')
  return {
    props: {
      news,
    },
  }
}
