import { motion, useReducedMotion } from 'framer-motion'
import { useReveal } from '../../hooks/useReveal'

export function Reveal({ children, delay = 0, className }) {
  const { ref, isVisible } = useReveal()
  const prefersReduced = useReducedMotion()

  const variants = {
    hidden: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 28 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
