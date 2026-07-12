import { initializeExamUsers } from '@/app/actions/exam-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // This endpoint should only be called once to set up exam users
    // In production, you'd want to add authentication/validation here
    const result = await initializeExamUsers()
    return NextResponse.json(result)
  } catch (error) {
    console.error('[v0] Setup error:', error)
    return NextResponse.json(
      { success: false, message: 'Setup failed' },
      { status: 500 }
    )
  }
}
