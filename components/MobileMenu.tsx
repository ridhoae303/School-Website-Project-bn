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

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOut {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .mobile-menu-open {
          animation: slideIn 0.3s ease-out forwards;
        }
        .mobile-menu-closed {
          animation: slideOut 0.3s ease-out forwards;
        }
        .mobile-backdrop-open {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .mobile-backdrop-closed {
          animation: fadeOut 0.3s ease-out forwards;
          pointer-events: none;
        }
      `}</style>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 lg:hidden z-30 mobile-backdrop-open`}
            onClick={onClose}
          />

          {/* Menu */}
          <div
            className={`fixed left-0 top-16 bottom-0 w-80 bg-white border-r border-border lg:hidden z-40 overflow-y-auto mobile-menu-open`}
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
      )}
    </>
  )
}
