import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { Zap, Cpu, Wrench, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Akademik - SMK PATRIOT 1 BEKASI',
  description: 'Program akademik dan jurusan di SMK PATRIOT 1 BEKASI',
}

const jurusan = [
  {
    name: 'Teknik Kelistrikan',
    icon: Zap,
    description: 'Program studi untuk menghasilkan tenaga ahli di bidang kelistrikan dan energi terbarukan.',
    kompetensi: [
      'Instalasi Listrik',
      'Pemeliharaan Mesin Listrik',
      'Energi Terbarukan',
      'Automasi Industri',
    ],
  },
  {
    name: 'Teknik Informatika',
    icon: Cpu,
    description: 'Pendidikan untuk mengembangkan keterampilan di bidang teknologi informasi dan software.',
    kompetensi: [
      'Jaringan Komputer',
      'Pemrograman Web',
      'Sistem Basis Data',
      'Cyber Security',
    ],
  },
  {
    name: 'Teknik Mesin',
    icon: Wrench,
    description: 'Program untuk melatih ahli mesin dan pemeliharaan peralatan industri.',
    kompetensi: [
      'Mekanik Otomotif',
      'Pemeliharaan Mesin',
      'CAD Desain',
      'Las dan Fabrikasi',
    ],
  },
  {
    name: 'Akuntansi',
    icon: BarChart3,
    description: 'Program studi untuk menghasilkan tenaga profesional di bidang akuntansi dan keuangan.',
    kompetensi: [
      'Pembukuan',
      'Laporan Keuangan',
      'Pajak',
      'Audit Internal',
    ],
  },
]

export default function AkademikPage() {
  return (
    <>
      <HeroSection
        title="Program Akademik"
        subtitle="Jurusan-jurusan unggulan dengan kurikulum terstandar industri"
      />

      <section className="py-16 bg-background">
        <Container>
          {/* Deskripsi */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-4">Program Studi Kami</h2>
            <p className="text-muted-foreground mb-4">
              SMK PATRIOT 1 BEKASI menawarkan program-program studi yang dirancang untuk memenuhi kebutuhan
              industri modern. Setiap program didukung oleh kurikulum yang relevan, fasilitas lengkap, dan
              pengajar berpengalaman.
            </p>
            <p className="text-muted-foreground">
              Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya memiliki kemampuan teknis yang
              kuat, tetapi juga soft skills dan karakter yang baik.
            </p>
          </div>

          {/* Jurusan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {jurusan.map((program, index) => {
              const Icon = program.icon
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{program.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Kompetensi Utama:</h4>
                    <ul className="space-y-2">
                      {program.kompetensi.map((skill, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Fasilitas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Fasilitas Pembelajaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Lab Listrik', desc: 'Dilengkapi peralatan terkini untuk praktik kelistrikan' },
                { name: 'Lab Komputer', desc: 'Ratusan unit komputer dengan spesifikasi tinggi' },
                { name: 'Workshop Mesin', desc: 'Area produksi dengan mesin-mesin modern' },
                { name: 'Perpustakaan Digital', desc: 'Koleksi buku dan jurnal elektronik lengkap' },
                { name: 'Ruang Praktik', desc: 'Studio dan ruang untuk praktik berbagai skill' },
                { name: 'Auditorium', desc: 'Tempat seminar dan acara-acara besar' },
              ].map((fasilitas, i) => (
                <Card key={i} className="p-6 text-center">
                  <h4 className="font-semibold mb-2">{fasilitas.name}</h4>
                  <p className="text-sm text-muted-foreground">{fasilitas.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Kurikulum */}
          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Standar Kurikulum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-lg">Mata Pelajaran Umum</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Bahasa Indonesia</li>
                  <li>✓ Bahasa Inggris</li>
                  <li>✓ Matematika</li>
                  <li>✓ Pendidikan Pancasila dan Kewarganegaraan</li>
                  <li>✓ Sejarah dan Budaya</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-lg">Mata Pelajaran Kejuruan</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Teori Kejuruan Khusus</li>
                  <li>✓ Praktik Kejuruan</li>
                  <li>✓ Produktif Mandiri</li>
                  <li>✓ Magang Industri</li>
                  <li>✓ Proyek Akhir</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
