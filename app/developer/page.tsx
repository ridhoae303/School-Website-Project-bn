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
      initials: 'RH',
      role: 'Full Stack Developer',
      image: DEVELOPER_IMAGES.mohammedRidho,
      description: 'Pemimpin project dan Full Stack Developer yang mengembangkan website ini dari awal.',
      github: 'https://github.com/ridhoae303',
      instagram: 'https://instagram.com/ridhoae303_',
    },
    {
      name: 'Abyan Ruby Firdaus',
      initials: 'AR',
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

  const locations = [
    { city: 'California', region: 'Mountain View', address: 'Bonita Ave.' },
    { city: 'Jakarta Selatan', region: 'Sudirman' },
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
                    <Image
                      src={dev.image}
                      alt={dev.name}
                      fill
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement
                        img.style.display = 'none'
                      }}
                    />
                    {/* CSS Fallback Avatar with Initials */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                      {dev.initials}
                    </div>
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
                  {dev.tiktok && (
                    <a href={dev.tiktok} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Music size={16} />
                        TikTok
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organization Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">ridhoae303 Inc.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border"
              >
                <h3 className="font-bold text-xl mb-2">{location.city}</h3>
                <p className="text-muted-foreground">
                  {location.region}
                  {location.address && `, ${location.address}`}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-400 p-6 rounded text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              Anggota tim tidak dapat disebutkan, dan organisasi kami tidak perlu diketahui oleh siapapun.
            </p>
          </motion.div>
        </motion.div>

        {/* About This Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h2 className="text-4xl font-bold mb-6">Thanks</h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
            <p className="text-lg text-foreground leading-relaxed">
              We would like to extend our heartfelt gratitude to <strong>ridhoae303 Team</strong> for their exceptional dedication and effort in building this website. Their expertise in modern web development technologies, attention to detail, and commitment to delivering a high-quality user experience have been instrumental in creating a responsive, fast, and user-friendly platform for SMK PATRIOT 1 BEKASI. Thank you for your outstanding contributions to this project.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
