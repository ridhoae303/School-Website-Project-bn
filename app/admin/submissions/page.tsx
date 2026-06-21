'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Mail, Phone, User, Calendar, FileText, Trash2 } from 'lucide-react'
import { getSubmissions, deleteSubmission, updateSubmissionStatus } from '@/app/actions/submissions'

interface Submission {
  id: string
  formType: string
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  data?: Record<string, any>
  status: string
  createdAt: Date
}

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  useEffect(() => {
    loadSubmissions()
  }, [selectedType])

  async function loadSubmissions() {
    setIsLoading(true)
    try {
      const data = await getSubmissions(selectedType || undefined)
      setSubmissions(data as any)
    } catch (error) {
      console.error('Error loading submissions:', error)
    }
    setIsLoading(false)
  }

  async function handleDelete(id: string) {
    if (confirm('Yakin ingin menghapus submission ini?')) {
      try {
        await deleteSubmission(id)
        setSubmissions(submissions.filter(s => s.id !== id))
      } catch (error) {
        console.error('Error deleting:', error)
        alert('Gagal menghapus data')
      }
    }
  }

  async function handleStatusChange(id: string, newStatus: string) {
    try {
      await updateSubmissionStatus(id, newStatus)
      setSubmissions(submissions.map(s => 
        s.id === id ? { ...s, status: newStatus } : s
      ))
    } catch (error) {
      console.error('Error updating status:', error)
      alert('Gagal mengubah status')
    }
  }

  const formTypes = Array.from(new Set(submissions.map(s => s.formType)))
  const filteredSubmissions = selectedType 
    ? submissions.filter(s => s.formType === selectedType)
    : submissions

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'read':
        return 'bg-yellow-100 text-yellow-800'
      case 'resolved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Form Submissions</h1>
        <p className="text-muted-foreground mt-1">Total: {submissions.length} submission</p>
      </div>

      {isLoading ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mx-auto" />
            <p className="mt-2">Memuat data...</p>
          </CardContent>
        </Card>
      ) : submissions.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center text-muted-foreground">
            <p>Belum ada submission</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Filter Tabs */}
          <Tabs value={selectedType || 'all'} onValueChange={(v) => setSelectedType(v === 'all' ? null : v)}>
            <TabsList>
              <TabsTrigger value="all">Semua ({submissions.length})</TabsTrigger>
              {formTypes.map(type => {
                const count = submissions.filter(s => s.formType === type).length
                return (
                  <TabsTrigger key={type} value={type}>
                    {type} ({count})
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>

          {/* Submissions List */}
          <div className="space-y-4">
            {filteredSubmissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-lg">{submission.subject || submission.formType}</CardTitle>
                        <Badge variant="outline">{submission.formType}</Badge>
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                      </div>
                      <CardDescription className="mt-2">
                        {new Date(submission.createdAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </CardDescription>
                    </div>
                    <select 
                      value={submission.status}
                      onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                      className="px-3 py-1 border rounded text-sm"
                    >
                      <option value="new">Baru</option>
                      <option value="read">Dibaca</option>
                      <option value="resolved">Selesai</option>
                    </select>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {submission.name && (
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span>{submission.name}</span>
                    </div>
                  )}
                  {submission.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                        {submission.email}
                      </a>
                    </div>
                  )}
                  {submission.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <a href={`tel:${submission.phone}`} className="text-primary hover:underline">
                        {submission.phone}
                      </a>
                    </div>
                  )}
                  {submission.message && (
                    <div className="bg-muted p-3 rounded-lg text-sm">
                      <p className="font-semibold mb-1 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Pesan:
                      </p>
                      <p className="text-muted-foreground whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  )}
                  {submission.data && Object.keys(submission.data).length > 0 && (
                    <div className="bg-muted p-3 rounded-lg text-sm">
                      <p className="font-semibold mb-2">Data Tambahan:</p>
                      <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-48">
                        {JSON.stringify(submission.data, null, 2)}
                      </pre>
                    </div>
                  )}
                  <div className="flex justify-end gap-2 pt-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(submission.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Hapus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
