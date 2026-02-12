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
