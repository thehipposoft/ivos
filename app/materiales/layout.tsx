import Footer from '@/components/Footer';
import SecondaryHeader from '@/components/commons/SecondaryHeader'
import Header from '@/components/Header';
import React from 'react'

const MaterialesLayout = ({children}:Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <SecondaryHeader />
        <Header hiddeOnDesktop />
        <div className='pt-[80px] lg:pt-0'>
          {children}
        </div>
        <Footer />
    </div>
  )
}

export default MaterialesLayout