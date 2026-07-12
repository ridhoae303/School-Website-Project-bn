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
      const result = await initializeExamUsers()
      
      if (result.success) {
        setSuccess(true)
        setTimeout(() => {
          window.location.href = '/ujian-online/login'
        }, 2000)
      } else {
        setError(result.message || 'Gagal mengatur exam users')
      }
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
          <div className="space-y-3 bg-muted p-4 rounded-lg text-sm">
            <p className="font-semibold">Credentials yang akan di-setup:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Username:</strong> ridhoae303<br />
                <strong>Password:</strong> hayase yuuka best girl
              </li>
              <li>
                <strong>Username:</strong> Kusnadi, S.Kom.<br />
                <strong>Password:</strong> 085691706159
              </li>
            </ul>
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

          <Button 
            onClick={handleSetup}
            disabled={loading || success}
            className="w-full"
            size="lg"
          >
            {loading ? 'Mengatur...' : 'Setup Exam Users'}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
