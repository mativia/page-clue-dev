import './styles/globals.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Home/HomePage'
import OdooPage from './pages/Odoo/OdooPage'
import LandingPage from './pages/Landing/LandingPage'
import DesarrolloPage from './pages/Desarrollo/DesarrolloPage'

/* Al cambiar de ruta, volvemos arriba (React Router no lo hace solo). */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  // La home es una sola pantalla (solo las 3 cards): sin nav ni footer.
  // El nav aparece dentro de cada página (Odoo / Landing / Desarrollo).
  const isHome = pathname === '/'
  const showNav = !isHome
  const showFooter = !isHome

  return (
    <>
      <ScrollToTop />
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/odoo" element={<OdooPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/desarrollo" element={<DesarrolloPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  )
}

export default App
