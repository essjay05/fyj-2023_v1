import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function Portfolio({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <>
      <Header currentPageName={pageName} />
      <main>
        <section>
          <h2 className='handwritten-style'>Project Cards go here...</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}
