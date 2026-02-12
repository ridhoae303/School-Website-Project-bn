'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { SCHOOL_INFO, SITE_CONFIG, NAV_MENU } from '@/lib/constants'
import { Container } from './Container'
import { fadeInVariants } from '@/lib/animations'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-primary text-primary-foreground"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SCHOOL_INFO.name}</h3>
            <p className="text-sm opacity-90 mb-4">
              {SCHOOL_INFO.description}
            </p>
            <p className="text-xs opacity-75">
              Didirikan tahun {SCHOOL_INFO.foundedYear}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {NAV_MENU.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4">Lainnya</h4>
            <ul className="space-y-2">
              {NAV_MENU.slice(5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-secondary">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-secondary">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">
            &copy; {currentYear} {SCHOOL_INFO.name}. Semua hak dilindungi.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {SITE_CONFIG.socialLinks.facebook && (
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {SITE_CONFIG.socialLinks.instagram && (
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {SITE_CONFIG.socialLinks.youtube && (
              <a
                href={SITE_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </motion.footer>
  )
}
