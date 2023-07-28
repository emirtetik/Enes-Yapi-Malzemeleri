'use client'
import React from 'react';
import { useProductsData } from '../../Hook/useProductsData';
import CategorySidebar from './CategorySidebar';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Image from 'next/image';
import styles from "../../styles/ProductsCard.module.css"

const productsUrl = process.env.NEXT_PUBLIC_PRODUCTS_URL || "";

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

  const categoryData = [...new Set(data.map((product) => product.category))]

  const filteredData = selectCategory === 'All'
      ? data
      : data.filter((product) => product.category === selectCategory);

 
  return (
    <div>
     <CategorySidebar
            data={categoryData}
            categoryList={selectCategory}
            onCategorySelect={handleCategorySelection}
          />  
    <section className="lg:max-w-6xl mx-auto px-5 md:max-w-2xl md:px-10 ">
    
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      {filteredData.map((product) => (
      <div key={product.id} 
      className="p-4 md:w-1/2 lg:w-1/3 scale-100 sm:w-1/1 hover:scale-110 duration-150 z-50">

        <div className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-gray-950 ${styles.productsCard}`}>
          <Image width={200} height={200}
            objectFit="contain" 
             className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={product.image}
               alt={product.category}/>
          <div className="p-6">
           <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{product.category}</h2>
            <h1 className="title-font text-lg font-medium text-white  mb-3">{product.title}</h1>
            <p className="leading-relaxed text-white mb-3">{product.description}</p>
            <div className="flex items-center flex-wrap ">
             
             
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

    </section>
    </div>


  );
};

export default ProductsCard;

