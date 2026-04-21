'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

interface Ujian {
  id: string
  mapel: string
  waktu: string
  status: 'belum' | 'sedang' | 'selesai'
}

export default function UjianDashboard() {
  const [ujianList, setUjianList] = useState<Ujian[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('ujianToken')
    if (!token) {
      router.push('/ujian-online')
      return
    }

    // Fetch daftar ujian
    const fetchUjian = async () => {
      try {
        const response = await fetch('https://smkspatriot1bekasi.my.id/api/ujian/daftar', {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (response.ok) {
          const data = await response.json()
          setUjianList(data)
        } else if (response.status === 401) {
          localStorage.removeItem('ujianToken')
          router.push('/ujian-online')
        }
      } catch (err) {
        console.error('Error fetching ujian:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUjian()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('ujianToken')
    router.push('/ujian-online')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'belum':
        return 'bg-muted'
      case 'sedang':
        return 'bg-secondary'
      case 'selesai':
        return 'bg-primary'
      default:
        return 'bg-muted'
    }
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary">Daftar Ujian</h1>
            <p className="text-muted-foreground mt-2">Pilih ujian untuk mengerjakan</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut size={18} />
            Keluar
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-secondary" />
            <p className="text-muted-foreground mt-4">Memuat data ujian...</p>
          </div>
        ) : ujianList.length === 0 ? (
          <div className="bg-muted rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Tidak ada ujian tersedia saat ini</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {ujianList.map((ujian, index) => (
              <motion.div
                key={ujian.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {ujian.mapel}
                    </h3>
                    <p className="text-muted-foreground">
                      Waktu: {ujian.waktu}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-lg text-white text-sm font-semibold ${getStatusColor(ujian.status)}`}>
                      {ujian.status === 'belum' && 'Belum Dimulai'}
                      {ujian.status === 'sedang' && 'Sedang Berlangsung'}
                      {ujian.status === 'selesai' && 'Selesai'}
                    </span>
                    <Button
                      disabled={ujian.status === 'belum' || ujian.status === 'selesai'}
                      className="bg-secondary hover:bg-secondary/90"
                    >
                      {ujian.status === 'belum' && 'Menunggu'}
                      {ujian.status === 'sedang' && 'Mulai Ujian'}
                      {ujian.status === 'selesai' && 'Selesai'}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
