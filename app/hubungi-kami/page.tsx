import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { ContactForm } from '@/components/Form/ContactForm'
import { SCHOOL_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hubungi Kami - SMK PATRIOT 1 BEKASI',
  description: 'Hubungi kami untuk informasi lebih lanjut tentang SMK PATRIOT 1 BEKASI',
}

export default function HubungiKamiPage() {
  return (
    <>
      <HeroSection
        title="Hubungi Kami"
        subtitle="Kami siap membantu menjawab pertanyaan Anda tentang SMK PATRIOT 1 BEKASI"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informasi Kontak</h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Phone */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <a href={`tel:${SCHOOL_INFO.phone}`} className="text-primary hover:underline">
                        {SCHOOL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href={`mailto:${SCHOOL_INFO.email}`} className="text-primary hover:underline">
                        {SCHOOL_INFO.email}
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Address */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-muted-foreground text-sm">{SCHOOL_INFO.address}</p>
                    </div>
                  </div>
                </Card>

                {/* Office Hours */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Jam Kerja</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Senin - Jumat: 07:00 - 16:00 WIB</p>
                        <p>Sabtu: 07:00 - 12:00 WIB</p>
                        <p>Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map Section */}
              <div className="bg-muted rounded-lg overflow-hidden h-80">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Google Maps akan ditampilkan di sini
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
              <Card className="p-8">
                <ContactForm />
              </Card>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Kami akan merespons pesan Anda dalam waktu 24 jam kerja.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-primary/5">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Pertanyaan yang Sering Diajukan</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Kapan pendaftaran PPDB dibuka?',
                  a: 'Pendaftaran PPDB dibuka setiap tahun pada bulan Juni. Silahkan kunjungi halaman PPDB untuk informasi terbaru.',
                },
                {
                  q: 'Apa saja jurusan yang tersedia?',
                  a: 'Kami menyediakan beberapa jurusan unggulan. Silahkan kunjungi halaman Akademik untuk daftar lengkap jurusan.',
                },
                {
                  q: 'Apakah ada beasiswa untuk siswa berprestasi?',
                  a: 'Ya, kami menyediakan program beasiswa untuk siswa berprestasi. Hubungi bagian kesiswaan untuk informasi lebih lanjut.',
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
