# How to Add Images to Website Pages

This guide explains where and how to add images on every page of the website.

## Quick Start

1. Add your image file to the appropriate directory in `/public/images/`
2. Reference it in the corresponding page using the `IMAGE_PATHS` config
3. Import and use the image path in your component

## Step-by-Step for Each Page

### 1. Home Page (`/app/page.tsx`)

**Hero Slider Images:**
- Location: `/public/images/home/`
- Files needed: `hero-slide-1.jpg`, `hero-slide-2.jpg`, `hero-slide-3.jpg`, `hero-slide-4.jpg`
- Implementation:
```tsx
import { IMAGE_PATHS } from '@/lib/image-paths'

const heroSlides = IMAGE_PATHS.home.heroSlides
// Then use: heroSlides[currentSlide]
```

**Current Status:** Using placeholder URLs - needs real images

---

### 2. Jurusan Pages (`/app/jurusan/[code]/page.tsx`)

**Jurusan Slider Images:**
- Location: `/public/images/jurusan/{jurusan-code}/`
- Files needed: 4 images per jurusan (TKJ, TKR, TP, TITL)
- Implementation:
```tsx
import { IMAGE_PATHS } from '@/lib/image-paths'

const code = 'tkj' // or 'tkr', 'tp', 'titl'
const images = IMAGE_PATHS.jurusan[code].slides
```

**Jurusan Codes:**
- `tkj` - TKJ (Teknik Komputer & Jaringan)
- `tkr` - TKR (Teknik Kendaraan Ringan Otomotif)
- `tp` - TP (Teknik Permesinan)
- `titl` - TITL (Teknik Instalasi Tenaga Listrik)

**Current Status:** Using placeholder URLs - needs real images

---

### 3. Developer Page (`/app/developer/page.tsx`)

**Profile Images:**
- Location: `/public/images/developer/`
- Files needed:
  - `mohammed-ridho.jpg` - Main profile
  - `abyan-ruby.jpg` - Friend/team member
- Implementation using new `ProfileAvatar` component:
```tsx
import { ProfileAvatar } from '@/components/ProfileAvatar'
import { IMAGE_PATHS } from '@/lib/image-paths'

<ProfileAvatar 
  name="Mohammed Ridho"
  imageSrc={IMAGE_PATHS.developer.profiles.mohammedRidho}
  size="lg"
  isExpanded={expandedProfile === 'ridho'}
/>
```

**Current Status:** Using CSS-only initials - add real profile photos

---

### 4. Mading Page (`/app/mading/page.tsx`)

**Gallery Images:**
- Location: `/public/images/mading/`
- Files needed: Multiple images for posts
- Implementation: Each mading post can reference `/images/mading/{filename}.jpg`

**Current Status:** Using random placeholder URLs - needs real mading post images

---

### 5. Gallery Pages (`/app/galeri/[type]/page.tsx`)

**Photo & Video Galleries:**
- Location: `/public/images/gallery/foto/` and `/public/images/gallery/video/`
- Add images as needed for each gallery

---

## File Organization Summary

```
/public/
├── images/
│   ├── home/
│   │   ├── hero-slide-1.jpg ← ADD HERE
│   │   ├── hero-slide-2.jpg ← ADD HERE
│   │   ├── hero-slide-3.jpg ← ADD HERE
│   │   └── hero-slide-4.jpg ← ADD HERE
│   ├── jurusan/
│   │   ├── tkj/
│   │   │   ├── slide-1.jpg ← ADD HERE
│   │   │   ├── slide-2.jpg ← ADD HERE
│   │   │   ├── slide-3.jpg ← ADD HERE
│   │   │   └── slide-4.jpg ← ADD HERE
│   │   ├── tkr/ (similar to tkj)
│   │   ├── tp/ (similar to tkj)
│   │   └── titl/ (similar to tkj)
│   ├── developer/
│   │   ├── mohammed-ridho.jpg ← ADD HERE
│   │   └── abyan-ruby.jpg ← ADD HERE
│   ├── mading/
│   │   └── post-*.jpg ← ADD HERE (as many as needed)
│   └── gallery/
│       ├── foto/
│       └── video/
└── Formulir-SPMB-2024.pdf ✓ (Already added)
```

## Image Format Recommendations

- **Hero Sliders:** JPG, 1200×500px minimum, optimized
- **Profile Photos:** JPG/PNG, 400×400px minimum, face-focused
- **Gallery Images:** JPG, 600×400px minimum
- **All images:** Use web-optimized formats (JPEG for photos, PNG for graphics)

## Using IMAGE_PATHS Config

The `lib/image-paths.ts` file centralizes all image references:

```tsx
import { IMAGE_PATHS } from '@/lib/image-paths'

// Home images
IMAGE_PATHS.home.heroSlides[0]

// Jurusan images
IMAGE_PATHS.jurusan.tkj.slides[0]
IMAGE_PATHS.jurusan.tkr.slides[0]

// Developer images
IMAGE_PATHS.developer.profiles.mohammedRidho
IMAGE_PATHS.developer.profiles.abyanRuby

// Forms
IMAGE_PATHS.forms.formulirSPMB
```

## Steps to Add Real Images

1. Create subdirectories in `/public/images/` as shown above
2. Add your image files with exact names listed
3. Update `lib/image-paths.ts` if you change file names
4. Remove placeholder URL usage from components
5. Import `IMAGE_PATHS` and use paths from config

## Common Issues

**Q: Images not loading?**
- A: Check file path in `/public/images/` matches the IMAGE_PATHS config exactly
- A: Ensure files are in correct subdirectory
- A: Clear browser cache and rebuild project

**Q: Using ProfileAvatar component?**
- Import: `import { ProfileAvatar } from '@/components/ProfileAvatar'`
- Pass `imageSrc` prop with path from `IMAGE_PATHS.developer.profiles`
- If no image provided, shows initials fallback

**Q: How to handle missing images?**
- Use fallback: `imageSrc || undefined` → will show initials
- Or use placeholder: `IMAGE_PATHS.placeholder(width, height)`
