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
      <img src="/logo_transparent_culper.png" alt="Culper Solutions logo" />
        <p className="description">
          Website launching soon. Contact us at <a href ="mailto:sales@culpersolutions.com">sales@culpersolutions.com</a>
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
