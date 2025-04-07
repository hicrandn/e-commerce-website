'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaPhone, FaEnvelope, FaHeart, FaShoppingCart } from 'react-icons/fa';
import SearchBar from '@/components/search/SearchBar';
import CartDropdown from '@/components/cart/CartDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Shop', href: '/shop' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="w-full flex flex-col">
      <div className="w-full bg-off-blue">
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
              <CartDropdown />
            </div>
          </div>
        </div>
      </div>

      
      <nav className="relative border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            
            <Link href="/" className="text-xl md:text-2xl font-bold text-off-blue font-josefin-sans">
              HEYLOG
            </Link>

            
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
              <div className="hidden md:block">
                <SearchBar />
              </div>

              
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
                
                <div className="mb-3">
                  <SearchBar />
                </div>

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