'use client'
import React from 'react';
import { useProductsData,Product } from '../../Hook/useProductsData';
import CategorySidebar from './CategorySidebar';
import Loading from '../utils/Loading/Loading';
import Error from '../utils/Error/Error';
import Image from 'next/image';
import styles from '../../styles/ProductsCard.module.css';
import ProductModal from '../Modal/ProductModal';

const productsUrl = process.env.NEXT_PUBLIC_PRODUCTS_URL || '';

const ProductsCard = () => {
  const { data, loading, error } = useProductsData(productsUrl);
  const [selectCategory, setSelectCategory] = React.useState('All');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null); 

  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleCategorySelection = (category: string) => {
    setSelectCategory(category);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const categoryData = [...new Set(data.map((product) => product.category))];

  const filteredData =
    selectCategory === 'All'
      ? data
      : data.filter((product) => product.category === selectCategory);

     

  return (   
    <div className="grid max-w-6xl grid-cols-1 gap-4 px-5 mx-auto sm:grid-cols-3">
      <div className="col-span-1">
        <CategorySidebar
          data={categoryData}
          categoryList={selectCategory}
          onCategorySelect={handleCategorySelection}
        />
      </div>

      <div className="grid grid-cols-1 col-span-2 gap-4 sm:grid-cols-2">
        {filteredData.map((product) => (
          <div
            key={product.id}
            className="p-4 "
          >
            <div
              className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-950 ${styles.productsCard}`}
            >
              <Image
                width={200}
                height={200}
                objectFit="cover"
                className="object-cover object-center w-full lg:h-48 md:h-36 hover:opacity-70"
                src={product.image}
                alt={product.category}
              />
              <div className="p-6">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                  {product.category}
                </h2>
                <h1 className="mb-3 text-lg font-medium text-white title-font">
                  {product.title}
                </h1>
                <p className="mb-3 leading-relaxed text-white">{product.description}</p>
                <div className="flex flex-wrap items-center">
                  <span className="inline-flex items-center text-sm leading-none text-gray-400">
                    {product?.size}
                  </span>
                </div>
                {
                  product.detail && (
              <button
                  onClick={() => handleProductClick(product)} 
                  className="px-4 py-2 mt-2 text-gray-900 bg-white rounded-lg"
                >
                  View Details
                </button>
                  )
                }
                
              </div>
            </div>
          

      
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductsCard;
