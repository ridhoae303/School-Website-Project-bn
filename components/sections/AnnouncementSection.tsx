'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { Bell, Clock } from 'lucide-react'
import { slideInLeftVariants, slideInRightVariants } from '@/lib/animations'

const announcements = [
  {
    id: 1,
    title: 'Pembukaan Pendaftaran PPDB 2024/2025',
    date: 'Mulai 1 Juni 2024',
    type: 'important',
    content: 'Pendaftaran peserta didik baru untuk tahun ajaran 2024/2025 sudah dibuka. Silahkan kunjungi halaman PPDB untuk informasi lebih lanjut.',
  },
  {
    id: 2,
    title: 'Pelaksanaan UAS Semester Genap',
    date: '10-25 Juni 2024',
    type: 'normal',
    content: 'Ujian Akhir Semester Genap akan dilaksanakan sesuai jadwal yang telah ditentukan. Persiapkan diri sebaik mungkin.',
  },
  {
    id: 3,
    title: 'Libur Akhir Tahun Ajaran',
    date: '26 Juni - 16 Juli 2024',
    type: 'normal',
    content: 'Libur akhir tahun ajaran 2023/2024. Kegiatan pembelajaran akan dimulai kembali pada 17 Juli 2024.',
  },
]

export default function AnnouncementSection() {
  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Info */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Pengumuman Terbaru</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Ikuti terus pengumuman penting dari sekolah agar tidak ketinggalan informasi tentang kegiatan dan acara penting di SMK PATRIOT 1 BEKASI.
            </p>
            <a
              href="/mading-sekolah"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Lihat semua pengumuman
              <span>→</span>
            </a>
          </motion.div>

          {/* Right Side - Announcements List */}
          <motion.div
            className="space-y-4"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {announcements.map((announcement) => (
              <Card
                key={announcement.id}
                className={`p-4 border-l-4 ${
                  announcement.type === 'important'
                    ? 'border-l-red-500 bg-red-50/50'
                    : 'border-l-primary'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">
                      {announcement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {announcement.date}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
