'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const madingTitles = [
  'Hari Guru',
  'Praktek Kejuruan',
  'Kunjungan Industri',
  'LDKS',
  'Peringatan Sumpah Pemuda',
  'Juara LKS',
  'Bakti Sosial',
  'Class Meeting',
  'Ujian Praktik',
  'Workshop Coding',
  'Penerimaan Raport',
  'Perpisahan Kelas XII',
]

const mockMadingItems = madingTitles.map((title, i) => ({
  id: i + 1,
  title,
  image: `https://picsum.photos/300/200?random=${i}`,
  date: new Date(2024, 0, 15 - i).toLocaleDateString('id-ID'),
  category: ['Akademik', 'Prestasi', 'Kegiatan'][i % 3],
}))

export default function MadingPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-2">Mading SMK</h1>
          <p className="text-xl text-muted-foreground">Majalah dinding sekolah kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockMadingItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-muted h-48 mb-4 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    Lihat Detail
                  </Button>
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-secondary">{item.category}</span>
                <h3 className="text-lg font-bold line-clamp-2 mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
