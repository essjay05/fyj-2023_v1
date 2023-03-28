import { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'

export function Portfolio({ pageName }) {

  const [ projects, setProjects ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const projectsUrl = `http://localhost:1337/api/projects`
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()

  const getProjects = () => {
    return new Promise(resolve => {
      axios.get(projectsUrl, { cancelToken: source.token })
        .then(response => {
          const projectsResults = response.data.data
          setProjects(projectsResults)
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            console.log('successfully aborted');
          } else {
            console.error(err)
          }
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
        { (loading || projects.length === 0) ? 
          <h1>Loading...</h1>
        :
          <>
            <h1 className='handwritten-style'>My Portfolio</h1>
            <section className='projects-list container'>
              { projects.map(project => {
                const { Description, GithubUrl, LiveUrl, Name, TechUsed } = {...project.attributes}
                return (
                  <h2 key={project.id}>{Name}</h2>
                )
              })}
            </section>
          </>
        }
      </main>
      <Footer />
    </div>
  )
}
