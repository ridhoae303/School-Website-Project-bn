'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Twitter } from 'lucide-react'
import { SCHOOL_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/smkpatriot1bekasi', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/smkpatriot1', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/smkpatriot1bekasi', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@smkpatriot1bekasi', label: 'YouTube' },
  ]

  // Google Maps link
  const mapsLink = 'https://maps.google.com/?q=Jl.+Kalibaru+Timur,+Kec.+Medan+Satria+Kota+Bekasi'

  return (
    <motion.footer
      className="bg-primary text-primary-foreground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Motto Section */}
        <motion.div
          className="mb-12 text-center pb-8 border-b border-primary-foreground/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold italic">
            {SCHOOL_INFO.motto}
          </p>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-6">{SCHOOL_INFO.name}</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline hover:text-secondary transition-colors">
                  {SCHOOL_INFO.address}
                </a>
              </div>
              <div className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="text-sm hover:underline">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="text-sm hover:underline">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={SCHOOL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-6">Navigasi</h3>
            <div className="space-y-3">
              <Link href="/" className="block py-2 px-3 rounded text-sm hover:bg-primary-foreground/10 hover:text-secondary transition-all cursor-pointer font-medium">
                → Beranda
              </Link>
              <Link href="/mading" className="block py-2 px-3 rounded text-sm hover:bg-primary-foreground/10 hover:text-secondary transition-all cursor-pointer font-medium">
                → Mading SMK
              </Link>
              <Link href="/jurusan/tkj" className="block py-2 px-3 rounded text-sm hover:bg-primary-foreground/10 hover:text-secondary transition-all cursor-pointer font-medium">
                → Jurusan
              </Link>
              <Link href="/galeri/foto" className="block py-2 px-3 rounded text-sm hover:bg-primary-foreground/10 hover:text-secondary transition-all cursor-pointer font-medium">
                → Galeri
              </Link>
              <Link href="/developer" className="block py-2 px-3 rounded text-sm hover:bg-primary-foreground/10 hover:text-secondary transition-all cursor-pointer font-medium">
                → Developer
              </Link>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-6">Ikuti Kami</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 hover:bg-primary-foreground/40 rounded-lg flex items-center justify-center transition-colors"
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-smfont-semibold">Created by ridhoae303
              </p>
              <p
                className="mb-2.5">Note from <strong>ridhoae303</strong>:
              </p>
              <p className="mb-2">I’m not an otaku, but I like the anime One Piece and the game Blue Archive.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-primary-foreground/20 pt-8 flex flex-col text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-2">
            Created by ridhoae303 © {currentYear} by SMK PATRIOT 1 BEKASI All rights reserved.
          </p>
          <p className="text-xs">
            Powered by <strong>ridhoae303</strong>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}