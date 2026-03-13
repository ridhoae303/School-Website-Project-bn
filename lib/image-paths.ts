/**
 * Centralized image paths configuration
 * All images should be referenced from this file for consistency
 */

export const IMAGE_PATHS = {
  // Home page hero slider images
  home: {
    heroSlides: [
      '/images/home/hero-slide-1.jpg',
      '/images/home/hero-slide-2.jpg',
      '/images/home/hero-slide-3.jpg',
      '/images/home/hero-slide-4.jpg',
    ],
  },

  // Jurusan pages
  jurusan: {
    tkj: {
      slides: [
        '/images/jurusan/tkj/slide-1.jpg',
        '/images/jurusan/tkj/slide-2.jpg',
        '/images/jurusan/tkj/slide-3.jpg',
        '/images/jurusan/tkj/slide-4.jpg',
      ],
    },
    tkr: {
      slides: [
        '/images/jurusan/tkr/slide-1.jpg',
        '/images/jurusan/tkr/slide-2.jpg',
        '/images/jurusan/tkr/slide-3.jpg',
        '/images/jurusan/tkr/slide-4.jpg',
      ],
    },
    tp: {
      slides: [
        '/images/jurusan/tp/slide-1.jpg',
        '/images/jurusan/tp/slide-2.jpg',
        '/images/jurusan/tp/slide-3.jpg',
        '/images/jurusan/tp/slide-4.jpg',
      ],
    },
    titl: {
      slides: [
        '/images/jurusan/titl/slide-1.jpg',
        '/images/jurusan/titl/slide-2.jpg',
        '/images/jurusan/titl/slide-3.jpg',
        '/images/jurusan/titl/slide-4.jpg',
      ],
    },
  },

  // Developer page
  developer: {
    profiles: {
      mohammedRidho: '/images/developer/mohammed-ridho.jpg',
      abyanRuby: '/images/developer/abyan-ruby.jpg',
    },
  },

  // Mading page
  mading: {
    postsDir: '/images/mading/',
  },

  // Forms and downloads
  forms: {
    formulirSPMB: '/Formulir-SPMB-2024.pdf',
  },

  // Placeholder for missing images (use real images instead)
  placeholder: (width: number, height: number) => 
    `https://via.placeholder.com/${width}x${height}?text=Image+Not+Added`,
}
