import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0F1E 0%, #1a2347 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* subtle blue glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '180px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <span
          style={{
            fontSize: 90,
            color: 'white',
            fontWeight: 800,
            letterSpacing: '-0.06em',
            zIndex: 1,
          }}
        >
          RD
        </span>
      </div>
    ),
    { ...size }
  )
}
