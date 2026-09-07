import scope from './landingScope.module.css'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Marquee from './Marquee'
import Manifesto from './Manifesto'
import Contact from './Contact'

/* /landing — cara naranja/ember: la vidriera creativa de Clue Dev.
   Diseño y desarrollo de landing pages / webs simples, para emprendedores
   y marcas personales. Bilingüe (i18n namespace `landing`). Paleta
   naranja/ember scopeada en .scope. */
export default function LandingPage() {
  return (
    <main className={scope.scope}>
      <Hero />
      <Portfolio />
      <Marquee />
      <Manifesto />
      <Contact />
    </main>
  )
}
