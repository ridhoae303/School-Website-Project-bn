'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const madingItems = [
  { id: '1', title: 'Hari Guru', slug: 'hari-guru', description: 'Perayaan hari guru nasional' },
  { id: '2', title: 'Praktek Kejuruan', slug: 'praktek-kejuruan', description: 'Program praktek di industri' },
  { id: '3', title: 'Ekstrakurikuler', slug: 'ekstrakurikuler', description: 'Kegiatan ekstrakurikuler siswa' },
  { id: '4', title: 'Paskibra SMK', slug: 'paskibra', description: 'Tim paskibra sekolah' },
  { id: '5', title: 'UKS Sekolah', slug: 'uks', description: 'Unit kesehatan sekolah' },
  { id: '6', title: 'Perpustakaan Digital', slug: 'perpustakaan', description: 'Fasilitas perpustakaan' },
  { id: '7', title: 'Laboratorium TKJ', slug: 'lab-tkj', description: 'Laboratorium Teknik Komputer' },
  { id: '8', title: 'Workshop & Seminar', slug: 'workshop', description: 'Program workshop berkala' },
  { id: '9', title: 'Beasiswa Siswa', slug: 'beasiswa', description: 'Program beasiswa' },
  { id: '10', title: 'Kemitraan Industri', slug: 'kemitraan', description: 'Kerjasama dengan industri' },
  { id: '11', title: 'Wisuda Siswa', slug: 'wisuda', description: 'Acara kelulusan siswa' },
  { id: '12', title: 'Prestasi & Penghargaan', slug: 'prestasi', description: 'Pencapaian siswa' },
]

export default function MadingPage() {
  const [selectedItem, setSelectedItem] = useState<typeof madingItems[0] | null>(null)

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Mading SMK</h1>
          <p className="text-lg text-muted-foreground">
            Majalah Dinding Digital - Informasi dan Kegiatan SMK PATRIOT 1 BEKASI
          </p>
        </motion.div>

        {/* Grid of Mading Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {madingItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white border-2 border-border rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <span className="text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {item.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full gap-2 border-primary text-primary hover:bg-primary/10 group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <Link href={`/mading-smk/${item.slug}`}>
                    Selengkapnya
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Preview - Not implemented in this basic version */}
      {/* Users can click "Selengkapnya" to go to individual pages */}
    </div>
  )
}
