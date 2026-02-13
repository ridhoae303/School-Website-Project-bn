'use client'

import { motion } from 'framer-motion'

export default function MapsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Google Maps 360</h1>
          <p className="text-xl text-muted-foreground">Jelajahi kampus kami dengan Street View</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1770887410025!6m8!1m7!1sCAoSHENJQUJJaERLS1lVNjRRMTFwVHF4Qk1NWFlfRFU.!2m2!1d-6.219562875218638!2d106.9776017198212!3f0!4f10!5f0.7820865974627469"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-muted p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Lokasi Kami</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Jl. Kalibaru Timur, Kec. Medan Satria Kota Bekasi
          </p>
          <p className="text-muted-foreground">
            Gunakan Street View di atas untuk menjelajahi kampus kami secara virtual. Anda dapat melihat fasilitas sekolah, ruang kelas, workshop, dan area lainnya.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
