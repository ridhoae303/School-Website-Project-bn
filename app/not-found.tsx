'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-foreground mb-2">Halaman Tidak Ditemukan</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Kembali ke Beranda
              </Button>
            </Link>
            <Link href="/hubungi">
              <Button size="lg" variant="outline">
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="inline-block bg-muted rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Navigasi Cepat:</p>
            <div className="space-y-1 text-sm">
              <Link href="/mading" className="block text-primary hover:underline">
                → Mading SMK
              </Link>
              <Link href="/jurusan/tkj" className="block text-primary hover:underline">
                → Lihat Jurusan
              </Link>
              <Link href="/ujian-online" className="block text-primary hover:underline">
                → Ujian Online
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
