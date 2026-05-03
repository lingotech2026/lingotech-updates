'use client';

import { BlogCategory, BLOG_CATEGORIES } from '../../constants/blog';

interface CategoryFilterProps {
  selectedCategory: BlogCategory | 'All';
  onCategoryChange: (category: BlogCategory | 'All') => void;
}

/**
 * Category filter component for blog posts
 * Allows users to filter posts by category with smooth transitions
 */
export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const allCategories = [
    { value: 'All' as const, label: 'All Posts', color: 'var(--lt-primary-600)' },
    ...BLOG_CATEGORIES,
  ];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category.value;
        
        return (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`
              px-4 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold
              transition-all duration-300 transform
              ${isSelected
                ? 'bg-primary-700 text-white shadow-lg scale-105'
                : 'bg-surface text-primary-700 border-2 border-border hover:border-primary-600 hover:bg-primary-50'
              }
              focus-visible:outline-offset-2 focus-visible:ring-2 focus-visible:ring-primary-600
            `}
            style={{
              ...(isSelected && category.value !== 'All' ? { backgroundColor: category.color } : {}),
            }}
            aria-pressed={isSelected}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
