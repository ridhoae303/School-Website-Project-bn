'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, FileText, Target, LogOut } from 'lucide-react'
import Link from 'next/link'

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

interface UjianUser {
  id: string
  username: string
}

export function UjianDashboardClient({ exams }: { exams: Exam[] }) {
  const [user, setUser] = useState<UjianUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check session from sessionStorage
    const ujianUser = sessionStorage.getItem('ujian_user')
    if (!ujianUser) {
      router.push('/ujian-online/login')
      return
    }

    try {
      const userData = JSON.parse(ujianUser)
      setUser(userData)
    } catch (error) {
      console.error('[v0] Parse session error:', error)
      router.push('/ujian-online/login')
    } finally {
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('ujian_user')
    router.push('/ujian-online')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-secondary" />
          <p className="text-muted-foreground mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
      {/* Header */}
      <header className="bg-primary text-white py-8 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Daftar Ujian Online</h1>
            <p className="text-white/90">Selamat datang, {user.username}</p>
          </div>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/20"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
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
      </main>
    </div>
  )
}
