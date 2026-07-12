'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2, AlertCircle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { createPhoto, deletePhoto, getPhotos } from '@/app/actions/photos'
import { toast } from 'sonner'

interface Photo {
  id: string
  title: string
  description: string | null
  photoUrl: string
  category: string | null
  displayOrder: number
  createdAt: Date
}

export default function PhotosManagementPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [showForm, setShowForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    photoUrl: '',
  })

  // Load photos on mount
  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    try {
      setIsLoading(true)
      const result = await getPhotos()
      if (result.success && result.data) {
        setPhotos(result.data)
      } else {
        toast.error('Gagal memuat foto')
      }
    } catch (error) {
      console.error('[v0] Error loading photos:', error)
      toast.error('Gagal memuat foto')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddPhoto = async () => {
    if (!formData.title || !formData.photoUrl) {
      toast.error('Judul dan URL foto harus diisi')
      return
    }

    try {
      setIsSaving(true)
      const result = await createPhoto({
        title: formData.title,
        description: formData.description || undefined,
        category: formData.category || undefined,
        photoUrl: formData.photoUrl,
      })
      
      if (result.success) {
        toast.success('Foto berhasil ditambahkan')
        setShowForm(false)
        setFormData({
          title: '',
          description: '',
          category: '',
          photoUrl: '',
        })
        await loadPhotos()
      } else {
        toast.error(result.error || 'Gagal menambahkan foto')
      }
    } catch (error) {
      console.error('[v0] Error saving photo:', error)
      toast.error('Gagal menambahkan foto')
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeletePhoto = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus foto ini?')) return

    try {
      const result = await deletePhoto(id)
      if (result.success) {
        toast.success('Foto berhasil dihapus')
        await loadPhotos()
      } else {
        toast.error(result.error || 'Gagal menghapus foto')
      }
    } catch (error) {
      console.error('[v0] Error deleting photo:', error)
      toast.error('Gagal menghapus foto')
    }
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
              <Button onClick={handleAddPhoto} disabled={isSaving}>
                {isSaving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Simpan
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)} disabled={isSaving}>
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {isLoading ? (
        <div className="text-center py-12">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
          <p className="text-muted-foreground">Memuat foto...</p>
        </div>
      ) : photos.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            Belum ada foto. Klik tombol "Unggah Foto" untuk menambahkan.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
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
                        console.error('[v0] Failed to load image:', photo.photoUrl)
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
                  <strong>Diunggah:</strong> {new Date(photo.createdAt).toLocaleDateString('id-ID')}
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
