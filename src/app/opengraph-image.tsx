import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ramses Digital — Performans Odaklı Dijital Pazarlama Ajansı'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A0F1E 0%, #0D1225 50%, #1a1f3a 100%)',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#3b82f6',
            }}
          />
          <span
            style={{
              color: '#3b82f6',
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Ramses Digital
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '88px',
              fontWeight: 800,
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Markanızı Dijitalde
          </h1>
          <h1
            style={{
              fontSize: '88px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Büyütün
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#94a3b8',
              marginTop: '32px',
              fontWeight: 400,
            }}
          >
            SEO · Google Ads · n8n Otomasyon · Web Tasarımı
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#64748b',
            fontSize: '20px',
          }}
        >
          <span>Kocaeli · İstanbul · Türkiye</span>
          <span>ramsesdigital.com</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
