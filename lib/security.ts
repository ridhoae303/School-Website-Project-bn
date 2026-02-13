/**
 * Security Utilities - OSI Layer 7 (Application Layer)
 * Validasi input, sanitasi XSS, dan security best practices
 */

// Regex patterns untuk validasi
export const PATTERNS = {
  // 10 digit number untuk nomor pendaftaran
  NIS_10DIGIT: /^\d{10}$/,
  // Phone number format: +62 atau 0 diikuti 9-12 digit
  PHONE: /^(\+62|62|0)[0-9]{9,12}$/,
  // Nama: min 2 karakter, max 100
  NAME: /^[a-zA-Z\s\-']{2,100}$/,
  // Email standar
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  // Date format YYYY-MM-DD
  DATE_FORMAT: /^\d{4}-\d{2}-\d{2}$/,
  // NIS/Nomor pend aftar: 10 digit only
  NUMERIC_10: /^\d{10}$/,
  // Alphanumeric dengan underscore
  USERNAME: /^[a-zA-Z0-9_]{3,20}$/,
}

/**
 * Validasi nomor pendaftaran (10 digit numeric)
 */
export const validateNomorPendaftaran = (value: string): boolean => {
  return PATTERNS.NUMERIC_10.test(value)
}

/**
 * Validasi tanggal format YYYY-MM-DD
 */
export const validateDateFormat = (value: string): boolean => {
  if (!PATTERNS.DATE_FORMAT.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  )
}

/**
 * Sanitasi input untuk mencegah XSS (React auto-escapes, ini untuk safety layer)
 */
export const sanitizeInput = (input: string): string => {
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '')
  // Unescape HTML entities
  sanitized = sanitized.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  return sanitized.trim()
}

/**
 * Validasi email format
 */
export const validateEmail = (email: string): boolean => {
  return PATTERNS.EMAIL.test(email)
}

/**
 * Validasi nomor telepon Indonesia
 */
export const validatePhoneNumber = (phone: string): boolean => {
  return PATTERNS.PHONE.test(phone)
}

/**
 * Debounce function untuk prevent spam/DDoS pada form submission
 */
export const createDebounce = (delay: number = 1000) => {
  let timeout: NodeJS.Timeout | null = null
  return (callback: () => void) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(callback, delay)
  }
}

/**
 * Rate limiter untuk download (10 detik)
 */
export class DownloadRateLimiter {
  private lastDownload: number = 0
  private readonly THROTTLE_TIME: number = 10000 // 10 detik dalam milliseconds

  canDownload(): boolean {
    const now = Date.now()
    if (now - this.lastDownload >= this.THROTTLE_TIME) {
      this.lastDownload = now
      return true
    }
    return false
  }

  getWaitTime(): number {
    const elapsed = Date.now() - this.lastDownload
    const remaining = this.THROTTLE_TIME - elapsed
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0
  }
}

/**
 * XSS prevention: encode HTML entities
 */
export const encodeHTML = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}

/**
 * CSRF Token management (untuk implementasi yang lebih secure di API routes)
 */
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * Content Security Policy helper
 * Meta tag untuk CSP dapat ditambahkan di layout.tsx
 */
export const CSP_META_CONTENT = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://www.youtube.com;"
