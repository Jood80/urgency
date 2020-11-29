import Head from 'next/head'
import PropTypes from 'prop-types'
// import { fetchedData } from '../utils'

const Layout = ({ children, description, keywords }) => {
  return (
    <>
      <Head>
        <title>Urgency Site</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
}
