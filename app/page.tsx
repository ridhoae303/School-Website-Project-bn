'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SCHOOL_INFO, IMAGE_PLACEHOLDERS } from '@/lib/constants'

// 10 Slide Foto dengan Quotes
const heroSlides = Array.from({ length: 10 }, (_, i) => ({
  src: IMAGE_PLACEHOLDERS.hero,
  alt: `Slide ${i + 1}`,
  title: `Slide foto ${i + 1}`,
  quote: `Setiap usaha membawa hasil, terus berjuang! Quote ${i + 1}`,
}))

const quotes = heroSlides.map(s => s.quote)

// 6 News Items
const newsItems = [
  {
    id: '1',
    title: 'Ujian Sekolah Hari Ke Dua',
    excerpt: 'Pelaksanaan ujian sekolah tahap kedua berjalan lancar...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-15',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
  {
    id: '2',
    title: 'Ujian Sekolah',
    excerpt: 'Rangkaian ujian sekolah telah dimulai dengan tertib...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-10',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
  {
    id: '3',
    title: 'Workshop Teknologi',
    excerpt: 'Workshop teknologi terbaru untuk semua siswa...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-05',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
  {
    id: '4',
    title: 'Classmeet di SMK PATRIOT 1 Berjalan Lancar dan Sukses',
    excerpt: 'Acara classmeet telah berhasil dilaksanakan...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2024-01-01',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
  {
    id: '5',
    title: 'Semangat untuk Ujian',
    excerpt: 'Mari kita dukung semangat siswa dalam menghadapi ujian...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2023-12-28',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
  {
    id: '6',
    title: 'Acara Wisuda Kelas XII',
    excerpt: 'Acara wisuda tahun ini berlangsung meriah dan penuh kebahagiaan...',
    image: IMAGE_PLACEHOLDERS.hero,
    date: '2023-12-20',
    images: Array(6).fill(IMAGE_PLACEHOLDERS.hero),
  },
]

interface ModalItem {
  id: string
  title: string
  image?: string
  images?: string[]
}

// Hero Slider Component
function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setAutoplay(false)
  }

  return (
    <div className="relative w-full h-96 md:h-screen bg-muted overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img
            src={heroSlides[currentSlide].src}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Sequential Quotes Component
function SequentialQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-6 rounded-lg text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentQuote}
          className="text-xl md:text-2xl font-semibold px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          "{quotes[currentQuote]}"
        </motion.p>
      </AnimatePresence>
      <p className="text-sm text-white/70 mt-2">{currentQuote + 1} dari {quotes.length}</p>
    </motion.div>
  )
}

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<ModalItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      {/* Hero Slider dengan Sequential Quotes */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSlider />
          <div className="mt-6">
            <SequentialQuotes />
          </div>
        </div>
      </section>

      {/* News Items Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-4xl font-bold text-foreground mb-2">Berita Terbaru</h2>
            <p className="text-muted-foreground text-lg">Informasi terkini dari SMK PATRIOT 1 BEKASI</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news, i) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedNews(news)}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-secondary font-semibold mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{news.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedNews(news)
                    }}
                  >
                    Selengkapnya
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jajak Pendapat */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-4xl font-bold text-foreground mb-2">Jajak Pendapat</h2>
            <p className="text-muted-foreground text-lg">Berikan masukan Anda untuk kami</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Apa pendapat Anda tentang SMK PATRIOT 1 BEKASI?</h3>
              <div className="space-y-3">
                {['Sangat Baik', 'Baik', 'Cukup', 'Perlu Perbaikan'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="poll" value={option} className="w-4 h-4" />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Kirim Pendapat</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl font-bold mb-2">Staff Sekolah</h2>
              <p className="text-muted-foreground">Kunjungi blog Kusnadi, S.Kom untuk informasi lebih lanjut</p>
            </div>
            <motion.a
              href="https://blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-semibold">
                Kunjungi Blog Kusnadi, S.Kom
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Modal untuk Preview Berita */}
      {selectedNews && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedNews(null)}
        >
          <motion.div
            className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white flex items-center justify-between p-4 border-b">
              <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-2 hover:bg-muted rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Image Slider untuk Preview */}
              {selectedNews.images && selectedNews.images.length > 0 && (
                <div className="mb-6">
                  <div className="relative w-full h-80 bg-muted rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedNews.images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(Math.min(selectedNews.images!.length - 1, currentImageIndex + 1))}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      >
                        →
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedNews.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                          i === currentImageIndex ? 'border-primary' : 'border-border'
                        }`}
                      >
                        <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground text-lg leading-relaxed">
                Deskripsi lengkap dari berita {selectedNews.title}. Ini adalah deskripsi detail yang menjelaskan lebih lanjut tentang apa yang terjadi dan relevansinya dengan sekolah kami.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
