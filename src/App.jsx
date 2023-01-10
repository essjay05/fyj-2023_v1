import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import { Home } from './pages/Home'
import { StyleGuide } from './pages/StyleGuide'

import './App.css'
import NavBar from './components/global/NavBar/NavBar'

function App() {

  const appTitleLead = 'Find Your Joy -'

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home pageName={`${appTitleLead} Home`} />} />
        <Route path='/style-guide' element={<StyleGuide pageName={`${appTitleLead} Style Guide`} />} />
      </Routes>
    </div>
  )
}

export default App
