'use server'

import { pool } from '@/lib/db'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'

interface AlumniInput {
  name: string
  nisn?: string
  graduationYear: number
  academicYear?: string
  batchNumber?: string
  currentPosition?: string
  company?: string
  photoUrl?: string
  careerPath?: string
}

export async function getAlumni() {
  try {
    const client = await pool.connect()
    const result = await client.query(`
      SELECT id, name, nisn, graduation_year, academic_year, batch_number,
             current_position, company, photo_url, career_path, created_at
      FROM alumni
      ORDER BY graduation_year DESC, name ASC
    `)
    client.release()
    return { success: true, data: result.rows }
  } catch (error) {
    console.error('[v0] Error fetching alumni:', error)
    return { success: false, error: String(error) }
  }
}

export async function createAlumni(data: AlumniInput) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    const result = await client.query(
      `INSERT INTO alumni 
       (name, nisn, graduation_year, academic_year, batch_number, current_position, company, photo_url, career_path, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`,
      [
        data.name,
        data.nisn || null,
        data.graduationYear,
        data.academicYear || null,
        data.batchNumber || null,
        data.currentPosition || null,
        data.company || null,
        data.photoUrl || null,
        data.careerPath || null,
      ]
    )
    client.release()
    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error creating alumni:', error)
    return { success: false, error: String(error) }
  }
}

export async function updateAlumni(id: string, data: Partial<AlumniInput>) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    
    const updates: string[] = []
    const values: any[] = []
    let paramCount = 1

    if (data.name) {
      updates.push(`name = $${paramCount}`)
      values.push(data.name)
      paramCount++
    }
    if (data.nisn !== undefined) {
      updates.push(`nisn = $${paramCount}`)
      values.push(data.nisn || null)
      paramCount++
    }
    if (data.graduationYear) {
      updates.push(`graduation_year = $${paramCount}`)
      values.push(data.graduationYear)
      paramCount++
    }
    if (data.academicYear !== undefined) {
      updates.push(`academic_year = $${paramCount}`)
      values.push(data.academicYear || null)
      paramCount++
    }
    if (data.batchNumber !== undefined) {
      updates.push(`batch_number = $${paramCount}`)
      values.push(data.batchNumber || null)
      paramCount++
    }
    if (data.currentPosition !== undefined) {
      updates.push(`current_position = $${paramCount}`)
      values.push(data.currentPosition || null)
      paramCount++
    }
    if (data.company !== undefined) {
      updates.push(`company = $${paramCount}`)
      values.push(data.company || null)
      paramCount++
    }
    if (data.photoUrl !== undefined) {
      updates.push(`photo_url = $${paramCount}`)
      values.push(data.photoUrl || null)
      paramCount++
    }
    if (data.careerPath !== undefined) {
      updates.push(`career_path = $${paramCount}`)
      values.push(data.careerPath || null)
      paramCount++
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(id)

    const query = `UPDATE alumni SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`
    const result = await client.query(query, values)
    client.release()

    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error updating alumni:', error)
    return { success: false, error: String(error) }
  }
}

export async function deleteAlumni(id: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    await client.query('DELETE FROM alumni WHERE id = $1', [id])
    client.release()

    return { success: true }
  } catch (error) {
    console.error('[v0] Error deleting alumni:', error)
    return { success: false, error: String(error) }
  }
}
