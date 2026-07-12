'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { initializeExamUsers } from '@/app/actions/exam-auth'

export default function SetupExamUsersPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSetup = async () => {
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // This page is only accessible to admins during setup
      // Credentials must be configured via environment variables or secure admin panel
      setError('Setup harus dilakukan melalui admin panel atau environment variables untuk keamanan')
    } catch (err) {
      setError('Terjadi kesalahan: ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Setup Exam Users</CardTitle>
          <CardDescription>Initialize exam login credentials</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3 bg-blue-50 border border-blue-200 p-4 rounded-lg text-sm">
            <p className="font-semibold text-blue-900">Informasi Penting:</p>
            <p className="text-blue-800">
              Untuk keamanan dan privasi, setup exam users harus dilakukan melalui:<br/>
              1. Admin Panel yang dilindungi otentikasi<br/>
              2. Environment variables yang aman<br/>
              3. Database admin yang teroksi dengan proper access control
            </p>
          </div>

          {success && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span>Setup berhasil! Redirecting...</span>
            </div>
          )}

          {error && (
            <div className="flex items-start gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/ujian-online/login'}
              className="w-full"
              size="lg"
            >
              Kembali ke Login
            </Button>
            <Button 
              onClick={() => window.location.href = '/admin/login'}
              className="w-full"
              size="lg"
            >
              Ke Admin Panel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
