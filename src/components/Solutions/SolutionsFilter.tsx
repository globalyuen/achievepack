import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterCategories } from '../../data/solutionsData';

export default function SolutionsFilter({ isMobile = false }: { isMobile?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggle = (category: string, id: string) => {
    const current = searchParams.get(category)?.split(',') || [];
    let updated;
    
    if (current.includes(id)) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }
    
    if (updated.length > 0) {
      searchParams.set(category, updated.join(','));
    } else {
      searchParams.delete(category);
    }
    
    setSearchParams(searchParams, { replace: true });
  };

  const isChecked = (category: string, id: string) => {
    return (searchParams.get(category)?.split(',') || []).includes(id);
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  return (
    <div className={`flex flex-col gap-6 ${isMobile ? 'p-4' : 'w-64 shrink-0'}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        {Array.from(searchParams.keys()).length > 0 && (
          <button 
            onClick={clearAll}
            className="text-sm text-primary-600 hover:text-primary-800 underline"
          >
            Clear All
          </button>
        )}
      </div>

      {Object.entries(filterCategories).map(([key, category]) => (
        <div key={key} className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-900 capitalize mb-3">{key}</h4>
          <div className="flex flex-col gap-2">
            {category.map(item => (
              <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isChecked(key, item.id) ? 'bg-primary-600 border-primary-600' : 'border-gray-300 group-hover:border-primary-500'}`}>
                  {isChecked(key, item.id) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
