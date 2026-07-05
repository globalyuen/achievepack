import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { seoKnowHowCards, KnowHowCard } from '../data/carouselData';
import { useTranslation } from "react-i18next";

interface KnowHowCarouselProps {
  theme?: 'achieve' | 'pouch';
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function KnowHowCarousel({ theme = 'achieve' }: KnowHowCarouselProps) {
    const { t } = useTranslation();
  const [cards, setCards] = useState<KnowHowCard[]>([]);
  const [activeKnowHowDot, setActiveKnowHowDot] = useState(0);
  const knowHowScrollerRef = useRef<HTMLDivElement>(null);
  
  const [isKnowHowDown, setIsKnowHowDown] = useState(false);
  const [startKnowHowX, setStartKnowHowX] = useState(0);
  const [scrollLeftKnowHowState, setScrollLeftKnowHowState] = useState(0);
  const [isKnowHowDragging, setIsKnowHowDragging] = useState(false);

  useEffect(() => {
    setCards(shuffleArray(seoKnowHowCards).slice(0, 30));
  }, []);

  const handleKnowHowMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!knowHowScrollerRef.current) return;
    setIsKnowHowDown(true);
    setIsKnowHowDragging(false);
    setStartKnowHowX(e.pageX - knowHowScrollerRef.current.offsetLeft);
    setScrollLeftKnowHowState(knowHowScrollerRef.current.scrollLeft);
  };

  const handleKnowHowMouseLeave = () => {
    setIsKnowHowDown(false);
  };

  const handleKnowHowMouseUp = () => {
    setIsKnowHowDown(false);
    setTimeout(() => setIsKnowHowDragging(false), 50);
  };

  const handleKnowHowMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isKnowHowDown || !knowHowScrollerRef.current) return;
    e.preventDefault();
    setIsKnowHowDragging(true);
    const x = e.pageX - knowHowScrollerRef.current.offsetLeft;
    const walk = (x - startKnowHowX) * 1.5;
    knowHowScrollerRef.current.scrollLeft = scrollLeftKnowHowState - walk;
  };

  const handleKnowHowScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scroller = e.currentTarget;
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    const items = scroller.querySelectorAll('.knowhow-carousel-item-node');
    
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    items.forEach((item, idx) => {
      const el = item as HTMLDivElement;
      const itemCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(scrollerCenter - itemCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });
    
    setActiveKnowHowDot(closestIndex);
  };

  const scrollToKnowHowSlide = (index: number) => {
    if (!knowHowScrollerRef.current) return;
    const items = knowHowScrollerRef.current.querySelectorAll('.knowhow-carousel-item-node');
    const targetItem = items[index] as HTMLDivElement;
    if (!targetItem) return;
    
    const scrollerWidth = knowHowScrollerRef.current.clientWidth;
    const targetLeft = targetItem.offsetLeft - (scrollerWidth - targetItem.clientWidth) / 2;
    
    knowHowScrollerRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
    
    setActiveKnowHowDot(index);
  };

  const isPouch = theme === 'pouch';

  return (
    <section 
      id="knowhow" 
      className={`py-20 md:py-32 overflow-hidden border-b border-neutral-200/50 ${
        isPouch ? "bg-[#F0F0F0] text-black font-['Space_Grotesk']" : 'bg-neutral-50 text-neutral-900 font-sans'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {isPouch ? (
            <>
              <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
                {t('knowHowCarousel.title', 'See Our')} <span className="text-[#10b981]">{t('knowHowCarousel.titleHighlight', 'Know How')}</span>
              </h2>
              <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
                {t('knowHowCarousel.pouchDesc', 'Explore our comprehensive knowledge base on sustainable materials, packaging specifications, and D2C strategies.')}
              </p>
            </>
          ) : (
            <>
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm font-sans">{t('knowHowCarousel.eyebrow', '// Our Expertise')}</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mt-2 mb-4 font-sans text-neutral-900">
                {t('knowHowCarousel.title', 'See Our')} <span className="text-primary-500">{t('knowHowCarousel.titleHighlight', 'Know How')}</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-sans">
                {t('knowHowCarousel.desc', 'Explore our comprehensive knowledge base on sustainable materials, packaging specifications, cost structures, and D2C strategies.')}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="w-full overflow-visible py-8">
        <div 
          ref={knowHowScrollerRef}
          onMouseDown={handleKnowHowMouseDown}
          onMouseLeave={handleKnowHowMouseLeave}
          onMouseUp={handleKnowHowMouseUp}
          onMouseMove={handleKnowHowMouseMove}
          onScroll={handleKnowHowScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 px-[5%] md:px-[10%] py-4 scrollbar-none select-none cursor-grab active:cursor-grabbing"
        >
          {cards.map((item, idx) => (
            <div 
              key={idx} 
              className="knowhow-carousel-item-node flex-none w-[76vw] md:w-[24vw] min-w-[280px] max-w-[340px] snap-center group"
            >
              <div 
                className={`w-full h-[400px] md:h-[460px] rounded-3xl relative overflow-hidden transition-all duration-500 border ${
                  activeKnowHowDot === idx
                    ? 'border-neutral-900/10 shadow-lg scale-[1.01] z-20' 
                    : 'border-neutral-200/50 opacity-90 z-10'
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={t(`carouselData.${item.keyPrefix}.title`, item.title)} 
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/44 to-transparent z-10" />
                
                <div className="absolute top-6 left-6 z-20 flex justify-between items-start right-6">
                  <span className={`text-[9px] uppercase font-extrabold px-2.5 py-1 rounded-full border shadow-sm ${
                    isPouch ? "font-['JetBrains_Mono']" : "font-sans"
                  } ${
                    item.badgeType === 'eco' 
                      ? 'bg-emerald-600/90 text-white border-emerald-500/10' 
                      : item.badgeType === 'liquid'
                      ? 'bg-blue-600/90 text-white border-blue-500/10'
                      : item.badgeType === 'luxury'
                      ? 'bg-purple-600/90 text-white border-purple-500/10'
                      : 'bg-orange-600/90 text-white border-orange-500/10'
                  }`}>
                    {t(`carouselData.${item.keyPrefix}.tag`, item.tag)}
                  </span>
                </div>

                <div className="relative z-20 p-6 w-full flex flex-col items-start mt-auto h-full justify-end">
                  <h3 className="text-white font-bold text-base md:text-lg mb-1 leading-snug">
                    {t(`carouselData.${item.keyPrefix}.title`, item.title)}
                  </h3>
                  <p className="text-neutral-200 text-xs font-light mb-4 leading-normal line-clamp-2">
                    {t(`carouselData.${item.keyPrefix}.desc`, item.desc)}
                  </p>
                  
                  {isKnowHowDragging ? (
                    <div
                      className={`px-6 py-2 bg-white text-neutral-950 font-bold rounded-full text-[11px] uppercase tracking-wider shadow-md self-start inline-flex items-center gap-1.5 cursor-grab ${
                        isPouch ? "font-['JetBrains_Mono']" : "font-sans"
                      }`}
                    >
                      {t('knowHowCarousel.readGuide', 'Read Guide')} <ArrowRight className="h-3 w-3" />
                    </div>
                  ) : (
                    <Link 
                      to={item.link}
                      className={`px-6 py-2 bg-white hover:bg-neutral-100 text-neutral-950 font-bold rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md self-start inline-flex items-center gap-1.5 ${
                        isPouch ? "font-['JetBrains_Mono']" : "font-sans"
                      }`}
                    >
                      {t('knowHowCarousel.readGuide', 'Read Guide')} <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 pb-6 flex-wrap px-4 max-w-lg mx-auto">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToKnowHowSlide(idx)}
            className={`w-2 h-2 rounded-full border-none transition-all duration-300 ${
              activeKnowHowDot === idx 
                ? 'bg-neutral-800 scale-125 shadow-sm' 
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
