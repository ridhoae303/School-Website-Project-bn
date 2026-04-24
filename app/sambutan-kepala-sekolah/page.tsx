'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DEVELOPER_IMAGES } from '@/lib/constants'

export default function SambutanKepalaSkolahPage() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Sambutan Kepala Sekolah</h1>
          <p className="text-lg text-muted-foreground">
            Pesan inspiratif dari Kepala SMK PATRIOT 1 BEKASI
          </p>
        </motion.div>

        {/* Profile & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Kepala Sekolah Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 sticky top-24"
          >
            <div className="rounded-lg overflow-hidden shadow-lg border-4 border-primary/20">
              <div className="relative w-full aspect-square bg-gradient-to-br from-primary to-secondary">
                <Image
                  src={DEVELOPER_IMAGES.agusYuliono}
                  alt="Kepala Sekolah Agus Yuliono"
                  fill
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
                {/* Fallback Avatar - hidden behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-8xl font-bold pointer-events-none z-0">
                  AY
                </div>
              </div>
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="font-bold text-2xl mb-1">Agus Yuliono, S.Pd, M.Si</h3>
                <p className="text-sm font-semibold">Kepala SMK PATRIOT 1 BEKASI</p>
              </div>
            </div>
          </motion.div>

          {/* Sambutan Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg border border-primary/20">
              <p className="text-lg text-foreground leading-relaxed italic font-semibold mb-6">
                Assalamu'alaikum wr.wb.
              </p>

              <div className="space-y-6 text-foreground text-lg leading-relaxed">
                <p>
                  Puji syukur kepada Allah SWT, Tuhan Yang Maha Esa yang telah memberikan rahmat dan anugerah nya, sehingga website SMK Patriot 1 Bekasi ini dapat terbit. Salah satu tujuan dari website ini adalah untuk menjawab setiap kebutuhan informasi dengan memanfaatkan sarana teknologi informasi yang ada. Kami sadar sepenuhnya bahwa dalam rangka memajukan pendidikan di era berkembangnya teknologi informasi yang begitu pesat, sangat diperlukan berbagai sarana dan prasarana yang kondusif, serta kebutuhan berbagai informasi dari siswa, guru, orangtua, maupun masyarakat. Oleh karena itu, kami berusaha mewujudkan hal tersebut semaksimal mungkin.
                </p>

                <p>
                  Semoga dengan adanya website ini dapat membantu dan bermanfaat, terutama informasi yang berhubungan dengan pendidikan, ilmu pengetahuan dan informasi seputar SMK Patriot 1 Bekasi.
                </p>

                <p>
                  Besar harapan kami, sarana ini dapat memberi manfaat bagi semua pihak yang ada di lingkup pendidikan dan pemerhati pendidikan, secara khusus bagi SMK Patriot 1 Bekasi.
                </p>

                <p>
                  Akhirnya, kami mengharapkan masukan dari berbagai pihak untuk website ini agar kami terus belajar dan memperbarui diri. Dengan demikian, tampilan, isi, dan mutu website akan terus berkembang dan semakin baik di masa mendatang. Terima kasih atas kerja sama Anda, dan mari terus maju bersama untuk mencapai SMK Patriot 1 Bekasi yang lebih baik lagi.
                </p>

                <p className="italic font-semibold">
                  Wassalamu'alaikum wr.wb.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="text-foreground font-semibold mb-2">Hormat kami,</p>
                <p className="text-foreground mb-8">Kepala SMK PATRIOT 1 BEKASI</p>
                
                <div className="mb-12">
                  <p className="text-foreground font-semibold">ttd</p>
                </div>

                <p className="text-foreground font-bold text-lg">Agus Yuliono, S.Pd, M.Si</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
