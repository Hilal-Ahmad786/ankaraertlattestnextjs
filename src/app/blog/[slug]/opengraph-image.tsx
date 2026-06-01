import { ImageResponse } from 'next/og';
import { getBlogPost } from '@/lib/blog-posts';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  const title = post?.title ?? 'Ankara PERT Blog';
  const category = post?.category ?? 'Blog';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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

        {/* Category pill */}
        <div
          style={{
            display: 'flex',
            marginBottom: '20px',
            background: 'rgba(249, 115, 22, 0.2)',
            border: '1px solid rgba(249, 115, 22, 0.5)',
            borderRadius: '999px',
            padding: '6px 20px',
          }}
        >
          <span style={{ color: '#fb923c', fontSize: '16px', fontWeight: 700 }}>{category}</span>
        </div>

        {/* Post title */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '32px',
            maxWidth: '900px',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#f97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              AP
            </div>
            <span style={{ color: '#94a3b8', fontSize: '18px' }}>Ankara PERT</span>
          </div>
          <span style={{ color: '#64748b', fontSize: '18px', fontWeight: 600 }}>ankarapert.com.tr</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
