import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPLORER_DATA, ExplorerCategory } from '../data/explorer-hotspots';

interface InteractiveExplorerModuleProps {
  category: ExplorerCategory | string;
}

export default function InteractiveExplorerModule({ category }: InteractiveExplorerModuleProps) {
  const navigate = useNavigate();
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  
  // Normalize category or fallback to all/empty
  const catKey = category.toLowerCase();
  const images = EXPLORER_DATA[catKey] || [];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative group">
      <style>{`
        @keyframes custom-ping {
          0% { transform: scale(1); opacity: 1; }
          70%, 100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-custom-ping {
          animation: custom-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      
      {/* Scroll controls (only visible if multiple images) */}
      {images.length > 1 && (
        <>
          <button 
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 w-full"
      >
        {images.map((image, idx) => (
          <div key={idx} className="w-full shrink-0 snap-center relative">
            <h3 className="text-xl md:text-2xl font-black uppercase text-[#D4FF00] mb-4 tracking-wide text-center">
              {image.title}
            </h3>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1] bg-black border-4 border-black rounded-2xl overflow-hidden shadow-[20px_20px_0px_0px_rgba(16,185,129,0.15)] flex items-center justify-center">
              <div className="relative w-full aspect-[16/9] flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                />
                
                {/* Overlay Hotspots */}
                {image.hotspots.map((hotspot) => {
                  const isActive = activeHotspot === hotspot.id;
                  
                  let tooltipClass = "";
                  if (hotspot.placement === 'left') {
                    tooltipClass = "right-full mr-4 top-1/2 -translate-y-1/2";
                  } else if (hotspot.placement === 'right') {
                    tooltipClass = "left-full ml-4 top-1/2 -translate-y-1/2";
                  } else if (hotspot.placement === 'top') {
                    tooltipClass = "bottom-full mb-4 left-1/2 -translate-x-1/2";
                  } else if (hotspot.placement === 'bottom') {
                    tooltipClass = "top-full mt-4 left-1/2 -translate-x-1/2";
                  }

                  return (
                    <div
                      key={hotspot.id}
                      className="absolute z-20"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      onMouseEnter={() => setActiveHotspot(hotspot.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      <div className="absolute -left-3 -top-3 w-7 h-7 bg-emerald-500 rounded-full animate-custom-ping pointer-events-none" />
                      
                      <button
                        onClick={() => navigate(hotspot.link)}
                        className={`relative w-4 h-4 rounded-full border-2 border-black transition-transform duration-200 cursor-pointer ${
                          isActive ? 'bg-[#D4FF00] scale-125' : 'bg-emerald-400 hover:bg-[#D4FF00]'
                        }`}
                        aria-label={hotspot.name}
                      />

                      {isActive && (
                        <div className={`absolute w-64 bg-black/90 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl transition-all duration-200 pointer-events-auto hidden md:block ${tooltipClass}`}>
                          <h4 className="font-extrabold text-[#D4FF00] text-sm uppercase tracking-wide mb-1">{hotspot.name}</h4>
                          <p className="text-white/85 text-[11px] mb-3 leading-normal font-['Space_Grotesk']">{hotspot.desc}</p>
                          <Link 
                            to={hotspot.link} 
                            className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold hover:underline"
                          >
                            Explore SEO Guide &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Responsive Detail Card */}
      <div className="mt-8 md:hidden bg-neutral-900 border-2 border-neutral-800 p-6 rounded-xl text-center">
        {activeHotspot ? (
          (() => {
            // Find hotspot across all images in current category
            const hotspot = images.flatMap(img => img.hotspots).find(h => h.id === activeHotspot);
            if (!hotspot) return null;
            return (
              <div className="space-y-3">
                <h4 className="font-black text-[#D4FF00] text-base uppercase tracking-wider">{hotspot.name}</h4>
                <p className="text-gray-300 text-sm leading-relaxed font-['Space_Grotesk']">{hotspot.desc}</p>
                <Link
                  to={hotspot.link}
                  className="inline-block bg-[#10b981] hover:bg-[#D4FF00] text-black px-5 py-2 rounded-lg font-black text-xs uppercase tracking-wider transition-colors"
                >
                  Explore SEO Guide &rarr;
                </Link>
              </div>
            );
          })()
        ) : (
          <div className="py-2 text-gray-500 font-medium text-xs font-['JetBrains_Mono']">
            💡 Swipe left/right to view more diagrams, and tap glowing points to explore specs.
          </div>
        )}
      </div>
    </div>
  );
}
