'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SCHOOL_INFO, HOME_IMAGES, DEVELOPER_IMAGES, QUOTES } from '@/lib/constants'

// 10 Slide Foto dengan Quotes - menggunakan image dari /public/images/home/
const heroSlides = HOME_IMAGES.heroSlides.map((src, i) => ({
  src,
  alt: `Slide ${i + 1}`,
  title: `Slide foto ${i + 1}`,
  quote: QUOTES[i % QUOTES.length].text,
}))

const quotes = QUOTES.map(q => q.text)

// 6 News Items - menggunakan images dari /public/images/home/news-{1-6}.jpg
const newsItems = [
  {
    id: '1',
    title: 'Ujian Sekolah Hari Ke Dua',
    excerpt: 'Pelaksanaan ujian sekolah tahap kedua berjalan lancar...',
    image: HOME_IMAGES.news[0],
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Ujian Sekolah',
    excerpt: 'Rangkaian ujian sekolah telah dimulai dengan tertib...',
    image: HOME_IMAGES.news[1],
    date: '2024-01-10',
  },
  {
    id: '3',
    title: 'Workshop Teknologi',
    excerpt: 'Workshop teknologi terbaru untuk semua siswa...',
    image: HOME_IMAGES.news[2],
    date: '2024-01-05',
  },
  {
    id: '4',
    title: 'Classmeet di SMK PATRIOT 1 Berjalan Lancar dan Sukses',
    excerpt: 'Acara classmeet telah berhasil dilaksanakan...',
    image: HOME_IMAGES.news[3],
    date: '2024-01-01',
  },
  {
    id: '5',
    title: 'Semangat untuk Ujian',
    excerpt: 'Mari kita dukung semangat siswa dalam menghadapi ujian...',
    image: HOME_IMAGES.news[4],
    date: '2023-12-28',
  },
  {
    id: '6',
    title: 'Acara Wisuda Kelas XII',
    excerpt: 'Acara wisuda tahun ini berlangsung meriah dan penuh kebahagiaan...',
    image: HOME_IMAGES.news[5],
    date: '2023-12-20',
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
  const [state, setState] = useState({ currentSlide: 0, direction: 1 })
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setState((prev) => ({
        currentSlide: (prev.currentSlide + 1) % heroSlides.length,
        direction: 1,
      }))
    }, 7000)
    return () => clearInterval(timer)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setState((prev) => ({
      currentSlide: index,
      direction: index > prev.currentSlide ? 1 : -1,
    }))
    setAutoplay(false)
  }

  const nextSlide = () => {
    setState((prev) => ({
      currentSlide: (prev.currentSlide + 1) % heroSlides.length,
      direction: 1,
    }))
    setAutoplay(false)
  }

  const prevSlide = () => {
    setState((prev) => ({
      currentSlide: (prev.currentSlide - 1 + heroSlides.length) % heroSlides.length,
      direction: -1,
    }))
    setAutoplay(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const swipeDelta = touchStart - touchEnd
    
    // Swipe left (touchStart > touchEnd): move thumb from right to left = show next slide
    if (swipeDelta > swipeThreshold) {
      setState((prev) => ({
        currentSlide: (prev.currentSlide + 1) % heroSlides.length,
        direction: 1,
      }))
      setAutoplay(false)
    }
    // Swipe right (touchEnd > touchStart): move thumb from left to right = show previous slide
    else if (swipeDelta < -swipeThreshold) {
      setState((prev) => ({
        currentSlide: (prev.currentSlide - 1 + heroSlides.length) % heroSlides.length,
        direction: -1,
      }))
      setAutoplay(false)
    }
  }

  return (
    <div 
      className="relative w-full bg-muted overflow-hidden rounded-lg aspect-video cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentSlide}
          className="absolute inset-0"
          initial={{ x: state.direction > 0 ? 1000 : -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: state.direction > 0 ? -1000 : 1000, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img
            src={heroSlides[state.currentSlide].src}
            alt={heroSlides[state.currentSlide].alt}
            className="w-full h-full object-cover"
            width={1200}
            height={500}
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
    <div className="space-y-4">
      {/* Sequential Quotes */}
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

      {/* Marquee with 2 second delay */}
      <div className="bg-primary text-white py-4 rounded-lg overflow-hidden" suppressHydrationWarning>
        <motion.div
          className="flex gap-8 whitespace-nowrap px-4"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
            repeatDelay: 1,
          }}
          key="marquee-animation"
        >
          {/* Duplicate quotes to create seamless loop */}
          {[...quotes, ...quotes].map((quote, i) => (
            <span key={`quote-${i}`} className="text-lg font-medium min-w-max">
              {quote} •
            </span>
          ))}
        </motion.div>
      </div>
    </div>
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

      {/* Kepala Sekolah Greeting Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-2">Sambutan Kepala Sekolah</h2>
            <p className="text-muted-foreground text-lg mb-8">Pesan inspiratif dari Kepala SMK PATRIOT 1 BEKASI</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-lg border-4 border-primary/20"
              >
                <div className="relative w-full aspect-square bg-gradient-to-br from-primary to-secondary">
                  <Image
                    src={DEVELOPER_IMAGES.agusYuliono}
                    alt="Kepala Sekolah Agus Yuliono"
                    fill
                    className="w-full h-full object-cover relative z-10"
                    priority
                  />
                  {/* Fallback Avatar - hidden behind image with z-0 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold pointer-events-none z-0">
                    AY
                  </div>
                </div>
                <div className="bg-primary text-white p-4 text-center">
                  <h3 className="font-bold text-xl">Agus Yuliono, S.Pd, M.Si</h3>
                  <p className="text-sm">Kepala SMK PATRIOT 1 BEKASI</p>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed italic">
                    "Assalamu'alaikum wr.wb."
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Puji syukur kepada Allah SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerah nya, sehingga website SMK Patriot 1 Bekasi ini dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada.
                  </p>
                  <p className="text-foreground leading-relaxed text-sm text-muted-foreground line-clamp-3">
                    Kami sadar sepenuhnya dalam rangka memajukan pendidikan di era berkembangnya Teknologi Informasi yang begitu pesat, sangat diperlukan berbagai sarana prasarana yang kondusif, kebutuhan berbagai informasi siswa, guru, orangtua maupun masyarakat...
                  </p>
                </div>

                <Link href="/sambutan-kepala-sekolah">
                  <Button className="mt-6 bg-primary hover:bg-primary/90">
                    Selengkapnya
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
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

      {/* CTA - Daftar Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tertarik Mendaftar?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang dan jadilah bagian dari keluarga besar SMK PATRIOT 1 BEKASI
            </p>
            <Link href="/ppdb/daftar">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg"
              >
                Daftar Sekarang
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2 text-foreground">INFO PENDAFTARAN HUBUNGI</h2>
            <p className="text-muted-foreground mb-8">Hubungi kami untuk informasi lebih lanjut tentang pendaftaran SPMB</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Bp. Trisno</h3>
                <p className="mb-3">
                  <span className="font-semibold">Telepon:</span> 081-294-146-501
                </p>
                <a
                  href="https://wa.me/6281294146501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-primary px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                >
                  Chat via WhatsApp
                </a>
              </div>

              <div className="bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Ibu. Essy S</h3>
                <p className="mb-3">
                  <span className="font-semibold">Telepon:</span> 0812-9677386
                </p>
                <a
                  href="https://wa.me/628129677386"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-secondary px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>
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
              {/* Main Image */}
              {selectedNews.image && (
                <div className="mb-6">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
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
