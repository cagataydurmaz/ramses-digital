'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}


export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Merhaba! Ben Ramses Digital\'in AI asistanıyım. Size dijital pazarlama hizmetlerimiz hakkında bilgi verebilir, ücretsiz danışmanlık randevusu almanıza yardımcı olabilirim. Nasıl yardımcı olabilirim?',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Auto-open chat panel for 5 seconds on first visit, then auto-close (desktop only)
  useEffect(() => {
    if (window.innerWidth < 640) return // mobilde auto-open yok
    const dismissed = sessionStorage.getItem('ramses_chat_notif')
    if (dismissed) return
    // Open after 2s
    const openTimer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('ramses_chat_notif', '1')
    }, 2000)
    // Auto-minimize after 7s (2s delay + 5s visible)
    const closeTimer = setTimeout(() => {
      if (inputRef.current && inputRef.current.value.trim() === '') {
        setIsOpen(false)
        setIsMinimized(true)
      }
    }, 7000)
    return () => { clearTimeout(openTimer); clearTimeout(closeTimer) }
  }, [])


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      })

      if (!response.ok) throw new Error('API error')
      if (!response.body) throw new Error('No response body')

      const assistantMessage: Message = { role: 'assistant', content: '' }
      setMessages((prev) => [...prev, assistantMessage])

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            role: 'assistant',
            content: updated[updated.length - 1].content + chunk,
          }
          return updated
        })
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin veya bizimle doğrudan iletişime geçin: +90 (535) 560 19 36',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Minimized pill */}
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={() => { setIsMinimized(false); setIsOpen(true) }}
            className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 flex items-center gap-3 bg-[#0D1225] border border-blue-500/30 rounded-full pl-2.5 pr-5 py-2.5 shadow-lg shadow-blue-500/10 hover:border-blue-500/60 transition-colors"
          >
            <div className="relative w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
              <Bot size={15} className="text-blue-400" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0D1225]" />
            </div>
            <div className="text-left">
              <p className="text-white text-[13px] font-semibold leading-none mb-1">Ramses AI</p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-400 text-[11px] leading-none"
              >
                Ücretsiz Danışmanlık →
              </motion.p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false)
            setIsMinimized(true)
          } else {
            setIsMinimized(false)
            setIsOpen(true)
          }
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-colors"
        aria-label="AI Asistan"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} color="white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} color="white" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0A0F1E]" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[360px] max-w-[360px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              maxHeight: 'calc(100dvh - 120px)',
              background: '#0D1225',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Header */}
            <div className="bg-[#0D1225] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">Ramses AI Asistan</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span className="text-zinc-500 text-xs">Çevrimiçi</span>
                </div>
              </div>
              <button
                onClick={() => { setIsOpen(false); setIsMinimized(true) }}
                aria-label="Sohbeti kapat"
                className="text-zinc-400 hover:text-zinc-200 transition-colors p-1"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-52 sm:h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 shrink-0">
                      <Bot size={12} className="text-blue-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white rounded-br-sm'
                        : 'bg-[#111827] text-zinc-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-2 mt-0.5 shrink-0">
                    <Bot size={12} className="text-blue-400" />
                  </div>
                  <div className="bg-[#111827] px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] p-3 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-[#111827] border border-white/[0.06] rounded-xl px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                aria-label="Mesajı gönder"
                className="w-9 h-9 bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-800 disabled:text-zinc-500 rounded-xl flex items-center justify-center transition-all shrink-0"
              >
                {isLoading ? (
                  <Loader2 size={14} className="text-white animate-spin" aria-hidden="true" />
                ) : (
                  <Send size={14} className="text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
