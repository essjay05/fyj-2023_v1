import { NavLink } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='d-flex'>
      <NavLink 
        to='/'
        className='handwritten-style title-style-6 mx-3 nav-link'
        aria-label='Home'>
          Home
      </NavLink>
      <NavLink 
        to='/portfolio'
        className='handwritten-style title-style-6 mx-3 nav-link'
        aria-label='Portfolio'>
          Portfolio
      </NavLink>
      <NavLink 
        to='/about'
        className='handwritten-style title-style-6 mx-3 nav-link'
        aria-label='About'>
          About
      </NavLink>
      <NavLink 
        to='/style-guide'
        className='handwritten-style title-style-6 mx-3 nav-link'
        aria-label='Style Guide'>
          Style Guide
      </NavLink>
    </nav>
  )
}

export default NavBar