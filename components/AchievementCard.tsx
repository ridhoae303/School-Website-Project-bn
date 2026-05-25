'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animations'
import { Card } from './ui/card'

export interface AchievementCardProps {
  title: string
  description: string
  image: string
  year: number
  category: string
  level?: 'gold' | 'silver' | 'bronze'
}

const levelColors = {
  gold: 'bg-yellow-100 text-yellow-800',
  silver: 'bg-gray-100 text-gray-800',
  bronze: 'bg-orange-100 text-orange-800',
}

export function AchievementCard({
  title,
  description,
  image,
  year,
  category,
  level,
}: AchievementCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <div className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {year}
            </div>
            <div className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>

          {level && (
            <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${levelColors[level]}`}>
              {level.toUpperCase()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
