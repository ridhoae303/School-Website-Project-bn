'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function ExamsManagementPage() {
  const [exams, setExams] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    description: '',
    durationMinutes: 60,
    totalQuestions: 20,
    passingScore: 70,
    status: 'draft',
  })

  const handleAddExam = async () => {
    if (!formData.title || !formData.subject) {
      alert('Judul dan mata pelajaran harus diisi')
      return
    }

    // TODO: Call server action to save to database
    console.log('Adding exam:', formData)
    setExams([...exams, { id: Date.now(), ...formData }])
    setShowForm(false)
    setFormData({
      title: '',
      subject: '',
      description: '',
      durationMinutes: 60,
      totalQuestions: 20,
      passingScore: 70,
      status: 'draft',
    })
  }

  const handleDeleteExam = (id: number) => {
    // TODO: Call server action to delete from database
    setExams(exams.filter((e) => e.id !== id))
  }

  const handlePublishExam = (id: number) => {
    setExams(
      exams.map((e) => (e.id === id ? { ...e, status: e.status === 'draft' ? 'published' : 'draft' } : e))
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Ujian Online</h1>
          <p className="text-muted-foreground">Buat dan kelola ujian untuk siswa</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Buat Ujian
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Buat Ujian Baru</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">Judul Ujian *</label>
                <Input
                  placeholder="Misal: Ujian Matematika Kelas X"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Mata Pelajaran *</label>
                <Input
                  placeholder="Matematika"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Durasi (Menit)</label>
                <Input
                  type="number"
                  placeholder="60"
                  value={formData.durationMinutes}
                  onChange={(e) => setFormData({ ...formData, durationMinutes: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Jumlah Soal</label>
                <Input
                  type="number"
                  placeholder="20"
                  value={formData.totalQuestions}
                  onChange={(e) => setFormData({ ...formData, totalQuestions: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Nilai Kelulusan</label>
                <Input
                  type="number"
                  placeholder="70"
                  value={formData.passingScore}
                  onChange={(e) => setFormData({ ...formData, passingScore: parseInt(e.target.value) })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">Deskripsi</label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Deskripsi ujian"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleAddExam}>Simpan</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {exams.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Belum ada ujian. Klik tombol "Buat Ujian" untuk membuat ujian baru.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {exams.map((exam) => (
            <Card key={exam.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle>{exam.title}</CardTitle>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          exam.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {exam.status === 'published' ? 'Aktif' : 'Draft'}
                      </span>
                    </div>
                    <CardDescription>{exam.subject}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePublishExam(exam.id)}
                    >
                      {exam.status === 'published' ? 'Nonaktifkan' : 'Aktifkan'}
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteExam(exam.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-muted-foreground">Durasi</p>
                    <p className="font-medium">{exam.durationMinutes} menit</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Soal</p>
                    <p className="font-medium">{exam.totalQuestions} soal</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Kelulusan</p>
                    <p className="font-medium">{exam.passingScore}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Status</p>
                    <p className="font-medium">{exam.status}</p>
                  </div>
                </div>
                {exam.description && (
                  <p className="text-muted-foreground line-clamp-2 pt-2 border-t">{exam.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
