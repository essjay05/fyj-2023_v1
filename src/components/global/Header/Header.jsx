import NavBar from "./NavBar"

import './Header.css'

const Header = ({ currentPageName }) => {
  return (
    <header className='nav-bar-container'>
      <p className='copyright handwritten-style'>&copy; Joy S. 2018</p>
      <NavBar />
    </header>
  )
}

export default Header