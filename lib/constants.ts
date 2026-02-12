// School Information
export const SCHOOL_INFO = {
  name: 'SMK PATRIOT 1 BEKASI',
  abbreviation: 'SMK PATRIOT 1',
  address: 'Jl. Gatot Subroto No. 1, Bekasi, Indonesia',
  phone: '+62 21-881-2345',
  email: 'info@smkpatriot1.sch.id',
  website: 'www.smkpatriot1.sch.id',
  foundedYear: 2005,
  description: 'Sekolah Menengah Kejuruan (SMK) PATRIOT 1 BEKASI adalah institusi pendidikan yang berkomitmen untuk menghasilkan lulusan yang berkualitas, terampil, dan berakhlak mulia.',
}

// API Configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
}

// Navigation Menu Items
export const NAV_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Keluarga Besar', href: '/keluarga-besar' },
  { label: 'Akademik', href: '/akademik' },
  { label: 'Prestasi', href: '/prestasi' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Mading', href: '/mading-sekolah' },
  { label: 'Jajak Pendapat', href: '/jajak-pendapat' },
  { label: 'PPDB', href: '/panduan-ppdb' },
  { label: 'Hubungi Kami', href: '/hubungi-kami' },
]

// API Endpoints
export const API_ENDPOINTS = {
  // News & Announcements
  getNews: '/news',
  getNewsDetail: (id: string) => `/news/${id}`,
  
  // Achievements
  getAchievements: '/achievements',
  getAchievementCategories: '/achievements/categories',
  
  // Gallery
  getGallery: '/gallery',
  getGalleryByCategory: (category: string) => `/gallery?category=${category}`,
  
  // Polls
  getActivePoll: '/polls/active',
  getPollHistory: '/polls/history',
  submitVote: '/polls/vote',
  
  // Contact
  submitContactForm: '/contact',
  
  // Staff
  getStaff: '/staff',
  getStaffByRole: (role: string) => `/staff?role=${role}`,
}

// Image Placeholders
export const IMAGE_PLACEHOLDERS = {
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
  team: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
  achievement: 'https://images.unsplash.com/photo-1541339907198-e41de11261db?w=400&h=400&fit=crop',
  gallery: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop',
}

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
}

// Site Navigation
export const SITE_CONFIG = {
  title: 'SMK PATRIOT 1 BEKASI',
  description: 'Sekolah Menengah Kejuruan PATRIOT 1 BEKASI - Mendidik, Memberdayakan, Membangun Masa Depan',
  socialLinks: {
    facebook: 'https://facebook.com/smkpatriot1bekasi',
    instagram: 'https://instagram.com/smkpatriot1bekasi',
    youtube: 'https://youtube.com/smkpatriot1bekasi',
    twitter: 'https://twitter.com/smkpatriot1',
  },
}
