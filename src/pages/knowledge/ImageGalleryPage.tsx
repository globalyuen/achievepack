import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, X, Filter, Maximize2, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import galleryData from '../../data/image-gallery.json';

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

  return (
    <div className="bg-neutral-50 min-h-screen pb-20">
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
            </div>
            
            {/* Categories */}
            <div className="flex overflow-x-auto w-full gap-2 pb-2 md:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
                    activeCategory === cat 
                      ? 'bg-[#D4FF00] text-black' 
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <Filter className="h-12 w-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-neutral-900 mb-2">No images found</h3>
            <p className="text-neutral-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 font-bold text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.slice(0, 100).map((img, idx) => (
              <div 
                key={img.id} 
                className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden bg-neutral-200 border border-neutral-200 hover:border-black transition-colors"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  loading={idx < 12 ? 'eager' : 'lazy'}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="bg-[#D4FF00] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-sm inline-block mb-1 w-max">
                    {img.category}
                  </span>
                  <p className="text-white font-bold text-sm truncate">{img.title}</p>
                  <Maximize2 className="absolute top-4 right-4 text-white h-5 w-5 opacity-70" />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredImages.length > 100 && (
          <div className="text-center py-10">
            <p className="text-neutral-500 mb-4">Showing 100 of {filteredImages.length} images</p>
            <p className="text-sm text-neutral-400">Refine your search to see more specific results.</p>
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
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <div className="flex items-center justify-center gap-4">
                <span className="text-[#D4FF00] font-mono text-sm uppercase">{selectedImage.category}</span>
                <a 
                  href={selectedImage.src} 
                  download 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-neutral-400 hover:text-white text-sm"
                >
                  <Download className="h-4 w-4" /> Open Original
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
