import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { AchievementCard } from '@/components/AchievementCard'
import { IMAGE_PLACEHOLDERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Prestasi - SMK PATRIOT 1 BEKASI',
  description: 'Penghargaan dan prestasi siswa SMK PATRIOT 1 BEKASI',
}

const achievements = [
  {
    title: 'Juara 1 Kompetisi Robotika Nasional',
    description: 'Tim robotika SMK PATRIOT meraih medali emas di ajang kompetisi robotika tingkat nasional',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2024,
    category: 'Robotika',
    level: 'gold',
  },
  {
    title: 'Penghargaan Sekolah Adiwiyata',
    description: 'Pengakuan atas komitmen sekolah terhadap lingkungan dan pembangunan berkelanjutan',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2024,
    category: 'Lingkungan',
    level: 'gold',
  },
  {
    title: 'Medali Perak Kompetisi Programing',
    description: 'Peserta didik berhasil meraih medali perak dalam kompetisi programming nasional',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2023,
    category: 'Informatika',
    level: 'silver',
  },
  {
    title: 'Juara Karate Tingkat Provinsi',
    description: 'Atlet karate dari sekolah kami meraih juara dalam turnamen tingkat provinsi',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2023,
    category: 'Olahraga',
    level: 'gold',
  },
  {
    title: 'Penghargaan Sekolah Terbaik Kategori Kejuruan',
    description: 'SMK PATRIOT 1 terpilih sebagai sekolah kejuruan terbaik di wilayah Bekasi',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2023,
    category: 'Umum',
    level: 'gold',
  },
  {
    title: 'Medali Perunggu LKS Kabupaten',
    description: 'Siswa SMK PATRIOT meraih medali perunggu dalam Lomba Kompetensi Siswa tingkat kabupaten',
    image: IMAGE_PLACEHOLDERS.achievement,
    year: 2022,
    category: 'Kompetensi',
    level: 'bronze',
  },
]

export default function PrestasiPage() {
  return (
    <>
      <HeroSection
        title="Prestasi Kami"
        subtitle="Pengakuan atas dedikasi dan kerja keras siswa dan guru"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Penghargaan dan Pencapaian</h2>
            <p className="text-muted-foreground">
              SMK PATRIOT 1 BEKASI bangga dengan pencapaian siswa dan guru yang telah meraih berbagai
              penghargaan di tingkat lokal, regional, dan nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Total Pencapaian</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-muted-foreground">Penghargaan Diraih</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Siswa Berprestasi</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25</p>
                <p className="text-muted-foreground">Tahun Berdiri</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
