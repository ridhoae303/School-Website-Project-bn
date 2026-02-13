'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videoItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Video ${i + 1}`,
  thumbnail: 'https://via.placeholder.com/400x300',
  videoUrl: '#',
}))

export default function GaleriVideoPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-2">Galeri Video</h1>
          <p className="text-xl text-muted-foreground">Video dokumentasi dari SMK PATRIOT 1 BEKASI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-secondary p-4 rounded-full">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-white font-semibold line-clamp-2">{item.title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
