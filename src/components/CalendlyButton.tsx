'use client'

import { ArrowRight } from 'lucide-react'

const WHATSAPP_NUMBER = '905355601936'
const WHATSAPP_MESSAGE = 'Merhaba! Ücretsiz danışmanlık almak istiyorum.'

interface CalendlyButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'link' | 'outline'
  className?: string
  showIcon?: boolean
}

export default function CalendlyButton({
  label = 'Ücretsiz Danışmanlık Al',
  variant = 'primary',
  className = '',
  showIcon = true,
}: CalendlyButtonProps) {
  const handleClick = () => {
    const msg = encodeURIComponent(WHATSAPP_MESSAGE)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  const buttonContent = (
    <>
      {label}
      {showIcon && (
        <ArrowRight size={variant === 'link' ? 14 : 16} className="group-hover:translate-x-1 transition-transform" />
      )}
    </>
  )

  if (variant === 'primary') {
    return (
      <button
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else if (variant === 'secondary') {
    return (
      <button
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else if (variant === 'outline') {
    return (
      <button
        onClick={handleClick}
        className={`group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-full font-medium transition-all ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else {
    return (
      <button
        onClick={handleClick}
        className={`group inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors ${className}`}
      >
        {buttonContent}
      </button>
    )
  }
}
