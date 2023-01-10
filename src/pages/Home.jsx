import { useEffect } from 'react'

export function Home({ pageName }) {

  useEffect(() => {
    document.title = pageName
  }, [])

  return (
    <main>
      <h1>{pageName}</h1>
      <h2>Hello World!</h2>
    </main>
  )
}
