'use client'
import React from 'react';
import { useProductsData } from '../../Hook/useProductsData';
import CategorySidebar from './CategorySidebar';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Image from 'next/image';
import styles from '../../styles/ProductsCard.module.css';
import ProductModal from '../Modal/ProductModal';

const productsUrl = process.env.NEXT_PUBLIC_PRODUCTS_URL || '';

const ProductsCard = () => {
  const { data, loading, error } = useProductsData(productsUrl);
  const [selectCategory, setSelectCategory] = React.useState('All');

  const handleCategorySelection = (category: string) => {
    setSelectCategory(category);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const categoryData = [...new Set(data.map((product) => product.category))];

  const filteredData =
    selectCategory === 'All'
      ? data
      : data.filter((product) => product.category === selectCategory);

     

  return (   
    <div className="grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-5 grid-cols-1">
      {/* Category List Section */}
      <div className="col-span-1">
        <CategorySidebar
          data={categoryData}
          categoryList={selectCategory}
          onCategorySelect={handleCategorySelection}
        />
      </div>

      {/* Product Cards Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
        {filteredData.map((product) => (
          <div
            key={product.id}
            className="p-4  "
          >
            <div
              className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-950 ${styles.productsCard}`}
            >
              <Image
                width={150}
                height={220}
                objectFit="fill"

                className="lg:h-48 md:h-36 w-full object-cover object-center "
                src={product.image}
                alt={product.category}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {product.category}
                </h2>
                <h1 className="title-font text-lg font-medium text-white  mb-3">
                  {product.title}
                </h1>
                <p className="leading-relaxed text-white mb-3">{product.description}</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    {product?.size}
                  </span>
                </div>
              </div>
            </div>
          

      
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ProductsCard;
