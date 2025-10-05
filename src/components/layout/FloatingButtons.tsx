'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/lib/analytics';

interface FloatingButtonsProps {
  isPopupOpen: boolean;
  setIsPopupOpen: (value: boolean) => void;
}

export default function FloatingButtons({ isPopupOpen, setIsPopupOpen }: FloatingButtonsProps) {
  const handlePhoneClick = () => {
    trackPhoneClick();
    trackPhoneConversion();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackWhatsAppConversion();
  };

  return (
    <>
      {/* Desktop Layout - Bottom Right Stack */}
      <div className="hidden md:block">
        {/* Chat Button - Shows popup */}
        <button
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-40 flex items-center justify-center group"
          aria-label="Canlı Destek"
        >
          {isPopupOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Canlı Destek
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-40 flex items-center justify-center group"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handlePhoneClick}
          className="fixed right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-40 flex items-center justify-center group"
          title="Hemen Ara"
          aria-label="Telefon"
          style={{ bottom: '12.5rem' }}
        >
          <i className="fas fa-phone-alt text-xl relative z-10"></i>
          
          {/* Double Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40"></span>
          <span className="absolute inset-0 rounded-full bg-orange-500 animate-pulse opacity-30"></span>
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Hemen Ara
          </span>
        </a>
      </div>

      {/* Mobile Layout - Bottom Fixed Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40 safe-area-bottom">
        <div className="flex items-stretch justify-between max-w-md mx-auto">
          {/* Chat Button */}
          <button
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            className="flex-1 flex flex-col items-center justify-center py-3 px-2 active:bg-gray-100 transition-colors border-r border-gray-100"
          >
            <div className="relative mb-1">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
            </div>
            <span className="text-xs font-semibold text-gray-700">Destek</span>
          </button>

          {/* WhatsApp Button */}
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

          {/* Phone Button - Highlighted & Larger */}
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

      {/* Mobile body padding compensation */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 72px;
          }
        }

        .safe-area-bottom {
          padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
        }

        html {
          scroll-padding-bottom: 80px;
        }
      `}</style>
    </>
  );
}