import { Metadata } from 'next'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Admin Panel - SMK PATRIOT 1 BEKASI',
  description: 'Admin control panel for website management',
  robots: 'noindex, nofollow', // Prevent search engine indexing
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Verify user is authenticated and has admin role
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    redirect('/admin/login')
  }

  // Optional: Add role check if needed
  // if (session.user.role !== 'admin') {
  //   redirect('/') 
  // }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navigation Header */}
      <header className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="font-bold text-lg text-primary">
              Admin Panel
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin/exams" className="text-sm hover:text-primary transition-colors">
                Ujian Online
              </Link>
              <Link href="/admin/alumni" className="text-sm hover:text-primary transition-colors">
                Alumni
              </Link>
              <Link href="/admin/photos" className="text-sm hover:text-primary transition-colors">
                Foto
              </Link>
              <Link href="/admin/content" className="text-sm hover:text-primary transition-colors">
                Konten
              </Link>
              <Link href="/admin/submissions" className="text-sm hover:text-primary transition-colors">
                Submissions
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{session.user.email}</span>
            <form
              action={async () => {
                'use server'
                await auth.api.signOut({ headers: await headers() })
                redirect('/admin/login')
              }}
            >
              <Button variant="outline" size="sm" type="submit">
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
