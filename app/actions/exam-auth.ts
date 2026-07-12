'use server'

import { pool } from '@/lib/db'
import bcrypt from 'bcrypt'

interface LoginResult {
  success: boolean
  message: string
  userId?: string
}

export async function validateExamLogin(
  username: string,
  password: string
): Promise<LoginResult> {
  try {
    const client = await pool.connect()

    // Query exam user
    const result = await client.query(
      'SELECT id, username, password_hash FROM exam_users WHERE username = $1',
      [username]
    )

    client.release()

    if (result.rows.length === 0) {
      return {
        success: false,
        message: 'Username not found',
      }
    }

    const user = result.rows[0]

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash)

    if (!isPasswordValid) {
      return {
        success: false,
        message: 'Password salah',
      }
    }

    return {
      success: true,
      message: 'Login berhasil',
      userId: user.id,
    }
  } catch (error) {
    console.error('[v0] Exam login error:', error)
    return {
      success: false,
      message: 'Terjadi kesalahan server',
    }
  }
}

export async function initializeExamUsers() {
  try {
    const client = await pool.connect()

    const users = [
      {
        username: 'ridhoae303',
        password: 'hayase yuuka best girl',
      },
      {
        username: 'Kusnadi, S.Kom.',
        password: '085691706159',
      },
    ]

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      
      await client.query(
        `INSERT INTO exam_users (username, password_hash, is_admin) 
         VALUES ($1, $2, true) 
         ON CONFLICT (username) DO UPDATE 
         SET password_hash = $2`,
        [user.username, hashedPassword]
      )
    }

    client.release()
    return { success: true, message: 'Exam users initialized' }
  } catch (error) {
    console.error('[v0] Initialize exam users error:', error)
    return { success: false, message: 'Failed to initialize exam users' }
  }
}
