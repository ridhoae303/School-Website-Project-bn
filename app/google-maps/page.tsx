'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function GoogleMapsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Google Maps 360</h1>
          <p className="text-lg text-muted-foreground">
            Jelajahi kampus SMK PATRIOT 1 BEKASI secara virtual
          </p>
        </motion.div>

        {/* Maps Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg h-96 md:h-screen-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1770887410025!6m8!1m7!1sCAoSHENJQUJJaERLS1lVNjRRMTFwVHF4Qk1NWFlfRFU.!2m2!1d-6.219562875218638!2d106.9776017198212!3f0!4f10!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '600px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Tentang Tampilan 360 Ini</h2>
          <p className="text-foreground mb-4">
            Google Maps Street View memungkinkan Anda untuk menjelajahi kampus SMK PATRIOT 1 BEKASI 
            dari berbagai sudut pandang. Anda dapat berputar, zoom in/out, dan melihat lokasi sekolah 
            secara virtual.
          </p>
          <p className="text-muted-foreground">
            Gunakan mouse atau tombol navigasi untuk menjelajahi area sekitar sekolah kami.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
