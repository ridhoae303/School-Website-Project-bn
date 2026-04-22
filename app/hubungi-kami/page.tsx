'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SCHOOL_INFO } from '@/lib/constants'

export default function HubungiKamiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://smkspatriot1bekasi.my.id/hubungi-kami', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu menjawab pertanyaan Anda tentang SMK PATRIOT 1 BEKASI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
          >
            <Phone size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Telepon</h3>
            <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:underline">
              {SCHOOL_INFO.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg"
          >
            <Mail size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:underline">
              {SCHOOL_INFO.email}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/60 to-secondary/60 text-white p-6 rounded-lg"
          >
            <MapPin size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Alamat</h3>
            <p>{SCHOOL_INFO.address}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-secondary/60 to-primary/60 text-white p-6 rounded-lg"
          >
            <Clock size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
            <p className="text-sm">Senin – Jumat: 07:00 – 13:00</p>
            <p className="text-sm">Sabtu: 07:00 – 12:00</p>
            <p className="text-sm">Minggu: Tutup</p>
          </motion.div>
        </div>

        {/* Contact Persons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg"
          >
            <h3 className="font-bold text-xl mb-3">Bp. Trisno</h3>
            <p className="mb-3">
              <span className="font-semibold">Telepon:</span> +62 812-9415-6501
            </p>
            <a
              href="https://wa.me/6281294156501"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Chat via WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg"
          >
            <h3 className="font-bold text-xl mb-3">Ibu. Essy</h3>
            <p className="mb-3">
              <span className="font-semibold">Telepon:</span> +62 812-9677-386
            </p>
            <a
              href="https://wa.me/628129677386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-secondary px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Chat via WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-12"
        >
          <p className="text-blue-900 text-sm">
            <strong>Catatan:</strong> Jika nomor WhatsApp pertama tidak terdaftar, silakan hubungi nomor kedua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-sm font-semibold mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm text-center">Pesan berhasil dikirim!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm text-center">Gagal mengirim pesan. Silakan coba lagi.</p>
              )}
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Informasi Penting</h2>
            
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <div className="flex gap-3 mb-3">
                  <Clock className="text-primary flex-shrink-0" />
                  <h3 className="font-bold text-lg">Jam Operasional</h3>
                </div>
                <p className="text-muted-foreground ml-9">
                  Senin - Jumat: 07:00 - 15:30 WIB<br/>
                  Sabtu: 07:00 - 12:00 WIB<br/>
                  Minggu: Tutup
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">WhatsApp</h3>
                <a
                  href={SCHOOL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h2 className="text-3xl font-bold mb-6">Lokasi Kami</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1770887410025!6m8!1m7!1sCAoSHENJQUJJaERLS1lVNjRRMTFwVHF4Qk1NWFlfRFU.!2m2!1d-6.219562875218638!2d106.9776017198212!3f0!4f10!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
