'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SecondaryHeader = () => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const currentPath = usePathname()

  return (
    <div className='w-screen z-10 top-0'>
        <div className='w-screen '>
            <div className='md:w-[85vw] 2xl:w-[1300px] flex justify-between mx-auto items-center'>
                <Link href={'/'}>
                  <Image src={'/assets/images/logo-petroleo.png'} alt='Logo' width={901} height={581} className='md:w-[180px] w-[150px] md:h-[120px]' />
                </Link>
                <button onClick={handleToggleMenu} className='group w-24 h-24 bg-[#F94E19] flex sm:hidden justify-center items-center cursor-pointer relative z-40'>
                  <svg className='group-hover:scale-110 group-hover:stroke-[#01222C] duration-500 w-8 h-8' width="101" height="101" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#000"><path d="M16 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12-2c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4ZM4 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM4 0C1.791 0 0 1.791 0 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Z" fill="#FFF" strokeWidth=".00032" fillRule="evenodd"/></svg>
                </button>
                <div className={`${toggleMenu ? 'md:translate-y-0 translate-y-24' : ''} rounded-bl-[40px] duration-700 z-30 md:z-0 absolute -translate-y-full md:h-24 h-96 py-4 md:py-0 md:w-[85vw] w-screen flex sm:hidden justify-center mx-auto items-center bg-[#F94E19]`}>
                  <nav className='flex md:flex-row flex-col justify-center items-center md:gap-20 gap-8 pt-12 md:pt-0'>
                        <Link onClick={handleToggleMenu} className={`text-white duration-500 text-[18px] medium hover:text-[#01222C]`} href={'/'}>Home</Link>
                        <Link onClick={handleToggleMenu} className={`text-white duration-500 text-[18px] medium hover:text-[#01222C]`} href={'/materiales'}>Materiales</Link>
                        <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#nosotros'}>Nosotros</Link>
                        <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#redes-sociales'}>Redes Sociales</Link>
                        <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#contacto'}>Contacto</Link>
                  </nav>
                </div>
                <nav className='sm:flex gap-12 hidden'>
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