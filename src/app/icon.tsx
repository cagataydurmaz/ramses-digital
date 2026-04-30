import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'linear-gradient(135deg, #0A0F1E 0%, #1a2347 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 800,
          borderRadius: 6,
          letterSpacing: '-0.05em',
          border: '1px solid rgba(59, 130, 246, 0.4)',
        }}
      >
        RD
      </div>
    ),
    { ...size }
  )
}
