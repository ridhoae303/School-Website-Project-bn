import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { ImageSlider } from '@/components/ImageSlider'
import { NewsCard } from '@/components/NewsCard'
import { Button } from '@/components/ui/button'
import { SCHOOL_INFO, IMAGE_PLACEHOLDERS } from '@/lib/constants'
import HomeStatsSection from '@/components/sections/HomeStatsSection'
import AnnouncementSection from '@/components/sections/AnnouncementSection'

export const metadata: Metadata = {
  title: `${SCHOOL_INFO.name} - Beranda`,
  description: 'Selamat datang di website resmi SMK PATRIOT 1 BEKASI',
}

const mockSliderImages = [
  {
    src: IMAGE_PLACEHOLDERS.hero,
    alt: 'Campus image 1',
    title: 'Selamat Datang di SMK PATRIOT 1 BEKASI',
  },
  {
    src: IMAGE_PLACEHOLDERS.hero,
    alt: 'Campus image 2',
    title: 'Pendidikan Berkualitas Untuk Masa Depan Cerah',
  },
  {
    src: IMAGE_PLACEHOLDERS.hero,
    alt: 'Campus image 3',
    title: 'Bermitra Dengan Industri Terkemuka',
  },
]

const mockNews = [
  {
    id: '1',
    title: 'Peluncuran Program Magang Industri Tahun 2024',
    excerpt:
      'Kami dengan bangga mengumumkan peluncuran program magang industri yang melibatkan kemitraan dengan lebih dari 50 perusahaan terkemuka di Indonesia.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-15',
    category: 'Program',
    author: 'Admin',
  },
  {
    id: '2',
    title: 'Siswa SMK PATRIOT Raih Medali Emas Kompetisi Nasional',
    excerpt:
      'Tim robotika siswa berhasil meraih medali emas dalam kompetisi nasional robotika yang diselenggarakan di Jakarta.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-10',
    category: 'Prestasi',
    author: 'Admin',
  },
  {
    id: '3',
    title: 'Pembukaan Laboratorium Teknologi Terbaru',
    excerpt:
      'Sekolah telah melengkapi fasilitas dengan laboratorium teknologi terbaru untuk mendukung pembelajaran praktis siswa.',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-05',
    category: 'Fasilitas',
    author: 'Admin',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Selamat Datang di SMK PATRIOT 1 BEKASI"
        subtitle="Mendidik, Memberdayakan, dan Membangun Masa Depan Generasi Indonesia"
        cta={{
          text: 'Daftar Sekarang',
          href: '/panduan-ppdb',
        }}
      />

      {/* Image Slider */}
      <section className="py-12 bg-background">
        <Container>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Galeri Sekolah</h2>
            <p className="text-muted-foreground">Dokumentasi kegiatan dan fasilitas sekolah kami</p>
          </div>
          <ImageSlider images={mockSliderImages} autoplay autoplayInterval={6000} />
        </Container>
      </section>

      {/* Stats Section */}
      <HomeStatsSection />

      {/* Announcement Section */}
      <AnnouncementSection />

      {/* Latest News */}
      <section className="py-16 bg-background">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Berita Terbaru</h2>
            <p className="text-muted-foreground">
              Informasi terkini seputar kegiatan dan pengembangan SMK PATRIOT 1 BEKASI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockNews.map((news) => (
              <NewsCard key={news.id} {...news} href={`/mading-sekolah/${news.id}`} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/mading-sekolah">Lihat Semua Berita</a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Tertarik Bergabung Dengan Kami?</h2>
            <p className="mb-8 text-lg opacity-95">
              SMK PATRIOT 1 BEKASI menawarkan pendidikan berkualitas dengan fasilitas modern dan pengajar berpengalaman.
              Daftarkan diri Anda sekarang untuk menjadi bagian dari keluarga besar kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
                asChild
              >
                <a href="/panduan-ppdb">Panduan PPDB</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/hubungi-kami">Hubungi Kami</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
