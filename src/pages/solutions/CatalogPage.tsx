import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Box, Layers, Database, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { getDomain } from '../../utils/domain';

interface Shape {
  id: string;
  name: string;
  keywords: string;
  dieline_image: string;
  glb_file: string;
  dimensions: string;
  description: string;
  slug?: string;
}

const ITEMS_PER_PAGE = 30;

export default function CatalogPage() {
  const isPouchDomain = getDomain() === 'pouch';
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'box' | 'pouch' | 'bottle'>('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch compiled database
  useEffect(() => {
    fetch('/models_database.json')
      .then((res) => res.json())
      .then((data: Shape[]) => {
        setShapes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error loading database:', err);
        setIsLoading(false);
      });
  }, []);

  // Filter shapes based on category and search term
  const filteredShapes = useMemo(() => {
    return shapes.filter((shape) => {
      // Category match
      let categoryMatch = true;
      if (activeCategory === 'box') {
        categoryMatch = shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒');
      } else if (activeCategory === 'pouch') {
        categoryMatch = shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋');
      } else if (activeCategory === 'bottle') {
        categoryMatch = shape.keywords.includes('瓶') || shape.keywords.includes('罐') || shape.name.includes('瓶') || shape.name.includes('罐');
      }

      // Search match
      const query = searchTerm.toLowerCase();
      const searchMatch = 
        String(shape.id).includes(query) ||
        shape.name.toLowerCase().includes(query) ||
        shape.keywords.toLowerCase().includes(query) ||
        shape.dimensions.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [shapes, searchTerm, activeCategory]);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, activeCategory]);

  const visibleShapes = useMemo(() => {
    return filteredShapes.slice(0, visibleCount);
  }, [filteredShapes, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <>
      <Helmet>
        <title>3000+ Custom Packaging Catalog & B2B Spec Sourcing Library | AchievePack</title>
        <meta name="description" content="Access our database of over 3000+ packaging shapes, boxes, flexible pouches, and skincare pump bottles. Select any model to customize directly in our interactive 3D Studio." />
      </Helmet>

      <SiteHeader />

      <div className="bg-neutral-900 text-neutral-100 min-h-screen py-12 px-6 lg:px-12 font-sans pt-[100px]">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Packaging Engine
          </div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
            3000+ Spec Packaging Directory
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            Search, filter, and preview the industry's most comprehensive packaging catalog. Browse custom paperboxes, flexible high-barrier bags, and daily chemical pump bottles. Link directly to our 3D Studio to start layout mapping instantly.
          </p>
        </div>

        {/* Catalog Control Bar */}
        <div className="max-w-7xl mx-auto mb-10 bg-neutral-950/40 border border-neutral-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by ID, shape, size (e.g. mailer, shampoo)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 text-sm outline-none focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${activeCategory === 'all' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/15' : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'}`}
            >
              <Database className="w-3.5 h-3.5" />
              All Shapes ({shapes.length})
            </button>
            <button
              onClick={() => setActiveCategory('box')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${activeCategory === 'box' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/15' : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'}`}
            >
              <Box className="w-3.5 h-3.5" />
              Paper Boxes
            </button>
            <button
              onClick={() => setActiveCategory('pouch')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${activeCategory === 'pouch' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/15' : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'}`}
            >
              <Layers className="w-3.5 h-3.5" />
              Flexible Pouches
            </button>
            <button
              onClick={() => setActiveCategory('bottle')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${activeCategory === 'bottle' ? 'bg-emerald-500 text-neutral-950 font-bold shadow-lg shadow-emerald-500/15' : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'}`}
            >
              <Filter className="w-3.5 h-3.5" />
              Bottles & Jars
            </button>
          </div>
        </div>

        {/* Loading / Results grid */}
        {isLoading ? (
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-3 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm text-neutral-400">Loading catalog items...</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {filteredShapes.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl">
                <HelpCircle className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-1">No matching packaging found</h3>
                <p className="text-sm text-neutral-500">Try modifying your query or select a different category.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                  {visibleShapes.map((shape) => {
                    // Determine category tag
                    let catName = 'Bottle & Jars';
                    if (shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒')) {
                      catName = 'Paper Box';
                    } else if (shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋')) {
                      catName = 'Flexible Pouch';
                    }

                    // Render locally hosted Vercel asset paths
                    const dielineSrc = shape.dieline_image.startsWith('/') ? shape.dieline_image : `/api/proxy?url=${encodeURIComponent(shape.dieline_image)}`;
                    const thumbnailSrc = shape.id === '978' ? dielineSrc : `/thumbnails/${shape.id}.png`;

                    return (
                      <div
                        key={shape.id}
                        className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
                      >
                        {/* Thumbnail View */}
                        <div className="aspect-[4/3] bg-neutral-900 relative overflow-hidden flex items-center justify-center border-b border-neutral-800/60 p-4">
                          <img
                            src={thumbnailSrc}
                            alt={shape.name}
                            loading="lazy"
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // If thumbnail fails to load, fallback to 2D dieline layout
                              (e.target as HTMLImageElement).src = dielineSrc;
                            }}
                          />
                          
                          {/* Logo Watermark Badge */}
                          <div className="absolute bottom-2 right-2 bg-neutral-950/80 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 flex items-center gap-1.5 pointer-events-none">
                            <img 
                              src={isPouchDomain ? "/ep-logo.svg" : "/ap-logo-white.png"} 
                              alt={isPouchDomain ? "Pouch" : "AchievePack"}
                              className="h-3 w-auto opacity-80"
                            />
                            <span className="text-[9px] font-black text-white/70 tracking-wider">
                              {isPouchDomain ? "POUCH" : "AP STUDIO"}
                            </span>
                          </div>

                          <span className="absolute top-3 left-3 bg-neutral-900/95 border border-neutral-850 px-2 py-0.5 rounded text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">
                            {catName}
                          </span>
                        </div>

                        {/* Card Info */}
                        <div className="p-5 flex-grow flex flex-col">
                          <div className="text-[11px] font-semibold text-neutral-500 tracking-wider mb-1">
                            MODEL ID: #{shape.id}
                          </div>
                          <h3 className="font-bold text-white text-[14px] leading-tight mb-2 group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2">
                            {shape.name}
                          </h3>
                          <p className="text-xs text-neutral-400 mt-auto pt-4 border-t border-neutral-900/60">
                            {shape.dimensions || 'Customizable sizes'}
                          </p>
                        </div>

                        {/* Action Link */}
                        <div className="p-4 bg-neutral-950 border-t border-neutral-900 flex gap-2">
                          <Link
                            to={`/solutions/shapes/${shape.slug}`}
                            className="w-1/2 text-center bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1"
                          >
                            3D Specs
                          </Link>
                          <Link
                            to={`/app?shape=${shape.id}`}
                            className="w-1/2 text-center bg-emerald-500 hover:bg-emerald-450 border border-emerald-500 text-neutral-950 font-bold text-xs py-2 rounded-lg transition-all flex items-center justify-center gap-1"
                          >
                            Edit 3D
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Load More Button */}
                {filteredShapes.length > visibleCount && (
                  <div className="text-center py-6">
                    <button
                      onClick={loadMore}
                      className="px-8 py-3 bg-emerald-500 text-neutral-950 hover:bg-emerald-400 font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                      Load More Designs ({filteredShapes.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}
