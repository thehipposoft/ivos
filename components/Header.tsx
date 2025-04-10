'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <div className='w-screen absolute z-10 top-0'>
        <div className='md:w-[85vw] w-screen flex justify-between mx-auto items-center relative'>
            <div className='bg-white/20 drop-shadow-xl backdrop-blur-sm p-2 rounded-lg ml-4 md:ml-0'>
              <Image src={'/assets/images/logo.png'} alt='Logo' width={1028} height={338} className='md:w-[162px] w-[180px] md:h-[52px] ' />
            </div>
            <button onClick={handleToggleMenu} className='group w-24 h-24 bg-[#F94E19] flex justify-center items-center cursor-pointer relative z-40'>
              <svg className='group-hover:scale-110 group-hover:stroke-[#01222C] duration-500 w-8 h-8' width="101" height="101" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#000"><path d="M16 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12 0c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM16 10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm12-2c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4ZM4 20c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Zm0-10c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4ZM4 0C1.791 0 0 1.791 0 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4Z" fill="#FFF" strokeWidth=".00032" fillRule="evenodd"/></svg>
            </button>
            <div className={`${toggleMenu ? 'md:translate-y-0 translate-y-24' : ''} rounded-bl-[40px] duration-700 z-30 md:z-0 absolute -translate-y-full md:h-24 h-72 md:w-[85vw] w-screen flex justify-center mx-auto items-center bg-[#F94E19]`}>
              <nav className='flex md:flex-row flex-col justify-center items-center md:gap-20 gap-8'>
                    <Link onClick={handleToggleMenu} className={`text-white duration-500 text-[18px] medium hover:text-[#01222C]`} href={'/materiales'}>Materiales</Link>
                    <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#nosotros'}>Nosotros</Link>
                    <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#redes-sociales'}>Redes Sociales</Link>
                    <Link onClick={handleToggleMenu} className='text-white duration-500 text-[18px] medium hover:text-[#01222C]' href={'/#contacto'}>Contacto</Link>
              </nav>
            </div>
        </div>
    </div>
  )
}

export default Header