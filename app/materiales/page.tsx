import Materiales from '@/components/Materiales'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Materiales',
  description: 'Descubrí toda nuestra variedad de materiales para remodelación sin obra: placas PVC, paneles acústicos, revestimientos WPC, aluzinc, chapas caladas y smart glass.',
  alternates: { canonical: 'https://ivos.com.ar/materiales' },
  openGraph: { url: 'https://ivos.com.ar/materiales' },
}

export default function MaterialesPage() {
  return (
    <div className='my-8'>
      <Materiales />
    </div>
  )
}
