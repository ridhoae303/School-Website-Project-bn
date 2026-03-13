# IMAGE PLACEMENT MAP - Exact Instructions for Every Page

## 📁 Directory Structure Created
```
public/
├── docs/
│   └── Formulir-SPMB-2024.pdf          ✓ Already uploaded
├── images/
│   ├── home/
│   ├── jurusan/
│   │   ├── tkj/
│   │   ├── tkr/
│   │   ├── tp/
│   │   └── titl/
│   ├── developer/
│   └── mading/
```

---

## 🏠 HOME PAGE (`/app/page.tsx`)

### 1. **Hero Slider Images** (Main Banner)
- **Where**: Top section, full-width rotating images
- **Component**: `HeroSlider` function
- **Number of images**: 4 slides
- **File paths needed**:
  - `/public/images/home/hero-slide-1.jpg`
  - `/public/images/home/hero-slide-2.jpg`
  - `/public/images/home/hero-slide-3.jpg`
  - `/public/images/home/hero-slide-4.jpg`
- **Size**: 1200x500px (wide landscape)
- **Current code location**: Line ~135 in page.tsx uses `heroSlides[currentSlide].src`

### 2. **News/Mading Cards**
- **Where**: "Mading SMK" section showing recent posts
- **Number of images**: 3 news items
- **File paths needed**:
  - `/public/images/home/news-hari-guru.jpg`
  - `/public/images/home/news-praktek.jpg`
  - `/public/images/home/news-kunjungan.jpg`
- **Size**: 400x300px (medium landscape)

### How to Add:
1. Place your hero images in `/public/images/home/`
2. The slider will automatically display them from the `heroSlides` array

---

## 🎓 JURUSAN PAGES (`/app/jurusan/[code]/page.tsx`)

### TKJ Page (`/jurusan/tkj`)
- **Where**: Main image slider section
- **Number of images**: 4 slides
- **File paths needed**:
  - `/public/images/jurusan/tkj/slide-1.jpg`
  - `/public/images/jurusan/tkj/slide-2.jpg`
  - `/public/images/jurusan/tkj/slide-3.jpg`
  - `/public/images/jurusan/tkj/slide-4.jpg`
- **Size**: 600x400px (landscape)

### TKR Page (`/jurusan/tkr`)
- **Where**: Main image slider section
- **Number of images**: 4 slides
- **File paths needed**:
  - `/public/images/jurusan/tkr/slide-1.jpg`
  - `/public/images/jurusan/tkr/slide-2.jpg`
  - `/public/images/jurusan/tkr/slide-3.jpg`
  - `/public/images/jurusan/tkr/slide-4.jpg`
- **Size**: 600x400px (landscape)

### TP Page (`/jurusan/tp`)
- **Where**: Main image slider section
- **Number of images**: 4 slides
- **File paths needed**:
  - `/public/images/jurusan/tp/slide-1.jpg`
  - `/public/images/jurusan/tp/slide-2.jpg`
  - `/public/images/jurusan/tp/slide-3.jpg`
  - `/public/images/jurusan/tp/slide-4.jpg`
- **Size**: 600x400px (landscape)

### TITL Page (`/jurusan/titl`)
- **Where**: Main image slider section
- **Number of images**: 4 slides
- **File paths needed**:
  - `/public/images/jurusan/titl/slide-1.jpg`
  - `/public/images/jurusan/titl/slide-2.jpg`
  - `/public/images/jurusan/titl/slide-3.jpg`
  - `/public/images/jurusan/titl/slide-4.jpg`
- **Size**: 600x400px (landscape)

### How to Add:
1. Replace the `images` array placeholder with actual image paths
2. Images display in slider with next/prev buttons and thumbnails
3. Add thumbnails below: automatically generated from same images

---

## 👨‍💻 DEVELOPER PAGE (`/app/developer/page.tsx`)

### 1. **Main Profile Photo** (Mohammed Ridho)
- **Where**: Left side, profile section at top
- **File path needed**: `/public/images/developer/mohammed-ridho.jpg`
- **Size**: 200x200px (square)
- **Component**: `ProfileAvatar` component (handles fallback to initials if missing)

### 2. **Friend Profiles** (In Contribute Section)
These show as avatars with initials fallback, but can have real photos:
- **Abyan Ruby Firdaus**: `/public/images/developer/abyan-ruby.jpg`
- **Other team members**: Add more in similar format

### How to Add:
1. Place profile images in `/public/images/developer/`
2. Update the `imagePath` prop in `ProfileAvatar` component
3. If image exists, it displays; if not, shows initials (MR, ARF, etc.)

---

## 📰 MADING PAGE (`/app/mading/page.tsx`)

### Gallery Images
- **Where**: Grid of 12 gallery items for school activities
- **Number of images**: 12 items
- **File paths needed**:
  - `/public/images/mading/hari-guru.jpg`
  - `/public/images/mading/praktek-kejuruan.jpg`
  - `/public/images/mading/kunjungan-industri.jpg`
  - `/public/images/mading/ldks.jpg`
  - `/public/images/mading/sumpah-pemuda.jpg`
  - `/public/images/mading/juara-lks.jpg`
  - `/public/images/mading/bakti-sosial.jpg`
  - `/public/images/mading/class-meeting.jpg`
  - `/public/images/mading/ujian-praktik.jpg`
  - `/public/images/mading/workshop-coding.jpg`
  - `/public/images/mading/penerimaan-raport.jpg`
  - `/public/images/mading/perpisahan-kelas.jpg`
- **Size**: 300x200px (small landscape)
- **Feature**: Click to expand in modal preview

### How to Add:
1. Place images in `/public/images/mading/`
2. Update the `mockMadingItems` array to use actual paths
3. Images are clickable to open in fullscreen modal

---

## 📋 DOWNLOAD PAGE (`/app/cetak-formulir/page.tsx`)

### PDF Form
- **File location**: `/public/docs/Formulir-SPMB-2024.pdf` ✓ Already in place
- **Download button**: Works from "Cetak Formulir" page
- **No image placement needed** (it's a downloadable PDF)

---

## 🗂️ Quick Reference: File Naming Convention

Use this naming pattern for consistency:

```
/public/images/
├── home/
│   └── hero-slide-{1,2,3,4}.jpg
├── jurusan/
│   ├── tkj/
│   │   └── slide-{1,2,3,4}.jpg
│   ├── tkr/
│   │   └── slide-{1,2,3,4}.jpg
│   ├── tp/
│   │   └── slide-{1,2,3,4}.jpg
│   └── titl/
│       └── slide-{1,2,3,4}.jpg
├── developer/
│   ├── mohammed-ridho.jpg
│   └── abyan-ruby.jpg
└── mading/
    ├── hari-guru.jpg
    ├── praktek-kejuruan.jpg
    ├── kunjungan-industri.jpg
    └── ... (10 more)
```

---

## ✅ UPLOAD INSTRUCTIONS

1. **For Home Page**: Upload 4 hero images to `/public/images/home/`
2. **For Each Jurusan**: Upload 4 slider images to `/public/images/jurusan/{tkj|tkr|tp|titl}/`
3. **For Developer Page**: Upload 2 profile photos to `/public/images/developer/`
4. **For Mading**: Upload 12 gallery images to `/public/images/mading/`
5. **PDF Form**: Already at `/public/docs/Formulir-SPMB-2024.pdf`

---

## 📌 IMPORTANT NOTES

- All directories are **already created** (using .gitkeep files)
- Images use **relative paths** starting with `/images/` or `/docs/`
- If an image is missing, the page shows a **placeholder or fallback**
- Recommended format: **JPG** (best for photos, smaller file size)
- Test after uploading by visiting each page
