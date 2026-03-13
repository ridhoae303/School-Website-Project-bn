# WHERE TO UPLOAD IMAGES - COMPLETE GUIDE

This document tells you EXACTLY where to upload each image and WHAT will happen when you do.

---

## HOME PAGE - `/public/images/home/`

### Hero Slider (10 images)
**Purpose:** Large banner images that rotate on homepage hero section

Upload these files (JPG/PNG, 1200x600px recommended):
- `hero-slide-1.jpg`
- `hero-slide-2.jpg`
- `hero-slide-3.jpg`
- `hero-slide-4.jpg`
- `hero-slide-5.jpg`
- `hero-slide-6.jpg`
- `hero-slide-7.jpg`
- `hero-slide-8.jpg`
- `hero-slide-9.jpg`
- `hero-slide-10.jpg`

**Result:** These images will automatically appear in the hero slider with quote animations

### News Section (4 images)
**Purpose:** News article thumbnail images

Upload these files (JPG/PNG, 600x400px recommended):
- `news-1.jpg` → First news item: "Ujian Sekolah Hari Ke Dua"
- `news-2.jpg` → Second news item: "Ujian Sekolah"
- `news-3.jpg` → Third news item: "Workshop Teknologi"
- `news-4.jpg` → Fourth news item: "Classmeet di SMK PATRIOT 1"

**Result:** These images appear as thumbnail previews in news section

---

## JURUSAN PAGES - `/public/images/jurusan/`

### TKJ Page - `/public/images/jurusan/tkj/`

Upload 4 slider images (600x400px recommended):
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`
- `slide-4.jpg`

**Result:** These will rotate in the TKJ page image slider

### TKR Page - `/public/images/jurusan/tkr/`

Upload 4 slider images (600x400px recommended):
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`
- `slide-4.jpg`

**Result:** These will rotate in the TKR page image slider

### TP Page - `/public/images/jurusan/tp/`

Upload 4 slider images (600x400px recommended):
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`
- `slide-4.jpg`

**Result:** These will rotate in the TP page image slider

### TITL Page - `/public/images/jurusan/titl/`

Upload 4 slider images (600x400px recommended):
- `slide-1.jpg`
- `slide-2.jpg`
- `slide-3.jpg`
- `slide-4.jpg`

**Result:** These will rotate in the TITL page image slider

---

## DEVELOPER PAGE - `/public/images/developer/`

### Profile Images

Upload profile photos (400x400px or larger, JPG/PNG):
- `mohammed-ridho.jpg` → Mohammed Ridho's profile photo (replaces "MR" text)
- `abyan-ruby.jpg` → Abyan Ruby Firdaus's profile photo (replaces initials)

**Result:** These images will display as circular profile pictures instead of CSS-only initials

---

## MADING / GALLERY - `/public/images/mading/`

### Gallery Images (12 images)

Upload gallery photos (400x300px recommended, JPG/PNG):
- `gallery-1.jpg` → Hari Guru
- `gallery-2.jpg` → Praktek Kejuruan
- `gallery-3.jpg` → Kunjungan Industri
- `gallery-4.jpg` → LDKS
- `gallery-5.jpg` → Peringatan Sumpah Pemuda
- `gallery-6.jpg` → Juara LKS
- `gallery-7.jpg` → Bakti Sosial
- `gallery-8.jpg` → Class Meeting
- `gallery-9.jpg` → Ujian Praktik
- `gallery-10.jpg` → Workshop Coding
- `gallery-11.jpg` → Penerimaan Raport
- `gallery-12.jpg` → Perpisahan Kelas XII

**Result:** These appear in the Mading gallery grid with click-to-view modal

---

## FORMS/DOCUMENTS - `/public/docs/`

### Registration Form PDF

File already uploaded:
- `Formulir-SPMB-2024.pdf`

**Result:** This PDF downloads when user clicks "Download Formulir" button on cetak-formulir page

---

## HOW THE CODE WORKS

When you upload an image, the code automatically finds it and displays it:

1. **Constants are set** in `/lib/constants.ts` - this tells the code WHERE to look for images
2. **Each page imports these constants** - Home page uses `HOME_IMAGES.heroSlides`, Developer uses `DEVELOPER_IMAGES.mohammedRidho`, etc.
3. **Images display automatically** - No extra code needed!

Example:
```javascript
// This constant in lib/constants.ts:
export const HOME_IMAGES = {
  heroSlides: [
    '/images/home/hero-slide-1.jpg',
    '/images/home/hero-slide-2.jpg',
    // ...
  ]
}

// Gets used in app/page.tsx like this:
const heroSlides = HOME_IMAGES.heroSlides.map((src, i) => ({
  src, // This will look for the actual file!
  alt: `Slide ${i + 1}`,
  // ...
}))
```

When you upload `hero-slide-1.jpg` to `/public/images/home/`, it automatically appears!

---

## QUICK CHECKLIST

- [ ] Upload 10 hero slides to `/public/images/home/`
- [ ] Upload 4 news images to `/public/images/home/`
- [ ] Upload 4 TKJ slider images to `/public/images/jurusan/tkj/`
- [ ] Upload 4 TKR slider images to `/public/images/jurusan/tkr/`
- [ ] Upload 4 TP slider images to `/public/images/jurusan/tp/`
- [ ] Upload 4 TITL slider images to `/public/images/jurusan/titl/`
- [ ] Upload 2 profile photos to `/public/images/developer/`
- [ ] Upload 12 gallery images to `/public/images/mading/`

That's it! The website will automatically display all the images.
