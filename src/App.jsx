import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { EmulatorDetails } from './pages/EmulatorDetails'
import { HeroSection } from './components/HeroSection'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<>
          <HeroSection/>
          <Home />
        </>} />
        <Route path="/emulador/:emulatorGame" element={<EmulatorDetails />} />
      </Routes>
    </>
  )
}

export default App
