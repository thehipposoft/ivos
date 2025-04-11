import Materiales from '@/components/Materiales'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IVOS | Materiales',
  description: 'Conocé toda nuestra variedad de materiales',
}

export default function MaterialesPage() {
  return (
    <div className='my-8'>
      <Materiales />
    </div>
  )
}
