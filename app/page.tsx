import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <section className="w-full h-[764px] bg-cover bg-center relative" style={{ backgroundImage: "url('/products/home.svg')", opacity: 0.8 }}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full relative z-10">
            
            <div className="flex-1 pr-8">
              <span className="text-pink text-base font-bold mb-3 block">Best e commerce For Your Castle....</span>
              <h1 className="text-4xl md:text-5xl font-bold text-off-blue mb-4">New  Trends in 2025</h1>
              <p className="text-blue text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
              <button className="px-8 py-3 bg-pink text-white rounded hover:bg-[#e91e63] transition-colors text-base font-medium">
                Shop Now
              </button>
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-off-blue mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-[#F2F0FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-off-blue mb-8">Latest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-off-blue mb-12">What Shopex Offer!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="mx-auto mb-6 flex items-center justify-center">
              <Image src="/icons/support.svg" alt="Icon" width={40} height={40} />
              
      
              </div>
              <h3 className="text-xl font-bold text-off-blue mb-4">24/7 Support</h3>
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className=" mx-auto mb-6 flex items-center justify-center">
              <Image src="/icons/cashback.svg" alt="Icon" width={40} height={40} />
              
                
              </div>
              <h3 className="text-xl font-bold text-off-blue mb-4">Money Back Guarantee</h3>
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="mx-auto mb-6  flex items-center justify-center">
                <Image src="/icons/free.svg" alt="Icon" width={40} height={40} />
               
                
              </div>
              <h3 className="text-xl font-bold text-off-blue mb-4">Free Delivery</h3>
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="p-8 text-center bg-white rounded-lg shadow-lg">
              <div className="mx-auto mb-6 flex items-center justify-center">
              <Image src="/icons/quality.svg" alt="Icon" width={40} height={40} />
                
              </div>
              <h3 className="text-xl font-bold text-off-blue mb-4">Quality Products</h3>
              <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
