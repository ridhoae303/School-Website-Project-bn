import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { AuthForm } from '@/components/auth-form'

export const metadata = {
  title: 'Admin Login - SMK PATRIOT 1 BEKASI',
  description: 'Admin authentication portal',
}

export default async function AdminLoginPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  
  // If already logged in, redirect to admin panel
  if (session?.user) {
    redirect('/admin/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-white/80">SMK PATRIOT 1 BEKASI</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <AuthForm mode="sign-in" />
          <p className="text-xs text-muted-foreground text-center mt-6">
            Akses admin hanya untuk pengguna yang terautentikasi
          </p>
        </div>
      </div>
    </div>
  )
}
