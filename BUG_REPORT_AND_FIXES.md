# Bug Report and Fixes

## FIXED ISSUES

### 1. Navigation Bar Logo and Title - FIXED
**Issue**: 
- Logo was CSS-only "P" text, not a real image
- Website title was hidden on small screens

**Fix Applied**:
- Updated Navbar.tsx to import and display real logo image from `/public/images/logo/smk-patriot-logo.png`
- Added LOGO_PATH constant to constants.ts
- Made website title "SMK PATRIOT 1" visible on all screen sizes (removed `hidden sm:inline`)
- Added Image component with fallback to CSS logo if image fails to load

**Files Modified**:
- `/components/Navbar.tsx` - Added Image import and updated logo display
- `/lib/constants.ts` - Added LOGO_PATH constant
- `/public/images/logo/.gitkeep` - Created logo directory

---

### 2. Placeholder Images Not Using Real Paths - FIXED
**Issue**:
- Multiple pages still using IMAGE_PLACEHOLDERS (gallery/achievement pages)
- These placeholders pointing to default image paths instead of organized directories

**Fix Applied**:
- Updated `/lib/constants.ts` with new image constants:
  - `HOME_IMAGES` - Hero slides and news articles
  - `JURUSAN_IMAGES` - Jurusan-specific sliders (tkj, tkr, tp, titl)
  - `DEVELOPER_IMAGES` - Developer profile photos
  - `MADING_IMAGES` - Mading gallery items
  - `GALLERY_IMAGES` - General gallery (9 items)
  - `ACHIEVEMENT_IMAGES` - Achievements/Prestasi (8 items)

**Files Modified**:
- `/lib/constants.ts` - Added all image constants
- `/app/page.tsx` - Updated HOME_IMAGES usage
- `/app/jurusan/[code]/page.tsx` - Updated JURUSAN_IMAGES usage
- `/app/mading/page.tsx` - Updated MADING_IMAGES usage
- `/app/developer/page.tsx` - Updated DEVELOPER_IMAGES with real Image components
- `/app/galeri/page.tsx` - Updated GALLERY_IMAGES usage
- `/app/prestasi/page.tsx` - Updated ACHIEVEMENT_IMAGES usage

---

## IMAGE DIRECTORY STRUCTURE

All images organized in `/public/images/`:

```
/public/images/
├── logo/
│   └── smk-patriot-logo.png (REQUIRED - navbar logo)
├── home/
│   ├── hero-slide-1.jpg through hero-slide-10.jpg
│   ├── news-1.jpg through news-6.jpg
│   └── hero-slide-default.jpg
├── jurusan/
│   ├── tkj/
│   │   └── slide-1.jpg through slide-4.jpg
│   ├── tkr/
│   │   └── slide-1.jpg through slide-4.jpg
│   ├── tp/
│   │   └── slide-1.jpg through slide-4.jpg
│   └── titl/
│       └── slide-1.jpg through slide-4.jpg
├── developer/
│   ├── mohammed-ridho.jpg (REQUIRED - profile photo)
│   ├── abyan-ruby.jpg (REQUIRED - profile photo)
│   └── profile-default.jpg
├── mading/
│   ├── gallery-1.jpg through gallery-12.jpg
│   └── gallery-default.jpg
├── gallery/
│   ├── gallery-1.jpg through gallery-9.jpg
│   └── gallery-default.jpg
├── achievements/
│   ├── achievement-1.jpg through achievement-8.jpg
│   └── achievement-default.jpg
└── docs/
    └── Formulir-SPMB-2024.pdf
```

---

## KNOWN REMAINING ISSUES

### 1. Download Form Endpoint
**Status**: NEEDS VERIFICATION
**Description**: Download form link updated to `/docs/Formulir-SPMB-2024.pdf`
**Action**: Test download functionality in browser

### 2. Missing Image Files
**Status**: REQUIRES USER ACTION
**Description**: All image directories exist but are empty (.gitkeep only)
**Action**: User must upload actual image files to respective directories using filenames specified above

### 3. Profile Image Fallback
**Status**: RESOLVED BUT NEEDS IMAGE
**Description**: Developer page shows real Image component, falls back to initials if image missing
**Action**: Upload mohammed-ridho.jpg and abyan-ruby.jpg to `/public/images/developer/`

### 4. Placeholder Fallback Images
**Status**: CONFIGURED
**Description**: Constant files have default fallback paths for when real images not available
**Files**: 
- `/images/home/hero-slide-default.jpg`
- `/images/developer/profile-default.jpg`
- `/images/gallery/gallery-default.jpg`
- `/images/achievements/achievement-default.jpg`

---

## TESTING CHECKLIST

- [ ] Upload SMK PATRIOT 1 logo to `/public/images/logo/smk-patriot-logo.png`
- [ ] Verify logo appears in navbar
- [ ] Verify "SMK PATRIOT 1" title visible in navbar on all screen sizes
- [ ] Upload hero slider images to `/public/images/home/hero-slide-{1-10}.jpg`
- [ ] Upload news images to `/public/images/home/news-{1-6}.jpg`
- [ ] Upload jurusan slider images to respective directories
- [ ] Upload developer profile photos (mohammed-ridho.jpg, abyan-ruby.jpg)
- [ ] Upload mading gallery images to `/public/images/mading/gallery-{1-12}.jpg`
- [ ] Upload general gallery images to `/public/images/gallery/gallery-{1-9}.jpg`
- [ ] Upload achievement images to `/public/images/achievements/achievement-{1-8}.jpg`
- [ ] Test form download functionality
- [ ] Test all page rendering without errors
- [ ] Verify all images load correctly on deployed version

---

## CODE QUALITY IMPROVEMENTS

### Image Import Pattern (Now Standardized)
All pages now follow consistent pattern:
```typescript
import { IMAGE_CONSTANT } from '@/lib/constants'

// Use in components:
// <img src={IMAGE_CONSTANT[index]} alt="..." />
// OR
// <Image src={IMAGE_CONSTANT} alt="..." />
```

### Navbar Logo Implementation
```typescript
// With fallback to CSS if image fails:
<Image src={LOGO_PATH} alt="Logo" onError={...} />
<span id="logo-fallback">P</span> {/* CSS fallback */}
```

---

## SUMMARY

**Fixed**: 4 major issues (navbar logo, title visibility, image path organization, image constants)
**Remaining**: Mostly image upload requirements from user
**Status**: Ready for image upload phase
