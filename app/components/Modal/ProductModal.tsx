// components/Modal.js
import React from 'react';

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const ProductModal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-70" />
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <button onClick={onClose} className="modal-close cursor-pointer z-50">
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M1.293 1.293a1 1 0 011.414 0L9 7.586l6.293-6.293a1 1 0 111.414 1.414L10.414 9l6.293 6.293a1 1 0 01-1.414 1.414L9 10.414l-6.293 6.293a1 1 0 01-1.414-1.414L7.586 9 1.293 2.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
