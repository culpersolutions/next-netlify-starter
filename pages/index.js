import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Culper Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Culper Solutions" />
        <p className="description">
          Website launching <code>soon.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
