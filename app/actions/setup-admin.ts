'use server'

import { pool } from '@/lib/db'
import bcrypt from 'bcrypt'

const ADMINS = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    email: 'ridhoae303@example.com',
    name: 'ridhoae303',
    password: 'hayase yuuka best girl',
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    email: 'kusnadi@example.com',
    name: 'Kusnadi, S.Kom.',
    password: '085691706159',
  },
]

export async function setupAdminPasswords() {
  try {
    const client = await pool.connect()
    
    for (const admin of ADMINS) {
      // Hash the password
      const hashedPassword = await bcrypt.hash(admin.password, 10)
      
      // Insert account with hashed password for email provider
      await client.query(
        `INSERT INTO neon_auth.account (id, "accountId", "providerId", "userId", password, "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
         ON CONFLICT DO NOTHING`,
        [
          `${admin.id}-email`,
          admin.email,
          'credential', // Better Auth uses 'credential' for email/password
          admin.id,
          hashedPassword,
        ]
      )
    }
    
    client.release()
    return { success: true, message: 'Admin passwords configured successfully' }
  } catch (error) {
    console.error('[v0] Admin setup error:', error)
    return { success: false, error: String(error) }
  }
}
