import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { NewsCard } from '@/components/NewsCard'
import { IMAGE_PLACEHOLDERS } from '@/lib/constants'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mading Sekolah - SMK PATRIOT 1 BEKASI',
  description: 'Berita dan informasi terbaru dari SMK PATRIOT 1 BEKASI',
}

const allNews = [
  {
    id: '1',
    title: 'Peluncuran Program Magang Industri Tahun 2024',
    excerpt: 'Kami dengan bangga mengumumkan peluncuran program magang industri yang melibatkan kemitraan dengan lebih dari 50 perusahaan terkemuka di Indonesia.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-15',
    category: 'Program',
    author: 'Admin',
  },
  {
    id: '2',
    title: 'Siswa SMK PATRIOT Raih Medali Emas Kompetisi Nasional',
    excerpt: 'Tim robotika siswa berhasil meraih medali emas dalam kompetisi nasional robotika yang diselenggarakan di Jakarta.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-10',
    category: 'Prestasi',
    author: 'Admin',
  },
  {
    id: '3',
    title: 'Pembukaan Laboratorium Teknologi Terbaru',
    excerpt: 'Sekolah telah melengkapi fasilitas dengan laboratorium teknologi terbaru untuk mendukung pembelajaran praktis siswa.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-05',
    category: 'Fasilitas',
    author: 'Admin',
  },
  {
    id: '4',
    title: 'Kunjungan Industri ke Pabrik Manufaktur',
    excerpt: 'Siswa kelas XI mengikuti kunjungan industri ke salah satu pabrik manufaktur terbesar di Bekasi untuk melihat proses produksi nyata.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2023-12-28',
    category: 'Kegiatan',
    author: 'Admin',
  },
  {
    id: '5',
    title: 'Pelatihan Sertifikasi Internasional',
    excerpt: 'Sekolah menyelenggarakan program pelatihan sertifikasi internasional untuk meningkatkan kompetensi siswa di tingkat global.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2023-12-20',
    category: 'Program',
    author: 'Admin',
  },
  {
    id: '6',
    title: 'Gathering Keluarga Besar Sekolah',
    excerpt: 'Seluruh guru, staff, dan perwakilan siswa mengikuti kegiatan gathering tahunan untuk mempererat hubungan dan refleksi bersama.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2023-12-15',
    category: 'Kegiatan',
    author: 'Admin',
  },
]

export default function MadingPage() {
  return (
    <>
      <HeroSection
        title="Mading Digital"
        subtitle="Informasi terbaru dan pengumuman penting dari SMK PATRIOT 1 BEKASI"
      />

      <section className="py-16 bg-background">
        <Container>
          {/* Search & Filter */}
          <div className="flex flex-col gap-4 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="search"
                placeholder="Cari berita..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2">
              {['Semua', 'Program', 'Prestasi', 'Fasilitas', 'Kegiatan'].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    cat === 'Semua'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {allNews.map((news) => (
              <NewsCard key={news.id} {...news} href={`/mading-sekolah/${news.id}`} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button className="px-4 py-2 rounded border border-border hover:bg-secondary/10">Sebelumnya</button>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground">1</button>
            <button className="px-4 py-2 rounded border border-border hover:bg-secondary/10">2</button>
            <button className="px-4 py-2 rounded border border-border hover:bg-secondary/10">3</button>
            <button className="px-4 py-2 rounded border border-border hover:bg-secondary/10">Selanjutnya</button>
          </div>
        </Container>
      </section>
    </>
  )
}
