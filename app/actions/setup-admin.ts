'use server'

import { pool } from '@/lib/db'
import bcrypt from 'bcrypt'

// For security: Admin credentials should be set via environment variables or secure admin panel
// DO NOT hardcode credentials in source code
interface AdminSetupData {
  id: string
  email: string
  name: string
  password: string
}

export async function setupAdminPasswords(admins: AdminSetupData[]) {
  try {
    const client = await pool.connect()
    
    for (const admin of admins) {
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
