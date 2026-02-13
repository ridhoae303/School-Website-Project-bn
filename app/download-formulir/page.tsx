'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, AlertCircle } from 'lucide-react'

export default function DownloadFormulirPage() {
  const [lastDownloadTime, setLastDownloadTime] = useState<number>(0)
  const [countdown, setCountdown] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [countdown])

  const handleDownload = async () => {
    const now = Date.now()
    
    if (now - lastDownloadTime < 10000) {
      setCountdown(Math.ceil((10000 - (now - lastDownloadTime)) / 1000))
      return
    }

    setIsLoading(true)
    try {
      // Simulate download
      const link = document.createElement('a')
      link.href = '/files/formulir-ppdb.pdf'
      link.download = 'formulir-ppdb.pdf'
      link.click()

      setLastDownloadTime(now)
      setCountdown(10)
    } catch (error) {
      console.error('Download error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const isDisabled = countdown > 0 || isLoading

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Download Formulir PPDB
            </h1>
            <p className="text-muted-foreground text-lg">
              Unduh formulir pendaftaran untuk calon siswa baru SMK PATRIOT 1 BEKASI
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Petunjuk:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Unduh formulir PDF di bawah ini</li>
                  <li>Cetak formulir dengan jelas</li>
                  <li>Isi formulir dengan data yang benar</li>
                  <li>Bawa formulir saat mendaftar di sekolah</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-muted rounded-lg">
            <h2 className="font-bold text-foreground mb-3">Apa yang dibutuhkan:</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Nama lengkap sesuai ijazah</li>
              <li>✓ Nomor induk siswa (NISN)</li>
              <li>✓ Asal sekolah</li>
              <li>✓ Pilihan jurusan (TKJ, TKR, TP, atau TITL)</li>
              <li>✓ Data orang tua/wali</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-4"
          >
            <Button
              onClick={handleDownload}
              disabled={isDisabled}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2 w-full"
            >
              <Download size={20} />
              {countdown > 0 ? `Tunggu ${countdown}s` : 'Download Formulir PDF'}
            </Button>

            {countdown > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-muted-foreground bg-yellow-50 border border-yellow-200 rounded-lg p-3"
              >
                Tunggu {countdown} detik sebelum mengunduh lagi
              </motion.div>
            )}
          </motion.div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-bold text-foreground mb-2">Pertanyaan?</h3>
            <p className="text-muted-foreground mb-4">
              Jika Anda mengalami masalah saat mengunduh, hubungi kami:
            </p>
            <a
              href="/hubungi"
              className="text-primary hover:underline font-semibold"
            >
              Hubungi Tim Administrasi PPDB
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
