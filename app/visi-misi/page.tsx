'use client'

import { motion } from 'framer-motion'

export default function VisiMisiPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Visi & Misi</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komitmen SMK PATRIOT 1 BEKASI dalam mendidik dan memberdayakan generasi muda
          </p>
        </motion.div>

        {/* Visi Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">VISI</h2>
            <div className="bg-gradient-to-r from-secondary to-secondary/80 text-white p-8 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed font-semibold">
                Menjadi SMK unggul yang menghasilkan lulusan berkualitas, berkarakter, dan kompeten dalam bidangnya, serta mampu berkontribusi nyata bagi pembangunan bangsa dan negara.
              </p>
            </div>
          </div>
          <motion.div
            className="h-96 bg-muted rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/500x400?text=Visi"
              alt="Visi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Misi Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center"
        >
          <motion.div
            className="h-96 bg-muted rounded-lg overflow-hidden order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/500x400?text=Misi"
              alt="Misi"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-primary mb-6">MISI</h2>
            <div className="space-y-4">
              {[
                'Menyelenggarakan pendidikan teknis profesional yang relevan dengan kebutuhan industri',
                'Mengembangkan kurikulum yang inovatif dan sesuai dengan perkembangan teknologi',
                'Meningkatkan mutu pendidikan melalui pengembangan SDM dan sarana pembelajaran',
                'Membangun kemitraan strategis dengan dunia usaha dan industri',
                'Menumbuhkan sikap profesional, mandiri, dan tanggung jawab pada siswa',
              ].map((misi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-lg text-foreground pt-1">{misi}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-primary/80 text-white p-12 rounded-lg text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">MOTTO SEKOLAH</h3>
          <p className="text-2xl font-semibold leading-relaxed">
            "SMK PATRIOT 1 BEKASI PANTANG MUNDUR DEMI MENUNTUT ILMU, PATRIOT..... JAYA! JAYA! JAYA!"
          </p>
        </motion.div>
      </div>
    </div>
  )
}
