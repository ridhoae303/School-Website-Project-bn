# Setup Guide - SMK PATRIOT 1 BEKASI Website

## Apa yang Sudah Dibangun

Website sekolah SMK PATRIOT 1 BEKASI telah dibangun dengan fitur-fitur lengkap sesuai requirement:

### 🏠 Homepage (`/`)
- ✅ 10 Slide foto dengan auto-play dan quotes marquee
- ✅ 5-6 News items dengan modal preview dan image slider
- ✅ Jajak Pendapat (Poll) section
- ✅ Kontak staff (Kusnadi, S.Kom)
- ✅ Call-to-action untuk PPDB

### 📱 Responsive Navigation
- ✅ **Mobile**: Hamburger menu dengan smooth slide animation
- ✅ **Desktop/Tablet**: Horizontal navigation dengan dropdown submenu
- ✅ Sticky navbar dengan scroll detection

### 🎨 Design & Animations
- ✅ Warna profesional: **Blue (#1E90FF) & Orange (#FF6B35)**
- ✅ Background putih (default)
- ✅ Smooth animations dengan Framer Motion
- ✅ Hover effects dan transitions
- ✅ Professional typography dan spacing

### 📄 Halaman-Halaman yang Tersedia

1. **Profile / Visi Misi** (`/profile/visi-misi`)
   - Visi & Misi sekolah
   - Nilai-nilai inti
   - Komitmen pendidikan

2. **Mading SMK** (`/mading-smk`)
   - 12 grid items dengan deskripsi
   - Link ke halaman detail masing-masing
   - Animasi hover effects

3. **Jurusan** (Template tersedia)
   - TKJ (Teknik Komputer & Jaringan)
   - TKR (Teknik Kendaraan Ringan Otomotif)
   - TP (Teknik Permesinan)
   - TITL (Teknik Instalasi Tenaga Listrik)

4. **Direktori** (Template tersedia)
   - Daftar Online PPDB
   - Cetak Formulir
   - Download Formulir PPDB

5. **Galeri** (Template tersedia)
   - Galeri Foto
   - Galeri Video

6. **Ujian Online** (Siap untuk API integration)

7. **Google Maps 360** (`/google-maps`)
   - Embedded Google Maps dengan Street View

8. **Hubungi Kami** (`/hubungi-kami`)
   - Form kontak (Nama, Email, Pesan)
   - Informasi kontak lengkap
   - Google Maps embedded
   - WhatsApp integration

9. **Developer** (`/developer`)
   - Profile Mohammed Ridho (ridhoae303)
   - Skills bar dengan animasi
   - Social links (GitHub, Instagram)
   - Daftar teman yang mendukung
   - Informasi tentang project

### 🔧 Footer
- ✅ Motto sekolah
- ✅ Informasi kontak lengkap
- ✅ Social media links
- ✅ Quick links navigasi
- ✅ Copyright & kredit developer

## Langkah-Langkah Setup

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Setup Environment Variables
Buat file `.env.local` di root project:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Ubah dengan API endpoint Anda yang sebenarnya
```

### 3. Tambahkan Gambar
Ganti placeholder images di `/public/images/`:
- Hero slides (10 gambar untuk slider)
- News/Mading images
- Gallery photos
- Developer photo
- Friend photos

### 4. Setup API Endpoints
Update endpoint API di `lib/api.ts`:
```typescript
const API_ENDPOINTS = {
  contact: '/api/contact',          // POST form kontak
  poll: '/api/polls/submit',         // POST jajak pendapat
  // ... endpoint lainnya
}
```

### 5. Integration Checklist

#### Form Contact (`/hubungi-kami`)
- [ ] Setup endpoint untuk POST contact form
- [ ] Implement server-side validation
- [ ] Setup email notification
- [ ] Handle error responses

#### Jajak Pendapat (Homepage)
- [ ] Setup endpoint untuk POST poll votes
- [ ] Implement vote counting logic
- [ ] Add real-time results (optional)

#### Cetak Formulir (`/direktori/cetak-formulir`)
- [ ] Setup endpoint untuk GET dan POST form submission
- [ ] Implement registrasi number validation (10 digits)
- [ ] Implement birth date validation
- [ ] Handle "data not found" response
- [ ] Handle "server not responding" state

#### PPDB Online (`/direktori/ppdb-online`)
- [ ] Buat halaman form PPDB
- [ ] Setup API integration dengan backend
- [ ] Implement form validation
- [ ] Add success/error states

#### Ujian Online (`/ujian-online`)
- [ ] Setup user login system
- [ ] Fetch exam list dari backend
- [ ] Implement exam interface
- [ ] Handle exam submission

## Security Notes

### Client-Side Security Measures (Implemented)
```typescript
// Sanitasi input
const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, '')
}

// CSRF protection
// Validate all API requests dengan proper headers

// XSS prevention
// Semua user input di-escape otomatis oleh React
```

### Recommendations untuk Backend
1. ✅ Use HTTPS hanya
2. ✅ Implement CORS properly
3. ✅ Validate & sanitize semua inputs di backend
4. ✅ Use parameterized queries (prevent SQL injection)
5. ✅ Implement rate limiting
6. ✅ Use secure session management
7. ✅ Never trust client-side validation

## Testing

### Local Development
```bash
pnpm dev
# Website akan berjalan di http://localhost:3000
```

### Responsive Testing
- Test di berbagai screen sizes (mobile, tablet, desktop)
- Check hamburger menu pada mobile (<1024px)
- Check horizontal nav pada desktop (≥1024px)

## Production Deployment

### Build & Deploy ke Vercel
```bash
pnpm build
# Deploy otomatis dari GitHub atau manual push
```

### Environment Variables di Production
Set semua environment variables di Vercel dashboard:
- `NEXT_PUBLIC_API_URL` → Production API URL
- Tambahkan env vars lain sesuai kebutuhan

## Folder Structure
```
├── app/
│   ├── page.tsx (Homepage)
│   ├── layout.tsx
│   ├── globals.css
│   ├── profile/
│   │   └── visi-misi/page.tsx
│   ├── mading-smk/page.tsx
│   ├── hubungi-kami/page.tsx
│   ├── google-maps/page.tsx
│   ├── developer/page.tsx
│   └── ... (halaman lainnya)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── MobileMenu.tsx
│   ├── ImageSlider.tsx
│   ├── NewsCard.tsx
│   ├── Form/
│   │   ├── ContactForm.tsx
│   │   └── PollForm.tsx
│   └── ... (komponen lainnya)
├── lib/
│   ├── constants.ts (School info & navigation)
│   ├── api.ts (API client)
│   ├── animations.ts (Framer Motion variants)
│   └── validators.ts (Zod schemas)
└── public/
    └── images/ (Add your images here)
```

## Next Steps

1. ✅ Ganti semua placeholder images dengan foto asli
2. ✅ Update school info di `lib/constants.ts`
3. ✅ Setup API endpoints sesuai dengan backend Anda
4. ✅ Test semua forms dan integrations
5. ✅ Optimize performance & SEO
6. ✅ Deploy ke production

## Support

Untuk pertanyaan atau issues, hubungi:
- **Email**: smkpatriot1bekasi@gmail.com
- **WhatsApp**: https://wa.me/6285691706159
- **Developer**: ridhoae303 (GitHub & Instagram)

---

**Created with ❤️ by ridhoae303 team**
**© 2026 SMK PATRIOT 1 BEKASI. All rights reserved.**
