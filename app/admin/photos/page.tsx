'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, Download } from 'lucide-react'
import Image from 'next/image'

export default function PhotosManagementPage() {
  const [photos, setPhotos] = useState<any[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    photoUrl: '',
  })

  const handleAddPhoto = async () => {
    if (!formData.title || !formData.photoUrl) {
      alert('Judul dan URL foto harus diisi')
      return
    }

    // TODO: Call server action to save to database
    console.log('Adding photo:', formData)
    setPhotos([
      ...photos,
      {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toLocaleDateString('id-ID'),
      },
    ])
    setShowForm(false)
    setFormData({
      title: '',
      description: '',
      category: '',
      photoUrl: '',
    })
  }

  const handleDeletePhoto = (id: number) => {
    // TODO: Call server action to delete from database
    setPhotos(photos.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Foto</h1>
          <p className="text-muted-foreground">Kelola foto di website</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Unggah Foto
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Unggah Foto Baru</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">Judul Foto *</label>
                <Input
                  placeholder="Judul"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Kategori</label>
                <Input
                  placeholder="Misal: Acara, Kegiatan, Dokumentasi"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">URL Foto *</label>
                <Input
                  placeholder="https://example.com/photo.jpg"
                  value={formData.photoUrl}
                  onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">Deskripsi</label>
                <textarea
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Deskripsi foto"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleAddPhoto}>Simpan</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {photos.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Belum ada foto. Klik tombol "Unggah Foto" untuk menambahkan.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <Card key={photo.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base line-clamp-2">{photo.title}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => handleDeletePhoto(photo.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative w-full aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                  {photo.photoUrl && (
                    <Image
                      src={photo.photoUrl}
                      alt={photo.title}
                      fill
                      className="object-cover"
                      onError={() => {
                        console.error('Failed to load image:', photo.photoUrl)
                      }}
                    />
                  )}
                </div>
                {photo.category && (
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong>Kategori:</strong> {photo.category}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  <strong>Diunggah:</strong> {photo.createdAt}
                </p>
                {photo.description && (
                  <p className="text-xs mt-2 line-clamp-2">{photo.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
