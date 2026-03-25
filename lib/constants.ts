// School Information
export const SCHOOL_INFO = {
  name: 'SMK PATRIOT 1 BEKASI',
  abbreviation: 'SMK PATRIOT 1',
  motto: 'SMK PATRIOT 1 BEKASI PANTANG MUNDUR DEMI MENUNTUT ILMU, PATRIOT..... JAYA! JAYA! JAYA!',
  address: 'Jl. Kalibaru Timur, Kec. Medan Satria Kota Bekasi',
  phone: '085691706159',
  whatsapp: 'https://wa.me/6285691706159?text=Permisi+saya+mau+ada+keperluan+mengenai+pendaftaran+siswa,+nomor+ini+saya+dapatkan+dari+website+SMK+PATRIOT+1+Bekasi.',
  email: 'smkpatriot1bekasi@gmail.com',
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

// Image Placeholders - Local Image Paths
export const IMAGE_PLACEHOLDERS = {
  hero: '/images/home/hero-slide-default.jpg',
  team: '/images/developer/profile-default.jpg',
  achievement: '/images/home/news-default.jpg',
  gallery: '/images/mading/gallery-default.jpg',
}

// Logo Image
export const LOGO_IMAGE = '/images/logo.png'

// Home Page Images
export const HOME_IMAGES = {
  heroSlides: [
    '/images/home/hero-slide-1.jpg',
    '/images/home/hero-slide-2.jpg',
    '/images/home/hero-slide-3.jpg',
    '/images/home/hero-slide-4.jpg',
    '/images/home/hero-slide-5.jpg',
    '/images/home/hero-slide-6.jpg',
    '/images/home/hero-slide-7.jpg',
    '/images/home/hero-slide-8.jpg',
    '/images/home/hero-slide-9.jpg',
    '/images/home/hero-slide-10.jpg',
  ],
  news: [
    '/images/home/news-1.jpg',
    '/images/home/news-2.jpg',
    '/images/home/news-3.jpg',
    '/images/home/news-4.jpg',
    '/images/home/news-5.jpg',
    '/images/home/news-6.jpg',
  ],
}

// Jurusan Page Images
export const JURUSAN_IMAGES = {
  tkj: [
    '/images/jurusan/tkj/slide-1.jpg',
    '/images/jurusan/tkj/slide-2.jpg',
    '/images/jurusan/tkj/slide-3.jpg',
    '/images/jurusan/tkj/slide-4.jpg',
  ],
  tkr: [
    '/images/jurusan/tkr/slide-1.jpg',
    '/images/jurusan/tkr/slide-2.jpg',
    '/images/jurusan/tkr/slide-3.jpg',
    '/images/jurusan/tkr/slide-4.jpg',
  ],
  tp: [
    '/images/jurusan/tp/slide-1.jpg',
    '/images/jurusan/tp/slide-2.jpg',
    '/images/jurusan/tp/slide-3.jpg',
    '/images/jurusan/tp/slide-4.jpg',
  ],
  titl: [
    '/images/jurusan/titl/slide-1.jpg',
    '/images/jurusan/titl/slide-2.jpg',
    '/images/jurusan/titl/slide-3.jpg',
    '/images/jurusan/titl/slide-4.jpg',
  ],
}

// Developer Page Images
export const DEVELOPER_IMAGES = {
  mohammedRidho: '/images/developer/mohammed-ridho.jpg',
  abyanRuby: '/images/developer/abyan-ruby.jpg',
}

// Mading Gallery Images
export const MADING_IMAGES = Array.from(
  { length: 12 },
  (_, i) => `/images/mading/gallery-${i + 1}.jpg`
)

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
