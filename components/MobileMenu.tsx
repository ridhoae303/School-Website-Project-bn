'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_MENU } from '@/lib/constants'
import { mobileMenuVariants, backdropVariants } from '@/lib/animations'
import { Button } from './ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 lg:hidden z-30"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-border lg:hidden z-40 overflow-y-auto"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="p-4 space-y-2">
              {NAV_MENU.map((item) => (
                <Link key={item.href} href={item.href} onClick={onClose}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-base"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}

              <div className="pt-4 border-t">
                <Link href="/panduan-ppdb" onClick={onClose}>
                  <Button className="w-full">
                    Daftar PPDB
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
