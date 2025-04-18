import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { EmulatorDetails } from './pages/EmulatorDetails'
import { HeroSection } from './components/HeroSection'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { Dmca } from './components/Dmca'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GamesSearch } from './components/GamesSearch'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<>
            <HeroSection />
            <Home />
          </>} />
          <Route path="/emulador/:emulatorGame" element={<EmulatorDetails />} />
          <Route path="/games" element={<GamesSearch />} />
          <Route path="/dmca" element={<Dmca />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
