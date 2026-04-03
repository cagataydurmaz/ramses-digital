'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ConsultationModal from './ConsultationModal'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

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
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => setModalOpen(true)

  const buttonContent = (
    <>
      {label}
      {showIcon && (
        <ArrowRight size={variant === 'link' ? 14 : 16} className="group-hover:translate-x-1 transition-transform" />
      )}
    </>
  )

  const baseProps = {
    onClick: handleClick,
    className: '',
  }

  let buttonEl: React.ReactNode

  if (variant === 'primary') {
    buttonEl = (
      <button
        {...baseProps}
        className={`group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else if (variant === 'secondary') {
    buttonEl = (
      <button
        {...baseProps}
        className={`group inline-flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else if (variant === 'outline') {
    buttonEl = (
      <button
        {...baseProps}
        className={`group inline-flex items-center gap-2 border border-blue-500/40 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-full font-medium transition-all ${className}`}
      >
        {buttonContent}
      </button>
    )
  } else {
    // link
    buttonEl = (
      <button
        {...baseProps}
        className={`group inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors ${className}`}
      >
        {buttonContent}
      </button>
    )
  }

  return (
    <>
      {buttonEl}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
