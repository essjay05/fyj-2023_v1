import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function Portfolio({ pageName }) {

  const [ projects, setProjects ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const projectsUrl = `http://localhost:1337/api/projects`

  const getProjects = () => {
    return new Promise(resolve => {
      axios(projectsUrl)
        .then(response => {
          const projectsResults = response.data.results
          console.log(projectsResults)
          setProjects(projectsResults)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => setLoading(false))
    })
  }


  useEffect(() => {
    document.title = pageName
    getProjects()
  }, [])

  return (
    <div className='App'>
      <Header currentPageName={pageName} />
      <main>
        <section>
          <h2 className='handwritten-style'>Project Cards go here...</h2>
        </section>
      </main>
      <Footer />
    </div>
  )
}
