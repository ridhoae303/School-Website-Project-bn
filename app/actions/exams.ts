'use server'

import { pool } from '@/lib/db'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'

interface ExamInput {
  title: string
  subject: string
  description?: string
  durationMinutes: number
  totalQuestions: number
  passingScore: number
  status: 'draft' | 'published'
}

export async function getExams() {
  try {
    const client = await pool.connect()
    const result = await client.query(`
      SELECT id, title, subject, description, duration_minutes, total_questions, 
             passing_score, status, created_by, created_at, updated_at
      FROM exams
      ORDER BY created_at DESC
    `)
    client.release()
    return { success: true, data: result.rows }
  } catch (error) {
    console.error('[v0] Error fetching exams:', error)
    return { success: false, error: String(error) }
  }
}

export async function createExam(data: ExamInput) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    const result = await client.query(
      `INSERT INTO exams 
       (title, subject, description, duration_minutes, total_questions, passing_score, status, created_by, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`,
      [
        data.title,
        data.subject,
        data.description || null,
        data.durationMinutes,
        data.totalQuestions,
        data.passingScore,
        data.status,
        session.user.id,
      ]
    )
    client.release()
    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error creating exam:', error)
    return { success: false, error: String(error) }
  }
}

export async function updateExam(id: string, data: Partial<ExamInput>) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    
    // Build dynamic update query
    const updates: string[] = []
    const values: any[] = []
    let paramCount = 1

    if (data.title) {
      updates.push(`title = $${paramCount}`)
      values.push(data.title)
      paramCount++
    }
    if (data.subject) {
      updates.push(`subject = $${paramCount}`)
      values.push(data.subject)
      paramCount++
    }
    if (data.description !== undefined) {
      updates.push(`description = $${paramCount}`)
      values.push(data.description || null)
      paramCount++
    }
    if (data.durationMinutes) {
      updates.push(`duration_minutes = $${paramCount}`)
      values.push(data.durationMinutes)
      paramCount++
    }
    if (data.totalQuestions) {
      updates.push(`total_questions = $${paramCount}`)
      values.push(data.totalQuestions)
      paramCount++
    }
    if (data.passingScore) {
      updates.push(`passing_score = $${paramCount}`)
      values.push(data.passingScore)
      paramCount++
    }
    if (data.status) {
      updates.push(`status = $${paramCount}`)
      values.push(data.status)
      paramCount++
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(id)

    const query = `UPDATE exams SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`
    const result = await client.query(query, values)
    client.release()

    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error updating exam:', error)
    return { success: false, error: String(error) }
  }
}

export async function deleteExam(id: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    await client.query('DELETE FROM exams WHERE id = $1', [id])
    client.release()

    return { success: true }
  } catch (error) {
    console.error('[v0] Error deleting exam:', error)
    return { success: false, error: String(error) }
  }
}
