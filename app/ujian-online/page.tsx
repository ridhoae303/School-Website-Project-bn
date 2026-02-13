'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function UjianOnlineLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // TODO: Replace dengan API endpoint login Anda
      const response = await fetch('/api/ujian/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const { token } = await response.json()
        localStorage.setItem('ujianToken', token)
        router.push('/ujian-online/dashboard')
      } else {
        setError('Username atau password salah')
      }
    } catch (err) {
      setError('Terjadi kesalahan. Coba lagi nanti.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Ujian Online</h1>
          <p className="text-muted-foreground">Masuk dengan NIP/NIS dan Password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              NIP (Guru) / NIS (Siswa)
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan NIP/NIS"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan password"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm"
            >
              {error}
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-2"
          >
            {isLoading ? 'Sedang Login...' : 'Masuk'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
          <p className="font-semibold mb-2">Demo Akun:</p>
          <p>Guru: NIP 123456789 | Password: 12345</p>
          <p>Siswa: NIS 987654321 | Password: 12345</p>
        </div>
      </motion.div>
    </div>
  )
}
