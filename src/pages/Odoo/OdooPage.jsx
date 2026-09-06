import Hero from '../../sections/Hero/Hero'
import Partners from '../../sections/Partners/Partners'
import Services from '../../sections/Services/Services'
import Modules from '../../sections/Modules/Modules'
import Process from '../../sections/Process/Process'
import Marquee from '../../components/Marquee/Marquee'
import Contact from '../../sections/Contact/Contact'

/* /odoo — la página de Odoo actual, sin cambios: solo compone las
   secciones existentes (siguen viviendo en src/sections/*). */
export default function OdooPage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Services />
      <Modules />
      <Process />
      <Marquee />
      <Contact />
    </main>
  )
}
