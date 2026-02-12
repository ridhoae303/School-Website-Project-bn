'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { heroTitleVariants, heroSubtitleVariants, heroButtonVariants } from '@/lib/animations'
import { Button } from './ui/button'

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  backgroundColor?: string
  cta?: {
    text: string
    href: string
  }
  children?: React.ReactNode
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'from-primary to-primary/80',
  cta,
  children,
}: HeroSectionProps) {
  return (
    <div
      className={`relative w-full min-h-[500px] flex items-center justify-center overflow-hidden`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${backgroundColor} opacity-90`}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-20">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance"
          variants={heroTitleVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-95"
            variants={heroSubtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            variants={heroButtonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
              asChild
            >
              <a href={cta.href}>{cta.text}</a>
            </Button>
          </motion.div>
        )}

        {children}
      </div>
    </div>
  )
}
