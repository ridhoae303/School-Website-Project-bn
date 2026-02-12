import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, FileText, Users, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Panduan PPDB - SMK PATRIOT 1 BEKASI',
  description: 'Panduan pendaftaran peserta didik baru SMK PATRIOT 1 BEKASI',
}

export default function PanduanPPDBPage() {
  return (
    <>
      <HeroSection
        title="Panduan PPDB 2024/2025"
        subtitle="Informasi lengkap untuk pendaftaran peserta didik baru"
      />

      <section className="py-16 bg-background">
        <Container>
          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Jadwal Pendaftaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { title: 'Pendaftaran Dibuka', date: '1 Juni 2024', icon: Calendar },
                { title: 'Tes Akademik', date: '15-20 Juni 2024', icon: FileText },
                { title: 'Pengumuman Hasil', date: '25 Juni 2024', icon: CheckCircle2 },
                { title: 'Daftar Ulang', date: '26-28 Juni 2024', icon: Users },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Alur Pendaftaran */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Alur Pendaftaran</h2>
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Persiapan Dokumen',
                  description:
                    'Siapkan dokumen-dokumen yang diperlukan seperti fotokopi ijazah SMP/MTs, KTP, dan kartu keluarga.',
                },
                {
                  step: 2,
                  title: 'Pendaftaran Online',
                  description:
                    'Kunjungi portal PPDB dan isi formulir pendaftaran dengan data lengkap dan akurat.',
                },
                {
                  step: 3,
                  title: 'Verifikasi Data',
                  description:
                    'Datang ke sekolah untuk verifikasi data dan pengumpulan dokumen asli.',
                },
                {
                  step: 4,
                  title: 'Tes Akademik',
                  description:
                    'Mengikuti tes akademik (Matematika, Bahasa Indonesia, Bahasa Inggris) sesuai jadwal.',
                },
                {
                  step: 5,
                  title: 'Pengumuman Hasil',
                  description:
                    'Hasil penerimaan akan diumumkan melalui portal PPDB dan papan pengumuman sekolah.',
                },
                {
                  step: 6,
                  title: 'Daftar Ulang',
                  description:
                    'Calon siswa yang diterima melakukan daftar ulang dan membayar SPP awal.',
                },
              ].map((item) => (
                <Card key={item.step} className="p-6 border-l-4 border-l-primary">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Syarat & Ketentuan */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Persyaratan Pendaftaran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Persyaratan Administrasi
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Fotokopi ijazah SMP/MTs (2 lembar)</li>
                  <li>✓ Fotokopi SKHU (2 lembar)</li>
                  <li>✓ Fotokopi KTP/Kartu Pelajar (2 lembar)</li>
                  <li>✓ Fotokopi Kartu Keluarga (1 lembar)</li>
                  <li>✓ Pas foto 4x6 (6 lembar)</li>
                  <li>✓ Formulir pendaftaran yang sudah diisi lengkap</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Persyaratan Akademis
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Tidak dibatasi asal sekolah</li>
                  <li>✓ Nilai rata-rata minimal 6.5</li>
                  <li>✓ Tidak ada catatan disiplin serius</li>
                  <li>✓ Berbadan sehat (sesuai standar)</li>
                  <li>✓ Lulus tes akademik</li>
                  <li>✓ Lulus tes kesehatan dan wawancara</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8">Pertanyaan Umum</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Berapa biaya pendaftaran PPDB?',
                  a: 'Pendaftaran PPDB gratis. Namun ada biaya tes yang akan diinformasikan saat pendaftaran.',
                },
                {
                  q: 'Apakah bisa mendaftar lebih dari satu jurusan?',
                  a: 'Ya, Anda bisa mendaftar hingga 3 jurusan. Pilihan akan diproses berdasarkan nilai tes dan preferensi.',
                },
                {
                  q: 'Bagaimana jika tidak diterima?',
                  a: 'Peserta yang tidak diterima masih bisa mengikuti seleksi gelombang berikutnya.',
                },
                {
                  q: 'Kapan dimulai pembelajaran untuk siswa baru?',
                  a: 'Pembelajaran dimulai pada tanggal 17 Juli 2024 atau sesuai pengumuman resmi sekolah.',
                },
              ].map((faq, index) => (
                <Card key={index} className="p-4">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Siap untuk Mendaftar?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan untuk menjadi bagian dari SMK PATRIOT 1 BEKASI. Daftarkan diri
              Anda sekarang dan mulai perjalanan menuju masa depan yang cerah.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="/hubungi-kami">Hubungi Kami untuk Info Lebih Lanjut</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
