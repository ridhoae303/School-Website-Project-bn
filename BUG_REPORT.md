# Bug Report & Known Issues

## CRITICAL BUGS (Must Fix)

### 1. API Endpoints Not Implemented
**Status**: CRITICAL
**Location**: Multiple files
**Affected Pages**:
- `/app/ujian-online/dashboard/page.tsx` (line 31)
- `/app/hubungi-kami/page.tsx` (line 28)

**Issue**: 
- `fetchUjian` calls `/api/ujian/daftar` - endpoint doesn't exist
- Contact form calls `/api/contact` - endpoint doesn't exist
- No backend API routes created yet

**Fix Required**:
- Create `/app/api/ujian/daftar/route.ts`
- Create `/app/api/contact/route.ts`
- Implement database integration for both

---

### 2. Image Paths Not Properly Set
**Status**: CRITICAL
**Location**: Multiple pages and constants
**Issue**: 
- All image paths in `/lib/constants.ts` point to `/images/...` directory
- No actual images uploaded to these directories yet
- Website will show broken image placeholders

**Fix Required**:
- Upload images to correct directories:
  - `/public/images/home/` - hero slides and news images
  - `/public/images/jurusan/tkj|tkr|tp|titl/` - course images
  - `/public/images/developer/` - profile photos
  - `/public/images/mading/` - gallery images
  - `/public/images/logo.png` - navbar logo

**Reference**: See `UPLOAD_IMAGES_HERE.md` for exact filenames

---

### 3. PDF Form Download Path Fixed
**Status**: FIXED (Recent)
**Previous Issue**: Path was `/files/formulir-ppdb.pdf`
**Fix Applied**: Now uses `/docs/Formulir-SPMB-2024.pdf`

---

## MEDIUM BUGS (Should Fix Soon)

### 4. Navigation Sidebar Top Position
**Status**: FIXED (Recent)
**Previous Issue**: Sidebar was positioned at `top-16` (below navbar)
**Fix Applied**: Changed to `top-0` to start from viewport top

---

### 5. Marquee Animation Hydration Mismatch
**Status**: FIXED (Recent)
**Previous Issue**: Animation values differed between server and client render
**Fix Applied**: Added `suppressHydrationWarning` to marquee container

---

### 6. Swipe Gesture Direction Inverted
**Status**: FIXED (Recent)
**Previous Issue**: Swipe left moved slide right (backwards)
**Fix Applied**: Corrected swipe logic to match gesture direction

---

## MINOR BUGS (Low Priority)

### 7. No Image File Format Validation
**Location**: Image upload endpoints (not yet created)
**Issue**: When users upload images, no validation for:
- File size limits
- Allowed formats (jpg, png, webp only)
- Image dimensions

---

### 8. No Error Logging in Production
**Location**: All try/catch blocks
**Issue**: Errors log to console only, not captured for monitoring
**Suggestion**: Implement error tracking (e.g., Sentry)

---

## MISSING FEATURES (Not Implemented Yet)

### 9. API Endpoints Not Created
Missing routes:
- `POST /api/contact` - Contact form submission
- `GET /api/ujian/daftar` - Fetch exam list
- `POST /api/ujian/submit` - Submit exam answers
- `GET/POST /api/ppdb/register` - Student registration
- File upload endpoints for documents

---

### 10. Database Not Connected
**Status**: Not implemented
**Needed Tables**:
- Students (PPDB registrations)
- Users (for ujian online login)
- Contact messages
- Exam data
- Gallery/Mading content

---

### 11. Authentication Not Secure
**Location**: `/app/ujian-online/page.tsx`
**Issue**: Tokens stored in localStorage (vulnerable to XSS)
**Suggestion**: Use HTTP-only cookies instead

---

### 12. No Email Notifications
**Status**: Not implemented
**Issue**: Contact form doesn't send confirmation emails
**Affected**: `/app/hubungi-kami/page.tsx`

---

### 13. Developer Page Profile Images
**Status**: FIXED (Recent)
**Previous Issue**: Used CSS-generated avatars with initials "MR" and "AR"
**Fix Applied**: Updated to use real images from `/public/images/developer/`

---

## NAVBAR FIXES APPLIED

### Logo Icon
**Status**: FIXED (Just Now)
- **Before**: CSS-generated "P" in white box
- **After**: Real image from `/public/images/logo.png`

### School Name Display
**Status**: FIXED (Just Now)
- **Before**: Only "SMK PATRIOT 1" hardcoded
- **After**: Uses `SCHOOL_INFO.name` = "SMK PATRIOT 1 BEKASI"

---

## NEXT STEPS TO PRODUCTION

1. **Upload all images** to correct directories (see UPLOAD_IMAGES_HERE.md)
2. **Create database schema** and connect
3. **Implement API endpoints** (contact, ujian, ppdb)
4. **Add email notifications** for form submissions
5. **Secure authentication** with HTTP-only cookies
6. **Set up error tracking** (Sentry or similar)
7. **Add rate limiting** for API endpoints
8. **Implement file validation** for uploads

---

## TESTING CHECKLIST

- [ ] All images display correctly on each page
- [ ] Logo appears in navbar as real image
- [ ] School name shows full title in navbar
- [ ] PDF download works from all locations
- [ ] Contact form submits successfully
- [ ] Ujian online login/dashboard functional
- [ ] PPDB registration stores data
- [ ] Email notifications sent
- [ ] Mobile responsive on all pages
- [ ] No console errors in browser

---

## FILE INVENTORY

**Fixed Files**:
- `/components/Navbar.tsx` - Logo image & title
- `/lib/constants.ts` - Added LOGO_IMAGE path
- `/public/images/logo/.gitkeep` - Logo directory created
- `/public/docs/Formulir-SPMB-2024.pdf` - Form available

**Files Needing Attention**:
- `app/api/contact/route.ts` - Not created
- `app/api/ujian/daftar/route.ts` - Not created
- Database migration scripts - Not created
- Email notification service - Not created
