'use server'

import { db } from '@/lib/db'
import { submissions } from '@/lib/db/schema'
import { revalidatePath } from 'next/cache'

export async function saveSubmission(data: {
  formType: string
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  data?: Record<string, any>
}) {
  try {
    const result = await db
      .insert(submissions)
      .values({
        formType: data.formType,
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        data: data.data || {},
      })
      .returning()

    revalidatePath('/admin/submissions')
    return { success: true, id: result[0]?.id }
  } catch (error) {
    console.error('[v0] Error saving submission:', error)
    throw new Error('Gagal menyimpan data')
  }
}

export async function getSubmissions(formType?: string) {
  try {
    let query = db.select().from(submissions)

    if (formType) {
      query = query.where((t) => t.formType === formType) as any
    }

    const result = await query.orderBy((t) => t.createdAt)

    return result
  } catch (error) {
    console.error('[v0] Error fetching submissions:', error)
    throw new Error('Gagal mengambil data')
  }
}

export async function updateSubmissionStatus(id: string, status: string) {
  try {
    await db
      .update(submissions)
      .set({ status })
      .where((t) => t.id === id)

    revalidatePath('/admin/submissions')
    return { success: true }
  } catch (error) {
    console.error('[v0] Error updating submission:', error)
    throw new Error('Gagal mengubah status')
  }
}

export async function deleteSubmission(id: string) {
  try {
    await db.delete(submissions).where((t) => t.id === id)

    revalidatePath('/admin/submissions')
    return { success: true }
  } catch (error) {
    console.error('[v0] Error deleting submission:', error)
    throw new Error('Gagal menghapus data')
  }
}
