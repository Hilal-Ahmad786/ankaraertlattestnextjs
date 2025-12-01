'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackFormSubmit } from '@/lib/gtm';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check if current time is business hours (9 AM - 10 PM)
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOnline(hour >= 9 && hour < 22);
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const quickMessages = [
    { emoji: '🚗', text: 'Araç değerlendirmesi', message: 'Merhaba, aracım için değerlendirme almak istiyorum.' },
    { emoji: '📸', text: 'Fotoğraf göndermek istiyorum', message: 'Merhaba, araç fotoğraflarımı göndermek istiyorum.' },
    { emoji: '💰', text: 'Fiyat öğrenmek istiyorum', message: 'Merhaba, aracım için fiyat teklifi alabilir miyim?' },
    { emoji: '📞', text: 'Hemen görüşmek istiyorum', message: 'Merhaba, sizi aramak istiyorum. Müsait misiniz?' },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => {
          if (!isOpen) {
            trackFormSubmit('live_chat_open');
          }
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-24 right-6 md:bottom-6 md:right-24 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Canlı Destek"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}

        {/* Online Status Badge */}
        {isOnline && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
        )}

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isOnline ? 'Canlı Destek' : 'Mesaj Bırakın'}
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 md:bottom-24 md:right-24 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Ankara PERT</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                  <span>{isOnline ? 'Çevrimiçi' : 'Çevrimdışı'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
              <p className="text-gray-800 mb-2">
                {isOnline
                  ? '👋 Merhaba! Size nasıl yardımcı olabiliriz?'
                  : '📝 Mesaj bırakın, en kısa sürede dönüş yapalım.'
                }
              </p>
              <p className="text-gray-600 text-sm">
                {isOnline
                  ? 'Ortalama yanıt süresi: 2-3 dakika'
                  : 'Çalışma saatleri: 09:00 - 22:00'
                }
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Hızlı Seçenekler:</p>

              {quickMessages.map((item, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick()}
                  className="block bg-white hover:bg-blue-50 p-3 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-sm font-medium text-gray-800">{item.text}</span>
                  </div>
                </a>
              ))}

              {/* Direct Call Option */}
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={() => trackPhoneClick()}
                className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-lg shadow-lg transition-all text-center font-bold"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hemen Ara: {siteConfig.phoneDisplay}</span>
                </div>
              </a>
            </div>

            {/* Powered by */}
            <div className="mt-4 text-center text-xs text-gray-500">
              🔒 Güvenli ve hızlı iletişim
            </div>
          </div>
        </div>
      )}
    </>
  );
}