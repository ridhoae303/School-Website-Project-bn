'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

const galeryItems = [
  {
    id: 1,
    image: 'https://via.placeholder.com/400x300',
    title: 'Upacara Bendera',
    description: 'Pelaksanaan upacara bendera rutin di lapangan sekolah dengan seluruh siswa dan guru.'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/400x300',
    title: 'Praktik Kejuruan',
    description: 'Siswa sedang melakukan praktik kejuruan di bengkel dengan pembimbing guru.'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/400x300',
    title: 'Lomba Akademik',
    description: 'Peserta lomba akademik berkompetisi dalam berbagai cabang lomba.'
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/400x300',
    title: 'Wisata Edukatif',
    description: 'Kegiatan wisata edukatif siswa ke lokasi industri untuk mempelajari dunia kerja.'
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/400x300',
    title: 'Kegiatan Ekstrakurikuler',
    description: 'Siswa aktif mengikuti berbagai kegiatan ekstrakurikuler di sekolah.'
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/400x300',
    title: 'Pelatihan Keterampilan',
    description: 'Pelatihan intensif keterampilan praktis untuk meningkatkan kompetensi siswa.'
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/400x300',
    title: 'Seminar & Workshop',
    description: 'Menghadirkan narasumber profesional dari industri untuk berbagi pengalaman.'
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/400x300',
    title: 'Kerja Sama Industri',
    description: 'Kunjungan dan diskusi dengan mitra industri untuk penempatan kerja siswa.'
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/400x300',
    title: 'Acara Sekolah',
    description: 'Berbagai acara besar sekolah yang melibatkan seluruh komunitas pendidikan.'
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/400x300',
    title: 'Sertifikasi Kompetensi',
    description: 'Siswa mengikuti uji sertifikasi kompetensi untuk mendapatkan sertifikat resmi.'
  },
  {
    id: 11,
    image: 'https://via.placeholder.com/400x300',
    title: 'Pembinaan Karakter',
    description: 'Program pembinaan karakter dan kepemimpinan untuk semua siswa.'
  },
  {
    id: 12,
    image: 'https://via.placeholder.com/400x300',
    title: 'Prestasi Siswa',
    description: 'Dokumentasi prestasi dan penghargaan yang diraih siswa dalam berbagai kompetisi.'
  },
]

export default function GaleriPhotoPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galeryItems[0] | null>(null)

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-2">Galeri Foto</h1>
          <p className="text-xl text-muted-foreground">Dokumentasi kegiatan SMK PATRIOT 1 BEKASI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galeryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Title overlay at bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with Description */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl bg-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="w-full aspect-video bg-black overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Info */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">{selectedImage.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
