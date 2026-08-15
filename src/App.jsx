import './styles/globals.css'
import { LanguageProvider } from './i18n/LanguageProvider'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import Partners from './sections/Partners/Partners'
import Services from './sections/Services/Services'
import Modules from './sections/Modules/Modules'
import Process from './sections/Process/Process'
import Marquee from './components/Marquee/Marquee'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Modules />
        <Process />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
