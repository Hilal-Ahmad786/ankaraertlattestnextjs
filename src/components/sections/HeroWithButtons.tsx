// components/sections/HeroWithButtons.tsx
import React from 'react';
import ActionButtons from '@/components/ui/ActionButtons';

interface HeroWithButtonsProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function HeroWithButtons({ 
  title, 
  subtitle,
  description 
}: HeroWithButtonsProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {subtitle}
          </p>

          {/* Description */}
          {description && (
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          <ActionButtons className="justify-center" />

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-sm text-gray-300">Yıllık Tecrübe</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">5000+</div>
                <div className="text-sm text-gray-300">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">%100</div>
                <div className="text-sm text-gray-300">Güvenli İşlem</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">7/24</div>
                <div className="text-sm text-gray-300">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}