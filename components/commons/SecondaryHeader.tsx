'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SecondaryHeader = () => {

  const currentPath = usePathname()
  return (
    <div className='w-screen z-10 top-0'>
        <div className='w-screen '>
            <div className='md:w-[85vw] 2xl:w-[1300px] flex justify-between mx-auto items-center'>
                <Link href={'/'}>
                  <Image src={'/assets/images/logo-petroleo.png'} alt='Logo' width={901} height={581} className='md:w-[180px] md:h-[120px]' />
                </Link>
                <nav className='flex gap-12'>
                    <Link className={`${currentPath.includes('materiales') ? 'text-[#F94E19]' : ''} text-[#01222C] duration-500 text-[18px] medium hover:text-[#F94E19]`} href={'/materiales'}>Materiales</Link>
                    <Link className='text-[#01222C] duration-500 text-[18px] medium hover:text-[#F94E19]' href={'/#nosotros'}>Nosotros</Link>
                    <Link className='text-[#01222C] duration-500 text-[18px] medium hover:text-[#F94E19]' href={'/#redes-sociales'}>Redes Sociales</Link>
                    <Link className='text-[#01222C] duration-500 text-[18px] medium hover:text-[#F94E19]' href={'/#contacto'}>Contacto</Link>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default SecondaryHeader