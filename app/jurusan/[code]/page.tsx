'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const jurusanData: Record<string, any> = {
  tkj: {
    name: 'TKJ (Teknik Komputer & Jaringan)',
    description: 'Program keahlian yang mempersiapkan siswa untuk bekerja di bidang teknologi informasi dan jaringan komputer.',
    duration: '3 tahun',
    subjects: ['Sistem Operasi', 'Networking', 'Server', 'Cybersecurity', 'Web Development'],
    facilities: ['Lab Komputer', 'Lab Jaringan', 'Server Room'],
  },
  tkr: {
    name: 'TKR (Teknik Kendaraan Ringan Otomotif)',
    description: 'Program keahlian yang melatih siswa menjadi teknisi otomotif profesional.',
    duration: '3 tahun',
    subjects: ['Mesin Kendaraan', 'Sistem Kelistrikan', 'Transmisi', 'Suspensi', 'Perbaikan Kendaraan'],
    facilities: ['Workshop Bengkel', 'Alat Diagnostik', 'Lift Hidrolik'],
  },
  tp: {
    name: 'TP (Teknik Permesinan)',
    description: 'Program keahlian yang mengajarkan teknik produksi dan pengoperasian mesin industri.',
    duration: '3 tahun',
    subjects: ['Teknik Las', 'CNC', 'Teknik Pembentukan', 'Mekanik Mesin', 'Maintenance'],
    facilities: ['Workshop Permesinan', 'Mesin CNC', 'Mesin Las'],
  },
  titl: {
    name: 'TITL (Teknik Instalasi Tenaga Listrik)',
    description: 'Program keahlian yang mempersiapkan siswa menjadi teknisi listrik profesional.',
    duration: '3 tahun',
    subjects: ['Instalasi Listrik', 'Sistem Distribusi', 'Pemeliharaan Kelistrikan', 'Safety', 'Panel Listrik'],
    facilities: ['Lab Listrik', 'Panel Training', 'Area Praktik Instalasi'],
  },
}

export default function JurusanDetailPage({ params }: { params: { code: string } }) {
  const data = jurusanData[params.code] || jurusanData.tkj
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = Array(4).fill('https://via.placeholder.com/600x400')

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">{data.name}</h1>
          <p className="text-xl text-muted-foreground">{data.description}</p>
        </motion.div>

        {/* Image Slideshow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative bg-muted rounded-lg overflow-hidden h-96 mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              />
            </AnimatePresence>
            
            <button
              onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentImageIndex(Math.min(images.length - 1, currentImageIndex + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  i === currentImageIndex ? 'border-primary' : 'border-border'
                }`}
              >
                <img src={images[i]} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Durasi</h3>
            <p className="text-lg">{data.duration}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Mata Pelajaran</h3>
            <p className="text-sm">{data.subjects.length} Mata Pelajaran</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary/60 to-secondary/60 text-white p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2">Fasilitas</h3>
            <p className="text-sm">{data.facilities.length} Fasilitas Lengkap</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mata Pelajaran */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Mata Pelajaran</h2>
            <div className="space-y-3">
              {data.subjects.map((subject: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-lg">{subject}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fasilitas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Fasilitas</h2>
            <div className="space-y-3">
              {data.facilities.map((facility: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 bg-secondary rounded-full flex-shrink-0" />
                  <span className="text-lg">{facility}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Tertarik Mendaftar?</h2>
          <Button size="lg" className="px-8">
            Daftar Sekarang
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
