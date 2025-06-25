import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageWrapper from './components/PageWrapper'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Guestbook from './pages/Guestbook'

import heroImage from '/assets/images/Hero/hero.webp'

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const img = new Image()
    img.src = heroImage
    img.onload = () => setImageLoaded(true)

    const minSplashTime = setTimeout(() => {
      setSplashDone(true)
    }, 2000)

    return () => clearTimeout(minSplashTime)
  }, [])

  const ready = splashDone && imageLoaded

  if (!ready) {
    return <SplashScreen />
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/guestbook" element={<PageWrapper><Guestbook /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
