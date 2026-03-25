'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, AlertCircle } from 'lucide-react'
import { YOUTUBE_VIDEOS } from '@/lib/constants'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'

export default function GaleriVideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(YOUTUBE_VIDEOS[0])
  const [useYoutube, setUseYoutube] = useState(true)
  const [youtubeError, setYoutubeError] = useState(false)

  const getYoutubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  return (
    <>
      <HeroSection
        title="Galeri Video"
        subtitle="Dokumentasi video kegiatan SMK PATRIOT 1 BEKASI"
      />

      <section className="py-16 bg-background">
        <Container>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Video Terkini</h2>
            <p className="text-muted-foreground">
              Tonton dokumentasi video berbagai kegiatan dan acara di SMK PATRIOT 1 BEKASI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black rounded-lg overflow-hidden aspect-video mb-4 flex items-center justify-center">
                {useYoutube && !youtubeError ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=0`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onError={() => setYoutubeError(true)}
                  ></iframe>
                ) : (
                  <video
                    width="100%"
                    height="100%"
                    controls
                    className="w-full h-full"
                  >
                    <source src={selectedVideo.fallbackVideo} type="video/mp4" />
                    <p className="text-white text-center p-4">Browser Anda tidak mendukung video player.</p>
                  </video>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-muted-foreground">{selectedVideo.description}</p>
              </div>

              {youtubeError && (
                <motion.div
                  className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-800">
                    Video YouTube tidak dapat diputar. Menggunakan video lokal sebagai alternatif.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Video List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-lg mb-4">Daftar Video</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {YOUTUBE_VIDEOS.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedVideo(video)
                      setUseYoutube(true)
                      setYoutubeError(false)
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedVideo.title === video.title
                        ? 'bg-primary text-white'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className="flex gap-3">
                      <img
                        src={getYoutubeThumbnail(video.id)}
                        alt={video.title}
                        className="w-12 h-9 rounded object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-sm line-clamp-2">{video.title}</p>
                        <p className="text-xs opacity-75 line-clamp-1">{video.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Fallback Option */}
              <div className="border-t pt-4 mt-4">
                <p className="text-xs text-muted-foreground mb-2">
                  Jika video YouTube tidak bisa diputar, klik tombol di bawah untuk menggunakan video lokal:
                </p>
                <button
                  onClick={() => {
                    setUseYoutube(false)
                    setYoutubeError(false)
                  }}
                  className={`w-full px-3 py-2 text-sm rounded transition-colors ${
                    !useYoutube
                      ? 'bg-secondary text-white'
                      : 'bg-secondary/20 hover:bg-secondary/40'
                  }`}
                >
                  {!useYoutube ? '✓ Menggunakan Video Lokal' : 'Gunakan Video Lokal'}
                </button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
