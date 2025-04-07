'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white hover:text-gray-200"
      >
        <FaShoppingCart className="w-4 h-4" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#FB2E86] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-[400px] bg-white shadow-lg z-50 mt-2 rounded-lg border border-gray-200">
          <div className="p-4">
            <h3 className="font-medium text-lg mb-4">Shopping Cart</h3>
            
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill={true}
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 truncate">{item.title}</h4>
                        <p className="text-[#FB2E86] text-sm font-semibold mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <FaMinus className="w-3 h-3 text-gray-600" />
                          </button>
                          <span className="text-sm text-gray-600">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <FaPlus className="w-3 h-3 text-gray-600" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-gray-100 rounded ml-2"
                          >
                            <FaTrash className="w-3 h-3 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-lg font-semibold text-[#FB2E86]">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-[#FB2E86] text-white py-2 rounded-lg hover:bg-[#e91e63] transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 