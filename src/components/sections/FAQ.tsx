'use client';

import { useState } from 'react';
import { FAQItem } from '@/data/faq';

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQ({
  title = 'Sık Sorulan Sorular',
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // JSON-LD is always present regardless of accordion state.
  // This ensures AI crawlers and Googlebot read all Q&A even without JS.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section
      className="sales-guide-section py-16 bg-white"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {/* JSON-LD: always readable by crawlers, independent of accordion state */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {title}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="accordion-item bg-gray-50 rounded-lg overflow-hidden shadow-sm"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className={`accordion-button w-full text-left p-4 flex items-center justify-between transition-colors ${
                  openIndex === index
                    ? 'bg-white text-orange-500'
                    : 'bg-transparent text-primary hover:bg-white'
                }`}
                aria-expanded={openIndex === index}
                itemProp="name"
              >
                <span className="font-semibold pr-4">{item.question}</span>
                <i
                  className={`fas fa-chevron-down transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>

              {/* Microdata answer — always in DOM but visually hidden when closed */}
              <div
                className={`accordion-body bg-white border-t border-gray-200 ${
                  openIndex === index ? 'block p-4' : 'hidden'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-gray-700 leading-relaxed" itemProp="text">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
