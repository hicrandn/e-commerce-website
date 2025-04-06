import React from 'react'
import Image from 'next/image'

const Faq = () => {
  return (
    <div>
        <section className="w-full py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-[#1D3178] mb-8">General Information</h2>

    <div className="flex flex-col lg:flex-row gap-8">
      
      <div className="flex-1 space-y-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#0D0E43] mb-4">Eu dictumst cum at sed euismood condimentum?</h3>
          <p className="text-[#A1ABCC]">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#0D0E43] mb-4">Magna bibendum est fermentum eros.</h3>
          <p className="text-[#A1ABCC]">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#0D0E43] mb-4">Odio muskana hak eris conseekin sceleton?</h3>
          <p className="text-[#A1ABCC]">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>

     
      <div className="flex-1 flex justify-center items-start">
        <Image
          src="/faq/faq.svg" 
          alt="FAQ"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
    </div>

   
    <div className="w-full flex flex-col items-center mt-12">
      <Image
        src="/banners/image.svg"
        alt="banner"
        width={723}
        height={692}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>



    </div>
  )
}

export default Faq
