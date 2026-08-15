import { useEffect, useState } from 'react'

/* Devuelve el id de la sección que domina el viewport.
   Lo usa el nav para marcar dónde estás parado mientras scrolleás. */
export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)
  // Clave estable: evita re-suscribir el observer en cada render si el
  // caller pasa el array inline.
  const key = ids.join('|')

  useEffect(() => {
    const els = key
      .split('|')
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!els.length) return

    const ratios = new Map()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let best = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })

        setActiveId(best)
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 0.9],
        // Descuenta la altura del nav arriba y la mitad inferior, para que
        // "activa" sea la sección que realmente estás mirando.
        rootMargin: '-92px 0px -42% 0px',
      },
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
