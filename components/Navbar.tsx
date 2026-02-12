'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SCHOOL_INFO } from '@/lib/constants'
import { Button } from './ui/button'
import { MobileMenu } from './MobileMenu'

const NAV_ITEMS = [
  { label: 'Profile', href: '#', submenu: [{ label: 'Visi dan Misi', href: '/profile/visi-misi' }] },
  { label: 'Mading SMK', href: '/mading-smk' },
  { label: 'Jurusan', href: '#', submenu: [
    { label: 'TKJ (Teknik Komputer & Jaringan)', href: '/jurusan/tkj' },
    { label: 'TKR (Teknik Kendaraan Ringan Otomotif)', href: '/jurusan/tkr' },
    { label: 'TP (Teknik Permesinan)', href: '/jurusan/tp' },
    { label: 'TITL (Teknik Instalasi Tenaga Listrik)', href: '/jurusan/titl' },
  ]},
  { label: 'Direktori', href: '#', submenu: [
    { label: 'Daftar Online PPDB', href: '/direktori/ppdb-online' },
    { label: 'Cetak Formulir', href: '/direktori/cetak-formulir' },
    { label: 'Download Formulir PPDB', href: '/direktori/download-formulir' },
  ]},
  { label: 'Galeri', href: '#', submenu: [
    { label: 'Galeri Foto', href: '/galeri/foto' },
    { label: 'Galeri Video', href: '/galeri/video' },
  ]},
  { label: 'Ujian Online', href: '/ujian-online' },
  { label: 'Google Maps 360', href: '/google-maps' },
  { label: 'Hubungi Kami', href: '/hubungi-kami' },
  { label: 'Developer', href: '/developer' },
]

function DesktopMenu() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <div className="hidden lg:flex items-center gap-1">
      {NAV_ITEMS.map((item) => (
        <div key={item.label} className="relative group">
          <Link href={item.href || '#'}>
            <Button variant="ghost" className="text-sm gap-1">
              {item.label}
              {item.submenu && <ChevronDown size={16} />}
            </Button>
          </Link>
          
          {item.submenu && (
            <motion.div
              className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {item.submenu.map((subitem) => (
                <Link key={subitem.href} href={subitem.href}>
                  <div className="px-4 py-2 hover:bg-muted text-sm first:rounded-t-lg last:rounded-b-lg">
                    {subitem.label}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur border-b border-border shadow-md'
            : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="text-primary font-bold">SMK PATRIOT 1</span>
            </Link>

            {/* Desktop Navigation */}
            <DesktopMenu />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
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
