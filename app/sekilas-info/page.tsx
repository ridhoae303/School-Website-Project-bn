'use client'

import { motion } from 'framer-motion'
import { SCHOOL_INFO } from '@/lib/constants'

export default function SekilasInfoPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Sekilas Info</h1>
          <p className="text-lg text-muted-foreground">
            Informasi Penting tentang SMK PATRIOT 1 BEKASI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Identitas Sekolah */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Identitas Sekolah</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Nama Sekolah</p>
                <p className="font-bold text-lg">{SCHOOL_INFO.name}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">NSS/NIS</p>
                <p className="font-semibold">401051709001 / 110106</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Status</p>
                <p className="font-semibold">Sekolah Menengah Kejuruan</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Akreditasi</p>
                <p className="font-semibold">A</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Tahun Berdiri</p>
                <p className="font-semibold">{SCHOOL_INFO.foundedYear}</p>
              </div>
            </div>
          </motion.div>

          {/* Kontak & Lokasi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Kontak & Lokasi</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Alamat</p>
                <p className="font-semibold">{SCHOOL_INFO.address}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Telepon</p>
                <p className="font-semibold">{SCHOOL_INFO.phone}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p className="font-semibold break-all">{SCHOOL_INFO.email}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Website</p>
                <p className="font-semibold">{SCHOOL_INFO.website}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Motto Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-muted rounded-lg p-8 text-center"
        >
          <p className="text-lg font-bold text-primary mb-4">Motto Sekolah</p>
          <p className="text-2xl italic font-semibold text-foreground">
            "{SCHOOL_INFO.motto}"
          </p>
        </motion.div>

        {/* Program & Layanan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Program & Layanan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Program Keahlian',
                items: ['TKJ (Teknik Komputer & Jaringan)', 'TKR (Teknik Kendaraan Ringan)', 'TP (Teknik Permesinan)', 'TITL (Teknik Instalasi Tenaga Listrik)']
              },
              {
                title: 'Fasilitas Penunjang',
                items: ['Laboratorium Komputer', 'Workshop Otomotif', 'Lab Listrik', 'Perpustakaan Digital', 'Aula Serba Guna', 'Kantin']
              },
              {
                title: 'Program Pengembangan',
                items: ['Magang Industri', 'Kelas Internasional', 'Beasiswa', 'Ekstrakurikuler', 'Bimbingan Akademik']
              },
              {
                title: 'Sertifikasi',
                items: ['Sertifikat Kompetensi', 'BNSP (Badan Nasional Sertifikasi Profesi)', 'Sertifikat TOEFL', 'Sertifikat Keterampilan']
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-border rounded-lg p-6"
              >
                <h3 className="font-bold text-lg text-primary mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-secondary font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
