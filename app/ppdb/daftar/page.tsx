'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ppdbRegisterSchema } from '@/lib/validators'

export default function PPDBDaftarPage() {
  const [formData, setFormData] = useState({
    nama: '',
    nisn: '',
    asalSekolah: '',
    jurusan: 'TKJ',
    nomorTelepon: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validate
    const validation = ppdbRegisterSchema.safeParse(formData)
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
      const response = await fetch('/api/ppdb/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ nama: '', nisn: '', asalSekolah: '', jurusan: 'TKJ', nomorTelepon: '', email: '' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Daftar Online PPDB</h1>
          <p className="text-xl text-muted-foreground">Daftarkan diri Anda di SMK PATRIOT 1 BEKASI</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-muted p-8 rounded-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nama Anda"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">No. Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="08xx"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Pilih Jurusan</label>
            <select
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">-- Pilih Jurusan --</option>
              <option value="tkj">TKJ (Teknik Komputer & Jaringan)</option>
              <option value="tkr">TKR (Teknik Kendaraan Ringan Otomotif)</option>
              <option value="tp">TP (Teknik Permesinan)</option>
              <option value="titl">TITL (Teknik Instalasi Tenaga Listrik)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tulis pesan atau pertanyaan Anda"
            />
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            >
              Pendaftaran Anda telah diterima. Kami akan menghubungi Anda segera.
            </motion.div>
          )}

          <Button
            type="submit"
            disabled={isLoading || submitted}
            className="w-full"
            size="lg"
          >
            {isLoading ? 'Mengirim...' : submitted ? 'Pendaftaran Selesai' : 'Daftar Sekarang'}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Informasi Penting</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Pendaftaran dibuka setiap tahun pada bulan Juni</li>
            <li>• Calon siswa harus memiliki Ijazah SMP atau yang sederajat</li>
            <li>• Verifikasi data dilakukan dalam 3 hari kerja</li>
            <li>• Pengumuman hasil seleksi akan diinformasikan melalui email dan SMS</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
