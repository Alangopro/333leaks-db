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
        <Header title="404 Not found" />
        <p className="description">
          czego ty kurwo szukasz?
        </p>
      </main>

      <Footer />
    </div>
  )
}
