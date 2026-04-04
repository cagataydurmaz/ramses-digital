'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { posts, Post } from '@/lib/posts'

const CATEGORIES = [
  'Tümü',
  'SEO',
  'Google Ads',
  'Sosyal Medya',
  'Teknik SEO',
  'AI & Strateji',
  'E-Posta',
  'Strateji',
]

function categoryBadgeClass(color: string): string {
  switch (color) {
    case 'blue':
      return 'bg-blue-500/10 text-blue-400'
    case 'orange':
      return 'bg-orange-500/10 text-orange-400'
    case 'pink':
      return 'bg-pink-500/10 text-pink-400'
    case 'violet':
      return 'bg-violet-500/10 text-violet-400'
    case 'cyan':
      return 'bg-cyan-500/10 text-cyan-400'
    case 'emerald':
      return 'bg-emerald-500/10 text-emerald-400'
    default:
      return 'bg-blue-500/10 text-blue-400'
  }
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-[#0D1225] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all group flex flex-col"
    >
      {/* Cover */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${post.coverGradient} opacity-60`} />
        <span className="absolute bottom-3 left-3 text-3xl drop-shadow-lg">{post.emoji}</span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span
          className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-medium mb-3 w-fit ${categoryBadgeClass(post.categoryColor)}`}
        >
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-blue-300 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span>{post.readTime} dk okuma</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString('tr-TR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <span className="text-blue-400 text-xs font-medium group-hover:translate-x-0.5 transition-transform inline-block">
            Devamını Oku →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered =
    activeCategory === 'Tümü' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5 tracking-wider uppercase">
            Ramses Digital Blog
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Dijital Pazarlama{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Blogu
            </span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            SEO, Google Ads, sosyal medya ve dijital stratejide en güncel içgörüler, ipuçları ve
            vaka çalışmaları. Markanızı büyütmek için ihtiyacınız olan bilgi burada.
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.15]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-zinc-400">
              Bu kategoride henüz içerik bulunmuyor.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
