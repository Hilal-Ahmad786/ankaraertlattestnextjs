import { ImageResponse } from 'next/og';
import citiesData from '@/data/cities.json';
import { City } from '@/types';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const cities: City[] = citiesData as City[];
  const city = cities.find((c) => c.slug === params.slug);
  const cityName = city?.name ?? 'Türkiye';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #7c2d12 100%)',
          padding: '60px',
          position: 'relative',
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #f97316, #ea580c)',
          }}
        />

        {/* Location pin */}
        <div
          style={{
            fontSize: '64px',
            marginBottom: '16px',
          }}
        >
          📍
        </div>

        {/* City name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 900,
            color: '#fb923c',
            textAlign: 'center',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          {cityName}
        </div>

        {/* Service line */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          Hasarlı & Pert Araç Alımı
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          30 Dakikada Nakit Teklif • Ücretsiz Ekspertiz • 7/24 Hizmet
        </div>

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(249, 115, 22, 0.15)',
            border: '1px solid rgba(249, 115, 22, 0.4)',
            borderRadius: '999px',
            padding: '10px 28px',
          }}
        >
          <span style={{ color: '#fb923c', fontSize: '20px', fontWeight: 700, letterSpacing: '0.05em' }}>
            ANKARA PERT — ankarapert.com.tr
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
