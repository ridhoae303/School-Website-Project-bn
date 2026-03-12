'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DeveloperPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)

  const skills = [
    { name: 'Full Stack Developer', percentage: 90 },
    { name: 'Manual Skills / Wiring', percentage: 10 },
    { name: 'DJ/Remixing', percentage: 96 },
    { name: 'Reverse Engineering', percentage: 100 },
  ]

  const hobbies = ['Reverse Engineering', 'DJ']

  const friends = [
    {
      name: 'Abyan Ruby Firdaus',
      description: 'Teman saya yang selalu mendukung dan membuat saya saat pembangunan project web ini.',
    },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Developer</h1>
          <p className="text-lg text-muted-foreground">
            Profil dan informasi developer yang membangun website ini
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              className="relative w-48 h-48 cursor-pointer"
              onClick={() => setExpandedProfile(expandedProfile === 'ridho' ? null : 'ridho')}
              onMouseEnter={() => setExpandedProfile('ridho')}
              onMouseLeave={() => setExpandedProfile(null)}
              animate={{ scale: expandedProfile === 'ridho' ? 1.15 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden border-4 border-white shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(30, 144, 255, 0.3)',
                    '0 0 40px rgba(30, 144, 255, 0.6)',
                    '0 0 20px rgba(30, 144, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">MR</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-2">Mohammed Ridho</h2>
            <p className="text-2xl text-secondary font-semibold mb-6">ridhoae303</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Full Stack Developer | Reverse Engineering Enthusiast | DJ/Remixing
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/ridhoae303"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <Github size={20} />
                  GitHub
                </Button>
              </a>
              <a
                href="https://instagram.com/ridhoae303_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 border-secondary text-secondary hover:bg-secondary/10">
                  <Instagram size={20} />
                  Instagram
                </Button>
              </a>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Hobi</h3>
              <div className="flex gap-2 flex-wrap">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">My Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <motion.span
                    animate={{
                      color: hoveredSkill === skill.name ? '#1e90ff' : '#666',
                    }}
                    className="font-bold text-lg"
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Friends Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">My Friends Support Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {friends.map((friend) => (
              <motion.div
                key={friend.name}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0 cursor-pointer"
                    onClick={() => setExpandedProfile(expandedProfile === friend.name ? null : friend.name)}
                    onMouseEnter={() => setExpandedProfile(friend.name)}
                    onMouseLeave={() => setExpandedProfile(null)}
                    animate={{ scale: expandedProfile === friend.name ? 1.2 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    {friend.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">{friend.name}</h3>
                    <p className="text-sm text-secondary font-semibold">Teman Setia</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {friend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About This Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h2 className="text-4xl font-bold mb-6">Tentang Project Ini</h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Website SMK PATRIOT 1 BEKASI ini dibangun dengan teknologi modern dan best practices 
              dalam web development. Dengan menggunakan Next.js 16, React 19, TypeScript, dan Tailwind CSS, 
              kami menciptakan website yang responsif, cepat, dan user-friendly.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Setiap halaman dirancang dengan mempertimbangkan user experience dan aksesibilitas. 
              Animasi smooth dan interaksi yang intuitif membuat pengunjung merasa nyaman menggunakan website ini.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
