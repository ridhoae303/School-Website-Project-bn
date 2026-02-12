'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animations'
import { Card } from './ui/card'

interface NewsCardProps {
  title: string
  excerpt: string
  image: string
  date: string
  category?: string
  href: string
  author?: string
}

export function NewsCard({
  title,
  excerpt,
  image,
  date,
  category,
  href,
  author,
}: NewsCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
    >
      <Card className="overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
        <a href={href} className="flex flex-col h-full">
          {/* Image */}
          <div className="relative w-full h-48 overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {category && (
              <div className="absolute top-3 right-3 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {category}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-bold text-lg mb-2 line-clamp-2 text-foreground hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
              {excerpt}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <time dateTime={date}>{new Date(date).toLocaleDateString('id-ID')}</time>
              {author && <span>{author}</span>}
            </div>
          </div>
        </a>
      </Card>
    </motion.div>
  )
}
