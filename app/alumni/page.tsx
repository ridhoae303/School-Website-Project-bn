import React from 'react'
import { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'
import { Container } from '@/components/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Pool } from 'pg'
import { pool } from '@/lib/db'

export const metadata: Metadata = {
  title: 'Directory Alumni - SMK PATRIOT 1 BEKASI',
  description: 'Direktori alumni dan lulusan SMK PATRIOT 1 BEKASI',
}

interface Alumni {
  id: string
  name: string
  nisn: string
  graduation_year: number
  academic_year: string
  batch_number: string
  current_position: string
  company: string
}

async function getAlumni(): Promise<Alumni[]> {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM alumni ORDER BY graduation_year DESC, name ASC')
    client.release()
    return result.rows
  } catch (error) {
    console.error('[v0] Error fetching alumni:', error)
    return []
  }
}

export default async function AlumniPage() {
  const alumni = await getAlumni()

  // Group by graduation year
  const groupedByYear = alumni.reduce(
    (acc, alumnus) => {
      const year = alumnus.graduation_year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(alumnus)
      return acc
    },
    {} as Record<number, Alumni[]>
  )

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const stats = {
    totalAlumni: alumni.length,
    graduationYears: years.length,
    currentlyEmployed: alumni.filter((a) => a.company).length,
  }

  return (
    <>
      <HeroSection
        title="Directory Alumni"
        subtitle="Jaringan alumni SMK PATRIOT 1 BEKASI yang sukses dan berkarir"
      />

      <section className="py-16 bg-background">
        <Container>
          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stats.totalAlumni}</p>
                  <p className="text-muted-foreground">Total Alumni</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stats.graduationYears}</p>
                  <p className="text-muted-foreground">Tahun Kelulusan</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stats.currentlyEmployed}</p>
                  <p className="text-muted-foreground">Sudah Bekerja</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alumni Directory */}
          {alumni.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                <p>Belum ada data alumni. Silahkan hubungi administrator untuk menambahkan data.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {years.map((year) => (
                <div key={year}>
                  <h2 className="text-2xl font-bold mb-6">Angkatan {year}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupedByYear[year].map((alumnus) => (
                      <Card key={alumnus.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg line-clamp-2">{alumnus.name}</CardTitle>
                          <CardDescription>
                            {alumnus.current_position && alumnus.company
                              ? `${alumnus.current_position} at ${alumnus.company}`
                              : 'Karir belum diisi'}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          {alumnus.nisn && (
                            <p>
                              <span className="text-muted-foreground">NISN:</span> {alumnus.nisn}
                            </p>
                          )}
                          {alumnus.academic_year && (
                            <p>
                              <span className="text-muted-foreground">Tahun Ajaran:</span>{' '}
                              {alumnus.academic_year}
                            </p>
                          )}
                          {alumnus.batch_number && (
                            <p>
                              <span className="text-muted-foreground">Angkatan:</span> {alumnus.batch_number}
                            </p>
                          )}
                          {alumnus.company && (
                            <p>
                              <span className="text-muted-foreground">Perusahaan:</span> {alumnus.company}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <Card className="mt-12 bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle>Anda Alumni SMK PATRIOT 1 BEKASI?</CardTitle>
              <CardDescription>Kami ingin menampilkan profil Anda di direktori ini</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Silahkan hubungi bagian alumni untuk mendaftarkan data Anda dan memperbarui informasi
                karir Anda.
              </p>
              <a
                href="/hubungi-kami"
                className="text-primary font-semibold hover:underline"
              >
                Hubungi kami →
              </a>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}
