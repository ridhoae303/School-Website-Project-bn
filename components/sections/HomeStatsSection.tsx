'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { staggerContainerVariants, staggerItemVariants, countUpVariants } from '@/lib/animations'
import { Users, BookOpen, Trophy, Building2 } from 'lucide-react'

const stats = [
  {
    label: 'Siswa Aktif',
    value: '1,250+',
    icon: Users,
  },
  {
    label: 'Guru Berpengalaman',
    value: '85+',
    icon: BookOpen,
  },
  {
    label: 'Prestasi Nasional',
    value: '150+',
    icon: Trophy,
  },
  {
    label: 'Fasilitas Modern',
    value: '40+',
    icon: Building2,
  },
]

export default function HomeStatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Keunggulan SMK PATRIOT 1</h2>
          <p className="text-muted-foreground">
            Komitmen kami terhadap keunggulan pendidikan tercermin dalam angka-angka ini
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <motion.div
                    variants={countUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  </motion.div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
