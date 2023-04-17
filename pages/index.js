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
      <img src="/logo_culper_transparent.png" alt="Culper Solutions logo" />
        <p className="description">
          Website launching soon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
