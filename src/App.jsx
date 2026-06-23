import './styles/globals.css'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Manifesto from './sections/Manifesto/Manifesto'
import Services from './sections/Services/Services'
import Marquee from './components/Marquee/Marquee'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
