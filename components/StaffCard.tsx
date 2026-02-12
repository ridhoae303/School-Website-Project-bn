'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animations'
import { Card } from './ui/card'

interface StaffCardProps {
  name: string
  position: string
  department?: string
  image: string
  email?: string
  phone?: string
  bio?: string
}

export function StaffCard({
  name,
  position,
  department,
  image,
  email,
  phone,
  bio,
}: StaffCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
    >
      <Card className="overflow-hidden text-center">
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 text-foreground">
            {name}
          </h3>
          <p className="text-sm font-semibold text-primary mb-1">
            {position}
          </p>
          {department && (
            <p className="text-xs text-muted-foreground mb-3">
              {department}
            </p>
          )}

          {bio && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {bio}
            </p>
          )}

          {/* Contact Info */}
          {(email || phone) && (
            <div className="flex flex-col gap-2 pt-3 border-t">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-xs text-primary hover:underline"
                >
                  {email}
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="text-xs text-primary hover:underline"
                >
                  {phone}
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
