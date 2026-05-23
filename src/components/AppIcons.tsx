import React from 'react'

/**
 * Custom-designed visual icon for the Sizing Finder App.
 * Represents a digital ruler and pouch height/width expansion lines, representing dimensions and sizing finder.
 */
export function SizingFinderIcon({ className = "h-5 w-5", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pouch body structure with transparent green fill */}
      <path 
        d="M6 3h12v12.5a2.5 2.5 0 0 1-2.5 2.5H8.5A2.5 2.5 0 0 1 6 15.5V3z" 
        className="fill-primary-500/10 dark:fill-primary-500/20"
      />
      {/* Oval gusset base contour */}
      <path d="M6 15.5c1.5 1 3.5 1.5 6 1.5s4.5-.5 6-1.5" />
      {/* Stand-up gusset bottom seam fold */}
      <path d="M12 15.5v3" strokeDasharray="1.5 1.5" />
      {/* Left ruler ticks indicating height measurement */}
      <line x1="3" y1="6" x2="7" y2="6" className="stroke-primary-500" />
      <line x1="3" y1="9" x2="5" y2="9" />
      <line x1="3" y1="12" x2="7" y2="12" className="stroke-primary-500" />
      <line x1="3" y1="15" x2="5" y2="15" />
      {/* Top ruler ticks indicating width measurement */}
      <line x1="9" y1="21" x2="9" y2="18" />
      <line x1="12" y1="21" x2="12" y2="17" className="stroke-primary-500" />
      <line x1="15" y1="21" x2="15" y2="18" />
      {/* Interactive cursor pointer sizing indicator */}
      <path 
        d="M21 7l-4 4v-3h-4V7h4V4l4 3z" 
        className="fill-primary-500 stroke-primary-600" 
        strokeWidth={1}
      />
    </svg>
  )
}

/**
 * Custom-designed visual icon for the Material Spec Finder App.
 * Represents a layered laminate packaging structure with barrier layer analysis (search & microscope look).
 */
export function MaterialSpecFinderIcon({ className = "h-5 w-5", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Layer 1: Outer Layer (PET/Paper) */}
      <path 
        d="M2 4h15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" 
        fill="rgba(16, 185, 129, 0.15)" 
        className="stroke-emerald-500"
      />
      {/* Layer 2: High Barrier Core (AL/EVOH/Metallized Cello) */}
      <path 
        d="M2 9.5h13a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1z" 
        fill="rgba(59, 130, 246, 0.15)" 
        className="stroke-blue-500"
      />
      {/* Layer 3: Inner Sealant (PE/PLA/PBS) */}
      <path 
        d="M2 15h11a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1z" 
        fill="rgba(245, 158, 11, 0.15)" 
        className="stroke-amber-500"
      />
      
      {/* Microscope / Loupe focusing overlay */}
      <g className="text-primary-600">
        {/* Loupe Outer Ring */}
        <circle 
          cx="17" 
          cy="14" 
          r="4.5" 
          fill="white" 
          stroke="currentColor" 
          strokeWidth={strokeWidth} 
          className="shadow-sm"
        />
        {/* Crosshair target lines */}
        <line x1="17" y1="11.5" x2="17" y2="12.5" stroke="currentColor" strokeWidth={1} />
        <line x1="17" y1="15.5" x2="17" y2="16.5" stroke="currentColor" strokeWidth={1} />
        <line x1="14.5" y1="14" x2="15.5" y2="14" stroke="currentColor" strokeWidth={1} />
        <line x1="18.5" y1="14" x2="19.5" y2="14" stroke="currentColor" strokeWidth={1} />
        {/* Loupe Handle */}
        <line 
          x1="20.2" 
          y1="17.2" 
          x2="22.5" 
          y2="19.5" 
          stroke="currentColor" 
          strokeWidth={strokeWidth + 0.5} 
        />
      </g>
    </svg>
  )
}
