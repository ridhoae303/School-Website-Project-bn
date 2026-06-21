'use server'

import { pool } from '@/lib/db'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'

interface PhotoInput {
  title: string
  description?: string
  photoUrl: string
  category?: string
  displayOrder?: number
}

export async function getPhotos() {
  try {
    const client = await pool.connect()
    const result = await client.query(`
      SELECT id, title, description, photo_url, category, display_order, created_at, uploaded_by
      FROM photos
      ORDER BY display_order ASC, created_at DESC
    `)
    client.release()
    return { success: true, data: result.rows }
  } catch (error) {
    console.error('[v0] Error fetching photos:', error)
    return { success: false, error: String(error) }
  }
}

export async function getPhotosByCategory(category: string) {
  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT id, title, description, photo_url, category, display_order, created_at
       FROM photos
       WHERE category = $1
       ORDER BY display_order ASC, created_at DESC`,
      [category]
    )
    client.release()
    return { success: true, data: result.rows }
  } catch (error) {
    console.error('[v0] Error fetching photos by category:', error)
    return { success: false, error: String(error) }
  }
}

export async function createPhoto(data: PhotoInput) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    const result = await client.query(
      `INSERT INTO photos 
       (title, description, photo_url, category, uploaded_by, display_order, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`,
      [
        data.title,
        data.description || null,
        data.photoUrl,
        data.category || null,
        session.user.id,
        data.displayOrder || 0,
      ]
    )
    client.release()
    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error creating photo:', error)
    return { success: false, error: String(error) }
  }
}

export async function updatePhoto(id: string, data: Partial<PhotoInput>) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    
    const updates: string[] = []
    const values: any[] = []
    let paramCount = 1

    if (data.title) {
      updates.push(`title = $${paramCount}`)
      values.push(data.title)
      paramCount++
    }
    if (data.description !== undefined) {
      updates.push(`description = $${paramCount}`)
      values.push(data.description || null)
      paramCount++
    }
    if (data.photoUrl) {
      updates.push(`photo_url = $${paramCount}`)
      values.push(data.photoUrl)
      paramCount++
    }
    if (data.category !== undefined) {
      updates.push(`category = $${paramCount}`)
      values.push(data.category || null)
      paramCount++
    }
    if (data.displayOrder !== undefined) {
      updates.push(`display_order = $${paramCount}`)
      values.push(data.displayOrder)
      paramCount++
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`)
    values.push(id)

    const query = `UPDATE photos SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`
    const result = await client.query(query, values)
    client.release()

    return { success: true, data: result.rows[0] }
  } catch (error) {
    console.error('[v0] Error updating photo:', error)
    return { success: false, error: String(error) }
  }
}

export async function deletePhoto(id: string) {
  try {
    const session = await auth.api.getSession({ headers: await headers() })
    if (!session?.user) {
      return { success: false, error: 'Unauthorized' }
    }

    const client = await pool.connect()
    await client.query('DELETE FROM photos WHERE id = $1', [id])
    client.release()

    return { success: true }
  } catch (error) {
    console.error('[v0] Error deleting photo:', error)
    return { success: false, error: String(error) }
  }
}
