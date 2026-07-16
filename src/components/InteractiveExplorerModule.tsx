import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { EXPLORER_DATA, ExplorerCategory } from '../data/explorer-hotspots';

interface InteractiveExplorerModuleProps {
  category: ExplorerCategory | string;
}

export default function InteractiveExplorerModule({ category }: InteractiveExplorerModuleProps) {
  const navigate = useNavigate();
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Normalize category or fallback to empty
  const catKey = category.toLowerCase();
  let images = [];
  if (catKey === 'all') {
    images = Object.values(EXPLORER_DATA).flat();
  } else {
    images = EXPLORER_DATA[catKey] || [];
  }

  // Reset index when category changes
  useEffect(() => {
    setCurrentImageIdx(0);
    setActiveHotspot(null);
  }, [catKey]);

  // 3-second auto-rotate timer
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
      setActiveHotspot(null); // Clear active hotspot on slide transition
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentImageIdx];

  // Find the currently active hotspot data
  const currentHotspotData = activeHotspot 
    ? currentImage.hotspots.find(h => h.id === activeHotspot)
    : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
    setActiveHotspot(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % images.length);
    setActiveHotspot(null);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <style>{`
        @keyframes custom-ping {
          0% { transform: scale(1); opacity: 1; }
          70%, 100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-custom-ping {
          animation: custom-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Left: Interactive Image Area */}
      <div 
        className="w-full md:w-2/3 relative group rounded-2xl overflow-hidden border-4 border-neutral-200 dark:border-black shadow-[10px_10px_0px_0px_rgba(16,185,129,0.15)] bg-neutral-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Foreground Infographic Layer */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] flex items-center justify-center z-10 p-2 md:p-4 bg-white">
          <img
            src={currentImage.infographicSrc}
            alt={currentImage.alt}
            className="w-full h-full object-contain select-none pointer-events-none transition-all duration-500"
          />
          
          {/* Overlay Hotspots */}
          {currentImage.hotspots.map((hotspot) => {
            const isActive = activeHotspot === hotspot.id;
            
            return (
              <div
                key={hotspot.id}
                className="absolute z-20"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
              >
                <div className="absolute -left-3 -top-3 w-7 h-7 bg-emerald-500 rounded-full animate-custom-ping pointer-events-none" />
                
                <button
                  onClick={() => {
                    setActiveHotspot(hotspot.id);
                  }}
                  className={`relative w-5 h-5 rounded-full border-2 border-white dark:border-black shadow-md transition-transform duration-200 cursor-pointer ${
                    isActive ? 'bg-[#D4FF00] scale-125' : 'bg-emerald-500 hover:bg-[#D4FF00]'
                  }`}
                  aria-label={hotspot.name}
                />
              </div>
            );
          })}
        </div>

        {/* Slide Controls Overlay (Arrows) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/95 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/95 text-white p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Indicator dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentImageIdx(idx); setActiveHotspot(null); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    idx === currentImageIdx ? 'bg-[#D4FF00] w-6' : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right: Info Panel */}
      <div className="w-full md:w-1/3 flex flex-col">
        <div className="h-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col shadow-sm">
          {currentHotspotData ? (
            <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h4 className="font-black text-emerald-700 dark:text-[#D4FF00] text-2xl uppercase tracking-wider mb-2">
                {currentHotspotData.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-['Space_Grotesk'] mb-6 flex-grow">
                {currentHotspotData.desc}
              </p>
              
              {currentHotspotData.heroImage && (
                <div className="mb-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[4/3] relative">
                  <img 
                    src={currentHotspotData.heroImage} 
                    alt={currentHotspotData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <Link
                to={currentHotspotData.link}
                className="group w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 dark:bg-[#10b981] dark:hover:bg-[#D4FF00] text-white dark:text-black px-6 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ) : (
            <div className="h-full relative flex flex-col items-center justify-end text-center rounded-xl overflow-hidden group p-6 shadow-inner">
              <img 
                src={currentImage.src} 
                alt="Default View" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10 flex flex-col items-center mb-4">
                <div className="w-12 h-12 mb-3 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                  <div className="w-3 h-3 bg-[#D4FF00] rounded-full animate-ping" />
                </div>
                <h4 className="font-bold text-white text-base md:text-lg font-['Space_Grotesk'] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-4">
                  Hover over a glowing point to explore structural components.
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
