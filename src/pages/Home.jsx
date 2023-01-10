import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function Home({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <>
      <Header currentPageName={pageName}/>
      <main>
        <h1>{pageName}</h1>
        <h2>Hello World!</h2>
      </main>
      <Footer />
    </>
  )
}
