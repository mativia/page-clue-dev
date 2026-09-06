import scope from './landingScope.module.css'
import Hero from './Hero'
import Services from './Services'
import Marquee from './Marquee'
import Manifesto from './Manifesto'
import Contact from './Contact'

/* /landing — cara naranja/ember: es la home vieja (hero con imagen,
   "Hablemos" y Claudio) reutilizada como vidriera creativa. Paleta
   scopeada en .scope. Provisional: se rediseña/traduce más adelante. */
export default function LandingPage() {
  return (
    <main className={scope.scope}>
      <Hero />
      <Services />
      <Marquee />
      <Manifesto />
      <Contact />
    </main>
  )
}
