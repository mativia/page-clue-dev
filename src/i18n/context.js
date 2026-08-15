import { createContext, useContext } from 'react'

/* Contexto e hook viven separados del provider a propósito:
   eslint-plugin-react-refresh pide que un archivo no exporte a la vez
   componentes y no-componentes. */
export const LanguageContext = createContext(null)

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de <LanguageProvider>')
  return ctx
}
