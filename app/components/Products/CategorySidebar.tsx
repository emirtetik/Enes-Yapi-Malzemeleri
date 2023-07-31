import React from 'react';
interface CategorySidebarProps {
    data: string[]; 
    categoryList: string; 
    onCategorySelect: (category: string) => void; 
  }
const CategorySidebar = ({ data, categoryList, onCategorySelect }: CategorySidebarProps) => {
  
  return (
    <div className={`grid  py-4  border-r border-gray-300  relative `}>
      <h2 className="mb-4 text-xl font-semibold text-start ">Kategori</h2>
      <ul className="flex flex-col items-start space-y-2 ">
        <li>
          <button
            className={`block  ${
              categoryList === 'All' ? 'text-red-500 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => onCategorySelect('All')}
          >
            Tümü
          </button>
        </li>
        
        {data.map((category) => (
          <li key={category} className='break-words whitespace-normal lg:w-32'>
            <button
              className={`block text-left  ${
                categoryList === category ? 'text-red-500 font-semibold' : 'text-gray-600'
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
