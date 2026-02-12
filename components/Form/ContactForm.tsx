'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validators'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { apiClient } from '@/lib/api'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      await apiClient.submitContactForm(data)
      toast.success('Pesan Anda berhasil dikirim!')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Gagal mengirim pesan. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nama Lengkap
        </label>
        <Input
          id="name"
          placeholder="Masukkan nama Anda"
          {...register('name')}
          disabled={isLoading}
          className="w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="masukkan@email.com"
          {...register('email')}
          disabled={isLoading}
          className="w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subjek
        </label>
        <Input
          id="subject"
          placeholder="Masukkan subjek pesan"
          {...register('subject')}
          disabled={isLoading}
          className="w-full"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Pesan
        </label>
        <Textarea
          id="message"
          placeholder="Tulis pesan Anda di sini..."
          rows={5}
          {...register('message')}
          disabled={isLoading}
          className="w-full"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  )
}
