import React, { useState } from 'react'
import { X } from 'lucide-react'

interface ClickableImageProps {
  src: string
  alt: string
  className?: string
  caption?: string
}

/**
 * ClickableImage component - Click to enlarge in lightbox
 * Use this component for all SEO page images that should be enlargeable
 */
const ClickableImage: React.FC<ClickableImageProps> = ({ 
  src, 
  alt, 
  className = '',
  caption 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group relative">
        <img
          src={src}
          alt={alt}
          className={`transition-transform hover:scale-105 ${className}`}
          onClick={() => setIsOpen(true)}
          loading="lazy"
          decoding="async"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-1 text-center">{caption}</figcaption>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded">Click to enlarge</span>
        </div>
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" 
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {(caption || alt) && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg max-w-lg">
              {caption || alt}
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default ClickableImage
