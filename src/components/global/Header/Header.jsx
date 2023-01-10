import React from 'react'

const Header = ({ currentPageName }) => {
  return (
    <header>
      <h1 className='handwritten-style'>{currentPageName}</h1>
    </header>
  )
}

export default Header