'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ViewableImageProps {
  src: string
  alt: string
  title?: string
  description?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'scale-down'
  objectPosition?: string
}

export function ViewableImage({
  src,
  alt,
  title = alt,
  description = '',
  width = 800,
  height = 600,
  className = '',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
}: ViewableImageProps) {
  const pathname = usePathname()

  // Create viewer URL with encoded parameters
  const viewerUrl = new URL('/viewer', typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
  viewerUrl.searchParams.set('src', src)
  viewerUrl.searchParams.set('title', title)
  viewerUrl.searchParams.set('description', description)
  viewerUrl.searchParams.set('from', pathname)

  return (
    <Link href={viewerUrl.toString()} className="block group cursor-pointer">
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`w-full h-full object-${objectFit} transition-transform duration-300 group-hover:scale-105`}
          style={{
            objectFit: objectFit,
            objectPosition: objectPosition,
          }}
          onContextMenu={(e) => {
            // Allow right-click menu to function
            e.stopPropagation()
          }}
        />
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium px-3 py-1 bg-black/50 rounded">
            Click to view
          </div>
        </div>
      </div>
    </Link>
  )
}
