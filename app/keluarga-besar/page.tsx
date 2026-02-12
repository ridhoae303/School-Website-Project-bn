import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { StaffCard } from '@/components/StaffCard'
import { IMAGE_PLACEHOLDERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Keluarga Besar - SMK PATRIOT 1 BEKASI',
  description: 'Profil guru dan staf SMK PATRIOT 1 BEKASI',
}

const mockStaff = [
  {
    name: 'Drs. Ahmad Wijaya',
    position: 'Kepala Sekolah',
    image: IMAGE_PLACEHOLDERS.team,
    department: 'Kepemimpinan',
    email: 'ahmad.wijaya@smkpatriot1.sch.id',
    bio: 'Pendidik berpengalaman dengan sertifikasi internasional',
  },
  {
    name: 'Ibu Siti Nurhaliza, M.Pd',
    position: 'Wakil Kepala Sekolah Akademik',
    image: IMAGE_PLACEHOLDERS.team,
    department: 'Akademik',
    email: 'siti.nurhaliza@smkpatriot1.sch.id',
    bio: 'Ahli dalam pengembangan kurikulum dan pembelajaran',
  },
  {
    name: 'Budi Santoso, S.T.',
    position: 'Guru Teknik Listrik',
    image: IMAGE_PLACEHOLDERS.team,
    department: 'Teknik Kelistrikan',
    email: 'budi.santoso@smkpatriot1.sch.id',
    bio: 'Praktisi industri dengan pengalaman 15 tahun',
  },
  {
    name: 'Rini Cahyani, S.Pd.',
    position: 'Guru Matematika',
    image: IMAGE_PLACEHOLDERS.team,
    department: 'Mata Pelajaran Umum',
    email: 'rini.cahyani@smkpatriot1.sch.id',
    bio: 'Pelatih olimpiade matematika nasional',
  },
]

export default function KeluargaBasarPage() {
  return (
    <>
      <HeroSection
        title="Keluarga Besar SMK PATRIOT 1"
        subtitle="Bertemu dengan para pendidik dan profesional yang berdedikasi"
      />

      <section className="py-16 bg-background">
        <Container>
          {/* Kepala Sekolah Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Kepemimpinan Sekolah</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockStaff.slice(0, 2).map((staff, index) => (
                <StaffCard key={index} {...staff} />
              ))}
            </div>
          </div>

          {/* Guru Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tim Pengajar</h2>
            <p className="text-muted-foreground mb-8">
              Kami memiliki tim pengajar profesional yang berpengalaman dan berdedikasi dalam memberikan
              pendidikan berkualitas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockStaff.slice(2).map((staff, index) => (
                <StaffCard key={index} {...staff} />
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Bergabung Dengan Tim Kami</h3>
            <p className="text-muted-foreground mb-4">
              Kami selalu mencari pendidik dan profesional berbakat untuk bergabung dengan tim kami.
              Jika Anda tertarik, silahkan hubungi bagian sumber daya manusia.
            </p>
            <a href="/hubungi-kami" className="text-primary font-semibold hover:underline">
              Hubungi kami untuk informasi lowongan →
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
