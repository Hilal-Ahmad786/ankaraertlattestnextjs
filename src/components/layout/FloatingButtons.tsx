'use client';

import { useState, useEffect } from 'react';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/gtm';

const siteConfig = {
  phone: '+905346925795',
  phoneDisplay: '0 (534) 692 57 95',
  whatsapp: '905346925795',
};

export default function UnifiedFloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOnline(hour >= 9 && hour < 22);
    };
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick();
    trackCTAClick('Floating Phone', 'floating-buttons');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp', 'floating-buttons');
  };

  const quickMessages = [
    { emoji: '🚗', text: 'Araç değerlendirmesi', message: 'Merhaba, aracım için değerlendirme almak istiyorum.' },
    { emoji: '📸', text: 'Fotoğraf göndermek istiyorum', message: 'Merhaba, araç fotoğraflarımı göndermek istiyorum.' },
    { emoji: '💰', text: 'Fiyat öğrenmek istiyorum', message: 'Merhaba, aracım için fiyat teklifi alabilir miyim?' },
    { emoji: '📞', text: 'Hemen görüşmek istiyorum', message: 'Merhaba, sizi aramak istiyorum. Müsait misiniz?' },
  ];

  return (
    <>
      {/* Desktop Layout - Bottom Right Stack */}
      <div className="hidden md:block">
        {/* Chat Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
          aria-label="Canlı Destek"
        >
          {isChatOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
          {isOnline && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
          )}
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isOnline ? 'Canlı Destek' : 'Mesaj Bırakın'}
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handlePhoneClick}
          className="fixed right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center group"
          style={{ bottom: '12.5rem' }}
          aria-label="Telefon"
        >
          <i className="fas fa-phone-alt text-xl"></i>
          <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40"></span>
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Hemen Ara
          </span>
        </a>
      </div>

      {/* Mobile Layout - Bottom Fixed Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
        <div className="flex items-stretch justify-between max-w-md mx-auto">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex-1 flex flex-col items-center justify-center py-3 px-2 active:bg-gray-100 transition-colors border-r border-gray-100"
          >
            <div className="relative mb-1">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              {isOnline && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
              )}
            </div>
            <span className="text-xs font-semibold text-gray-700">Destek</span>
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex-1 flex flex-col items-center justify-center py-3 px-2 active:bg-gray-100 transition-colors border-r border-gray-100"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-1 shadow-md">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-700">WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="flex-1 flex flex-col items-center justify-center py-2 px-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white active:from-orange-600 active:to-orange-700 transition-all"
          >
            <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mb-1 shadow-lg backdrop-blur-sm">
              <i className="fas fa-phone-alt text-xl"></i>
            </div>
            <span className="text-xs font-bold tracking-wide">HEMEN ARA</span>
          </a>
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 md:bottom-24 md:right-24 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200">
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

          <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto">
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

            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 mb-3">Hızlı Seçenekler:</p>
              
              {quickMessages.map((item, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-blue-50 p-3 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-sm font-medium text-gray-800">{item.text}</span>
                  </div>
                </a>
              ))}

              <a
                href={`tel:${siteConfig.phone}`}
                className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-lg shadow-lg transition-all text-center font-bold"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Hemen Ara: {siteConfig.phoneDisplay}</span>
                </div>
              </a>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              🔒 Güvenli ve hızlı iletişim
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 72px;
          }
        }

        html {
          scroll-padding-bottom: 80px;
        }
      `}</style>
    </>
  );
}