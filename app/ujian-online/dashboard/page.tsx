import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { pool } from '@/lib/db'
import { Clock, FileText, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard Ujian Online - SMK PATRIOT 1 BEKASI',
  description: 'Daftar ujian online yang tersedia',
}

interface Exam {
  id: string
  title: string
  subject: string
  description: string
  duration_minutes: number
  total_questions: number
  passing_score: number
  status: string
}

async function getPublishedExams(): Promise<Exam[]> {
  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT id, title, subject, description, duration_minutes, total_questions, 
              passing_score, status
       FROM exams
       WHERE status = 'published'
       ORDER BY created_at DESC`
    )
    client.release()
    return result.rows
  } catch (error) {
    console.error('[v0] Error fetching exams:', error)
    return []
  }
}

export default async function UjianDashboard() {
  const exams = await getPublishedExams()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      {/* Header */}
      <header className="bg-primary text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Daftar Ujian Online</h1>
          <p className="text-white/90">Pilih ujian yang ingin Anda ikuti</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 py-12">
        {exams.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              <p>Saat ini belum ada ujian yang tersedia. Silahkan cek kembali nanti.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exams.map((exam) => (
              <Card
                key={exam.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="line-clamp-2">{exam.title}</CardTitle>
                  <CardDescription>{exam.subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {exam.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {exam.description}
                    </p>
                  )}

                  <div className="grid grid-cols-3 gap-2 py-2 bg-muted p-3 rounded-lg">
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-xs font-semibold">{exam.duration_minutes} menit</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-xs font-semibold">{exam.total_questions} soal</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-xs font-semibold">{exam.passing_score}%</p>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    Mulai Ujian
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Info Section */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-base">Petunjuk Penggunaan</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p>• Pastikan koneksi internet Anda stabil sebelum memulai ujian</p>
            <p>• Waktu ujian akan dimulai setelah Anda klik tombol "Mulai Ujian"</p>
            <p>• Anda harus menyelesaikan ujian dalam waktu yang ditentukan</p>
            <p>• Hasil ujian akan ditampilkan setelah Anda menyelesaikan semua soal</p>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/ujian-online">
            <Button variant="outline">Kembali ke Login</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
