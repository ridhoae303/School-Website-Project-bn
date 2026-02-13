import { z } from 'zod'

// Contact Form Validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nama minimal 2 karakter' })
    .max(100, { message: 'Nama maksimal 100 karakter' }),
  email: z
    .string()
    .email({ message: 'Email tidak valid' }),
  subject: z
    .string()
    .min(5, { message: 'Subjek minimal 5 karakter' })
    .max(200, { message: 'Subjek maksimal 200 karakter' }),
  message: z
    .string()
    .min(10, { message: 'Pesan minimal 10 karakter' })
    .max(5000, { message: 'Pesan maksimal 5000 karakter' }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Poll Vote Validation
export const pollVoteSchema = z.object({
  pollId: z.string().min(1, { message: 'Poll ID diperlukan' }),
  optionId: z.string().min(1, { message: 'Pilihan wajib dipilih' }),
})

export type PollVoteData = z.infer<typeof pollVoteSchema>

// Search Validation
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, { message: 'Kata kunci pencarian diperlukan' })
    .max(100, { message: 'Kata kunci terlalu panjang' }),
})

export type SearchData = z.infer<typeof searchSchema>

// Pagination Validation
export const paginationSchema = z.object({
  page: z.number().int().min(1, { message: 'Halaman minimal 1' }),
  limit: z.number().int().min(1).max(100, { message: 'Limit maksimal 100' }),
})

export type PaginationData = z.infer<typeof paginationSchema>

// Filter Validation
export const filterSchema = z.object({
  category: z.string().optional(),
  year: z.number().int().optional(),
  status: z.enum(['active', 'archived']).optional(),
})

export type FilterData = z.infer<typeof filterSchema>

// PPDB Registration Validation
export const ppdbRegisterSchema = z.object({
  nama: z.string().min(3, { message: 'Nama minimal 3 karakter' }).max(100, { message: 'Nama maksimal 100 karakter' }),
  nisn: z.string().regex(/^\d{10}$/, { message: 'NISN harus 10 angka' }),
  asalSekolah: z.string().min(3, { message: 'Asal sekolah minimal 3 karakter' }),
  jurusan: z.enum(['TKJ', 'TKR', 'TP', 'TITL'], { message: 'Jurusan tidak valid' }),
  nomorTelepon: z.string().regex(/^(\+62|62|0)[0-9]{9,12}$/, { message: 'Nomor telepon tidak valid' }),
  email: z.string().email({ message: 'Email tidak valid' }),
})

export type PPDBRegisterData = z.infer<typeof ppdbRegisterSchema>

// Cetak Formulir Validation
export const cetakFormulirSchema = z.object({
  noPendaftaran: z.string().regex(/^\d{10}$/, { message: 'Nomor pendaftaran harus 10 angka' }),
  tglLahir: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Format tanggal harus YYYY-MM-DD' }),
})

export type CetakFormulirData = z.infer<typeof cetakFormulirSchema>

// Ujian Online Login Validation
export const ujianLoginSchema = z.object({
  username: z.string().min(3, { message: 'Username minimal 3 karakter' }).max(20, { message: 'Username maksimal 20 karakter' }),
  password: z.string().min(6, { message: 'Password minimal 6 karakter' }).max(50, { message: 'Password maksimal 50 karakter' }),
})

export type UjianLoginData = z.infer<typeof ujianLoginSchema>

// Poll Validation
export const pollFormSchema = z.object({
  q1: z.string().min(1, { message: 'Jawaban pertanyaan 1 diperlukan' }),
  q2: z.string().min(1, { message: 'Jawaban pertanyaan 2 diperlukan' }),
  q3: z.string().min(1, { message: 'Jawaban pertanyaan 3 diperlukan' }),
})

export type PollFormData = z.infer<typeof pollFormSchema>
