import Footer from '@/components/Footer';
import SecondaryHeader from '@/components/commons/SecondaryHeader'
import React from 'react'

const MaterialesLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <SecondaryHeader />
        {children}
        <Footer />
    </div>
  )
}

export default MaterialesLayout