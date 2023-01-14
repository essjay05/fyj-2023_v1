import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Hero from '../components/global/Hero/Hero'
import Footer from '../components/global/Footer/Footer'

export function Home({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <div className='App'>
      <Header />
      <Hero />
      <main className='py-5 px-3'>
        <h1>{pageName}</h1>
        <h2>Hello World!</h2>
      </main>
      <Footer />
    </div>
  )
}
