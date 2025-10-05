'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function BotProtection() {
  useEffect(() => {
    // Basic bot detection
    const detectBot = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const botPatterns = [
        'bot', 'crawl', 'spider', 'scrape', 'headless',
        'phantom', 'selenium', 'playwright', 'puppeteer'
      ];
      
      const isBot = botPatterns.some(pattern => userAgent.includes(pattern));
      
      if (isBot) {
        console.log('Bot detected - limited tracking enabled');
      }
      
      return isBot;
    };

    // Honeypot field detection
    const checkHoneypot = () => {
      const honeypots = document.querySelectorAll('[data-honeypot]');
      honeypots.forEach(field => {
        if ((field as HTMLInputElement).value) {
          console.log('Honeypot triggered - potential bot');
        }
      });
    };

    // Mouse movement tracking (bots usually don't move mouse naturally)
    let mouseMovements = 0;
    const trackMouse = () => {
      mouseMovements++;
      if (mouseMovements > 5) {
        document.removeEventListener('mousemove', trackMouse);
      }
    };
    document.addEventListener('mousemove', trackMouse);

    detectBot();
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  // Google reCAPTCHA v3 - Add your site key
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <>
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="lazyOnload"
        />
      )}
    </>
  );
}