'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function AlumniManagementPage() {
  const [alumni, setAlumni] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    nisn: '',
    graduationYear: new Date().getFullYear(),
    academicYear: '',
    batchNumber: '',
    currentPosition: '',
    company: '',
  })

  const handleAddAlumni = async () => {
    if (!formData.name || !formData.graduationYear) {
      alert('Nama dan tahun kelulusan harus diisi')
      return
    }

    // TODO: Call server action to save to database
    console.log('Adding alumni:', formData)
    setAlumni([...alumni, { id: Date.now(), ...formData }])
    setShowForm(false)
    setFormData({
      name: '',
      nisn: '',
      graduationYear: new Date().getFullYear(),
      academicYear: '',
      batchNumber: '',
      currentPosition: '',
      company: '',
    })
  }

  const handleDeleteAlumni = (id: number) => {
    // TODO: Call server action to delete from database
    setAlumni(alumni.filter((a) => a.id !== id))
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Alumni</h1>
          <p className="text-muted-foreground">Kelola data alumni sekolah</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Tambah Alumni
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Tambah Alumni Baru</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Nama Lengkap *</label>
                <Input
                  placeholder="Nama"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">NISN</label>
                <Input
                  placeholder="NISN"
                  value={formData.nisn}
                  onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Tahun Kelulusan *</label>
                <Input
                  type="number"
                  placeholder="2024"
                  value={formData.graduationYear}
                  onChange={(e) => setFormData({ ...formData, graduationYear: parseInt(e.target.value) })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Tahun Ajaran</label>
                <Input
                  placeholder="2023/2024"
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Angkatan</label>
                <Input
                  placeholder="Angkatan"
                  value={formData.batchNumber}
                  onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Posisi Saat Ini</label>
                <Input
                  placeholder="Posisi Kerja"
                  value={formData.currentPosition}
                  onChange={(e) => setFormData({ ...formData, currentPosition: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Perusahaan</label>
                <Input
                  placeholder="Nama Perusahaan"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleAddAlumni}>Simpan</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {alumni.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Belum ada data alumni. Klik tombol "Tambah Alumni" untuk menambahkan.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {alumni.map((a) => (
            <Card key={a.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{a.name}</CardTitle>
                    <CardDescription>{a.company && `${a.currentPosition} at ${a.company}`}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteAlumni(a.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>
                  <strong>NISN:</strong> {a.nisn || '-'}
                </p>
                <p>
                  <strong>Tahun Kelulusan:</strong> {a.graduationYear}
                </p>
                <p>
                  <strong>Angkatan:</strong> {a.batchNumber || '-'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
