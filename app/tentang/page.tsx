import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { SCHOOL_INFO } from '@/lib/constants'
import { Target, Lightbulb, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami - SMK PATRIOT 1 BEKASI',
  description: 'Profil dan sejarah SMK PATRIOT 1 BEKASI',
}

export default function TentangPage() {
  return (
    <>
      <HeroSection
        title="Tentang Kami"
        subtitle="Mengenal lebih dekat visi, misi, dan perjalanan SMK PATRIOT 1 BEKASI"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Profil Sekolah</h2>
            <p className="text-muted-foreground mb-4">
              {SCHOOL_INFO.description}
            </p>
            <p className="text-muted-foreground mb-4">
              Sejak didirikan pada tahun {SCHOOL_INFO.foundedYear}, SMK PATRIOT 1 BEKASI telah berkomitmen
              untuk memberikan pendidikan berkualitas tinggi yang mengintegrasikan teori dan praktik
              industri. Kami percaya bahwa pendidikan vokasi adalah kunci untuk menghasilkan tenaga kerja
              profesional yang siap menghadapi tantangan industri modern.
            </p>
            <p className="text-muted-foreground">
              Dengan dukungan dari berbagai mitra industri terkemuka, kami terus berinovasi dalam
              mengembangkan kurikulum yang relevan dengan kebutuhan pasar kerja global.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Visi */}
            <Card className="p-8 bg-primary/5 border-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Visi</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Menjadi institusi pendidikan vokasi terkemuka yang menghasilkan lulusan berkompeten,
                berkarakter, dan siap bersaing di era digital global.
              </p>
            </Card>

            {/* Misi */}
            <Card className="p-8 bg-secondary/5 border-2 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">Misi</h3>
              </div>
              <ul className="space-y-2 text-foreground text-sm leading-relaxed">
                <li>• Menyelenggarakan pendidikan vokasi berkualitas dengan standar internasional</li>
                <li>• Mengembangkan kompetensi teknis dan soft skills peserta didik</li>
                <li>• Membangun kemitraan strategis dengan dunia industri</li>
                <li>• Menciptakan budaya belajar yang inovatif dan berkelanjutan</li>
              </ul>
            </Card>
          </div>

          {/* Nilai-Nilai Inti */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Nilai-Nilai Inti Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Keunggulan',
                  description: 'Komitmen terhadap standar kualitas tertinggi dalam setiap aspek',
                },
                {
                  icon: Users,
                  title: 'Integritas',
                  description: 'Kejujuran dan tanggung jawab dalam setiap tindakan dan keputusan',
                },
                {
                  icon: Lightbulb,
                  title: 'Inovasi',
                  description: 'Terus mencari cara baru untuk meningkatkan pembelajaran dan pengalaman',
                },
                {
                  icon: Target,
                  title: 'Kolaborasi',
                  description: 'Bekerja bersama stakeholder untuk mencapai tujuan bersama',
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Sejarah Singkat */}
          <div className="bg-background border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Perjalanan Kami</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="w-1 h-16 bg-primary/20" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{SCHOOL_INFO.foundedYear} - Awal Berdiri</h4>
                  <p className="text-muted-foreground">
                    SMK PATRIOT 1 BEKASI didirikan dengan visi untuk memberikan pendidikan vokasi berkualitas
                    bagi generasi muda Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="w-1 h-16 bg-primary/20" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">2015 - Akreditasi A</h4>
                  <p className="text-muted-foreground">
                    Sekolah berhasil meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="w-1 h-16 bg-primary/20" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">2020 - Transformasi Digital</h4>
                  <p className="text-muted-foreground">
                    Melakukan transformasi digital dengan implementasi teknologi pembelajaran terbaru.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Saat Ini - Berkembang Terus</h4>
                  <p className="text-muted-foreground">
                    Terus berinovasi dan mengembangkan program-program unggulan untuk menghasilkan lulusan
                    yang kompetitif di tingkat nasional dan internasional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
