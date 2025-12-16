// Simple animated background for eco materials
// Using CSS animations instead of framer-motion for stability

export const MATERIAL_THEMES = {
  compostable: {
    primary: '#8B7355',
    secondary: '#d4a574',
    bg: 'from-amber-50 to-orange-50',
  },
  bioplastic: {
    primary: '#10b981',
    secondary: '#34d399',
    bg: 'from-green-50 to-emerald-50',
  },
  pcr: {
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    bg: 'from-sky-50 to-blue-50',
  },
  recyclable: {
    primary: '#14b8a6',
    secondary: '#2dd4bf',
    bg: 'from-teal-50 to-cyan-50',
  },
}

interface EcoBackgroundProps {
  materialType?: 'compostable' | 'bioplastic' | 'pcr' | 'recyclable'
}

export function EcoBackground({ materialType = 'compostable' }: EcoBackgroundProps) {
  const theme = MATERIAL_THEMES[materialType]

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg} pointer-events-none transition-all duration-1000`}>
      {/* Simple animated blobs using CSS */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse transition-colors duration-1000"
        style={{ backgroundColor: theme.primary }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse transition-colors duration-1000"
        style={{ backgroundColor: theme.secondary, animationDelay: '1s' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-25 animate-pulse transition-colors duration-1000"
        style={{ backgroundColor: theme.primary, animationDelay: '2s' }}
      />
    </div>
  )
}
