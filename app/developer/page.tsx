'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { DEVELOPER_IMAGES } from '@/lib/constants'

export default function DeveloperPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const skills = [
    { name: 'Full Stack Developer', percentage: 90 },
    { name: 'Manual dexterity / Wiring', percentage: 10 },
    { name: 'DJ/Remixing', percentage: 96 },
    { name: 'Reverse Engineering', percentage: 100 },
  ]

  const hobbies = ['Reverse Engineering', 'DJ']

  const developers = [
    {
      name: 'Mohammed Ridho',
      initials: 'MR',
      role: 'Full Stack Developer',
      image: DEVELOPER_IMAGES.mohammedRidho, // Avatar image for card
      profileImage: DEVELOPER_IMAGES.mohammedRidhoProfile, // Separate profile photo
      description: 'Pemimpin project dan Full Stack Developer yang mengembangkan website ini dari awal.',
      github: 'https://github.com/ridhoae303',
      instagram: 'https://instagram.com/ridhoae303_',
    },
    {
      name: 'Abyan Ruby Firdaus',
      initials: 'ARF',
      role: 'My Friend',
      image: DEVELOPER_IMAGES.abyanRuby,
      description: 'Teman saya yang selalu mendukung dalam pembangunan project web ini.',
      instagram: 'https://www.instagram.com/_abyanrby',
      tiktok: 'https://www.tiktok.com/@abyanrubayyyyy',
    },
    {
      name: 'Kusnadi, S.Kom',
      initials: 'K',
      role: 'My teacher in vocational school',
      image: DEVELOPER_IMAGES.kusnadi,
      description: 'Guru saya di sekolah kejuruan yang membimbing dalam pengembangan keterampilan programming dan web development.',
      blog: 'https://kusnadi88.blogspot.com/?m=1',
      tiktok: 'https://www.tiktok.com/@mr_kusnadi88',
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
              className="relative w-48 cursor-pointer flex justify-center"
              onClick={() => setExpandedProfile(expandedProfile === 'ridho' ? null : 'ridho')}
              onMouseEnter={() => setExpandedProfile('ridho')}
              onMouseLeave={() => setExpandedProfile(null)}
              animate={{ scale: expandedProfile === 'ridho' ? 1.15 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="w-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
                style={{ aspectRatio: '1 / 1' }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(30, 144, 255, 0.3)',
                    '0 0 40px rgba(30, 144, 255, 0.6)',
                    '0 0 20px rgba(30, 144, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src={DEVELOPER_IMAGES.mohammedRidho}
                  alt="Mohammed Ridho"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
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

        {/* Developers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developers.map((dev) => (
              <motion.div
                key={dev.name}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Profile Image Container with Fallback Avatar */}
                <motion.div
                  className="w-full rounded-lg overflow-hidden flex-shrink-0 cursor-pointer border-2 border-primary mb-6 bg-gradient-to-br from-primary to-secondary"
                  style={{ aspectRatio: '1 / 1' }}
                  onClick={() => setExpandedProfile(expandedProfile === dev.name ? null : dev.name)}
                  onMouseEnter={() => setExpandedProfile(dev.name)}
                  onMouseLeave={() => setExpandedProfile(null)}
                  animate={{ scale: expandedProfile === dev.name ? 1.05 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  {/* Image with fallback */}
                  <div className="w-full h-full relative">
                    {!imageErrors[dev.name] && (
                      <Image
                        src={dev.image}
                        alt={dev.name}
                        fill
                        className="w-full h-full object-cover"
                        priority
                        onError={() => {
                          setImageErrors(prev => ({...prev, [dev.name]: true}))
                        }}
                      />
                    )}
                    {/* CSS Fallback Avatar with Initials - only show if image fails */}
                    {imageErrors[dev.name] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                        {dev.initials}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Profile Info */}
                <h3 className="text-2xl font-bold mb-1">{dev.name}</h3>
                <p className="text-secondary font-semibold mb-4">{dev.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {dev.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 flex-wrap">
                  {dev.github && dev.github !== '#' && (
                    <a href={dev.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github size={16} />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {dev.instagram && dev.instagram !== '#' && (
                    <a href={dev.instagram} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Instagram size={16} />
                        Instagram
                      </Button>
                    </a>
                  )}
                  {dev.blog && (
                    <a href={dev.blog} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2 bg-secondary hover:bg-secondary/90">
                        Blog
                      </Button>
                    </a>
                  )}
                  {dev.tiktok && (
                    <a href={dev.tiktok} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Music size={16} />
                        TikTok
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vercel-style Wave Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <div className="relative w-full h-56 overflow-hidden rounded-lg bg-gradient-to-b from-primary/5 to-secondary/5">
            <svg
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(30, 144, 255)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(30, 144, 255)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
                fill="url(#waveGradient)"
                animate={{
                  d: [
                    "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                    "M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z",
                    "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M0,110 Q300,60 600,110 T1200,110 L1200,200 L0,200 Z"
                fill="rgb(30, 144, 255)"
                fillOpacity="0.1"
                animate={{
                  d: [
                    "M0,110 Q300,60 600,110 T1200,110 L1200,200 L0,200 Z",
                    "M0,80 Q300,30 600,80 T1200,80 L1200,200 L0,200 Z",
                    "M0,110 Q300,60 600,110 T1200,110 L1200,200 L0,200 Z",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
