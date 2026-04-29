'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Download, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

function ImageViewerContent() {
  const searchParams = useSearchParams()
  const imageUrl = searchParams.get('src') || ''
  const title = searchParams.get('title') || 'Image'
  const description = searchParams.get('description') || ''
  const referer = searchParams.get('from') || '/'

  if (!imageUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">No Image Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `${title || 'image'}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={referer}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </Link>

          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              title="Download image"
            >
              <Download size={18} />
              Download
            </button>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium"
              title="Open in new tab"
            >
              <ExternalLink size={18} />
              Open
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Image Container */}
          <div className="bg-muted rounded-lg overflow-hidden flex items-center justify-center min-h-96">
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[600px] object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="space-y-4">
            {title && (
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
              </div>
            )}

            {description && (
              <div>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            )}

            {/* Image Details */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Image URL</p>
                  <a
                    href={imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm break-all"
                  >
                    {imageUrl.length > 50 ? `${imageUrl.substring(0, 50)}...` : imageUrl}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ImageViewer() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="w-96 h-96 bg-muted rounded-lg mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      }
    >
      <ImageViewerContent />
    </Suspense>
  )
}
