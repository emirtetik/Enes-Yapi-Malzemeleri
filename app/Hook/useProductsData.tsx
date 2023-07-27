"use client"
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  size: string;
}

interface ProductsData {
  data: Product[];
  loading: boolean;
  error: string | null;
}

export function useProductsData(url: string): ProductsData {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProductsData();
  }, [url]); 

  return { data, loading, error };
}
