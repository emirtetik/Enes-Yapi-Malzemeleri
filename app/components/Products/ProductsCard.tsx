"use client"
import React from 'react';
import { useProductsData } from '../../Hook/useProductsData';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const productsUrl = process.env.NEXT_PUBLIC_PRODUCTS_URL || "";

const ProductsCard = () => {
  const { data, loading, error } = useProductsData(productsUrl);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.date}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
