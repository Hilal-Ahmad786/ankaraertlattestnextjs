'use client';

import { useState } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';
import { trackPhoneConversion, trackWhatsAppConversion } from '@/lib/analytics';

export default function TrackingTestPage() {
  const [events, setEvents] = useState<string[]>([]);

  const addEvent = (event: string) => {
    setEvents(prev => [...prev, `${new Date().toLocaleTimeString()}: ${event}`]);
  };

  const testPhoneTracking = () => {
    trackPhoneClick();
    trackPhoneConversion();
    addEvent('✅ Phone tracking fired');
  };

  const testWhatsAppTracking = () => {
    trackWhatsAppClick();
    trackWhatsAppConversion();
    addEvent('✅ WhatsApp tracking fired');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔍 Conversion Tracking Test
          </h1>
          <p className="text-gray-600 mb-8">
            Test your Google Ads conversion tracking
          </p>

          {/* Test Buttons */}
          <div className="space-y-4 mb-8">
            <button
              onClick={testPhoneTracking}
              className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              🧪 Test Phone Conversion
            </button>

            <button
              onClick={testWhatsAppTracking}
              className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-600 transition"
            >
              🧪 Test WhatsApp Conversion
            </button>
          </div>

          {/* Event Log */}
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm h-64 overflow-y-auto">
            <div className="mb-2 text-gray-400">// Event Log:</div>
            {events.length === 0 ? (
              <div className="text-gray-500">No events yet. Click buttons to test.</div>
            ) : (
              events.map((event, i) => (
                <div key={i}>{event}</div>
              ))
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-900 mb-2">📋 How to Verify:</h3>
            <ol className="text-blue-800 text-sm space-y-2 list-decimal ml-5">
              <li>Click the test buttons above</li>
              <li>Open browser DevTools (F12)</li>
              <li>Go to Network tab</li>
              <li>Look for requests to:
                <ul className="ml-5 mt-1 list-disc">
                  <li><code>google-analytics.com</code></li>
                  <li><code>googletagmanager.com</code></li>
                  <li><code>googleadservices.com</code></li>
                </ul>
              </li>
              <li>Check Google Ads → Conversions for test data (may take 24h)</li>
            </ol>
          </div>

          {/* Environment Check */}
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">🔧 Environment Status:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className={process.env.NEXT_PUBLIC_GTM_ID ? 'text-green-600' : 'text-red-600'}>
                  {process.env.NEXT_PUBLIC_GTM_ID ? '✅' : '❌'}
                </span>
                <span>GTM ID: {process.env.NEXT_PUBLIC_GTM_ID || 'NOT SET'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={process.env.NEXT_PUBLIC_GA_ID ? 'text-green-600' : 'text-red-600'}>
                  {process.env.NEXT_PUBLIC_GA_ID ? '✅' : '❌'}
                </span>
                <span>GA4 ID: {process.env.NEXT_PUBLIC_GA_ID || 'NOT SET'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={process.env.NEXT_PUBLIC_ADS_CONVERSION_ID ? 'text-green-600' : 'text-red-600'}>
                  {process.env.NEXT_PUBLIC_ADS_CONVERSION_ID ? '✅' : '❌'}
                </span>
                <span>Ads ID: {process.env.NEXT_PUBLIC_ADS_CONVERSION_ID || 'NOT SET'}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a href="/" className="text-orange-500 hover:text-orange-600 font-semibold">
              ← Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}