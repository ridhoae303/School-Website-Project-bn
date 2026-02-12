import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { PollForm } from '@/components/Form/PollForm'

export const metadata: Metadata = {
  title: 'Jajak Pendapat - SMK PATRIOT 1 BEKASI',
  description: 'Ikuti jajak pendapat dan berikan suara Anda untuk SMK PATRIOT 1 BEKASI',
}

const activePoll = {
  id: 'poll-001',
  question: 'Program ekstrakurikuler apa yang ingin Anda tambahkan?',
  options: [
    { id: 'opt1', text: 'Programming dan AI', votes: 145 },
    { id: 'opt2', text: 'Desain Grafis', votes: 98 },
    { id: 'opt3', text: 'Kewirausahaan', votes: 87 },
    { id: 'opt4', text: 'Bahasa Asing Tambahan', votes: 112 },
  ],
}

const pollHistory = [
  {
    question: 'Apakah Anda puas dengan fasilitas sekolah?',
    totalVotes: 342,
    topAnswer: 'Sangat Puas (68%)',
  },
  {
    question: 'Program magang seperti apa yang Anda inginkan?',
    totalVotes: 287,
    topAnswer: 'Magang di perusahaan multinasional (54%)',
  },
  {
    question: 'Jam sekolah saat ini sudah sesuai kebutuhan?',
    totalVotes: 215,
    topAnswer: 'Sudah sesuai (71%)',
  },
]

export default function JajakPendapatPage() {
  return (
    <>
      <HeroSection
        title="Jajak Pendapat"
        subtitle="Berikan suara Anda dan bantu kami membuat keputusan terbaik"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Active Poll */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold mb-2">
                  POLLING AKTIF
                </div>
                <h2 className="text-3xl font-bold">Polling Saat Ini</h2>
              </div>

              <Card className="p-8">
                <PollForm
                  pollId={activePoll.id}
                  question={activePoll.question}
                  options={activePoll.options}
                />
              </Card>

              <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">💡 Tips:</span> Polling ini membantu sekolah memahami preferensi siswa
                  dalam mengembangkan program-program baru.
                </p>
              </div>
            </div>

            {/* Poll Statistics */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold">Total Partisipasi</h3>
              </div>

              <Card className="p-6 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {activePoll.options.reduce((sum, opt) => sum + opt.votes, 0)}
                  </p>
                  <p className="text-muted-foreground">Suara yang masuk</p>
                </div>
              </Card>

              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  Polling akan ditutup pada Jumat, 26 Januari 2024
                </p>
              </div>
            </div>
          </div>

          {/* Poll History */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Polling Sebelumnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pollHistory.map((poll, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold mb-4 line-clamp-2">{poll.question}</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Total Suara</p>
                      <p className="font-bold text-lg text-primary">{poll.totalVotes}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Jawaban Terbanyak</p>
                      <p className="font-semibold text-sm">{poll.topAnswer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-primary/5 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Mengapa Jajak Pendapat?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Suara Anda Penting</h4>
                <p className="text-sm text-muted-foreground">
                  Setiap suara dari siswa membantu sekolah membuat keputusan yang lebih baik.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transparansi</h4>
                <p className="text-sm text-muted-foreground">
                  Hasil polling dipublikasikan secara terbuka untuk semua stakeholder.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Partisipasi Demokratis</h4>
                <p className="text-sm text-muted-foreground">
                  Ini adalah cara sekolah mendengarkan aspirasi dari seluruh komunitas.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
