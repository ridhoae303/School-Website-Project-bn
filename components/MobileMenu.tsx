'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

interface NavItem {
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
}

export function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 lg:hidden z-30"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className="fixed left-0 top-16 bottom-0 w-80 bg-white border-r border-border lg:hidden z-40 overflow-y-auto transition-transform duration-300"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
            <div className="p-4 space-y-2">
              {items.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${expandedMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedMenu === item.label && (
                        <div className="bg-muted rounded-lg ml-4 mt-1 space-y-1 overflow-hidden transition-all">
                          {item.submenu.map((subitem) => (
                            <Link key={subitem.href} href={subitem.href} onClick={onClose}>
                              <div className="px-4 py-2 text-sm hover:bg-background rounded-lg transition-colors">
                                {subitem.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} onClick={onClose}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-base"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
      </div>
    </>

  )
}
