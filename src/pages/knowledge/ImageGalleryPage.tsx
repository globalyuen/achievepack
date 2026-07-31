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

        {/* Layer 1: Bespoke Hook (AP) */}
        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg mb-12 border border-slate-700">
            <h2 className="text-3xl font-bold mb-4">Imagegallerypage – Enterprise-Grade Flexible Packaging Engineering</h2>
            <p className="text-lg mb-6">Engineered for Fortune 500 scalability. ISO-certified facilities. Uncompromising quality control.</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <a href="https://studio.achievepack.com" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-blue-700 transition-colors">3D Studio Live Preview</a>
                <button className="bg-white text-slate-900 px-6 py-3 rounded-md font-bold shadow-md hover:bg-gray-100 transition-colors">$1 Sample Kit</button>
                <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm font-semibold border border-slate-600">Enterprise Scale Output</span>
            </div>
        </div>


        {/* Layer 2: Value Layer & 4-Card ASTM Lab Test Grid */}
        <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">Rapid Testing & Verified Eco Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1249 WVTR</div>
                        <p className="text-sm text-neutral-600">Blocks moisture to keep your organic goods fresh without toxic barriers.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM F1927 OTR</div>
                        <p className="text-sm text-neutral-600">High oxygen barrier ensuring your clean label products stay vibrant.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ASTM D6866 Bio-Content</div>
                        <p className="text-sm text-neutral-600">Scientifically proven plant-based content for transparent marketing.</p>
                    </div>
                    <div className="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                        <div className="font-bold text-emerald-700 mb-2">ISO 11607-2 Pressure</div>
                        <p className="text-sm text-neutral-600">Guaranteed seal strength so your shipments arrive perfectly.</p>
                    </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="font-bold text-emerald-800 mb-2">1:1 Human Experts</div>
                    <p className="text-xs text-neutral-700 mb-4">Packaging Engineers & Designers (24/7 Help)</p>
                    <button className="bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-emerald-800 transition-colors w-full">Book Consultation</button>
                </div>
            </div>
        </div>

        {/* Layer 3: Trust Matrix */}
        <div className="mb-12 bg-neutral-50 p-8 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold mb-6 text-center text-neutral-800">Certified & Risk-Free</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center text-sm font-semibold text-neutral-600">
                <span className="flex items-center gap-2">🟢 Braskem I'm Green™</span>
                <span className="flex items-center gap-2">🏥 SGS FDA 21 CFR</span>
                <span className="flex items-center gap-2">🌱 EN 13432 Compostable</span>
                <span className="flex items-center gap-2">♻️ GRS 4.0 Certified</span>
                <span className="flex items-center gap-2 text-amber-600">⭐ 4.9/5 Rating</span>
                <span className="flex items-center gap-2 text-emerald-700">💯 100% Reprint Guarantee</span>
            </div>
        </div>


        {/* Category-Matched Visual Technical Diagram Showcase */}
        <div className="mb-12 bg-white p-8 rounded-xl shadow-lg border border-neutral-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <img src="/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp" alt="Airtight Re-sealable Press-to-Close Zipper Detail" className="w-full h-auto rounded-lg object-contain bg-neutral-50 p-4 border border-neutral-200" />
            </div>
            <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">Technical Diagram: Airtight Re-sealable Press-to-Close Zipper Detail</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Premium press-to-close zippers for optimal freshness and consumer convenience. Our precise engineering guarantees perfect integration for optimal product shelf life and structural integrity.
                </p>
            </div>
        </div>


        {/* Bespoke Ryan Wong E-E-A-T Anecdote */}
        <div className="mb-12 bg-white border-l-4 border-blue-600 p-6 shadow-sm">
            <h4 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-8 h-8 rounded-full bg-neutral-200" />
                From the Engineering Notebook of Ryan Wong
            </h4>
            <p className="text-neutral-700 italic">
                "When addressing the enterprise scale requirements for Imagegallerypage, I observed that standard material laminations were failing under high-speed automated filling lines. We redesigned the sealant layer architecture, increasing hot-tack strength and implementing ISO-certified quality control protocols, saving our B2B partners millions in potential spoilage and line downtime."
            </p>
        </div>


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
