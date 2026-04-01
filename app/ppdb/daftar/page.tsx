'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle } from 'lucide-react'

export default function SPMBDaftarPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Daftar Online SPMB</h1>
          <p className="text-xl text-muted-foreground">Daftarkan diri Anda di SMK PATRIOT 1 BEKASI</p>
        </motion.div>

        {/* Contact Cards - Hubungi Kami Style */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Hubungi Kami untuk Daftar</h2>
          
          {/* Warning Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-8 text-sm text-muted-foreground italic"
          >
            <p>Kalau nomor pertama tidak aktif, silahkan hubungi nomor 2</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bp. Trisno */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
            >
              <Phone size={32} className="mb-4" />
              <h3 className="font-bold text-xl mb-3">Bp. Trisno</h3>
              <p className="mb-4">
                <span className="font-semibold">Koordinator SPMB</span>
              </p>
              <div className="space-y-3">
                <a href="tel:+6285691706159" className="block text-lg font-medium hover:underline">
                  +62 856-917-06159
                </a>
                <a href="https://wa.me/6285691706159" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Essy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg"
            >
              <Phone size={32} className="mb-4" />
              <h3 className="font-bold text-xl mb-3">Essy</h3>
              <p className="mb-4">
                <span className="font-semibold">Tim Administrasi SPMB</span>
              </p>
              <div className="space-y-3">
                <p className="text-lg font-medium">
                  +62 856-917-061XX
                </p>
                <a href="https://wa.me/62856917061XX" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Informasi Penting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-2 border-primary/20 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Informasi Penting</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Pendaftaran SPMB dibuka setiap tahun pada bulan Juni</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Calon siswa harus memiliki Ijazah SMP atau yang sederajat</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Verifikasi data dilakukan dalam 3 hari kerja</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Pengumuman hasil seleksi akan diinformasikan melalui email dan SMS</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Hubungi Bp. Trisno atau Essy untuk bantuan teknis atau pertanyaan</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
