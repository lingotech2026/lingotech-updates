'use client';

import { BlogCategory, BLOG_CATEGORIES } from '../../constants/blog';

interface CategoryFilterProps {
  selectedCategory: BlogCategory | 'All';
  onCategoryChange: (category: BlogCategory | 'All') => void;
}

/**
 * Category filter component for blog posts
 * Re-designed to be ultra-clean, micro-sized and premium brand blue themed.
 */
export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const allCategories = [
    { value: 'All' as const, label: 'All Posts' },
    ...BLOG_CATEGORIES,
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category.value;
        
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`
              px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-wider
              transition-all duration-300 border
              ${isSelected
                ? 'bg-[#0B3C91] text-white border-[#0B3C91] shadow-md shadow-blue-500/10'
                : 'bg-white text-gray-500 border-gray-200 hover:border-[#0B3C91] hover:text-[#0B3C91]'
              }
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C91]
            `}
            aria-pressed={isSelected}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
