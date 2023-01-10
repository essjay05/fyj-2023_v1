import NavBar from '../NavBar/NavBar'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='nav-bar-container d-flex justify-content-between align-items-center'>
      <p className='copyright handwritten-style pt-3 px-4'>&copy; Joy S. 2018</p>
      <NavBar />
    </footer>
  )
}

export default Footer