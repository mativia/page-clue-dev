import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './context'
import { COPY, LANGS } from './copy'

const STORAGE_KEY = 'cluedev:lang'

function initialLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    /* localStorage bloqueado (modo privado): seguimos con el default */
  }
  return window.navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* sin persistencia, no es crítico */
    }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: COPY[lang] }),
    [lang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
