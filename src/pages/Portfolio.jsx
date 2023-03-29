import { useEffect, useState } from 'react'
import axios from 'axios'

import { Grid } from '@mui/material'

import Header from '../components/global/Header/Header'
import Footer from '../components/global/Footer/Footer'
import ProjectCard from '../components/global/Card/ProjectCard'

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
            <Grid container 
              spacing={2}
              className='projects-list container'>
              { projects.map(project => {
                const { Description, GithubUrl, LiveUrl, Name, TechUsed } = {...project.attributes}
                return (
                  <Grid item 
                    xs={12} md={4}
                    key={project.id}>
                    <ProjectCard
                      // imgSrc={}
                      cardTitle={Name}
                      cardDescription={Description}
                      techUsed={TechUsed}
                      btn1Text={`Demo Link`}
                      btn1Url={LiveUrl}
                      btn2Text={`Code`}
                      btn2Url={GithubUrl}/>
                  </Grid>
                )
              })}
            </Grid>
          </>
        }
      </main>
      <Footer />
    </div>
  )
}
