import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { EmulatorDetails } from './pages/EmulatorDetails'
import { HeroSection } from './components/HeroSection'
import { Route, Router, Routes } from 'react-router-dom'
import { Dmca } from './components/Dmca'

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
        <Route path="/dmca" element={<Dmca />} />

      </Routes>
    </>
  )
}

export default App
