import Head from 'next/head'

export default function Layout({ children, description, keywards }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywards} />
      </Head>

      <main className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-3 xl:px-20">{children}</div>
      </main>
    </>
  )
}
