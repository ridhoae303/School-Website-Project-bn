'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

interface SlideImage {
  src: string
  alt: string
  title?: string
}

interface RobustSliderProps {
  images: SlideImage[]
  autoplay?: boolean
  autoplayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  onImageClick?: (index: number) => void
}

export function RobustSlider({
  images,
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  onImageClick,
}: RobustSliderProps) {
  const [state, setState] = useState({ index: 0, direction: 1 })
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  // Safe state update function that combines index and direction
  const updateSlide = useCallback((newIndex: number, newDirection: number) => {
    setState({ index: newIndex, direction: newDirection })
  }, [])

  useEffect(() => {
    if (!autoplay || images.length === 0) return

    autoplayRef.current = setInterval(() => {
      setState((prev) => ({
        index: (prev.index + 1) % images.length,
        direction: 1,
      }))
    }, autoplayInterval)

    return () => clearInterval(autoplayRef.current)
  }, [autoplay, autoplayInterval, images.length])

  const handlePrevious = useCallback(() => {
    setState((prev) => ({
      index: (prev.index - 1 + images.length) % images.length,
      direction: -1,
    }))
  }, [images.length])

  const handleNext = useCallback(() => {
    setState((prev) => ({
      index: (prev.index + 1) % images.length,
      direction: 1,
    }))
  }, [images.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = useCallback(() => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const threshold = 50

    if (distance > threshold) {
      handleNext()
    } else if (distance < -threshold) {
      handlePrevious()
    }
  }, [touchStart, touchEnd, handleNext, handlePrevious])

  const goToSlide = useCallback(
    (index: number) => {
      setState((prev) => ({
        index,
        direction: index > prev.index ? 1 : -1,
      }))
    },
    []
  )

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
        No images
      </div>
    )
  }

  const currentImage = images[state.index]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 bg-muted rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={state.index}
          initial={{ opacity: 0, x: state.direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: state.direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => onImageClick?.(state.index)}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover select-none"
            draggable={false}
          />
          {currentImage.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold text-lg">
                {currentImage.title}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white transition-colors"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === state.index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-medium">
        {state.index + 1} / {images.length}
      </div>
    </div>
  )
}
