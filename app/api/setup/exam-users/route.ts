import { initializeExamUsers } from '@/app/actions/exam-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // This endpoint should only be called once to set up exam users
    // For security, users must be passed in the request body
    const body = await request.json()
    const { users } = body

    if (!users || !Array.isArray(users) || users.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Users array is required in request body' },
        { status: 400 }
      )
    }

    // Validate user objects
    for (const user of users) {
      if (!user.username || !user.password) {
        return NextResponse.json(
          { success: false, message: 'Each user must have username and password' },
          { status: 400 }
        )
      }
    }

    const result = await initializeExamUsers(users)
    return NextResponse.json(result)
  } catch (error) {
    console.error('[v0] Setup error:', error)
    return NextResponse.json(
      { success: false, message: 'Setup failed' },
      { status: 500 }
    )
  }
}
