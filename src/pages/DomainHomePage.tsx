import { useEffect, useState } from 'react'
import { getDomain } from '../utils/domain'
import App from '../App'
import PouchEcoHomePage from './PouchEcoHomePage'

/**
 * Domain Router - Automatically routes to the correct homepage
 * based on current domain
 * 
 * - pouch.eco → PouchEcoHomePage (B2C)
 * - achievepack.com → App (B2B)
 */
export default function DomainHomePage() {
  const [domain, setDomain] = useState<'pouch' | 'achievepack'>('achievepack')
  
  useEffect(() => {
    setDomain(getDomain())
  }, [])
  
  // Render based on domain
  if (domain === 'pouch') {
    return <PouchEcoHomePage />
  }
  
  return <App />
}
