import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Hero from '../components/global/Hero/Hero'
import Footer from '../components/global/Footer/Footer'

export function Home({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <>
      <Hero />
      <Header currentPageName={pageName}/>
      <main>
        <h1>{pageName}</h1>
        <h2>Hello World!</h2>
      </main>
      <Footer />
    </>
  )
}
