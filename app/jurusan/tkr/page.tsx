'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TKRPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/jurusan/tkr')
  }, [router])

  return null
}
