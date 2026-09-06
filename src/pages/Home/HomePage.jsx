import scope from './homeScope.module.css'
import HomeDoors from './HomeDoors'

/* HOME ("/") — una sola pantalla completa: tres cards, una por servicio,
   cada una lleva a su página. Paleta neutra scopeada; el color vive en
   cada card. */
export default function HomePage() {
  return (
    <main className={scope.scope}>
      <HomeDoors />
    </main>
  )
}
