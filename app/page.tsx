import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - 1920x764 */}
      <section className="w-full h-[764px] bg-[#F2F0FF]">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Left Content */}
            <div className="flex-1 pr-8">
              <span className="text-[#FB2E86] text-base font-bold mb-3 block">Best Furniture For Your Castle....</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D0E43] mb-4">New Furniture Collection Trends in 2024</h1>
              <p className="text-[#8A8FB9] text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <button className="px-8 py-3 bg-[#FB2E86] text-white rounded hover:bg-[#e91e63] transition-colors text-base font-medium">
                Shop Now
              </button>
            </div>
            
            {/* Right Content - Image */}
            <div className="hidden md:block flex-1">
              <div className="relative w-full h-[600px]">
                <Image
                  src="/products/tortuga.png"
                  alt="New Furniture Collection"
                  fill
                  priority
                  className="object-contain"
                  style={{ objectPosition: 'right center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product cards will go here */}
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-16 bg-[#F2F0FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-8">Latest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product cards will go here */}
          </div>
        </div>
      </section>

      {/* What Shopex Offer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0D0E43] mb-12">What Shopex Offer!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Cards */}
            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F2F0FF] rounded-full flex items-center justify-center">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-xl font-bold text-[#0D0E43] mb-4">24/7 Support</h3>
              <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F2F0FF] rounded-full flex items-center justify-center">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-xl font-bold text-[#0D0E43] mb-4">Money Back Guarantee</h3>
              <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F2F0FF] rounded-full flex items-center justify-center">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-xl font-bold text-[#0D0E43] mb-4">Free Delivery</h3>
              <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#F2F0FF] rounded-full flex items-center justify-center">
                {/* Icon placeholder */}
              </div>
              <h3 className="text-xl font-bold text-[#0D0E43] mb-4">Quality Products</h3>
              <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
