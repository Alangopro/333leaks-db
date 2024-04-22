import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>333Leaks - baza ip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ayo wtf!" />
        <p className="description">
          niggas hating.
        </p>
      </main>

      <Footer />
    </div>
  )
}
