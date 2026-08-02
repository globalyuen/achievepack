import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { solutionsData } from '../../data/solutionsData';
import { ArrowRight } from 'lucide-react';

export default function SolutionsGrid() {
  const [searchParams] = useSearchParams();

  const filteredSolutions = useMemo(() => {
    return solutionsData.filter(solution => {
      // For each category in the search params, the solution must have AT LEAST ONE of the selected tags (OR within category, AND across categories).
      // If a category has no selections, it doesn't filter out anything.
      const checks = ['industry', 'product', 'special'].map(category => {
        const selected = searchParams.get(category)?.split(',') || [];
        if (selected.length === 0) return true;
        // solution[category] is an array of strings
        return selected.some(s => (solution as any)[category].includes(s));
      });
      return checks.every(Boolean);
    });
  }, [searchParams]);

  if (filteredSolutions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No solutions found</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Try adjusting your filters or clearing them to see all available packaging solutions.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSolutions.map(solution => (
        <Link 
          key={solution.id} 
          to={solution.link}
          className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-500 hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
            <img 
              src={solution.imageUrl} 
              alt={solution.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-3">
              {solution.industry.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-blue-50 text-blue-700 rounded">
                  {tag}
                </span>
              ))}
              {solution.special.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-emerald-50 text-emerald-700 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {solution.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6 flex-grow">
              {solution.description}
            </p>
            <div className="flex items-center text-primary-600 font-medium text-sm mt-auto group-hover:underline">
              View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
