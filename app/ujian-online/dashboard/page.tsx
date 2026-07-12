import React from 'react'
import { Metadata } from 'next'
import { pool } from '@/lib/db'
import { UjianDashboardClient } from './client'

export const metadata: Metadata = {
  title: 'Dashboard Ujian Online - SMK PATRIOT 1 BEKASI',
  description: 'Daftar ujian online yang tersedia',
}

interface Exam {
  id: string
  title: string
  subject: string
  description: string
  duration_minutes: number
  total_questions: number
  passing_score: number
  status: string
}

async function getPublishedExams(): Promise<Exam[]> {
  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT id, title, subject, description, duration_minutes, total_questions, 
              passing_score, status
       FROM exams
       WHERE status = 'published'
       ORDER BY created_at DESC`
    )
    client.release()
    return result.rows
  } catch (error) {
    console.error('[v0] Error fetching exams:', error)
    return []
  }
}

export default async function UjianDashboard() {
  const exams = await getPublishedExams()
  return <UjianDashboardClient exams={exams} />
}
