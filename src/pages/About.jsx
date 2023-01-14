import { useEffect } from 'react'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function About({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <div className='App'>
      <Header currentPageName={pageName}/>
      <main>
        <section id='about'>
          <h2 className='handwritten-style'>Define Joy:</h2>
          <p className='blurb'>Aligned with Merriam-Webster's definition of the noun, 'joy,' I strive to pursue success in fields I am passionate about.  This journey in my pursuit of happiness has led me to become a proud Joy-of-All-Trades and acquire a varied skillset through working in a different fields with a range of people.</p>
        </section>
        <section id='skills'>
            <h2 className='handwritten-style'>Skills</h2>
            <div className='skillsList'>
                <p> HTML5, CSS3, JavaScript, jQuery, Ruby Sinatra, Ruby on Rails, Bootstrap, Semantic UI, Milligram, MongoDB, Mongoose, Node.js, React.js, Git, GitHub, RESTful API, Heroku, Postman, PostgreSQL, SQL, Amazon Web Services (AWS), Active Storage, Visual Studio Code, JSON, JSON Web Token, Authentication, Quickbooks Online / Quickbooks Pro, Google Suite / Google Apps, Microsoft Office Suite, iWork, Adobe Lightroom, Adobe Photoshop, Final Cut Pro X, photography, and piano.
                </p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
