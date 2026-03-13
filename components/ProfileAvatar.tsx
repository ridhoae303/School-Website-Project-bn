import React from 'react'
import Image from 'next/image'

interface ProfileAvatarProps {
  name: string
  imageSrc?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isExpanded?: boolean
}

export function ProfileAvatar({ 
  name, 
  imageSrc, 
  size = 'lg',
  isExpanded = false 
}: ProfileAvatarProps) {
  const sizeMap = {
    sm: { width: 64, height: 64, textSize: 'text-2xl' },
    md: { width: 96, height: 96, textSize: 'text-3xl' },
    lg: { width: 192, height: 192, textSize: 'text-6xl' },
    xl: { width: 256, height: 256, textSize: 'text-7xl' },
  }

  const config = sizeMap[size]
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div 
      className={`relative rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform duration-300 ${
        isExpanded ? 'scale-110' : ''
      }`}
      style={{
        width: config.width,
        height: config.height,
      }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={name}
          width={config.width}
          height={config.height}
          className="w-full h-full object-cover"
          priority={isExpanded}
        />
      ) : (
        <div className="w-full h-full bg-white flex items-center justify-center">
          <span className={`${config.textSize} font-bold text-primary`}>
            {initials}
          </span>
        </div>
      )}
    </div>
  )
}
