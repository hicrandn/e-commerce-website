'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Eu dictumst cum at sed euismood condimentum?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    question: "Magna bibendum est fermentum eros.",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    question: "Odio muskana hak eris conseekin sceleton?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D3178] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#8A8FB9] text-base md:text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* FAQ Accordion */}
          <div className="w-full lg:w-3/5 space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 md:p-6 flex justify-between items-center text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#0D0E43] pr-4">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#FB2E86] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-[#FB2E86] flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-4 md:px-6 pb-4 md:pb-6 text-[#A1ABCC] text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[250px] md:h-[350px]">
              <Image
                src="/faq/faq.svg" 
                alt="FAQ"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
