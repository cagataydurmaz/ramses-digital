'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { PostMeta } from '@/lib/posts'

const CATEGORIES = [
  'Tümü',
  'SEO',
  'Google Ads',
  'Sosyal Medya',
  'Teknik SEO',
  'AI & Strateji',
  'E-Posta',
  'Strateji',
  'Otomasyon',
  'Sektörel',
  'Web Tasarım',
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
    case 'fuchsia':
      return 'bg-fuchsia-500/10 text-fuchsia-400'
    case 'indigo':
      return 'bg-indigo-500/10 text-indigo-400'
    default:
      return 'bg-blue-500/10 text-blue-400'
  }
}

function BlogCard({ post, priority = false }: { post: PostMeta; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-[#0D1225] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all group flex flex-row sm:flex-col"
    >
      {/* Cover — mobilde solda küçük kare, geniş ekranda üstte */}
      <div className="relative w-28 shrink-0 min-h-[7.5rem] sm:w-auto sm:min-h-0 sm:h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 112px, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${post.coverGradient} opacity-60`} />
      </div>

      {/* Body */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-1 min-w-0">
        {/* Category badge */}
        <span
          className={`inline-block rounded-full px-2.5 py-1 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-3 w-fit ${categoryBadgeClass(post.categoryColor)}`}
        >
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-white font-semibold text-[15px] sm:text-base leading-snug mb-1 sm:mb-2 line-clamp-3 sm:line-clamp-none group-hover:text-blue-300 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="hidden sm:block text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="hidden sm:flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-1.5 sm:pt-3 sm:border-t border-white/[0.05]">
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-zinc-400">
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
          <span className="hidden sm:inline-block text-blue-400 text-xs font-medium group-hover:translate-x-0.5 transition-transform">
            Devamını Oku →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered =
    activeCategory === 'Tümü' ? posts : posts.filter((p) => p.category === activeCategory)

  return (
    <>
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
      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-zinc-400">
              Bu kategoride henüz içerik bulunmuyor.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {filtered.map((post, idx) => (
                <BlogCard key={post.slug} post={post} priority={idx < 3} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
