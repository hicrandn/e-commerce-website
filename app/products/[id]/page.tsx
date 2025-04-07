'use client';

import Image from "next/image";
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { use } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand?: string;
  thumbnail: string;
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${resolvedParams.id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [resolvedParams.id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 text-yellow-600 p-4 rounded-lg">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative h-96 w-full">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-dark-gray mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-pink mb-4">
            ${product.price.toFixed(2)}
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decrementQuantity}
                className="p-2 hover:bg-gray-100 rounded-l"
              >
                <FaMinus className="w-4 h-4 text-dimgray" />
              </button>
              <span className="px-4 py-2 text-gray-700">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="p-2 hover:bg-gray-100 rounded-r"
              >
                <FaPlus className="w-4 h-4 text-dimgray" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-pink text-white py-3 px-6 rounded-lg hover:bg-[#e91e63] transition-colors flex items-center justify-center space-x-2"
          >
            <span>Add to Cart</span>
          </button>

          <div className="mt-6">
            <div className="flex items-center space-x-4 text-sm text-dimgray">
              <span>Category:</span>
              <span className="capitalize">{product.category}</span>
            </div>
            {product.brand && (
              <div className="flex items-center space-x-4 text-sm text-dimgray mt-2">
                <span>Brand:</span>
                <span>{product.brand}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

