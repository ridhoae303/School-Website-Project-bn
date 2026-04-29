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
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://smkspatriot1bekasi.my.id/api',
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

// Logo Image Path
export const LOGO_PATH = '/images/logo/smk-patriot-logo.png'

// Image Placeholders - Local Image Paths
export const IMAGE_PLACEHOLDERS = {
  hero: '/images/home/hero-slide-default.jpg',
  team: '/images/developer/profile-default.jpg',
  achievement: '/images/home/news-default.jpg',
  gallery: '/images/mading/gallery-default.jpg',
}

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
  mohammedRidho: '/images/developer/ridhoae303.jpg', // Avatar in grid cards
  mohammedRidhoHero: '/images/developer/miyako.jpg', // Avatar in top profile section
  mohammedRidhoProfile: '/images/developer/ridho-profile.jpg',
  abyanRuby: '/images/developer/abyan-ruby.jpg',
  kusnadi: '/images/developer/kusnadi.jpg',
  agusYuliono: '/images/developer/agus-yuliono.jpg',
}

// Mading Gallery Images
export const MADING_IMAGES = Array.from(
  { length: 12 },
  (_, i) => `/images/mading/gallery-${i + 1}.jpg`
)

// General Gallery Images (Galeri page)
export const GALLERY_IMAGES = Array.from(
  { length: 9 },
  (_, i) => `/images/gallery/gallery-${i + 1}.jpg`
)

// Achievement/Prestasi Images
export const ACHIEVEMENT_IMAGES = Array.from(
  { length: 8 },
  (_, i) => `/images/achievements/achievement-${i + 1}.jpg`
)

// YouTube Videos - YouTube Embed IDs or fallback to local video directory (Limited to 8 videos)
export const YOUTUBE_VIDEOS = [
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Tour Kampus SMK PATRIOT 1', 
    description: 'Kunjungan virtual kampus SMK PATRIOT 1 BEKASI',
    fallbackVideo: '/videos/tour-kampus.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Upacara Bendera', 
    description: 'Pelaksanaan upacara bendera rutin minggu pagi',
    fallbackVideo: '/videos/upacara-bendera.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Praktek Kejuruan', 
    description: 'Sesi praktek kejuruan siswa TKJ',
    fallbackVideo: '/videos/praktek-kejuruan.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Kunjungan Industri', 
    description: 'Kunjungan industri ke PT Elektronik',
    fallbackVideo: '/videos/kunjungan-industri.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'LDKS Siswa Baru', 
    description: 'Latihan Dasar Kepemimpinan Siswa',
    fallbackVideo: '/videos/ldks-siswa-baru.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Kompetisi LKS', 
    description: 'Siswa meraih juara pada kompetisi LKS',
    fallbackVideo: '/videos/kompetisi-lks.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Wisata Edukatif', 
    description: 'Program wisata edukatif siswa ke berbagai tempat bersejarah',
    fallbackVideo: '/videos/wisata-edukatif.mp4'
  },
  { 
    id: 'dQw4w9WgXcQ', 
    title: 'Kegiatan Ekstrakurikuler', 
    description: 'Berbagai kegiatan ekstrakurikuler siswa SMK PATRIOT 1',
    fallbackVideo: '/videos/ekstrakurikuler.mp4'
  },
]

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
}

// Random Educational Quotes
export const QUOTES = [
  {
    text: 'Pendidikan adalah investasi terbaik untuk masa depan yang cerah dan penuh peluang.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Ilmu adalah cahaya yang menerangi jalan kesuksesan dan kemajuan bangsa.',
    author: 'Pramoedya Ananta Toer',
  },
  {
    text: 'Dengan pendidikan berkualitas, kita membangun generasi yang kompeten dan berkarakter.',
    author: 'Ki Hajar Dewantara',
  },
  {
    text: 'Belajar bukan hanya tentang meraih nilai, tetapi mengembangkan potensi diri sepenuhnya.',
    author: 'Paulo Coelho',
  },
  {
    text: 'Setiap siswa memiliki bakat unik yang perlu digali dan dikembangkan dengan optimal.',
    author: 'Howard Gardner',
  },
  {
    text: 'Keterampilan praktis yang dikuasai dengan baik membuka pintu kesempatan kerja yang luas.',
    author: 'John Dewey',
  },
  {
    text: 'Pendidikan vocasional menciptakan profesional yang siap menghadapi tantangan industri modern.',
    author: 'Peter Drucker',
  },
  {
    text: 'Kerja keras di sekolah hari ini adalah fondasi kesuksesan karir di masa depan.',
    author: 'Malcolm Gladwell',
  },
  {
    text: 'Kolaborasi dan kerja tim adalah kunci kesuksesan dalam dunia pendidikan maupun profesional.',
    author: 'Margaret Wheatley',
  },
  {
    text: 'Mimpi besar dimulai dari keputusan kecil untuk belajar dan terus berkembang setiap hari.',
    author: 'Zig Ziglar',
  },
]

// Site Navigation
export const SITE_CONFIG = {
  title: 'SMK PATRIOT 1 BEKASI',
  description: 'Sekolah Menengah Kejuruan PATRIOT 1 BEKASI - Mendidik, Memberdayakan, Membangun Masa Depan',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=100079274297750',
    instagram: 'https://www.instagram.com/smk_patriot1',
    youtube: 'https://m.youtube.com/@smkpatriot1bekasi448',
    x: 'https://x.com/osissmkpatriot1',
  },
}
