import { NavLink } from 'react-router-dom'

// import HiddenToggle from './HiddenToggle'

import './NavBar.css'


const NavBar = () => {
  return (
    <nav className='menu'>
      {/* <div className='mobile-nav-toggle'>
        <input id='NavToggle' className='nav-toggle' type='checkbox' htmlFor='toggle' />
        <label className='burger' htmlFor='NavToggle' aria-label='Mobile Nav Toggle'> &#9776;</label>
        <HiddenToggle/>
      </div> */}
      <div className='menu-links'>
        <NavLink 
          to='/'
          className='handwritten-style nav-link'
          aria-label='Home'>
            Home
        </NavLink>
        <NavLink 
          to='/portfolio'
          className='handwritten-style nav-link'
          aria-label='Portfolio'>
            Portfolio
        </NavLink>
        <NavLink 
          to='/about'
          className='handwritten-style nav-link'
          aria-label='About'>
            About
        </NavLink>
        <NavLink 
          to='/style-guide'
          className='handwritten-style nav-link'
          aria-label='Style Guide'>
            Style Guide
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar