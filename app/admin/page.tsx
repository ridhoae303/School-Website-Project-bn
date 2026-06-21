import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Image, FileText, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Dashboard - SMK PATRIOT 1 BEKASI',
}

export default function AdminDashboard() {
  const features = [
    {
      title: 'Ujian Online',
      description: 'Buat dan kelola ujian online untuk siswa',
      icon: BookOpen,
      href: '/admin/exams',
      color: 'bg-blue-50',
    },
    {
      title: 'Alumni',
      description: 'Kelola directory alumni sekolah',
      icon: Users,
      href: '/admin/alumni',
      color: 'bg-green-50',
    },
    {
      title: 'Foto',
      description: 'Upload dan kelola foto di website',
      icon: Image,
      href: '/admin/photos',
      color: 'bg-purple-50',
    },
    {
      title: 'Konten',
      description: 'Edit teks dan konten website',
      icon: FileText,
      href: '/admin/content',
      color: 'bg-orange-50',
    },
    {
      title: 'Form Submissions',
      description: 'Lihat semua pengajuan form dari website',
      icon: Mail,
      href: '/admin/submissions',
      color: 'bg-red-50',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard Admin</h1>
        <p className="text-muted-foreground">Kelola konten website SMK PATRIOT 1 BEKASI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Link key={feature.href} href={feature.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle>Panduan Penggunaan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <strong>Ujian Online:</strong> Buat soal ujian baru dan kelola jadwal ujian untuk siswa
          </p>
          <p>
            <strong>Alumni:</strong> Tambahkan profil alumni dengan tahun kelulusan dan karir saat ini
          </p>
          <p>
            <strong>Foto:</strong> Upload foto acara, kegiatan, dan dokumentasi sekolah
          </p>
          <p>
            <strong>Konten:</strong> Edit teks, deskripsi, dan informasi lainnya di website
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
