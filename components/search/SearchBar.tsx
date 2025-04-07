import { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useDebounce from '@/hooks/useDebounce';
import { useSearch } from '@/hooks/useSearch';

interface SearchResult {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

async function fetchProducts(query: string): Promise<SearchResult[]> {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.products;
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { results, loading, error } = useSearch<SearchResult>(debouncedSearchQuery, fetchProducts);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  useEffect(() => {
    const handleRouteChange = () => {
      setShowResults(false);
      setSearchQuery('');
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
      const search = async () => {
        try {
          const data = await fetchProducts(searchQuery);
          console.log('Search results:', data);
        } catch (err) {
          console.error('Search error:', err);
        }
      };
      search();
    }
  };

  const handleProductClick = (productId: number) => {
    setShowResults(false);
    setSearchQuery('');
    router.push(`/products/${productId}`);
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch} className="flex items-center h-10">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          className="h-full px-4 text-sm border border-r-0 border-gray-300 rounded-l focus:outline-none focus:border-pink w-[350px] text-black placeholder-dimgray"
        />
        <button 
          type="submit"
          className="h-full w-[50px] bg-pink text-white rounded-r hover:bg-pink transition-colors flex items-center justify-center"
        >
          <FaSearch className="w-4 h-4" />
        </button>
      </form>

      
      {showResults && searchQuery && (
        <div className="absolute top-full right-0 w-[400px] bg-white shadow-lg z-50 mt-2 rounded-lg border border-gray">
          <div className="p-4">
            {loading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink"></div>
              </div>
            )}
            {error && (
              <div className="flex items-center justify-center py-8">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
            {!loading && !error && results.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8">
                <p className="text-dimgray text-sm">No results found for "{searchQuery}"</p>
              </div>
            )}
            {!loading && !error && results.length > 0 && (
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill={true}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="font-medium text-sm text-dark-gray truncate">{product.title}</h3>
                      <p className="text-pink text-sm font-semibold mt-1">${product.price.toFixed(2)}</p>
                      <p className="text-dimgray text-xs capitalize mt-0.5">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!loading && !error && results.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-dimgray text-center">
                  Showing {results.length} results
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 