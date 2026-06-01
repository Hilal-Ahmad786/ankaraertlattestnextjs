import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ankara PERT - Kazalı, Hasarlı, Pert & Hurda Araç Alımı';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Top accent bar */}
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

        {/* Brand tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
            background: 'rgba(249, 115, 22, 0.15)',
            border: '1px solid rgba(249, 115, 22, 0.4)',
            borderRadius: '999px',
            padding: '8px 24px',
          }}
        >
          <span style={{ color: '#fb923c', fontSize: '16px', fontWeight: 700, letterSpacing: '0.1em' }}>
            🚗 ANKARA PERT
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          Kazalı, Hasarlı, Pert &amp; Hurda
          <br />
          <span style={{ color: '#fb923c' }}>Araç Alımı</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Türkiye Genelinde 7/24 Hizmet • 30 Dakikada Nakit Teklif
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['✅ Ücretsiz Ekspertiz', '💰 Nakit Ödeme', '🚛 Ücretsiz Çekici', '📋 Noterli İşlem'].map((badge) => (
            <div
              key={badge}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '10px 20px',
                color: '#e2e8f0',
                fontSize: '18px',
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '28px',
            right: '48px',
            color: '#64748b',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          ankarapert.com.tr
        </div>
      </div>
    ),
    { ...size }
  );
}
