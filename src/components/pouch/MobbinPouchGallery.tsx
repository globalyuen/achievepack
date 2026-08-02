import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Box, Leaf, ChevronRight, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  badge: string;
  badgeColor: string;
  moq: string;
  price: string;
  image: string;
  link: string;
  specs: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'stand-up-compostable',
    title: 'Stand-Up Compostable Kraft Pouch',
    category: 'Stand-Up Pouches • 立體袋',
    tag: 'StandUp',
    badge: 'EN13432 Compostable',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    moq: '500 pcs',
    price: 'From $0.48/pc',
    image: '/3d/2d-pouch/pouch2.webp',
    link: '/packaging/stand-up-pouches',
    specs: ['FSC Kraft + PLA Barrier', 'Resealable Zip Closure', 'Tear Notch Included']
  },
  {
    id: 'flat-bottom-coffee',
    title: 'Flat Bottom Quad-Seal Coffee Bag',
    category: 'Flat Bottom Bags • 八邊封咖啡袋',
    tag: 'FlatBottom',
    badge: 'Degassing Valve Included',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    moq: '500 pcs',
    price: 'From $0.62/pc',
    image: '/3d/2d-pouch/pouch1.webp',
    link: '/packaging/flat-bottom-pouches',
    specs: ['EVOH High Oxygen Shield', 'Front Pocket Zipper', 'Max Shelf Stability']
  },
  {
    id: 'spouted-liquid-pouch',
    title: 'Spouted Liquid & Sauce Pouch',
    category: 'Spout Pouches • 吸嘴袋',
    tag: 'Spout',
    badge: 'Mono-PE Recyclable',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    moq: '1,000 pcs',
    price: 'From $0.85/pc',
    image: '/3d/2d-pouch/pouch4.webp',
    link: '/packaging/spout-pouches',
    specs: ['Center/Corner Spout Caps', 'Leak-proof Seal Integrity', 'Lightweight Liquid Bag']
  },
  {
    id: 'pcr-recyclable-doypack',
    title: 'PCR Post-Consumer Recycled Doypack',
    category: 'Recyclable Pouches • 環保再生袋',
    tag: 'PCR',
    badge: '30%+ PCR Recycled Content',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    moq: '500 pcs',
    price: 'From $0.52/pc',
    image: '/3d/2d-pouch/pouch3.webp',
    link: '/materials/pcr-recycled-packaging',
    specs: ['30%-50% Certified PCR', 'Curbside Recyclable', 'High-Barrier Multi-layer']
  },
  {
    id: 'custom-printed-sachet',
    title: '3-Side Seal Supplement Sachet',
    category: 'Flat Sachets • 三邊封小包裝袋',
    tag: 'Snacks',
    badge: 'Low MOQ 500',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    moq: '500 pcs',
    price: 'From $0.25/pc',
    image: '/3d/2d-pouch/pouch5.webp',
    link: '/packaging/three-side-seal-pouches',
    specs: ['Digital Precision Color', 'Easy-Tear Notch', 'Powder & Pill Safe']
  },
  {
    id: 'tea-coffee-kraft-bag',
    title: 'Artisanal Loose Leaf Tea & Coffee Pouch',
    category: 'Coffee & Tea • 咖啡茶葉包裝',
    tag: 'Coffee',
    badge: 'Home Compostable',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    moq: '500 pcs',
    price: 'From $0.55/pc',
    image: '/3d/2d-pouch/pouch6.webp',
    link: '/industry/coffee-tea',
    specs: ['100% Biodegradable Paper', 'Aroma Shield Barrier', 'Custom Foil Stamping']
  }
];

interface MobbinPouchGalleryProps {
  filterTag?: string;
  searchTerm?: string;
}

export default function MobbinPouchGallery({ filterTag = 'All', searchTerm = '' }: MobbinPouchGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesTag = filterTag === 'All' || item.tag === filterTag || (filterTag === 'Compostable' && item.badge.includes('Compostable')) || (filterTag === 'Recyclable' && item.badge.includes('Recyclable'));
    const matchesSearch = !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Mobbin Packaging Catalog
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Showing {filteredItems.length} curated eco pouch models and material configurations.
            </p>
          </div>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>Explore Store Catalog</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Stage */}
                <div className="aspect-[4/3] bg-neutral-50 relative overflow-hidden flex items-center justify-center p-6 border-b border-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Badge Top Left */}
                  <span className={`absolute top-4 left-4 text-[11px] font-medium px-2.5 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>

                  {/* Quick View Trigger Top Right */}
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 flex items-center justify-center text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-white"
                    title="Quick Specs Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Specs List */}
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-neutral-50/60 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">MINIMUM ORDER</div>
                  <div className="text-xs font-bold text-neutral-900">{item.moq}</div>
                </div>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Quick View Modal Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-lg w-full p-8 border border-neutral-200 shadow-2xl space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <span className="text-xs font-mono text-neutral-400 uppercase">{selectedItem.category}</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-video bg-neutral-50 rounded-2xl flex items-center justify-center p-6 border border-neutral-100">
                <img src={selectedItem.image} alt={selectedItem.title} className="h-full object-contain" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900">{selectedItem.title}</h3>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${selectedItem.badgeColor}`}>
                    {selectedItem.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">MOQ: {selectedItem.moq}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-900">{selectedItem.price}</span>
                <Link
                  to={selectedItem.link}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md"
                >
                  Configure & Order →
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
