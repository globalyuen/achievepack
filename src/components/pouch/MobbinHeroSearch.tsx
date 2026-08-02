import React, { useState } from 'react';
import { Search, Command, Filter, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobbinHeroSearchProps {
  onSearchChange?: (term: string) => void;
  onTagSelect?: (tag: string) => void;
  selectedTag?: string;
}

export default function MobbinHeroSearch({ onSearchChange, onTagSelect, selectedTag = 'All' }: MobbinHeroSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const tags = [
    { id: 'All', label: 'All Packaging 所有包裝', count: '1,559' },
    { id: 'StandUp', label: 'Stand Up Pouches 立體袋', count: '482' },
    { id: 'FlatBottom', label: 'Flat Bottom Bags 平底八邊封', count: '320' },
    { id: 'Spout', label: 'Spout Pouches 吸嘴袋', count: '210' },
    { id: 'Compostable', label: 'Compostable 可堆肥 (EN13432)', count: '540' },
    { id: 'Recyclable', label: 'Mono-PE Recyclable 可回收', count: '410' },
    { id: 'PCR', label: 'PCR Post-Consumer 環保再生', count: '290' },
    { id: 'Coffee', label: 'Coffee & Tea 咖啡茶葉袋', count: '380' },
    { id: 'Snacks', label: 'Snacks & Food 休閒食品袋', count: '450' },
    { id: 'MOQ500', label: '⚡ Low MOQ 500 起訂', count: '1,200+' },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    if (onSearchChange) onSearchChange(val);
  };

  return (
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        {/* Top Mobbin Style Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-700 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Mobbin UI Sourcing Engine • 1,500+ Verified Eco Structures</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            The Sustainable Packaging <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Design & Sourcing Library
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Discover, compare, and customize certified compostable & recyclable pouches. Start your sustainable brand from just <span className="font-semibold text-neutral-900">500 units</span>.
          </p>
        </div>

        {/* Mobbin Signature Central Search Input */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="relative flex items-center">
            <Search className="absolute left-4.5 w-5 h-5 text-neutral-400 group-focus-within:text-emerald-600 transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by pouch shape, material, barrier level, or industry..."
              className="w-full pl-12 pr-24 py-4 rounded-2xl bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-base font-normal shadow-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
            />
            <div className="absolute right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-500">
              <Command className="w-3.5 h-3.5" />
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Mobbin Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 max-w-4xl mx-auto">
          {tags.map((tag) => {
            const isSelected = selectedTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => onTagSelect && onTagSelect(tag.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-md scale-105'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                <span>{tag.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                }`}>
                  {tag.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feature Micro-Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 border-t border-neutral-200/60 max-w-3xl mx-auto">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>EN 13432 / BPI Industrial Compostable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Mono-PE Curbside Recyclable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Digital Print Runs from 500 pcs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
