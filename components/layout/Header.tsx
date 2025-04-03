'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaPhone, FaEnvelope, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pages', href: '/pages' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="w-full flex flex-col">
      
      <div className="w-full bg-[#8C3ADD]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5">
            
            <div className="flex items-center gap-4 sm:gap-8 text-white text-sm">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4" />
                <span className="hidden md:inline">mhhasanul@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4" />
                <span className="hidden md:inline">(12345)67890</span>
              </div>
            </div>

            
            <div className="flex items-center space-x-4 md:space-x-6 text-white text-sm">
              <div className="flex items-center space-x-4">
                <select className="bg-transparent border-none text-white outline-none cursor-pointer text-sm">
                  <option value="en" className="text-black">English</option>
                  <option value="tr" className="text-black">Turkish</option>
                </select>
                <select className="bg-transparent border-none text-white outline-none cursor-pointer text-sm">
                  <option value="usd" className="text-black">USD</option>
                  <option value="eur" className="text-black">EUR</option>
                </select>
              </div>
              <Link href="/wishlist" className="hover:text-gray-200">
                <FaHeart className="w-4 h-4" />
              </Link>
              <Link href="/cart" className="hover:text-gray-200">
                <FaShoppingCart className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <nav className="relative border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold text-[#0D0E43] font-josefin-sans">
              HEYLOG
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors hover:text-[#8C3ADD]
                    ${pathname === item.href ? 'text-[#8C3ADD]' : 'text-gray-700'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            
            <div className="flex items-center space-x-3">
              <form onSubmit={handleSearch} className="hidden md:flex items-center h-10">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-full px-4 text-sm border border-r-0 border-gray-300 rounded-l focus:outline-none focus:border-[#FB2E86] w-[200px] text-black placeholder-gray-500"
                />
                <button 
                  type="submit"
                  className="h-full px-4 bg-[#FB2E86] text-white rounded-r hover:bg-[#e91e63] transition-colors flex items-center justify-center"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </form>


             
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden h-10 px-2 text-gray-700 hover:text-[#8C3ADD] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-50 md:hidden border-b bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col">
                {/* Mobile Search Input */}
                <form onSubmit={handleSearch} className="mb-3">
                  <div className="flex h-10">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-full flex-1 px-4 text-sm border border-r-0 border-gray-300 rounded-l focus:outline-none focus:border-[#FB2E86] text-black placeholder-gray-500"
                    />
                    <button 
                      type="submit"
                      className="h-full px-4 bg-[#FB2E86] text-white rounded-r hover:bg-[#e91e63] transition-colors flex items-center justify-center"
                    >
                      <FaSearch className="w-4 h-4" />
                    </button>
                  </div>
                </form>

                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`py-2 text-sm transition-colors hover:text-[#8C3ADD]
                      ${pathname === item.href ? 'text-[#8C3ADD]' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 