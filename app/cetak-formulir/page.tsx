'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Printer, Download } from 'lucide-react'
import { cetakFormulirSchema } from '@/lib/validators'

export default function CetakFormulirPage() {
  const [formData, setFormData] = useState({
    noPendaftaran: '',
    tglLahir: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [lastDownloadTime, setLastDownloadTime] = useState(0)
  const [downloadCountdown, setDownloadCountdown] = useState(0)
  const [resultData, setResultData] = useState<any>(null)

  useEffect(() => {
    if (downloadCountdown > 0) {
      const timer = setTimeout(() => setDownloadCountdown(downloadCountdown - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [downloadCountdown])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validate
    const validation = cetakFormulirSchema.safeParse(formData)
    if (!validation.success) {
      const newErrors: Record<string, string> = {}
      validation.error.errors.forEach(err => {
        const field = err.path[0] as string
        newErrors[field] = err.message
      })
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/cetak-formulir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        setResultData(data.data)
      } else {
        setErrors({ form: data.message || 'Data tidak ditemukan' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    const now = Date.now()
    if (now - lastDownloadTime < 10000) {
      setDownloadCountdown(Math.ceil((10000 - (now - lastDownloadTime)) / 1000))
      return
    }
    setLastDownloadTime(now)
    window.open('/files/formulir-ppdb.pdf', '_blank')
    setDownloadCountdown(10)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Cetak Formulir PPDB</h1>
          <p className="text-xl text-muted-foreground">Isi data Anda untuk mencetak formulir pendaftaran</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Form */}
          <div className="lg:col-span-2 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Data Pribadi</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">NISN</label>
                  <input
                    type="text"
                    value={formData.nisn}
                    onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="NISN"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tanggal Lahir</label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">No. Telepon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="08xx"
                />
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Pilihan Cetak</h3>
              <Button
                onClick={handlePrint}
                variant="outline"
                className="w-full mb-3 border-white text-white hover:bg-white/10 gap-2"
              >
                <Printer size={20} />
                Cetak ke Printer
              </Button>
              <Button
                onClick={handleDownloadPDF}
                className="w-full bg-secondary hover:bg-secondary/90 text-white gap-2"
              >
                <Download size={20} />
                Download PDF
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-muted p-6 rounded-lg"
            >
              <h3 className="font-bold mb-3">Catatan Penting:</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Pastikan data sudah benar sebelum mencetak</li>
                <li>• Formulir dicetak ukuran A4</li>
                <li>• Lampirkan ijazah SMP</li>
                <li>• Tanda tangan orang tua</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-2 border-border rounded-lg p-8 bg-white"
          id="print-area"
        >
          <div className="text-center mb-8 border-b-2 pb-4">
            <h2 className="text-2xl font-bold">FORMULIR PENDAFTARAN SISWA BARU</h2>
            <p className="text-sm text-muted-foreground mt-2">SMK PATRIOT 1 BEKASI</p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Nama: {formData.name || '___________________'}</p>
              </div>
              <div>
                <p className="font-semibold">NISN: {formData.nisn || '___________________'}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Tanggal Lahir: {formData.birthDate || '___________________'}</p>
              </div>
              <div>
                <p className="font-semibold">No. HP: {formData.phone || '___________________'}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 flex justify-between">
            <div className="text-center text-sm">
              <p>Orang Tua/Wali</p>
              <div className="h-16" />
              <p>(_______________)</p>
            </div>
            <div className="text-center text-sm">
              <p>Peserta Didik</p>
              <div className="h-16" />
              <p>(_______________)</p>
            </div>
            <div className="text-center text-sm">
              <p>Panitia PPDB</p>
              <div className="h-16" />
              <p>(_______________)</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media print {
          body { background: white; }
          #print-area { border: none; page-break-after: always; }
        }
      `}</style>
    </div>
  )
}
