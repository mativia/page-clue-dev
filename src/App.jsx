import './styles/globals.css'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Services from './sections/Services/Services'
import AboutUs from './sections/AboutUs/AboutUs'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06) 50%, transparent)' }} />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
