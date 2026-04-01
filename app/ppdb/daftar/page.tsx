'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export default function SPMBDaftarPage() {
  const registrationPortalUrl = 'https://spmb.smkpatriot1bekasi.sch.id' // URL portal daftar online

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

        {/* Contact Cards - Hubungi Kami Style */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Hubungi Kami untuk Bantuan</h2>
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
              <p className="mb-3">
                <span className="font-semibold">Koordinator SPMB</span>
              </p>
              <a href="tel:+6285691706159" className="text-lg font-medium hover:underline">
                +62 856-917-06159
              </a>
            </motion.div>

            {/* Essy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg"
            >
              <Mail size={32} className="mb-4" />
              <h3 className="font-bold text-xl mb-3">Essy</h3>
              <p className="mb-3">
                <span className="font-semibold">Tim Administrasi SPMB</span>
              </p>
              <a href="mailto:spmb@smkpatriot1bekasi.sch.id" className="text-lg font-medium hover:underline">
                spmb@smkpatriot1bekasi.sch.id
              </a>
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
