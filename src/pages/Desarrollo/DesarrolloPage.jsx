import scope from './desarrolloScope.module.css'
import Hero from './Hero'
import Modes from './Modes'

/* /desarrollo — cara B&N minimalista: software a medida + productos por
   suscripción. Dos modos de un mismo sistema. Paleta scopeada en .scope. */
export default function DesarrolloPage() {
  return (
    <main className={scope.scope}>
      <Hero />
      <Modes />
    </main>
  )
}
