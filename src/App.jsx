import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { About } from './pages/About'
import { StyleGuide } from './pages/StyleGuide'

import './App.css'


function App() {

  const appTitleLead = 'Find Your Joy -'

  return (
    <Routes>
      <Route path='/' element={<Home pageName={`${appTitleLead} Home`} />} />
      <Route path='/portfolio' element={<Portfolio pageName={`${appTitleLead} Portfolio`} />} />
      <Route path='/about' element={<About pageName={`${appTitleLead} About`} />} />
      <Route path='/style-guide' element={<StyleGuide pageName={`${appTitleLead} Style Guide`} />} />
    </Routes>
  )
}

export default App
