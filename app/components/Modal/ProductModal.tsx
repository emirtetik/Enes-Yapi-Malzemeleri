import React from 'react';
import { Product } from '@/app/Hook/useProductsData';
interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="z-10 p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-lg font-semibold">{product.title}</h2>
        {product.detail && <p className="mb-4 text-sm text-gray-600">{product.detail}</p>}
        <button onClick={onClose} className="px-4 py-2 text-white bg-gray-800 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
