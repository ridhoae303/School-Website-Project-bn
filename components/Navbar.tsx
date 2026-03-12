'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

// Primary nav items (always visible on desktop)
const PRIMARY_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Jurusan', href: '#', submenu: [
    { label: 'TKJ', href: '/jurusan/tkj' },
    { label: 'TKR', href: '/jurusan/tkr' },
    { label: 'TP', href: '/jurusan/tp' },
    { label: 'TITL', href: '/jurusan/titl' },
  ]},
  { label: 'Mading', href: '/mading' },
  { label: 'SPMB', href: '#', submenu: [
    { label: 'Daftar Online', href: '/ppdb/daftar' },
    { label: 'Cetak Formulir', href: '/cetak-formulir' },
    { label: 'Download Formulir', href: '/download-formulir' },
  ]},
  { label: 'Ujian Online', href: '/ujian-online' },
]

// Secondary nav items (shown in "More" dropdown on desktop)
const SECONDARY_NAV_ITEMS = [
  { label: 'Profile', href: '#', submenu: [{ label: 'Visi dan Misi', href: '/visi-misi' }] },
  { label: 'Galeri', href: '#', submenu: [
    { label: 'Foto', href: '/galeri/foto' },
    { label: 'Video', href: '/galeri/video' },
  ]},
  { label: 'Hubungi Kami', href: '/hubungi' },
  { label: 'Google Maps 360', href: '/maps' },
  { label: 'Developer', href: '/developer' },
]

// All items for mobile menu
const ALL_NAV_ITEMS = [...PRIMARY_NAV_ITEMS, ...SECONDARY_NAV_ITEMS]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false)

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="sticky top-0 z-40 bg-secondary text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity flex-shrink-0">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-secondary font-bold">
                P
              </div>
              <span className="text-white font-bold hidden sm:inline">SMK PATRIOT 1</span>
            </Link>

            {/* Desktop Navigation - Primary Items */}
            <div className="hidden lg:flex items-center gap-1 flex-1 mx-6 overflow-hidden">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  <Link href={item.href || '#'}>
                    <button 
                      className="text-sm text-white hover:bg-white/20 px-3 py-2 flex items-center rounded transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown size={14} className="ml-1" />}
                    </button>
                  </Link>
                  
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-0 bg-white text-foreground border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-max">
                      {item.submenu.map((subitem, idx) => (
                        <Link key={subitem.href} href={subitem.href}>
                          <div className={`px-4 py-2.5 hover:bg-muted text-sm text-foreground transition-colors ${
                            idx === 0 ? 'rounded-t-lg' : ''
                          } ${idx === item.submenu!.length - 1 ? 'rounded-b-lg' : ''}`}>
                            {subitem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Navigation - More Dropdown */}
            <div className="hidden lg:block relative" onMouseLeave={() => setMoreDropdownOpen(false)}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="text-sm text-white hover:bg-white/20 px-3 py-2 flex items-center rounded transition-colors"
              >
                Lainnya
                <ChevronDown size={14} className={`ml-1 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {moreDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-white text-foreground border border-border rounded-lg shadow-lg z-50">
                  {SECONDARY_NAV_ITEMS.map((item, idx) => (
                    <div key={item.label}>
                      {item.submenu ? (
                        <div className="relative group">
                          <button className="w-full text-left px-4 py-2.5 hover:bg-muted text-sm transition-colors flex items-center justify-between">
                            {item.label}
                            <ChevronDown size={14} />
                          </button>
                          <div className="hidden group-hover:block absolute left-full top-0 ml-1 bg-white border border-border rounded-lg shadow-lg min-w-max">
                            {item.submenu.map((subitem) => (
                              <Link key={subitem.href} href={subitem.href} onClick={() => setMoreDropdownOpen(false)}>
                                <div className="px-4 py-2.5 hover:bg-muted text-sm text-foreground transition-colors whitespace-nowrap">
                                  {subitem.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link href={item.href} onClick={() => setMoreDropdownOpen(false)}>
                          <div className="px-4 py-2.5 hover:bg-muted text-sm text-foreground transition-colors">
                            {item.label}
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white hover:bg-white/20 p-2 rounded transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={ALL_NAV_ITEMS}
      />
    </>
  )
}
