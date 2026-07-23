import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, X, Filter, Maximize2, Link as LinkIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import galleryData from '../../data/image-gallery.json';
import imageSeoMapRaw from '../../data/image-seo-map.json';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const imageSeoMap = imageSeoMapRaw as unknown as Record<string, string | Array<{title: string, url: string}>>;

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
}

export default function ImageGalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [displayLimit, setDisplayLimit] = useState(100);

  const images: GalleryImage[] = galleryData;
  const categories = ['All', ...Array.from(new Set(images.map(img => img.category))).sort()];

  const filteredImages = useMemo(() => {
    return images.filter(img => {
      const matchCategory = activeCategory === 'All' || img.category === activeCategory;
      const matchSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          img.src.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [images, activeCategory, searchQuery]);

  // Reset limit when filter changes
  useMemo(() => setDisplayLimit(100), [activeCategory, searchQuery]);

  return (
    <div className="bg-neutral-50 min-h-screen">
      <SiteHeader />
      <Helmet>
        <title>Achieve Pack Image Gallery - Packaging Inspiration & Resources</title>
        <meta name="description" content="Explore thousands of packaging images, from hero mockups and 3D designs to engineering infographics and product structures." />
      </Helmet>

      {/* Header */}
      <div className="bg-black text-white pt-32 pb-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase">Achieve Pack Gallery</h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-mono mb-10">
            A visual database of packaging inspiration, engineering infographics, and 3D product mockups.
          </p>
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-neutral-900 p-4 rounded-xl border border-neutral-800">
            
            {/* Search */}
            <div className="relative w-full md:w-96 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search images (e.g. bio-pe, pouch, infographic)..." 
                className="w-full bg-black border border-neutral-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00] transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <Filter className="text-neutral-500 h-5 w-5 mr-2 flex-shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#D4FF00] text-black' 
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 min-h-[50vh] pb-20">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">No images found</h2>
            <p className="text-neutral-500">We couldn't find any matches for "{searchQuery}" in {activeCategory}.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 font-bold text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.slice(0, displayLimit).map((img, idx) => {
                const entry = imageSeoMap[img.src];
                const isMapped = entry && (typeof entry === 'string' || (Array.isArray(entry) && entry.length > 0));
                const targetUrl = typeof entry === 'string'
                  ? entry
                  : (Array.isArray(entry) && entry.length > 0)
                    ? entry[0].url
                    : '#';
                const Wrapper = isMapped ? Link : 'div';
                const wrapperProps: any = isMapped ? { to: targetUrl } : { onClick: () => setSelectedImage(img) };
                
                return (
                  <Wrapper 
                    key={img.id} 
                    {...wrapperProps}
                    className="break-inside-avoid group cursor-pointer block relative rounded-xl overflow-hidden bg-neutral-200 border border-neutral-200 hover:border-black transition-colors"
                    title={isMapped ? `View ${img.title} SEO Page` : img.title}
                  >
                    <img 
                      src={img.src} 
                      alt={img.title}
                      loading={idx < 12 ? 'eager' : 'lazy'}
                      className="w-full h-auto object-cover"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <span className="bg-[#D4FF00] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-sm inline-block mb-1 w-max">
                        {img.category}
                      </span>
                      <p className="text-white font-bold text-sm truncate">{img.title}</p>
                      {isMapped ? (
                         <LinkIcon className="absolute top-4 right-4 text-white h-5 w-5 opacity-70" />
                      ) : (
                         <Maximize2 className="absolute top-4 right-4 text-white h-5 w-5 opacity-70" />
                      )}
                    </div>
                  </Wrapper>
                )
              })}
          </div>
        )}
        
        {filteredImages.length > displayLimit && (
          <div className="text-center py-10">
            <p className="text-neutral-500 mb-4">Showing {displayLimit} of {filteredImages.length} images</p>
            <button 
              onClick={() => setDisplayLimit(prev => prev + 100)}
              className="px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-neutral-800 transition shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(212,255,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Load More Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              onContextMenu={(e) => e.preventDefault()}
            />
            
            <div className="mt-6 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-neutral-900/80 backdrop-blur p-4 rounded-xl border border-neutral-800">
              <div>
                <span className="bg-[#D4FF00] text-black text-xs font-black uppercase px-2 py-1 rounded-sm inline-block mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-neutral-400 text-sm mt-1">{selectedImage.src}</p>
              </div>
              
              <div className="flex flex-col gap-2 min-w-[200px]">
                {(() => {
                  const entry = imageSeoMap[selectedImage.src];
                  const pages = Array.isArray(entry) 
                    ? entry 
                    : typeof entry === 'string' 
                      ? [{ title: entry, url: entry }] 
                      : [];
                  return pages.length > 0 ? (
                    <>
                      <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider mb-1">Related Pages:</span>
                      {pages.map((page, idx) => (
                        <Link 
                          key={idx}
                          to={page.url}
                          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-[#D4FF00] transition"
                        >
                          <LinkIcon className="h-4 w-4" /> {page.title}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <span className="text-neutral-500 text-sm italic border border-neutral-700 px-4 py-2 rounded-lg">No related pages found</span>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
