'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { validateExamLogin } from '@/app/actions/exam-auth'

export default function UjianLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await validateExamLogin(username, password)
      
      if (result.success) {
        // Store session in sessionStorage
        sessionStorage.setItem('ujian_user', JSON.stringify({
          id: result.userId,
          username: username,
        }))
        router.push('/ujian-online/dashboard')
      } else {
        setError(result.message || 'Login gagal')
      }
    } catch (err) {
      setError('Terjadi kesalahan server')
      console.error('[v0] Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/ujian-online" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Link>

        {/* Login Card */}
        <Card className="border-2">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl">Login Ujian Online</CardTitle>
            <CardDescription className="text-white/90">
              Masukkan username dan password untuk mengakses ujian
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-red-700">{error}</p>
                  {error.includes('Terjadi kesalahan server') && (
                    <p className="text-xs text-red-600 mt-2">
                      Sistem belum ter-setup. <Link href="/setup/exam-users" className="underline font-semibold hover:text-red-800">Setup di sini</Link>
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <PasswordInput
                id="password"
                label="Password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />

              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Sedang memproses...' : 'Login'}
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-900">
                <strong>Masukkan username dan password yang telah diberikan oleh sekolah.</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <p className="text-xs text-muted-foreground text-center mt-4">
          Sistem ini menggunakan enkripsi password yang aman
        </p>
      </div>
    </div>
  )
}
