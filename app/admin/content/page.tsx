'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Save } from 'lucide-react'

const DEFAULT_CONTENT = [
  {
    id: 'hero-title',
    section: 'Homepage',
    label: 'Hero Title',
    value: 'Selamat Datang di SMK PATRIOT 1 BEKASI',
  },
  {
    id: 'hero-subtitle',
    section: 'Homepage',
    label: 'Hero Subtitle',
    value: 'Membangun Generasi Berkualitas dan Berkarakter',
  },
  {
    id: 'about-title',
    section: 'About',
    label: 'About Title',
    value: 'Tentang SMK PATRIOT 1 BEKASI',
  },
  {
    id: 'about-description',
    section: 'About',
    label: 'About Description',
    value:
      'SMK PATRIOT 1 BEKASI adalah sekolah menengah kejuruan yang berkomitmen dalam menghasilkan tenaga kerja yang berkualitas.',
  },
]

export default function ContentManagementPage() {
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const handleStartEdit = (item: (typeof DEFAULT_CONTENT)[0]) => {
    setEditingId(item.id)
    setEditValue(item.value)
  }

  const handleSave = (id: string) => {
    setContent(
      content.map((item) => (item.id === id ? { ...item, value: editValue } : item))
    )
    setEditingId(null)
    // TODO: Call server action to save to database
    console.log('Content saved:', id, editValue)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditValue('')
  }

  // Group content by section
  const sections = [...new Set(content.map((item) => item.section))]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Manajemen Konten</h1>
        <p className="text-muted-foreground">Edit teks dan konten di website</p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section}>
            <CardHeader>
              <CardTitle className="text-lg">{section}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {content
                .filter((item) => item.section === section)
                .map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">{item.label}</label>
                      {editingId !== item.id && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStartEdit(item)}
                        >
                          Edit
                        </Button>
                      )}
                    </div>

                    {editingId === item.id ? (
                      <div className="space-y-2">
                        {item.label.includes('Description') ? (
                          <textarea
                            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={4}
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                          />
                        ) : (
                          <Input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                          />
                        )}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleSave(item.id)}
                            className="gap-1"
                          >
                            <Save className="w-4 h-4" />
                            Simpan
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCancel}
                          >
                            Batal
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-foreground bg-muted p-3 rounded">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-base">Catatan</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Perubahan yang dibuat di halaman ini akan langsung terlihat di website. Pastikan konten yang
          diisi sudah benar sebelum menyimpan.
        </CardContent>
      </Card>
    </div>
  )
}
