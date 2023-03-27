import NavBar from "./NavBar"

import './Header.css'

const Header = ({ currentPageName }) => {
  return (
    <header className='nav-bar-container'>
      <NavBar />
    </header>
  )
}

export default Header