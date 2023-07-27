import React from 'react';
import styles from '../../styles/CategorySidebar.module.css'
interface CategorySidebarProps {
    categories: string[]; 
    selectedCategory: string; 
    onCategorySelect: (category: string) => void; 
  }
const CategorySidebar = ({ categories, selectedCategory, onCategorySelect }: CategorySidebarProps) => {
  return (
    <div className={`grid lg:absolute py-4  border-r border-gray-300 w-50 relative px-20 ${styles.categoryContainer}`}>
      <h2 className="text-xl font-semibold mb-4 text-center ">Kategori</h2>
      <ul className="flex flex-col space-y-2 items-center lg:items-start">
        <li>
          <button
            className={`block  ${
              selectedCategory === 'All' ? 'text-red-500 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => onCategorySelect('All')}
          >
            Tümü
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`block text-left  ${
                selectedCategory === category ? 'text-red-500 font-semibold' : 'text-gray-600'
              }`}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
