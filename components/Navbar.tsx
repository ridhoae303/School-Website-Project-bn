'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SCHOOL_INFO } from '@/lib/constants'
import { Button } from './ui/button'
import { MobileMenu } from './MobileMenu'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '#', submenu: [{ label: 'Visi dan Misi', href: '/visi-misi' }] },
  { label: 'Mading SMK', href: '/mading' },
  { label: 'Jurusan', href: '#', submenu: [
    { label: 'TKJ (Teknik Komputer & Jaringan)', href: '/jurusan/tkj' },
    { label: 'TKR (Teknik Kendaraan Ringan Otomotif)', href: '/jurusan/tkr' },
    { label: 'TP (Teknik Permesinan)', href: '/jurusan/tp' },
    { label: 'TITL (Teknik Instalasi Tenaga Listrik)', href: '/jurusan/titl' },
  ]},
  { label: 'Direktori', href: '#', submenu: [
    { label: 'Daftar Online PPDB', href: '/ppdb/daftar' },
    { label: 'Cetak Formulir', href: '/cetak-formulir' },
    { label: 'Download Formulir PPDB', href: '/download-formulir' },
  ]},
  { label: 'Galeri', href: '#', submenu: [
    { label: 'Galeri Foto', href: '/galeri/foto' },
    { label: 'Galeri Video', href: '/galeri/video' },
  ]},
  { label: 'Ujian Online', href: '/ujian-online' },
  { label: 'Hubungi Kami', href: '/hubungi' },
  { label: 'Google Maps 360', href: '/maps' },
  { label: 'Developer', href: '/developer' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-40 transition-all duration-300 bg-secondary text-white shadow-md`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-secondary font-bold text-lg">
                P
              </div>
              <span className="text-white font-bold">SMK PATRIOT 1</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0 flex-nowrap">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  <Link href={item.href || '#'}>
                    <button 
                      className="text-sm gap-1 text-white hover:bg-white/20 px-3 py-2 flex items-center rounded transition-colors"
                    >
                      {item.label}
                      {item.submenu && <ChevronDown size={14} className="ml-1" />}
                    </button>
                  </Link>
                  
                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-0 w-56 bg-white text-foreground border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:bg-white/20 p-2 rounded transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  )
}
