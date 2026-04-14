'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function VisiMisiPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Visi & Misi</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Komitmen SMK PATRIOT 1 BEKASI terhadap pendidikan berkualitas
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg text-center"
          >
            <p className="text-2xl font-bold italic leading-relaxed">
              "SMK PATRIOT 1 BEKASI - PENTANG MUNDUR DEMI MENUNTUT ILMU, PATRIOT..... JAYA! JAYA! JAYA!"
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Visi */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg border-l-4 border-primary"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Visi</h2>
            <p className="text-2xl text-foreground leading-relaxed font-semibold">
              Teruji dalam prestasi, Terpuji dalam pekerti
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-lg border-l-4 border-secondary"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">Misi</h2>
            <p className="text-xl text-foreground leading-relaxed">
              Mewujudkan institusi yang menghasilkan siswa mandiri, santun dan terampil.
            </p>
          </motion.div>

          {/* Nilai-nilai Inti */}
          <motion.div
            variants={itemVariants}
            className="bg-white border-2 border-border p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Nilai-nilai Inti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Integritas', desc: 'Jujur dan terpercaya dalam setiap tindakan' },
                { title: 'Profesionalisme', desc: 'Berkompeten dan berdedikasi tinggi' },
                { title: 'Inovasi', desc: 'Selalu mencari cara baru yang lebih baik' },
                { title: 'Kolaborasi', desc: 'Bekerja sama dalam tim dengan harmonis' },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-muted rounded-lg"
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
