import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { IMAGE_PLACEHOLDERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Galeri - SMK PATRIOT 1 BEKASI',
  description: 'Galeri foto kegiatan dan fasilitas SMK PATRIOT 1 BEKASI',
}

const galleryImages = [
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Kampus utama', category: 'Fasilitas' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Lab komputer', category: 'Fasilitas' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Workshop mesin', category: 'Fasilitas' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Upacara bendera', category: 'Kegiatan' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Pramuka', category: 'Ekstrakurikuler' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'OSIS gathering', category: 'Kegiatan' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Kompetisi siswa', category: 'Prestasi' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Kelas praktik', category: 'Pembelajaran' },
  { src: IMAGE_PLACEHOLDERS.gallery, alt: 'Wisuda siswa', category: 'Kegiatan' },
]

export default function GaleriPage() {
  return (
    <>
      <HeroSection
        title="Galeri Foto"
        subtitle="Dokumentasi kegiatan dan suasana di SMK PATRIOT 1 BEKASI"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Foto-foto Terkini</h2>
            <p className="text-muted-foreground">
              Jelajahi dokumentasi berbagai kegiatan dan fasilitas di SMK PATRIOT 1 BEKASI
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-muted h-64"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              Lihat Lebih Banyak Foto
            </button>
          </div>
        </Container>
      </section>
    </>
  )
}
