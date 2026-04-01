'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export default function SPMBDaftarPage() {
  const registrationPortalUrl = 'https://spmb.smkpatriot1bekasi.sch.id' // URL portal daftar online

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Daftar Online SPMB</h1>
          <p className="text-xl text-muted-foreground">Daftarkan diri Anda di SMK PATRIOT 1 BEKASI</p>
        </motion.div>

        {/* Tombol Link ke Portal Daftar Online */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-muted p-8 rounded-lg mb-8 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Silakan klik tombol di bawah untuk melanjutkan pendaftaran di portal SPMB kami
          </p>
          <a href={registrationPortalUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full md:w-auto">
              Buka Portal Daftar Online SPMB
            </Button>
          </a>
        </motion.div>

        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Hubungi Kami untuk Bantuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bp. Trisno */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Phone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Bp. Trisno</h3>
                <p className="text-muted-foreground mb-2">Koordinator SPMB</p>
                <a href="tel:+6285691706159" className="text-primary hover:underline font-medium">
                  +62 856-917-06159
                </a>
              </div>
            </div>

            {/* Essy */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                  <Mail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Essy</h3>
                <p className="text-muted-foreground mb-2">Tim Administrasi SPMB</p>
                <a href="mailto:spmb@smkpatriot1bekasi.sch.id" className="text-primary hover:underline font-medium">
                  spmb@smkpatriot1bekasi.sch.id
                </a>
              </div>
            </div>
          </div>
        </motion.div>

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
