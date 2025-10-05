'use client';

import { useState, useEffect } from 'react';

export default function TrustSignals() {
  const [recentCalls, setRecentCalls] = useState(127);
  const [todaySales, setTodaySales] = useState(8);

  useEffect(() => {
    // Simulate live counter updates
    const interval = setInterval(() => {
      setRecentCalls(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setTodaySales(prev => prev + 1);
      }
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Main Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Live Call Counter */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{recentCalls}+</div>
            <div className="text-sm text-gray-600">Son 24 Saatte Arama</div>
          </div>

          {/* Today's Sales */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{todaySales}</div>
            <div className="text-sm text-gray-600">Bugün Alım Yapıldı</div>
          </div>

          {/* Response Time */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">&lt;30dk</div>
            <div className="text-sm text-gray-600">Ortalama Yanıt Süresi</div>
          </div>

          {/* Satisfaction Rate */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
            <div className="text-sm text-gray-600">Müşteri Memnuniyeti</div>
          </div>
        </div>

        {/* Social Proof Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden md:block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg mb-1">
                  🔥 Şu anda 23 kişi fiyat teklifi alıyor
                </div>
                <div className="text-blue-100 text-sm">
                  Son 1 saatte 47 teklif verildi
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white flex items-center justify-center text-sm font-bold">
                  +19
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Ticker */}
        <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm font-semibold">
            ✅ Son İşlemler (Gerçek Zamanlı)
          </div>
          <div className="divide-y divide-gray-100">
            <RecentActivity
              time="2 dakika önce"
              action="Ali K."
              location="Ankara"
              type="2019 model kazalı araç sattı"
              amount="285.000 TL"
            />
            <RecentActivity
              time="8 dakika önce"
              action="Zeynep M."
              location="İstanbul"
              type="Hasarlı araç için teklif aldı"
              amount="142.000 TL"
            />
            <RecentActivity
              time="15 dakika önce"
              action="Mehmet Y."
              location="İzmir"
              type="Pert araç sattı"
              amount="98.000 TL"
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">SSL Güvenli</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">Noter Onaylı</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">15+ Yıl Tecrübe</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">50,000+ Mutlu Müşteri</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentActivity({ 
  time, 
  action, 
  location, 
  type, 
  amount 
}: { 
  time: string; 
  action: string; 
  location: string; 
  type: string; 
  amount: string;
}) {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {action.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">
              {action} • <span className="text-gray-600 font-normal">{location}</span>
            </div>
            <div className="text-xs text-gray-500">{type}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-green-600 text-sm">{amount}</div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>
      </div>
    </div>
  );
}